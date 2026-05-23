# 🗣️ Tradutor de Grung (D&D 5e)

Um idioma fictício criado para campanhas de **RPG Dungeons & Dragons 5ª edição**, baseado na **cifra de César (+7)**.  
Este projeto permite codificar frases do **idioma comum** para o **idioma Grung** e decodificar de volta, com regras especiais de apóstrofo para dar mais sabor linguístico.

---

## Funcionalidades
- **Codificação (Comum → Grung):**
  - Aplica cifra de César com deslocamento **+7**.
  - Se a palavra terminar com letra **após "M"**, insere apóstrofo após 3 letras.
  - Se terminar com **"M" ou antes**, insere apóstrofo após 2 letras.
- **Decodificação (Grung → Comum):**
  - Remove apóstrofos automaticamente.
  - Aplica cifra de César com deslocamento **-7** para retornar ao idioma comum.

---

## Tecnologias
- **HTML5**
- **CSS3** (Comic Sans, fundo customizável, caixinha laranja para resultado)
- **JavaScript** (implementação da cifra de César + regras de apóstrofo)

---
## Objetivo
Este idioma foi criado para enriquecer campanhas de **D&D 5e**, oferecendo uma forma divertida de comunicação secreta entre personagens, NPCs ou até puzzles dentro da narrativa.

---

## Licença
Este projeto é livre para uso em campanhas pessoais de RPG.  
Sinta-se à vontade para modificar e adaptar às suas mesas!
