(function () {
  'use strict';

  var profiles = [
    { id: 'dictator', role: 'product', roleLabel: 'Продакт-менеджеры', name: 'Диктатор', en: 'The Dictator', summary: 'Отвергает любую идею, которая родилась не у него.', signal: 'Требования считаются закрытой территорией продакта, а вопросы разработчиков воспринимаются как посягательство на власть.', move: 'Предложите безопасный формат ревью требований: обсуждаем стоимость и варианты, но решение о продуктовой цели остаётся прозрачным.', avoid: 'Не начинайте с борьбы за влияние и не превращайте технические вопросы в публичное разоблачение.', partner: 'Дива-разработчик' },
    { id: 'sales-liaison', role: 'product', roleLabel: 'Продакт-менеджеры', name: 'Лоббист продаж', en: 'The Sales Liaison', summary: 'Видит продукт как список срочных обещаний отделу продаж.', signal: 'Каждая просьба важного клиента становится обязательной функцией, а общая логика продукта и другие пользователи исчезают из поля зрения.', move: 'Верните разговор к единой цели продукта: фиксируйте запрос, сегмент, ожидаемый эффект и цену компромисса.', avoid: 'Не обесценивайте продажи — без фактов это быстро станет войной функций.', partner: 'Расширитель объёма' },
    { id: 'executive-assistant', role: 'product', roleLabel: 'Продакт-менеджеры', name: 'Секретарь стейкхолдеров', en: 'The Executive Assistant', summary: 'Записывает пожелания руководства, но не даёт команде поговорить с авторами.', signal: 'Требования приходят как неизменяемые поручения, потому что доступ к людям, которые принимают решения, закрыт.', move: 'Настаивайте на коротких совместных сессиях с владельцем решения и протоколируйте не только просьбу, но и контекст.', avoid: 'Не пытайтесь бесконечно угадывать скрытые требования по пересказу.', partner: 'Солдат-разработчик' },
    { id: 'napkin-sketcher', role: 'product', roleLabel: 'Продакт-менеджеры', name: 'Набросчик на салфетке', en: 'The Napkin Sketcher', summary: 'Формулирует задачу настолько расплывчато, что команда вынуждена додумывать её сама.', signal: 'После реализации выясняется, что решение «очевидно было неправильным», хотя критериев готовности не существовало.', move: 'Согласуйте минимальный контекст: для кого, какую проблему решаем, что должно измениться и как поймём, что получилось.', avoid: 'Не компенсируйте отсутствие решения бесконечным документированием со стороны разработки.', partner: 'Идеалист-разработчик' },
    { id: 'scope-wiggler', role: 'product', roleLabel: 'Продакт-менеджеры', name: 'Размыватель скоупа', en: 'The Scope Wiggler', summary: 'Проводит большие изменения маленькими порциями, обходя контроль изменений.', signal: 'Каждая правка выглядит безобидной, но за неделю исходная задача незаметно превращается в другой проект.', move: 'Собирайте изменения в один видимый список и регулярно пересчитывайте влияние на срок, стоимость и цель.', avoid: 'Не спорьте с каждой мелочью отдельно — проблема в накопленном эффекте.', partner: 'Планировщик встреч' },
    { id: 'patent-author', role: 'product', roleLabel: 'Продакт-менеджеры', name: 'Патентописец', en: 'The Patent Author', summary: 'Производит столько требований, что документация становится барьером для изменений.', signal: 'Команда тратит больше времени на поддержание текстов в актуальном состоянии, чем на проверку ценности решения.', move: 'Разделите обязательный контракт и рабочие гипотезы; оставляйте в документации только то, что помогает принять следующее решение.', avoid: 'Не высмеивайте документы — убирайте конкретную лишнюю церемонию.', partner: 'Процессоман' },
    { id: 'scope-creeper', role: 'product', roleLabel: 'Продакт-менеджеры', name: 'Расширитель объёма', en: 'The Scope Creeper', summary: 'Добавляет работу к проекту, сохраняя прежнюю дату поставки.', signal: 'Новые обязательства появляются как «маленькая добавка», а срок остаётся священным независимо от объёма.', move: 'Каждое добавление встречайте парой «что убираем или на сколько сдвигаем срок» и фиксируйте выбор.', avoid: 'Не принимайте молчаливое расширение как норму команды.', partner: 'Сильно занижающий оценки' },
    { id: 'people-pleaser', role: 'product', roleLabel: 'Продакт-менеджеры', name: 'Угодник', en: 'The People Pleaser', summary: 'Считает своей главной работой примирять всех, раздавая команде уступки.', signal: 'Конфликт откладывается, решение размывается, а никто не понимает, кто отвечает за итоговый выбор.', move: 'Разрешите человеку говорить «нет» от имени цели продукта и требуйте явного владельца решения.', avoid: 'Не подменяйте уважение к людям новой системой давления.', partner: 'Миротворец' },

    { id: 'note-taker', role: 'design', roleLabel: 'Дизайнеры', name: 'Стенографист', en: 'The Note Taker', summary: 'Сведён к записи чужих идей и не задаёт продукту визуальное направление.', signal: 'Дизайн превращается в аккуратное оформление уже принятых решений, даже когда пользовательская проблема ещё не ясна.', move: 'Подключайте дизайнера к постановке задачи и просите его формулировать варианты, риски и критерии удобства.', avoid: 'Не требуйте «больше инициативы» без реального права влиять на решение.', partner: 'Секретарь стейкхолдеров' },
    { id: 'disenfranchised', role: 'design', roleLabel: 'Дизайнеры', name: 'Бесправный', en: 'The Disenfranchised', summary: 'Считает, что не может повлиять на продукт, и перестаёт давать дизайн-направление.', signal: 'Дизайнер видит проблемы заранее, но молчит: прошлые попытки повлиять на решение закончились игнорированием.', move: 'Дайте явную область ответственности, включите в ключевые обсуждения и разберите одно решение, где его мнение обязательно.', avoid: 'Не обвиняйте в пассивности человека, у которого нет рычагов.', partner: 'Диктатор' },
    { id: 'professor', role: 'design', roleLabel: 'Дизайнеры', name: 'Профессор', en: 'The Professor', summary: 'Так увлечён теорией интерфейсов, что игнорирует реальные требования продукта.', signal: 'Правильность паттерна или исследования становится важнее пользовательского контекста, срока и проверяемого результата.', move: 'Попросите связать каждое дизайн-правило с конкретным пользователем, риском и способом проверить эффект.', avoid: 'Не спорьте о вкусе — возвращайте разговор к наблюдаемому поведению и цели.', partner: 'Патентописец' },
    { id: 'artist', role: 'design', roleLabel: 'Дизайнеры', name: 'Художник', en: 'The Artist', summary: 'Ставит выразительность и красоту выше полезности продукта.', signal: 'Решение выглядит впечатляюще, но пользовательский путь усложняется, а бизнес-результат остаётся недоказанным.', move: 'Сведите обсуждение к задаче пользователя: пусть эстетическое решение проходит проверку на понятность и результат.', avoid: 'Не противопоставляйте красоту и пользу — ищите место, где они усиливают друг друга.', partner: 'Технологический энтузиаст' },
    { id: 'distrusted', role: 'design', roleLabel: 'Дизайнеры', name: 'Потерявший доверие', en: 'The Distrusted', summary: 'Утратил доверие команды, поэтому его требования к интерфейсу перестали слышать.', signal: 'Даже полезные предложения автоматически откладываются: команда уже не верит, что дизайнер учитывает интересы продукта.', move: 'Восстановите доверие маленькими проверяемыми решениями: цель, ограничение, прототип, результат.', avoid: 'Не требуйте вернуть авторитет одним большим редизайном.', partner: 'Бык в посудной лавке' },
    { id: 'blueprinter', role: 'design', roleLabel: 'Дизайнеры', name: 'Чертёжник', en: 'The Blueprinter', summary: 'Описывает интерфейс до такой мелочи, что разработчик теряет пространство для решения.', signal: 'Спецификация превращается в запрет на инженерные упрощения, даже если они сохраняют пользовательскую ценность.', move: 'Отделите инварианты опыта от деталей реализации и согласуйте, что можно упростить без потери результата.', avoid: 'Не выкидывайте спецификацию целиком — уберите только лишнюю фиксацию формы.', partner: 'Идеалист-разработчик' },

    { id: 'meeting-scheduler', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Планировщик встреч', en: 'The Meeting Scheduler', summary: 'Верит, что любую проблему коммуникации лечит ещё одна встреча.', signal: 'Календарь заполнен синхронизациями, но решения не фиксируются, а время на реальную работу исчезает.', move: 'Перед встречей сформулируйте решение, которое нужно принять; после — владельца, срок и письменный итог.', avoid: 'Не отменяйте все встречи демонстративно — заменяйте неработающую форму.', partner: 'Стенографист' },
    { id: 'statistician', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Статистик', en: 'The Statistician', summary: 'Сосредоточен на списках и галочках, не проверяя ценность самих задач.', signal: 'Проект выглядит управляемым по отчётам, хотя команда закрывает не те проблемы и не приближается к результату.', move: 'Для каждой крупной задачи добавьте ожидаемый эффект и проверку результата, а не только статус выполнения.', avoid: 'Не обесценивайте метрики — соедините их с живым результатом.', partner: 'Солдат-разработчик' },
    { id: 'delusional', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Отрицающий реальность', en: 'The Delusional', summary: 'Настолько оторван от проекта, что сообщает стейкхолдерам неправду о его состоянии.', signal: 'Плохие новости задерживаются, риски маскируются оптимистичными формулировками, а исправлять уже поздно.', move: 'Введите короткий формат фактов: сделано, не сделано, риск, решение и дата следующей проверки.', avoid: 'Не превращайте прозрачность в публичное наказание за плохие новости.', partner: 'Оптимист' },
    { id: 'pessimist', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Пессимист', en: 'The Pessimist', summary: 'Уверен, что проект провалится, и громко поддерживает это убеждение.', signal: 'Риски смешиваются с прогнозом катастрофы, поэтому команда либо сдаётся, либо перестаёт слышать предупреждения.', move: 'Разделите опасения на проверяемые риски, владельцев и триггеры; обсуждайте не настроение, а план ответа.', avoid: 'Не требуйте бодрости — требуйте точности.', partner: 'Черлидер' },
    { id: 'optimist', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Оптимист', en: 'The Optimist', summary: 'Убедил себя в успехе проекта независимо от фактов.', signal: 'Негативные сигналы объявляются временной помехой, сроки не пересматриваются, а неудобные данные не попадают в отчёт.', move: 'Согласуйте заранее измеримые сигналы здоровья проекта и дату, когда решение будет пересмотрено.', avoid: 'Не пытайтесь победить оптимизм сарказмом — поставьте его рядом с фактами.', partner: 'Пессимист' },
    { id: 'cheerleader', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Черлидер', en: 'The Cheerleader', summary: 'Заботится о счастье команды больше, чем об успехе проекта.', signal: 'Трудные решения откладываются, чтобы никого не расстроить, а проблемы называют «возможностями для роста».', move: 'Сохраните заботу о людях, но добавьте право на неудобный разговор и явные критерии успеха.', avoid: 'Не высмеивайте поддержку — без неё команда тоже ломается.', partner: 'Тиран' },
    { id: 'tyrant', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Тиран', en: 'The Tyrant', summary: 'Относится к участникам проекта с презрением, называя это мотивацией.', signal: 'Страх ошибки заменяет ответственность: люди скрывают проблемы, замолкают на встречах и выгорают.', move: 'Зафиксируйте недопустимое поведение, переведите обратную связь в конкретные ожидания и подключите руководителя при повторении.', avoid: 'Не отвечайте тем же унижением — это только расширит токсичную систему.', partner: 'Забитый QA' },
    { id: 'process-obsessed', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Процессоман', en: 'The Process Obsessed', summary: 'Так увлечён процессом, что забывает: его задача — помочь проекту быть успешным.', signal: 'Команда соблюдает ритуалы, даже когда они не дают информации, решения или полезного результата.', move: 'Попросите каждую церемонию доказать свою функцию: какое решение она ускоряет и что будет, если её убрать.', avoid: 'Не объявляйте все процессы бюрократией — оставьте работающие.', partner: 'Патентописец' },
    { id: 'hoverer', role: 'project', roleLabel: 'Проектные менеджеры', name: 'Нависающий', en: 'The Hoverer', summary: 'Считает, что постоянные проверки статуса удерживают людей в фокусе.', signal: 'Команда отчитывается о каждом шаге, но меньше времени тратит на завершение работы и самостоятельные решения.', move: 'Согласуйте контрольные точки и формат эскалации; между ними оценивайте результат, а не присутствие человека онлайн.', avoid: 'Не исчезайте без прозрачности — микроменеджмент часто питается тревогой.', partner: 'Рок-звезда' },

    { id: 'formerly-technical', role: 'devmanager', roleLabel: 'Руководители разработки', name: 'Бывший технарь', en: 'The Formerly Technical', summary: 'Когда-то писал код и считает, что его техническое мнение всё ещё актуально без погружения.', signal: 'Архитектурные решения принимаются по старой памяти, а команда вынуждена спорить не с идеей, а с должностью.', move: 'Сделайте текущий контекст обязательным: варианты, ограничения, данные и ответственный инженер за решение.', avoid: 'Не запрещайте руководителю иметь мнение — отделите его от права единолично диктовать детали.', partner: 'Влюблённый в технологии' },
    { id: 'non-technical', role: 'devmanager', roleLabel: 'Руководители разработки', name: 'Нетехнический', en: 'The Non-Technical', summary: 'Не разбирается в технике и поэтому теряется, управляя разработчиками.', signal: 'Сроки и качество обсуждаются без понимания зависимости, риска и стоимости; команда получает обещания, которые невозможно выполнить.', move: 'Найдите технического партнёра, которому доверяете, и научитесь задавать вопросы про риск, варианты и критерий готовности.', avoid: 'Не маскируйте незнание псевдотехническим жаргоном.', partner: 'Сильно занижающий оценки' },
    { id: 'ladder-climber', role: 'devmanager', roleLabel: 'Руководители разработки', name: 'Карьерист', en: 'The Ladder Climber', summary: 'Использует команду как средство для собственного продвижения.', signal: 'Видимость руководителя важнее здоровья команды: достижения присваиваются, плохие новости спускаются вниз.', move: 'Сделайте вклад команды наблюдаемым: авторство решений, честные метрики и регулярная обратная связь без посредника.', avoid: 'Не играйте в ту же политику — усиливайте прозрачность и границы ответственности.', partner: 'Рок-звезда' },
    { id: 'peacemaker', role: 'devmanager', roleLabel: 'Руководители разработки', name: 'Миротворец', en: 'The Peacemaker', summary: 'Считает любой спор вредным и пытается подавить дебаты.', signal: 'Конфликт исчезает только с поверхности: важные технические и продуктовые разногласия уходят в кулуары.', move: 'Разделяйте личный конфликт и полезное несогласие; задавайте правило: спорим о решении, фиксируем принятое.', avoid: 'Не превращайте дебаты в обязательную арену для самых громких.', partner: 'Диктатор' },
    { id: 'wants-to-be-technical', role: 'devmanager', roleLabel: 'Руководители разработки', name: 'Хочет быть технарём', en: 'The Wants-to-be-Technical', summary: 'Мечтает вернуться к коду и сопротивляется роли руководителя.', signal: 'Он то исчезает в реализации, то внезапно вмешивается в детали, оставляя команду без полноценного менеджмента.', move: 'Согласуйте, где руководитель кодирует, а где управляет: ограниченная техническая зона и полноценная ответственность за людей.', avoid: 'Не лишайте человека связи с техникой — сделайте её безопасной для команды.', partner: 'Чертёжник' },

    { id: 'rockstar', role: 'developer', roleLabel: 'Разработчики', name: 'Рок-звезда', en: 'The Rockstar', summary: 'Настолько незаменим, что уход одного человека обрушит весь проект.', signal: 'Критическое знание, код и решения сосредоточены у одного автора; команда привыкает платить за скорость будущим риском.', move: 'Уберите единственную точку отказа: парная работа, документация решений, ротация владения и понятный путь передачи контекста.', avoid: 'Не наказывайте за компетентность — снижайте зависимость системно.', partner: 'Нависающий' },
    { id: 'aspiring-manager', role: 'developer', roleLabel: 'Разработчики', name: 'Будущий менеджер', en: 'The Aspiring Manager', summary: 'Хочет уйти от сложностей кода и считает управление естественным спасением.', signal: 'Человек избегает инженерной ответственности, но уже влияет на команду через неформальную власть и советы.', move: 'Дайте попробовать лидерскую задачу с обратной связью, не выдавая управление как награду за желание сбежать от разработки.', avoid: 'Не высмеивайте управленческие амбиции — проверьте их практикой.', partner: 'Карьерист' },
    { id: 'bull-in-china-shop', role: 'developer', roleLabel: 'Разработчики', name: 'Слон в посудной лавке', en: 'The Bull in the China Shop', summary: 'Так сосредоточен на том, чтобы сделать работу, что забывает о качестве.', signal: 'Быстрые изменения ломают соседние части системы, тесты и доверие команды; «потом поправим» становится постоянным режимом.', move: 'Определите минимальный уровень качества до начала работы и сделайте последствия спешки видимыми.', avoid: 'Не противопоставляйте скорость и качество как моральные качества человека.', partner: 'Художник' },
    { id: 'diva', role: 'developer', roleLabel: 'Разработчики', name: 'Дива', en: 'The Diva', summary: 'Считает себя незаменимой и поэтому ведёт себя высокомерно.', signal: 'Знание превращается в рычаг: человек отвергает ревью, унижает коллег и делает управление зависимым от своего настроения.', move: 'Привяжите влияние к командным правилам: ревью, общему владению, уважительной обратной связи и одинаковым последствиям.', avoid: 'Не пытайтесь купить сотрудничество особым статусом.', partner: 'Диктатор' },
    { id: 'extreme-overestimator', role: 'developer', roleLabel: 'Разработчики', name: 'Сильно завышающий оценки', en: 'The Extreme Overestimator', summary: 'Боится не уложиться и просит столько времени, сколько удаётся получить.', signal: 'Оценка становится страховкой, а не прогнозом: запас растёт, но неопределённость не разбирается.', move: 'Разделяйте неизвестность и объём, просите диапазон, допущения и короткий шаг, который уменьшит неопределённость.', avoid: 'Не торгуйтесь за одно «правильное» число.', partner: 'Расширитель объёма' },
    { id: 'extreme-underestimator', role: 'developer', roleLabel: 'Разработчики', name: 'Сильно занижающий оценки', en: 'The Extreme Underestimator', summary: 'Постоянно недооценивает время, необходимое для задачи.', signal: 'Оптимистичная цифра превращается в сорванный срок, а новые детали каждый раз выглядят неожиданностью.', move: 'Сверяйте оценку с историей похожих задач и добавляйте разбор неизвестных до обещания даты.', avoid: 'Не используйте оценки как инструмент стыда.', partner: 'Расширитель объёма' },
    { id: 'hostage-taker', role: 'developer', roleLabel: 'Разработчики', name: 'Заложник кода', en: 'The Hostage Taker', summary: 'Пишет критичный код и не подпускает других, чтобы оставаться незаменимым.', signal: 'Компонент становится личной территорией: знания не передаются, а любой отпуск или уход превращается в угрозу.', move: 'Сделайте передачу владения частью работы: совместные изменения, документация, ротация и обязательное ревью.', avoid: 'Не забирайте код внезапно — сохраните достоинство, уберите единоличный контроль.', partner: 'Карьерист' },
    { id: 'idealist', role: 'developer', roleLabel: 'Разработчики', name: 'Идеалист', en: 'The Idealist', summary: 'Так одержим красивой архитектурой и идеальным кодом, что забывает о бизнес-ценности.', signal: 'Команда шлифует фундамент, хотя пользователю нужен работающий результат; критерий «достаточно хорошо» отсутствует.', move: 'Свяжите техническое улучшение с риском или ценностью, выделите минимальную версию и отдельный бюджет на качество.', avoid: 'Не объявляйте инженерное качество роскошью.', partner: 'Художник' },
    { id: 'incompetent', role: 'developer', roleLabel: 'Разработчики', name: 'Некомпетентный', en: 'The Incompetent', summary: 'Не обладает навыками, необходимыми для самостоятельной работы.', signal: 'Ошибки повторяются, обратная связь не превращается в улучшение, а окружающие начинают молча компенсировать разрыв.', move: 'Сначала проверьте ясность задачи и обучение, затем задайте конкретный план поддержки и срок пересмотра.', avoid: 'Не путайте нехватку опыта с плохим характером и не оставляйте человека без честной обратной связи.', partner: 'Тиран' },
    { id: 'soldier', role: 'developer', roleLabel: 'Разработчики', name: 'Солдат', en: 'The Soldier', summary: 'Делает ровно то, что сказали, даже когда это явно не лучший путь.', signal: 'Ответственность за результат растворяется в формулировке «я просто выполнял инструкции».', move: 'Формулируйте не только задачу, но и цель; прямо попросите оспаривать решение, если виден риск.', avoid: 'Не наказывайте за инициативу после того, как её запросили.', partner: 'Секретарь стейкхолдеров' },
    { id: 'technology-enamored', role: 'developer', roleLabel: 'Разработчики', name: 'Влюблённый в технологии', en: 'The Technology Enamored', summary: 'Вводит новые технологии просто потому, что они его увлекают.', signal: 'Стек растёт быстрее, чем ценность: команда получает новые зависимости, а исходная проблема остаётся той же.', move: 'Требуйте сравнения с простейшим вариантом: выигрыш, цена владения, план отката и кто будет поддерживать.', avoid: 'Не запрещайте любопытство — отделите эксперимент от производственного решения.', partner: 'Бывший технарь' },
    { id: 'legacy-maintainer', role: 'developer', roleLabel: 'Разработчики', name: 'Хранитель легаси', en: 'The Legacy Maintainer', summary: 'Умеет только поддерживать старую систему и избегает новой работы.', signal: 'Прошлый опыт стал убежищем: человек защищает знакомый код, но не наращивает способность решать новые задачи.', move: 'Дайте безопасную новую область рядом с сильной стороной, наставника и постепенное расширение ответственности.', avoid: 'Не высмеивайте легаси-экспертизу — она часто критична для бизнеса.', partner: 'Хочет быть технарём' },

    { id: 'firehose', role: 'qa', roleLabel: 'QA', name: 'Пожарный шланг', en: 'The Firehose', summary: 'Заливает разработчиков таким количеством багов, что очередь перестаёт быть управляемой.', signal: 'Отчёты не приоритизированы, команда тонет в списке, а действительно опасные дефекты теряются среди мелочей.', move: 'Согласуйте критерии серьёзности и формат триажа; показывайте риск и пользовательский эффект, а не только количество.', avoid: 'Не просите QA «находить меньше багов». Сделайте поток полезнее.', partner: 'Процессоман' },
    { id: 'blamer', role: 'qa', roleLabel: 'QA', name: 'Обвинитель', en: 'The Blamer', summary: 'Обвиняет разработчиков в плохом тестировании всякий раз, когда находит баг.', signal: 'Дефект становится доказательством чужой вины, поэтому команда защищается вместо того, чтобы разобраться в системе.', move: 'Отделите факт дефекта от вопроса процесса и договоритесь обсуждать, как поймать класс ошибок раньше.', avoid: 'Не отвечайте встречным обвинением — измените язык на совместное расследование.', partner: 'Слон в посудной лавке' },
    { id: 'alarmist', role: 'qa', roleLabel: 'QA', name: 'Паникёр', en: 'The Alarmist', summary: 'Объявляет весь продукт неприемлемым после первого впечатления.', signal: 'Один яркий дефект превращается в глобальный вывод, а команда перестаёт понимать масштаб и порядок исправлений.', move: 'Просите воспроизводимость, охват и критерий серьёзности; отделяйте критичный риск от плохого первого впечатления.', avoid: 'Не гасите сигнал только потому, что он эмоциональный.', partner: 'Оптимист' },
    { id: 'scientist', role: 'qa', roleLabel: 'QA', name: 'Учёный', en: 'The Scientist', summary: 'Тратит больше времени на описание багов, чем на поиск новых.', signal: 'Отчёты становятся исследовательскими трактатами, а тестовое покрытие и скорость обнаружения проседают.', move: 'Согласуйте достаточную глубину описания для воспроизведения и оставьте время на новые исследовательские ходы.', avoid: 'Не выкидывайте документацию — сократите её до решения задачи.', partner: 'Патентописец' },
    { id: 'misleader', role: 'qa', roleLabel: 'QA', name: 'Дезориентирующий', en: 'The Misleader', summary: 'Неточно описывает баги и отправляет разработчика по ложному следу.', signal: 'Ожидаемое и фактическое поведение смешаны, шаги неполны, окружение не указано — воспроизведение уводит не туда.', move: 'Используйте шаблон: окружение, шаги, ожидание, факт, частота и минимальный пример.', avoid: 'Не трактуйте неточность как злой умысел — сначала почините интерфейс передачи информации.', partner: 'Набросчик на салфетке' },
    { id: 'downtrodden', role: 'qa', roleLabel: 'QA', name: 'Забитый', en: 'The Downtrodden', summary: 'Настолько задавлен разработчиками, что почти перестаёт сообщать о багах.', signal: 'Проблемы остаются в голове или исправляются вручную, потому что цена очередного конфликта кажется выше пользы от сигнала.', move: 'Защитите право сообщать о проблемах, введите спокойный триаж и публично поддержите полезные находки.', avoid: 'Не требуйте от человека мгновенной смелости в небезопасной среде.', partner: 'Тиран' },
    { id: 'random-clicker', role: 'qa', roleLabel: 'QA', name: 'Случайный кликер', en: 'The Random Clicker', summary: 'Ищет баги, нажимая на что попало без сценария и гипотезы.', signal: 'Находки случайны, покрытие неизвестно, а команда не может понять, что уже проверено и почему.', move: 'Добавьте исследовательские миссии: риск, область, набор действий и заметку о покрытии.', avoid: 'Не убивайте любопытство строгим сценарием для каждого клика.', partner: 'Солдат-разработчик' },
    { id: 'flippant', role: 'qa', roleLabel: 'QA', name: 'Фривольный', en: 'The Flippant', summary: 'Пишет баг-репорты настолько пассивно-агрессивно, что их читают как грубость.', signal: 'Тон сообщения становится отдельным конфликтом, а техническая суть дефекта теряется в сарказме и намёках.', move: 'Переведите отчёт в нейтральные факты и договоритесь: сложные эмоции обсуждаются голосом, не прячутся в тикете.', avoid: 'Не отвечайте сарказмом — уберите двусмысленность из рабочего канала.', partner: 'Обвинитель' }
  ];

  var roleOptions = [
    { id: 'all', label: 'Все роли' },
    { id: 'product', label: 'Продакт' },
    { id: 'design', label: 'Дизайн' },
    { id: 'project', label: 'Проект' },
    { id: 'devmanager', label: 'Руководство' },
    { id: 'developer', label: 'Разработка' },
    { id: 'qa', label: 'QA' }
  ];

  var partnerIds = {
    'Дива-разработчик': 'diva',
    'Диктатор': 'dictator',
    'Расширитель объёма': 'scope-creeper',
    'Солдат-разработчик': 'soldier',
    'Идеалист-разработчик': 'idealist',
    'Планировщик встреч': 'meeting-scheduler',
    'Процессоман': 'process-obsessed',
    'Миротворец': 'peacemaker',
    'Технологический энтузиаст': 'technology-enamored',
    'Влюблённый в технологии': 'technology-enamored',
    'Бык в посудной лавке': 'bull-in-china-shop',
    'Слон в посудной лавке': 'bull-in-china-shop',
    'Бывший технарь': 'formerly-technical',
    'Карьерист': 'ladder-climber',
    'Нависающий': 'hoverer',
    'Черлидер': 'cheerleader',
    'Тиран': 'tyrant',
    'Рок-звезда': 'rockstar',
    'Чертёжник': 'blueprinter',
    'Стенографист': 'note-taker',
    'Секретарь стейкхолдеров': 'executive-assistant',
    'Сильно занижающий оценки': 'extreme-underestimator',
    'Хочет быть технарём': 'wants-to-be-technical',
    'Художник': 'artist',
    'Оптимист': 'optimist',
    'Пессимист': 'pessimist',
    'Патентописец': 'patent-author',
    'Набросчик на салфетке': 'napkin-sketcher',
    'Обвинитель': 'blamer',
    'Забитый QA': 'downtrodden',
    'Забитый': 'downtrodden'
  };

  var grid = document.getElementById('profileGrid');
  var filters = document.getElementById('roleFilters');
  var search = document.getElementById('searchInput');
  var resultCount = document.getElementById('resultCount');
  var activeFilter = document.getElementById('activeFilter');
  var emptyState = document.getElementById('emptyState');
  var dialog = document.getElementById('profileDialog');
  var dialogContent = document.getElementById('dialogContent');
  var dialogClose = document.getElementById('dialogClose');
  var currentRole = 'all';

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char];
    });
  }

  function getMatches() {
    var term = search.value.trim().toLowerCase();
    return profiles.filter(function (profile) {
      var roleMatches = currentRole === 'all' || profile.role === currentRole;
      var haystack = [profile.name, profile.en, profile.roleLabel, profile.summary, profile.signal, profile.move, profile.partner].join(' ').toLowerCase();
      return roleMatches && (!term || haystack.indexOf(term) !== -1);
    });
  }

  function renderFilters() {
    filters.innerHTML = roleOptions.map(function (option) {
      return '<button class="role-filter" type="button" role="tab" aria-selected="' + (option.id === currentRole) + '" data-role="' + option.id + '">' + option.label + '</button>';
    }).join('');
  }

  function render() {
    var matches = getMatches();
    var selectedLabel = roleOptions.filter(function (option) { return option.id === currentRole; })[0].label;
    resultCount.textContent = matches.length + ' ' + (matches.length === 1 ? 'профиль' : 'профилей');
    activeFilter.textContent = search.value.trim() ? 'Поиск: «' + search.value.trim() + '»' : selectedLabel;
    emptyState.hidden = matches.length > 0;
    grid.hidden = matches.length === 0;
    grid.innerHTML = matches.map(function (profile) {
      var index = String(profiles.indexOf(profile) + 1).padStart(2, '0');
      return '<button class="profile-card" type="button" data-profile="' + profile.id + '" aria-label="Открыть профиль ' + escapeHtml(profile.name) + '">' +
        '<span class="card-top"><span class="role-chip role-' + profile.role + '">' + escapeHtml(profile.roleLabel) + '</span><span class="card-index">' + index + '</span></span>' +
        '<span><span class="profile-card__title">' + escapeHtml(profile.name) + '</span><span class="profile-en">' + escapeHtml(profile.en) + '</span></span>' +
        '<span class="profile-card__summary">' + escapeHtml(profile.summary) + '</span>' +
        '<span class="card-footer"><span class="card-footer__label">Открыть разбор</span><span class="card-footer__arrow" aria-hidden="true">↗</span></span>' +
      '</button>';
    }).join('');
  }

  function buildAdaptationMarkup(profile) {
    var details = window.howToDealDetails && window.howToDealDetails[profile.id];
    if (!details) return '';
    var sourceSections = {
      product: 'product-managers',
      design: 'designers',
      project: 'project-managers',
      devmanager: 'development-managers',
      developer: 'developers',
      qa: 'quality-assurance'
    };
    var sourceUrl = 'https://neilonsoftware.com/difficult-people-on-software-projects/' + sourceSections[profile.role] + '/the-' + profile.id + '/';
    return '<details class="detail-accordion">' +
      '<summary><span class="accordion-summary"><span class="accordion-kicker">ПОДРОБНЫЙ РАЗБОР</span><span class="accordion-title">Открыть расширенный русский пересказ</span></span><span class="accordion-mark" aria-hidden="true">+</span></summary>' +
      '<div class="accordion-content"><p class="accordion-note">Пересказ разделов Problem и Solution исходного материала. <a href="' + sourceUrl + '" target="_blank" rel="noopener noreferrer">Оригинальная статья ↗</a></p>' +
      '<div class="accordion-copy"><div class="accordion-copy__item"><span>В чём проблема</span><p>' + escapeHtml(details.problem) + '</p></div>' +
      '<div class="accordion-copy__item"><span>Почему закрепляется</span><p>' + escapeHtml(details.why) + '</p></div>' +
      '<div class="accordion-copy__item"><span>Что делать</span><p>' + escapeHtml(details.response) + '</p></div></div></div></details>';
  }

  function openProfile(id, updateHash) {
    var profile = profiles.filter(function (item) { return item.id === id; })[0];
    if (!profile) return;
    var index = String(profiles.indexOf(profile) + 1).padStart(2, '0');
    var partnerId = partnerIds[profile.partner];
    var partnerMarkup = partnerId
      ? '<button class="partner-link" type="button" data-partner-id="' + escapeHtml(partnerId) + '" aria-label="Открыть профиль ' + escapeHtml(profile.partner) + '">' + escapeHtml(profile.partner) + '</button>'
      : '<strong>' + escapeHtml(profile.partner) + '</strong>';
    dialogContent.innerHTML = '<div class="dialog-top"><span class="role-chip role-' + profile.role + '">' + escapeHtml(profile.roleLabel) + '</span><span class="dialog-index">' + index + ' / 48</span></div>' +
      '<h2 id="dialogTitle">' + escapeHtml(profile.name) + '</h2>' +
      '<p class="dialog-sub"><em>' + escapeHtml(profile.en) + '</em> · ' + escapeHtml(profile.summary) + '</p>' +
      '<div class="dialog-columns"><div class="detail-block"><span>Как выглядит</span><p>' + escapeHtml(profile.signal) + '</p></div><div class="detail-block detail-block--accent"><span>Первый ход</span><p>' + escapeHtml(profile.move) + '</p></div></div>' +
      '<div class="detail-block detail-block--spaced"><span>Не сработает</span><p>' + escapeHtml(profile.avoid) + '</p></div>' +
      buildAdaptationMarkup(profile) +
      '<div class="dialog-footer"><span>Опасное сочетание</span>' + partnerMarkup + '</div>';
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    if (updateHash) history.replaceState(null, '', '#profile=' + profile.id);
  }

  function closeProfile() {
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    if (location.hash.indexOf('#profile=') === 0) history.replaceState(null, '', location.pathname + location.search);
  }

  filters.addEventListener('click', function (event) {
    var button = event.target.closest('[data-role]');
    if (!button) return;
    currentRole = button.getAttribute('data-role');
    renderFilters();
    render();
  });

  grid.addEventListener('click', function (event) {
    var card = event.target.closest('[data-profile]');
    if (card) openProfile(card.getAttribute('data-profile'), true);
  });

  search.addEventListener('input', render);
  document.getElementById('resetFilters').addEventListener('click', function () {
    currentRole = 'all';
    search.value = '';
    renderFilters();
    render();
    search.focus();
  });

  document.getElementById('randomProfile').addEventListener('click', function () {
    var matches = getMatches();
    var profile = matches[Math.floor(Math.random() * matches.length)] || profiles[0];
    openProfile(profile.id, true);
  });

  dialogClose.addEventListener('click', closeProfile);
  dialogContent.addEventListener('click', function (event) {
    var partner = event.target.closest('[data-partner-id]');
    if (partner) openProfile(partner.getAttribute('data-partner-id'), true);
  });
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) closeProfile();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === '/' && document.activeElement !== search && !dialog.open) {
      event.preventDefault();
      search.focus();
    }
  });

  renderFilters();
  render();
  if (location.hash.indexOf('#profile=') === 0) openProfile(location.hash.slice(9), false);
})();
