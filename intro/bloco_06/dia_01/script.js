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

function checkTextField(value, character) {
  let check = false;
  if (value !== '' && value.length <= character){
    check = true;
  }
  return check;
}

function checkEmailField(value, character) {
  let check = false;
  if (value !== '' && value.length <= character && value.includes('@')){
    check = true;
  }
  return check;
}

function checkTextField(value) {
  let check = false;
  if (value !== ''){
    check = true;
  }
  return check;
}

function checkRadioButton(elements) {
  let check = false;
  for (let element = 0; element < elements.length; element += 1) {
    if (element.checked) {
      check = true;
      break;
    }
  }
  return check;
}



function formValidation() {
  let formValidationMensage = []
  if (!checkTextField(document.getElementById('nome').value, 40)){
    formValidationMensage.push('Campo nome de ser preenchido, máximo 40 caracteres');
  }
  if (!checkEmailField(document.getElementById('email').value, 50)){
    formValidationMensage.push('Campo e-mail de ser preenchido, máximo 50 caracteres');
  }
  if (!checkTextField(document.getElementById('cpf').value, 11)){
    formValidationMensage.push('Campo CPF de ser preenchido, máximo 11 caracteres');
  }
  if (!checkTextField(document.getElementById('endereco').value, 200)){
    formValidationMensage.push('Campo endereço de ser preenchido, máximo 200 caracteres');
  }
  if (!checkTextField(document.getElementById('cidade').value, 200)){
    formValidationMensage.push('Campo cidade de ser preenchido, máximo 28 caracteres');
  }
  if (!checkTextField(document.getElementById('estados').value, 200)){
    formValidationMensage.push('Campo estados de ser preenchido');
  }
  if (!checkRadioButton(document.querySelectorAll('input[name="tipo-residencia"'))) {
    formValidationMensage.push('Selecione o tipo de Residência');
  }
  if (formValidationMensage.length === 0) {
    console.log('Formulário ok');
  } else {
    const formResultDiv = document.getElementById('form-result');
    for (let index = 0; index < formValidationMensage.length; index += 1) {
      formResultDiv.innerHTML += ('- ' + formValidationMensage[index] + '<br>');
      // formResultDiv.innerHTML += ;
    }
  }
  
  console.log(formValidationMensage);

}

window.onload = function () {
  gerarOptionEstadosElement();
  
  const dataInicioInputText = document.getElementById('data-inicio');
  dataInicioInputText.addEventListener('change', checkDateFormat);

  const submitFormButton = document.getElementById('submit-form');
  submitFormButton.addEventListener('click', function(e) {
    e.preventDefault();
    formValidation();
  });
  
}
