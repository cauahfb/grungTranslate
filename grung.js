(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.Grung = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const SHIFT = 7;
  const APOSTROFOS = /['‘’ʼ`]/g; // ' ‘ ’ ʼ `

  function semAcentos(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function cifraCesar(texto, deslocamento) {
    const d = ((deslocamento % 26) + 26) % 26;
    return texto.replace(/[a-z]/gi, (c) => {
      const base = c <= "Z" ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + d) % 26) + base);
    });
  }

  function aplicarApostrofo(palavra) {
    const ultima = palavra[palavra.length - 1].toUpperCase();
    const pos = ultima > "M" ? 3 : 2;
    if (palavra.length <= pos) return palavra;
    return palavra.slice(0, pos) + "'" + palavra.slice(pos);
  }

  function removerApostrofos(texto) {
    return texto.replace(APOSTROFOS, "");
  }

  /** Comum → Grung */
  function codificar(texto) {
    return cifraCesar(semAcentos(texto), SHIFT).replace(/[A-Za-z]+/g, aplicarApostrofo);
  }

  /** Grung → Comum */
  function decodificar(texto) {
    return cifraCesar(removerApostrofos(semAcentos(texto)), -SHIFT);
  }

  /** Tabela do alfabeto: [[comum, grung], ...] */
  function alfabeto() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return letras.map((l) => [l, cifraCesar(l, SHIFT)]);
  }

  return { codificar, decodificar, cifraCesar, aplicarApostrofo, removerApostrofos, alfabeto, SHIFT };
});
