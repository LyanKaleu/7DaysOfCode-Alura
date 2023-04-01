let listaCompras = [];
let continuar = true;

while (continuar) {
  let adicionar = prompt("Deseja adicionar uma comida na lista de compras? (sim ou não)");

  if (adicionar === "sim") {
    let nomeComida = prompt("Qual comida você deseja adicionar?");
    let categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces ou outro)");

    listaCompras.push({ nome: nomeComida, categoria: categoria });
  } else {
    continuar = false;
  }
}

let categorias = {};

listaCompras.forEach((comida) => {
  if (!categorias[comida.categoria]) {
    categorias[comida.categoria] = [comida.nome];
  } else {
    categorias[comida.categoria].push(comida.nome);
  }
});

console.log("Lista de compras:");

for (let categoria in categorias) {
  console.log(`  ${categoria}: ${categorias[categoria].join(", ")}`);
}