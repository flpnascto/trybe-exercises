let bestSkills = ['empatia', 'bom-humor', 'compromisso', 'solícito', 'compreensivo'];

function firstFunction(param) {
  let stringDeterminada = 'Tryber x aqui!';
  return secondFunction(stringDeterminada.replace('x', param));
}

function secondFunction(param) {
  let mensage = `${param} Minhas cinco principais habilidades são:`;
  bestSkills = bestSkills.sort();
  for (skill in bestSkills) {
    mensage += `\n  - ${bestSkills[skill]};`;
  }
  mensage += `\n#goTrybe.`;
  return mensage;
}

console.log(firstFunction('Felipe'));
