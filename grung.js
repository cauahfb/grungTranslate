/*
 * Tradutor de Grung — lógica da língua (sem dependência de DOM).
 * Funciona no navegador (window.Grung) e no Node (module.exports), para poder ser testada.
 *
 * Regras:
 *  1. Cifra de César com deslocamento +7 (A→H, B→I, ... Z→G).
 *  2. Apóstrofo por palavra, decidido pela ÚLTIMA LETRA da palavra já cifrada:
 *       - depois de "M" (N–Z): apóstrofo após a 3ª letra
 *       - "M" ou antes (A–M):   apóstrofo após a 2ª letra
 *     Se a palavra não tem letras suficientes depois da posição, não há apóstrofo.
 *  3. Acentos são removidos antes de cifrar (á→a, ç→c), pois a cifra só cobre A–Z.
 *  4. Números, pontuação e espaços passam intactos.
 */
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
