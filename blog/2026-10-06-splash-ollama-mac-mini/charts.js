(() => {
  'use strict';
  const data = window.SPLASH_BENCHMARK;
  if (!data) return;
  const ns = 'http://www.w3.org/2000/svg';
  const fmt = (v, d = 1) => new Intl.NumberFormat('ru-RU', {maximumFractionDigits:d}).format(v);
  const median = values => [...values].sort((a,b)=>a-b)[Math.floor(values.length/2)];
  function el(name, attrs = {}, value = '') {
    const node=document.createElementNS(ns,name);
    Object.entries(attrs).forEach(([k,v])=>node.setAttribute(k,v));
    if(value) node.textContent=value;
    return node;
  }
  function canvas(host, h, title) {
    const w=Math.max(230,Math.round(host.clientWidth));
    const svg=el('svg',{viewBox:`0 0 ${w} ${h}`,role:'img','aria-label':title});
    svg.append(el('title',{},title));host.replaceChildren(svg);return {svg,w};
  }
  function text(svg,x,y,value,cls='',anchor='start') {svg.append(el('text',{x,y,class:cls,'text-anchor':anchor},value));}
  function nice(max) {
    const step0=max/4, power=10**Math.floor(Math.log10(step0||1));
    const step=[1,2,5,10].map(n=>n*power).find(n=>n>=step0)||power*10;
    const top=Math.ceil(max/step)*step||1;
    return {max:top,ticks:Array.from({length:Math.round(top/step)+1},(_,i)=>i*step)};
  }
  const dashes={Ollama:'7 4',oMLX:'2 4',uzu:'10 3 2 3',Splash:''};
  function lineChart(host, rows, series, unit, title, options={}) {
    const {svg,w}=canvas(host,334,title);
    const left=48,right=w-16,top=34,bottom=260;
    const maxX=Math.max(...rows.map(r=>r.bucket_k));
    const x=k=>left+(Math.log2(k)-3)/(Math.log2(maxX)-3)*(right-left);
    const scale=nice(Math.max(...series.flatMap(s=>[...s.values,...(s.ranges?s.ranges.flat():[])])) * 1.08);
    const y=v=>bottom-v/scale.max*(bottom-top);
    scale.ticks.forEach(v=>{
      svg.append(el('line',{x1:left,x2:right,y1:y(v),y2:y(v),class:'chart-grid'}));
      text(svg,left-8,y(v)+4,fmt(v,0),'axis-label','end');
    });
    [8,16,32,64,128].filter(k=>k<=maxX).forEach(k=>{
      svg.append(el('line',{x1:x(k),x2:x(k),y1:top,y2:bottom,class:'chart-grid'}));
      text(svg,x(k),bottom+34,`${k}K`,'axis-label',k===8?'start':k===maxX?'end':'middle');
    });
    text(svg,left,16,unit,'axis-label');
    text(svg,left,321,'Контекст · шаг шкалы ×2','axis-label');
    series.forEach(s=>{
      const cls=`series-${s.name.toLowerCase()}`;
      if(s.ranges) s.ranges.forEach(([low,high],i)=>{
        const px=x(rows[i].bucket_k);
        svg.append(el('line',{x1:px,x2:px,y1:y(low),y2:y(high),class:`observed-range ${cls}`,'stroke-width':1.5,'stroke-opacity':.55}));
        [low,high].forEach(v=>svg.append(el('line',{x1:px-4,x2:px+4,y1:y(v),y2:y(v),class:`observed-range ${cls}`,'stroke-width':1.5,'stroke-opacity':.55})));
      });
      svg.append(el('polyline',{points:s.values.map((v,i)=>`${x(rows[i].bucket_k)},${y(v)}`).join(' '),class:`series-line ${cls}`,'stroke-dasharray':dashes[s.name]||''}));
      s.values.forEach((v,i)=>{
        const k=rows[i].bucket_k;
        const label=`${s.name}, ${k}K: ${fmt(v,2)} ${unit}${s.ranges?`; диапазон ${fmt(s.ranges[i][0],2)}–${fmt(s.ranges[i][1],2)}`:''}`;
        const point=el('circle',{cx:x(k),cy:y(v),r:4.5,class:`data-point ${cls}`,'data-engine':s.name,'data-bucket':k,'data-value':v,tabindex:0,'aria-label':label});
        point.append(el('title',{},label));svg.append(point);
        if (options.labels && series.length===2) {
          if(w>=400 || i===0 || i===rows.length-1) {
            const other=series.find(other=>other!==s).values[i];
            text(svg,x(k),y(v)+(v>=other?-11:15),fmt(v,options.decimals??1),'value-label',i===0?'start':i===rows.length-1?'end':'middle');
          }
        } else if (options.labels && s.name==='Splash') {
          text(svg,x(k),y(v)-12,fmt(v,0),'value-label',i===0?'start':i===rows.length-1?'end':'middle');
        }
      });
    });
  }
  const states={context:'decode',agent:'relative'};
  const hosts={vendor:document.getElementById('vendor-chart'),context:document.getElementById('context-chart'),agent:document.getElementById('agent-chart')};
  function vendor() {
    const rows=data.vendor.buckets_k.map(bucket_k=>({bucket_k}));
    const series=Object.entries(data.vendor.series).map(([name,values])=>({name,values}));
    lineChart(hosts.vendor,rows,series,'токенов/с','Inco: скорость генерации на 8K, 16K, 32K, включая reasoning.',{labels:true});
  }
  function context() {
    const decode=states.context==='decode', rows=data.curve.rows;
    const series=['Ollama','Splash'].map(name=>({name,
      values:rows.map(r=>{const e=r.engines[name.toLowerCase()];return decode?e.decode_tps:r.bucket_k===128?e.ttft_s[0]:median(e.ttft_s);}),
      ...(decode?{ranges:rows.map(r=>{const e=r.engines[name.toLowerCase()];return [e.decode_tps_min,e.decode_tps_max];})}:{})
    }));
    lineChart(hosts.context,rows,series,decode?'токенов/с':'секунды',decode?'Mac mini: скорость генерации после чтения входа, 8K–128K. Reasoning включён.':'Mac mini: ожидание первого токена на холодном входе. На 128K один замер.',{labels:true,decimals:decode?1:0});
    document.getElementById('context-caption').textContent=decode?'Mac mini: скорость и размер контекста':'Mac mini: ожидание первого токена';
    document.getElementById('context-note').textContent=decode?'128K: один вход и три генерации. Остальные точки: три разных задания.':'8K–32K: медиана трёх холодных запросов. 128K: один холодный запрос.';
  }
  function paired(host,rows,relative,title) {
    const values=rows.flatMap(r=>relative?[100,r.splash/r.ollama*100]:[r.ollama,r.splash]);
    const scale=nice(Math.max(...values)*1.03),rowH=104;
    const {svg,w}=canvas(host,rows.length*rowH+45,title);
    const left=4,right=w-76,plotW=right-left,axisY=rows.length*rowH+5;
    scale.ticks.forEach(v=>{
      const x=left+v/scale.max*plotW;
      svg.append(el('line',{x1:x,x2:x,y1:30,y2:axisY,class:'chart-grid'}));
      text(svg,x,axisY+20,fmt(v,0),'axis-label',v===0?'start':'middle');
    });
    text(svg,w-2,axisY+20,relative?'%':'с','axis-label','end');
    rows.forEach((row,i)=>{
      const y=i*rowH; text(svg,left,y+19,row.label,'value-label');
      const delta=-Math.round(row.saving),sign=delta>0?'+':delta<0?'−':'';
      text(svg,w-2,y+19,`${sign}${Math.abs(delta)}%`,`saving-label${delta>0?' time-increase':''}`,'end');
      ['Ollama','Splash'].forEach((name,index)=>{
        const n=row[name.toLowerCase()],value=relative?n/row.ollama*100:n,by=y+35+index*26;
        const bar=el('rect',{x:left,y:by,width:Math.max(1,value/scale.max*plotW),height:18,rx:3,class:`series-${name.toLowerCase()}`});
        bar.append(el('title',{},`${row.label}, ${name}: ${fmt(value,relative?0:2)} ${relative?'% от времени Ollama':'с'}`));svg.append(bar);
        text(svg,w-2,by+14,`${fmt(value,relative?0:2)}${relative?'%':''}`,'value-label','end');
      });
    });
  }
  function agent() {
    const pilot=data.agent;
    const complete=pilot.total_waiting_time_reduction_pct!==null;
    const accepted=pilot.tasks.filter(r=>r.waiting_time_reduction_pct!==null);
    if(!complete && !accepted.length) {
      const {svg,w}=canvas(hosts.agent,190,'Pi: число завершённых заданий из трёх. Время неуспешных цепочек не сравнивается.');
      ['Ollama','Splash'].forEach((name,index)=>{
        const n=pilot.engines[name.toLowerCase()].tasks_completed,y=34+index*74;
        text(svg,4,y,name,'value-label');
        svg.append(el('rect',{x:4,y:y+12,width:n/3*(w-70),height:20,rx:3,class:`series-${name.toLowerCase()}`}));
        text(svg,w-4,y+28,`${n}/3`,'value-label','end');
      });
      document.getElementById('agent-note').textContent='Не все цепочки завершены; процент выигрыша не вычисляется.';
      return;
    }
    const labels={quote:'Корзина',events:'Возвраты',csv:'Импорт CSV'};
    const rows=accepted.map(r=>({label:labels[r.task],ollama:r.ollama_seconds,splash:r.splash_seconds,saving:r.waiting_time_reduction_pct}));
    if(complete) rows.push({label:'Вся цепочка',ollama:pilot.engines.ollama.seconds,splash:pilot.engines.splash.seconds,saving:pilot.total_waiting_time_reduction_pct});
    paired(hosts.agent,rows,states.agent==='relative',complete?'Pi: время заданий и всей завершённой цепочки. Меньше лучше.':'Pi: время заданий, принятых у обоих движков. Меньше лучше.');
    document.getElementById('agent-note').textContent=complete?'Вся цепочка включает все три задания, в том числе CSV.':`Принято заданий: Ollama ${pilot.engines.ollama.tasks_completed}/3, Splash ${pilot.engines.splash.tasks_completed}/3. На графике только исправления, принятые у обоих; процент выигрыша всей цепочки не вычисляется.`;
  }
  document.querySelectorAll('[data-chart-controls]').forEach(group=>{
    group.hidden=false;
    group.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
      states[group.dataset.chartControls]=button.dataset.mode;
      group.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      group.dataset.chartControls==='context'?context():agent();
    }));
  });
  let pending;
  const render=()=>{vendor();context();agent();};
  const observer=new ResizeObserver(()=>{cancelAnimationFrame(pending);pending=requestAnimationFrame(render);});
  Object.values(hosts).forEach(host=>observer.observe(host));render();
})();
