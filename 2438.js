const n = Number(require('fs').readFileSync(0, 'utf8').trim());

let rs = '';

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    rs += '*';
  }
  rs += '\n';
}

console.log(rs);
