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
      }

      fs.stat(fileName, (err, stats) => {
        if (err) {
          console.error(`Não foi possível ler o tamanho do arquivo "${fileName}"\n${err}`);
        }
        console.log(`Tamanho do arquivo ${stats.size} bytes`)
      })
      console.log(data);

    });
  });
}

function checkFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, content) => {
      if (err) reject(e => `Não foi possível ler o arquivo "${fileName}"\n${err}`);
      resolve(content);
    });
  });
}

const readUserAnswer = (msg) => {
  return new Promise((resolve, reject) => {
    rl.question(msg, (answer) => {
      rl.pause();
      resolve(answer);
    })
  })
}

async function replaceWord() {
  try {
    const fileName = await readUserAnswer('Qual arquivo deseja ler? ');

    const data = await checkFile(fileName);

    const word = await readUserAnswer('Qual palavra de deseja substituir? ');

    const newWord = await readUserAnswer('Qual a nova palavra? ');

    const newFileName = await readUserAnswer('Qual o nome para salvar o arquivo');

    rl.close();
    console.log(fileName, word, newWord, newFileName);
    console.log();

    const newData = data.replace(new RegExp(word, 'g'), newWord)

    await fs.writeFile(newFileName, newData, (err) => {
      if (err) return console.log(err);
      console.log(err);
    })

  } catch (error) {
    console.error(error);
  }
}

replaceWord();
