var arrayPizza = [];
var btIncluirPizza = document.querySelector("#btIncluirPizza")

btIncluirPizza.addEventListener("click", function(event){
  event.preventDefault();

  var nomePizza = document.querySelector("#nomePizza").value;
  var tamanhoPizza = document.querySelector("#tamanhoPizza");
  var precoPizza = document.querySelector("#precoPizza");

  tamanhoPizza = Number(tamanhoPizza.value);
  precoPizza = Number(precoPizza.value);

  var dadosPizza = {
    ranking: 0,
    nome: nomePizza,
    tamanho: tamanhoPizza,
    preco: precoPizza,
    precoPorCm: calculaPreco(tamanhoPizza, precoPizza),
    diferenca: 0
  }

  arrayPizza.push(dadosPizza);
  limparTela();
  
  showResult();
})

function calculaPreco(tam, preco) {
  
  let areaPizza = 0;
  let precoCm = 0;
  areaPizza = Math.PI * (tam / 2);
  precoCm = preco / areaPizza;
  return precoCm;
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
  pizzaTr.appendChild(montaTd(pizza.tamanho));
  pizzaTr.appendChild(montaTd(pizza.preco));
  pizzaTr.appendChild(montaTd(pizza.precoPorCm));
  pizzaTr.appendChild(montaTd(pizza.diferenca));

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

// TODO ordenar a lista do mais barato ao mais caro

// TODO calcular o percentual de diferença do preço de um tamanho para o outro. 

