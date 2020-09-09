let salarioBruto = 3000;

let salarioLiquido, salarioBase, descontoInss, descontoIr;

// faixa de valores do INSS
let inssFaixa1 = 1556.94,
    inssFaixa2 = 2594.92,
    inssTaxaMax = 570.88;

// faixa de valores do IR
let irFaixa1 = 1903.98, parcela1 = 142.80,
    irFaixa2 = 2826.65, parcela2 = 354.80,
    irFaixa3 = 3751.05, parcela3 = 636.13,
    irFaixa4 = 4664.68, parcela4 = 869.36;

if (salarioBruto > 0 && typeof salarioBruto === 'number'){
  // calcula taxa de INSS
  if (salarioBruto <= inssFaixa1){
    descontoInss = salarioBruto * 0.08;
  } else if (salarioBruto > inssFaixa1 && salarioBruto <= inssFaixa2){
    descontoInss = salarioBruto * 0.09;
  } else {
    descontoInss = salarioBruto * 0.11;
  }
  if(descontoInss > inssTaxaMax){
    descontoInss = inssTaxaMax;
  }

  // calcula salário base
  salarioBase = salarioBruto - descontoInss;

  // calcula taxa de IR
  if(salarioBase <= irFaixa1){
    descontoIr = 0;
  } else if(salarioBase > irFaixa1 && salarioBase <= irFaixa2){
    descontoIr = (salarioBase * 0.075) - parcela1;
  } else if(salarioBase > irFaixa2 && salarioBase <= irFaixa3){
    descontoIr = (salarioBase * 0.15) - parcela2;
  } else if(salarioBase > irFaixa3 && salarioBase <= irFaixa4){
    descontoIr = (salarioBase * 0.225) - parcela3;
  } else {
    descontoIr = (salarioBase * 0.275) - parcela4;
  }

  // calcula salário liquido
  salarioLiquido = salarioBase - descontoIr;

  console.log("Salário Bruto", salarioBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
  "\nDesconto INSS", descontoInss.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
  "\nDesconto IR", descontoIr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
  "\nSalário Líquido", salarioLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
} else {
  console.log("Salário Bruto inválido!")
}