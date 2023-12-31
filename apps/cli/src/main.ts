import { promises } from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(import.meta.url)
const fileUrl = new URL(`${__dirname}/../data/data.csv`)
console.log('Reading the data.csv...', fileUrl)
try {
  const data = await promises.readFile(fileUrl , 'utf8')
  let i=0
  const lines = data.split(/\r?\n/)
  const fieldNames = lines[0].split(';').slice(0,20)
  const result = []
  for(let i=1;i<lines.length;i++) {
    const fieldValues = lines[i].split(';')
    const o: Record<string, number> = { line: i}
    for(let j=0;j<fieldNames.length;j++) {
      o[fieldNames[j]] = parseInt(fieldValues[j])
    }
    result.push(o)
  }
//  console.log(fieldNames)
 console.table(result)
} catch(err) {
  console.error(err)
}

  
  

