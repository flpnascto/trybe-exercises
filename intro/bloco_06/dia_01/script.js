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

// verifica se o input text Data Início é uma formato de data válido
function isDayFormat(value) {
  let valid = false;
  if (value > 0 && value <= 31){
    valid =  true;
  }
  return valid;
}

function isMonthFormat(value) {
  let valid = false;
  if (value > 0 && value <= 12){
    valid =  true;
  }
  return valid;
}

function isYearFormat(value) {
  let valid = false;
  if (value > 0){
    valid =  true;
  }
  return valid;
}

function checkDateFormat() {
  let check = false;
  const dataInicioInputText = document.querySelector('#data-inicio');
  if (dataInicioInputText.value.includes('/')) {
    let data = dataInicioInputText.value.split('/');
    console.log(data);
    if (data[0].length == 2 && isDayFormat(parseInt(data[0]))) {
      if (data[1].length == 2 && isMonthFormat(parseInt(data[1]))) {
        if (data[2].length == 4 && isYearFormat(parseInt(data[2]))) {
          check = true;
        }
      }
    }
  }
  if (!check){
    alert('Formato de data Inválido!')
    dataInicioInputText.value = '';
  }
}

window.onload = function () {
  gerarOptionEstadosElement();
  
  const dataInicioInputText = document.querySelector('#data-inicio');
  dataInicioInputText.addEventListener('change', checkDateFormat);
}
