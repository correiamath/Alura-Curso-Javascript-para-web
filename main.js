const listaDeTeclas = document.querySelectorAll(".tecla");
const listaDeSons = document.querySelectorAll("button");

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

let contador = 0;

while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  contador += 1;
}
