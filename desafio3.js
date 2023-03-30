let area = prompt("Você quer seguir para a área de Front-End ou Back-End? Digite 1 para Front-End e 2 para Back-End.");

if (area === "1") {
  let frontend = prompt("Você quer aprender React ou Vue? Digite 1 para React e 2 para Vue.");

  if (frontend === "1") {
    let feEscolha = prompt("Você quer se especializar em React ou seguir para Fullstack? Digite 1 para se especializar e 2 para Fullstack.");
    if (feEscolha === "1") {
      console.log("Ótima escolha! React é uma tecnologia muito requisitada no mercado.");
    } else {
      console.log("Ser Fullstack é uma ótima opção, parabéns pela escolha!");
    }
  } else {
    let feEscolha = prompt("Você quer se especializar em Vue ou seguir para Fullstack? Digite 1 para se especializar e 2 para Fullstack.");
    if (feEscolha === "1") {
      console.log("Ótima escolha! Vue é uma tecnologia muito interessante e com muitas possibilidades.");
    } else {
      console.log("Ser Fullstack é uma ótima opção, parabéns pela escolha!");
    }
  }
} else {
  let backend = prompt("Você quer aprender C# ou Java? Digite 1 para C# e 2 para Java.");

  if (backend === "1") {
    let beEscolha = prompt("Você quer se especializar em C# ou seguir para Fullstack? Digite 1 para se especializar e 2 para Fullstack.");
    if (beEscolha === "1") {
      console.log("Ótima escolha! C# é uma linguagem muito utilizada no mercado de trabalho.");
    } else {
      console.log("Ser Fullstack é uma ótima opção, parabéns pela escolha!");
    }
  } else {
    let beEscolha = prompt("Você quer se especializar em Java ou seguir para Fullstack? Digite 1 para se especializar e 2 para Fullstack.");
    if (beEscolha === "1") {
      console.log("Ótima escolha! Java é uma linguagem muito poderosa e versátil.");
    } else {
      console.log("Ser Fullstack é uma ótima opção, parabéns pela escolha!");
    }
  }
}

let tecnologia = true;
let techLista = [];

while (tecnologia) {
  let novaTecnologia = prompt("Qual tecnologia você gostaria de aprender agora?");
  techLista.push(novaTecnologia);
  let mais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite ok para continuar e qualquer outra coisa para sair.");
  if (mais !== "ok") {
    tecnologia = false;
  }
}

console.log(`Muito legal! Você quer aprender as tecnologias: ${techLista.join(", ")}. Boa sorte nos seus estudos!`);