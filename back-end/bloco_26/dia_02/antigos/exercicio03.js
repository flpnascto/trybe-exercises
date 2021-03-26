const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readingFile() {
  rl.question('Qual arquivo deseja ler? ', (fileName) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Não foi possível ler o arquivo "${fileName}"\n${err}`);
        process.exit(1);
      }

      fs.stat(fileName, (err, stats) => {
        if (err) {
          console.error(`Não foi possível ler o tamanho do arquivo "${fileName}"\n${err}`);
          process.exit(1);
        }
        console.log(`Tamanho do arquivo ${stats.size} bytes`)
      })
      console.log(data);

    });

    rl.close();
  });



}

readingFile();
