// modificação do objeto para array.
let estados = [
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goías',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
];
// fonte da variável estados: https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5


// criar elemento option para o select Estados
function gerarOptionEstadosElement() {
  const estadoSelect = document.querySelector('#estados');
  for (let index = 0; index < estados.length; index += 1) {
    const estadoOption = document.createElement('option');
    let valores = estados[index].split(' - ');
    estadoOption.value = valores[0];
    estadoOption.innerText = valores[1];
    estadoSelect.appendChild(estadoOption);
  }
}

window.onload = function () {
  gerarOptionEstadosElement();
}
