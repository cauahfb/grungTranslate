# Tradutor de Grung (D&D 5e)

Idioma fictício dos Grung para campanhas de **Dungeons & Dragons 5ª edição**, baseado na **cifra de César (+7)** com regras de apóstrofo. Abra o `index.html` no navegador, sem instalar nada.

## Como usar
- Digite em **Idioma Comum** e o Grung aparece na hora — ou cole texto em **Idioma Grung** para ler em português.
- **Copiar** / **Limpar** para agilizar na mesa. A seção "Como funciona" mostra as regras e a tabela do alfabeto.

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


## Licença
Livre para uso em campanhas pessoais de RPG. Adapte à sua mesa!
