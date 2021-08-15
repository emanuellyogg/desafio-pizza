var arrayPizza = [];
var btIncluirPizza = document.querySelector("#btIncluirPizza");

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
  
  arrayPizza.sort(function(a, b) {
    if(a.precoPorCm < b.precoPorCm) {
      return -1;
    } else {
      return true;
    }
  });
  calcularDif();
  showResult();
});

function calculaPreco(tam, preco) {
  
  let areaPizza = 0;
  let precoCm = 0;
  areaPizza = Math.PI * (tam / 2);
  precoCm = preco / areaPizza;
  return precoCm;
}

function calcularDif(params) {
  for (let index = 0; index < arrayPizza.length; index++) {
    var valorPrimPizza = arrayPizza[index-1]?.precoPorCm;
    var valorSegPizza = arrayPizza[index]?.precoPorCm;

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


// TODO exibir o valor apenas 2 casas decimais

//  TODO exibir o número do ranking da lista 

