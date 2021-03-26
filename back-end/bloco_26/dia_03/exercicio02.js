const fs = require('fs');

const file1 = '/home/flpnascto/Downloads/codenation_linux.tar.gz';
const file2 = '/home/flpnascto/Downloads/Insomnia.Core-2020.5.2.deb';

const startTime = Date.now();

async function getFile(fileName) {
  const startTime = Date.now();
  fs.readFile(fileName, (err, data) => {
    if (err) return console.log(`Não foi possível ler o arquivo "${fileName}"\n${err}`);
    const totalReadingTime = Date.now() - startTime;
    console.log(`Arquivo: ${fileName}
      Tempo de leitura: ${totalReadingTime / 1000} seg.
      Tamanho: ${data.byteLength} bytes`);
  })
}
async function executeReading() {
  await getFile(file1);
  await getFile(file2);
  console.log(`Tempo de execução ${(Date.now() - startTime) / 1000} seg.`)


}

executeReading();
