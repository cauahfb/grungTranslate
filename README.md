# Tradutor de Grung (D&D 5e)

Idioma fictício dos Grung para campanhas de **Dungeons & Dragons 5ª edição**, baseado na **cifra de César (+7)** com regras de apóstrofo. Abra o `index.html` no navegador, sem instalar nada.

## Como usar
- Digite em **Idioma Comum** e o Grung aparece na hora — ou cole texto em **Idioma Grung** para ler em português.
- **Copiar** / **Limpar** para agilizar na mesa. A seção "Como funciona" mostra as regras e a tabela do alfabeto.

- **Música de fundo** (`musica.mp3`) toca ao entrar na página e se repete. O botão 🔊/🔇 no canto superior direito silencia e reativa (a escolha fica salva no navegador). Navegadores bloqueiam som automático antes de qualquer interação; nesse caso a música começa no primeiro clique, toque ou tecla.

## Regras da língua
1. Cada letra avança **7 posições** (A→H, B→I … Z→G).
2. Com a palavra já cifrada, olha-se a **última letra**:
   - **N–Z** → apóstrofo após a **3ª** letra
   - **A–M** → apóstrofo após a **2ª** letra
3. Se a palavra for curta demais para receber o apóstrofo, ele não é inserido.
4. Acentos são removidos antes de cifrar (á→a, ç→c); números e pontuação não mudam.

Exemplo: `sapo` → `zhw'v` · `casa` → `jh'zh`

## Estrutura
| Arquivo | Função |
|---|---|
| `index.html` | Interface |
| `style.css` | Visual (responsivo, tema pântano) |
| `grung.js` | Lógica da língua (funciona no navegador e no Node) |
| `test/grung.test.js` | Testes automatizados |
| `fundo.jpeg` | Mascote do cabeçalho |
| `musica.mp3` | Música de fundo |

## Licença
Livre para uso em campanhas pessoais de RPG. Adapte à sua mesa!


## Identidade visual e compartilhamento
- Os favicons e ícones de dispositivo usam o emblema oficial do portal Campanha RPG.
- `og-grung.jpg` é a imagem 1200×630 usada na prévia de compartilhamento (Open Graph/Twitter Cards).
- As tags Open Graph e Twitter estão no `index.html`. Para a prévia aparecer corretamente em WhatsApp e outros aplicativos, publique os arquivos no mesmo diretório e configure `og:image` e `twitter:image` com a URL absoluta pública do domínio onde o tradutor estiver hospedado, caso o crawler não resolva caminhos relativos.
