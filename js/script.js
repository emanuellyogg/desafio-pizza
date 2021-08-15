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
    precoPorCm: 10,
    diferenca: 10
  }

  arrayPizza.push(dadosPizza);
})




// TODO calcular o valor por cm²

// TODO calcular o percentual de diferença do preço de um tamanho para o outro. 

// TODO ordenar a lista do mais barato ao mais caro

//  TODO exibir os dados capturados