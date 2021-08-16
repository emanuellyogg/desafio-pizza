var arrayPizza = [];
var btIncluirPizza = document.querySelector("#btIncluirPizza");

btIncluirPizza.addEventListener("click", function(event){
  event.preventDefault();

  var nomePizza = document.querySelector("#nomePizza").value;
  var tamanhoPizza = document.querySelector("#tamanhoPizza");
  var precoPizza = document.querySelector("#precoPizza");

  tamanhoPizza = Number(tamanhoPizza.value);
  precoPizza = Number(precoPizza.value);

  if (validarCampos(nomePizza, tamanhoPizza, precoPizza)) {
    return;
  }

  var dadosPizza = {
    ranking: 0,
    nome: nomePizza,
    tamanho: tamanhoPizza,
    preco: precoPizza,
    precoPorCm: calculaPreco(tamanhoPizza, precoPizza),
    diferenca: 0
  }

  if (verificaTamanhoExiste(tamanhoPizza)) {
    return;
  }

  arrayPizza.push(dadosPizza);

  limparTela();
  ordenarLista();
  calcularDif();
  showResult();
});

function validarCampos(nome, tamanho, preco) {
  if (nome == 0 || tamanho == 0 || preco == 0) {
    alert("O preenchimento de todos os campos é obrigatório");
    return true;
  } else {
    return false
  }
}

function ordenarLista() {
  arrayPizza.sort(function(a, b) {
    if(a.precoPorCm < b.precoPorCm) {
      return -1;
    } else {
      return true;
    }
  });
}

function verificaTamanhoExiste(tamanhoPizza) {
  const existe = arrayPizza.filter(pizza => (pizza.tamanho == tamanhoPizza));
  if (existe.length > 0) {
    alert("Já existe uma pizza com o mesmo tamanho");
    return true;
  } else {
    return false;
  }
}

function calculaPreco(tam, preco) {
  
  let areaPizza = 0;
  let precoCm = 0;
  areaPizza = Math.PI * (tam / 2);
  precoCm = preco / areaPizza;

  return precoCm;
}

function calcularDif() {
  for (let index = 0; index < arrayPizza.length; index++) {
    var valorPrimPizza = arrayPizza[index-1]?.precoPorCm;
    var valorSegPizza = arrayPizza[index]?.precoPorCm;

    arrayPizza[index].ranking = index+1;

    if (index > 0) { 
      arrayPizza[index].diferenca = (valorSegPizza - valorPrimPizza) / valorPrimPizza * 100;
    }
  }
}

function showResult() {
  var tBody = document.getElementById("tbodyPizza");

  for (let index = 0; index < arrayPizza.length; index++) {
    const pizza = arrayPizza[index];

    var pizzaTr = montaTr(pizza); 
    tBody.appendChild(pizzaTr);
  }
}

function montaTr(pizza){
  let pizzaTr = document.createElement("tr");

  pizzaTr.appendChild(montaTd(pizza.ranking));
  pizzaTr.appendChild(montaTd(pizza.nome));
  pizzaTr.appendChild(montaTd(pizza.tamanho + " cm"));
  pizzaTr.appendChild(montaTd("R$ " + pizza.preco.toFixed(2).toString().replace(".", ",")));
  pizzaTr.appendChild(montaTd("R$ " + pizza.precoPorCm.toFixed(2).toString().replace(".", ",")));
  pizzaTr.appendChild(montaTd(pizza.diferenca.toFixed(0) + " %"));

  return pizzaTr;
}

function montaTd(dado){
  let pizzaTd = document.createElement("td");
  pizzaTd.textContent = dado;

  return pizzaTd;
}

function limparTela() {
  document.getElementById("tbodyPizza").innerHTML = "";
  document.querySelector("#nomePizza").value = "";
  document.querySelector("#tamanhoPizza").value = "";
  document.querySelector("#precoPizza").value = "";
}