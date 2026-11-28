// English front end in the browser: dizione (the same Python code and built data as the tiny-vanya wheel) run in
// Pyodide. loadEnglish(load, fetchZip) -> pieces(text), the arrays of dizione's Engine.pieces (bilingual.py _english).
const SETUP = `
import json, sys, zipfile
zipfile.ZipFile("/tmp/dizione-web.zip").extractall("/dizione")
sys.path.insert(0, "/dizione")
from dizione.engine import Phonemizer
_engine = Phonemizer("/dizione/dizione_data", join_phrases=False)
def tiny_vanya_pieces(text):
    return json.dumps(_engine.pieces(text))
`;

export async function loadEnglish(load, fetchZip) {
  const [pyodide, zip] = await Promise.all([load(), fetchZip()]);
  await pyodide.loadPackage("numpy", { messageCallback: () => {} });
  pyodide.FS.writeFile("/tmp/dizione-web.zip", zip);
  pyodide.runPython(SETUP);
  const call = pyodide.globals.get("tiny_vanya_pieces");
  return (text) => JSON.parse(call(text));
}
