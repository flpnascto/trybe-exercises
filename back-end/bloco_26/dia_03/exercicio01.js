const fs = require('fs');

const file1 = '/home/flpnascto/Downloads/codenation_linux.tar.gz';
const file2 = '/home/flpnascto/Downloads/Insomnia.Core-2020.5.2.deb';

const startTime = Date.now();

const data1 = fs.readFileSync(file1);
console.log(`Arquivo: ${file1}
Tempo de leitura: ${(Date.now() - startTime) / 1000} seg.
Tamanho: ${data1.byteLength} bytes\n`);

const time2 = Date.now();
const data2 = fs.readFileSync(file2);
console.log(`Arquivo: ${file1}
Tempo de leitura: ${(Date.now() - time2) / 1000} seg.
Tamanho: ${data2.byteLength} bytes\n`);

console.log(`Tempo de execução: ${(Date.now() - startTime) / 1000} seg.`)

