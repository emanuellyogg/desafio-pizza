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
    nome: nomePizza,
    tamanho: tamanhoPizza,
    preco: precoPizza,
    precoPorCm: calculaPreco(tamanhoPizza, precoPizza),
    diferenca: 10
  }

  arrayPizza.push(dadosPizza);
  console.log(arrayPizza);
})

function calculaPreco(tam, preco) {
  
  let areaPizza = 0;
  let precoCm = 0;
  let arredPreco = 0;
  areaPizza = Math.PI * (tam / 2);
  precoCm = preco / areaPizza;
  arredPreco = precoCm.toFixed(2);
  return arredPreco;
}

// TODO ordenar a lista do mais barato ao mais caro

// TODO calcular o percentual de diferença do preço de um tamanho para o outro. 

//  TODO exibir os dados capturados