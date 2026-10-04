const fs = require('fs');

const data = fs.readFileSync('package-lock.json').toString('base64');
const chunkSize = 1200;

for (let i = 0, n = 0; i < data.length; i += chunkSize, n += 1) {
  console.log(`LOCKCHUNK:${n}:${data.slice(i, i + chunkSize)}`);
}
