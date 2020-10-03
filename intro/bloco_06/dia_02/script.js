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

function valueRadioButton() {
  if (document.getElementById('tipo-casa').checked) {
    return document.getElementById('tipo-casa').value;
  }
  if (document.getElementById('tipo-apartamento').checked) {
    return document.getElementById('tipo-apartamento').value;
  }
}

function insertForm() {
  const formResultDiv = document.getElementById('form-result');
  formResultDiv.innerHTML = '';
  const dadosPessoaisSection = document.createElement('section');
  dadosPessoaisSection.className = 'form-section';
  dadosPessoaisSection.innerHTML += '<h5>Dados Pessoais</h5>';
  dadosPessoaisSection.innerHTML += '<p>Nome: ' + document.getElementById('nome').value + '.</p>';
  dadosPessoaisSection.innerHTML += '<p>E-mail: ' + document.getElementById('email').value + '.</p>';
  dadosPessoaisSection.innerHTML += '<p>CPF: ' + document.getElementById('cpf').value + '.</p>';
  dadosPessoaisSection.innerHTML += '<p>Endereço: ' + document.getElementById('endereco').value + '.</p>';
  dadosPessoaisSection.innerHTML += '<p>' + document.getElementById('cidade').value + '/' + document.getElementById('estados').value + '</p>';
  dadosPessoaisSection.innerHTML += '<p>Tipo de Residência: ' + valueRadioButton() + '.</p>';
  formResultDiv.appendChild(dadosPessoaisSection);
  const ultimoEmpregoSection = document.createElement('section');
  ultimoEmpregoSection.className = 'form-section';
  ultimoEmpregoSection.innerHTML += '<h5>Último Emprego</h5>';
  ultimoEmpregoSection.innerHTML += '<p>Resumo: ' + document.getElementById('resumo').value + '.</p>';
  ultimoEmpregoSection.innerHTML += '<p>Cargo: ' + document.getElementById('cargo').value + '.</p>';
  ultimoEmpregoSection.innerHTML += '<p>Descrição do cargo: ' + document.getElementById('descricao-cargo').value + '.</p>';
  ultimoEmpregoSection.innerHTML += '<p>Data de início: ' + document.getElementById('data-inicio').value + '.</p>';
  formResultDiv.appendChild(ultimoEmpregoSection);
}

function resetForm() {
  document.getElementById('form1').reset();
  document.getElementById('form-result').innerHTML = '';
}

window.onload = function () {
  const resetFormInput = document.getElementById('reset-form');
  resetFormInput.addEventListener('click', resetForm);  
}

document.addEventListener('DOMContentLoaded', function() {
  gerarOptionEstadosElement();
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var resumoTextarea = document.querySelectorAll('#resumo, #descricao-cargo');
  M.CharacterCounter.init(resumoTextarea);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  M.Datepicker.init(elems, {
    format: 'dd/mm/yyyy'
  });
});

// Biblioteca para valização do formulário
new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
      minLenght: 11,
      strength: {
        custom: '^[0-9]*$'
      }
    },
    cidade: {
      required: true,
      maxLength: 28,
    },
    endereco: {
      required: true,
      maxLength: 200,
    },
    estados: {
      required: true,
    },
    tipo_residencia: {
      required: true,
    },
    resumo: {
      required: true,
      maxLength: 1000,
    },
    cargo: {
      required: true,
      maxLength: 40,
    },
    data_inicio: {
      required: true,
    },
    descricao_cargo: {
      required: true,
      maxLength: 1000,
    },
  },
  messages: {
    name: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
    },
    email: {
      required: 'Campo obrigatório',
      email: 'E-mail inválido',
      maxLength: 'Máximo :value caracteres',
    },
    cpf: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
      minLength: 'Minimo :value caracteres',
      strength: 'Somente números',
    },
    cidade: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
    },
    cidade: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
    },
    endereco: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
    },
    estados: {
      required: 'Campo obrigatório',
    },
    tipo_residencia: {
      required: 'Campo obrigatório',
    },
    resumo: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
    },

    cargo: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
    },
    data_inicio: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
    },
    descricao_cargo: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo :value caracteres',
    },
  },
  submitHandler: function (form, values, ajax) {
    insertForm();
  },
  invalidFormCallback: function (errors) {
    console.log(errors);
  },
});
