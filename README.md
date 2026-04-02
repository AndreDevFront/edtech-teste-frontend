# 🎓 Teste Técnico — Desenvolvedor Frontend EdTech

## 🚀 Como rodar

1. Clone o repositório:
   \```bash
   git clone https://github.com/andredevfront/edtech-teste.git
   cd edtech-teste
   \```

2. Abra com Live Server (VS Code):
   - Instale a extensão **Live Server**
   - Clique com botão direito no `index.html`
   - Selecione **"Open with Live Server"**
   - Acesse `http://127.0.0.1:5500`

---

## 📁 Estrutura do Projeto

\```
edtech-teste/
├── index.html
├── css/
│ ├── reset.css → Normalização e base global
│ ├── layout.css → Estrutura de página e seções
│ ├── components.css → Estilo de cada componente
│ └── responsive.css → Media queries (mobile-first)
├── js/
│ ├── cards.js → Toggle expand/collapse dos cards
│ ├── slider.js → Inicialização do Swiper
│ ├── atividades.js → Lógica das atividades + sessionStorage
│ └── accordion.js → Comportamento exclusivo do FAQ
├── images/ → Assets de imagem locais
└── README.md
\```

---

## 🛠️ Decisões Técnicas

### Sem frameworks — conforme requisito

Todo o projeto foi desenvolvido com **HTML5, CSS e JavaScript Vanilla** puros,
sem uso de Bootstrap, Tailwind, React, Vue ou Angular.

### Swiper.js — slider

Utilizado para o componente de slider de imagens, conforme **explicitamente
permitido** pelo enunciado do teste.

### `<details>` e `<summary>` — FAQ Accordion

Implementado com elementos **nativos do HTML5**, sem necessidade de JavaScript
extra para a lógica de abrir/fechar. O `accordion.js` apenas adiciona o
comportamento de fechar os demais itens ao abrir um novo.

### sessionStorage — Persistência das atividades

Toda a lógica de persistência foi implementada via `sessionStorage`, garantindo:

- ✅ Conteúdo preenchido restaurado ao recarregar
- ✅ Feedback exibido restaurado
- ✅ Estado dos botões (habilitado/desabilitado) restaurado
- ✅ Opção selecionada na atividade objetiva restaurada

### CSS organizado por responsabilidade

| Arquivo          | Responsabilidade                         |
| ---------------- | ---------------------------------------- |
| `reset.css`      | Normalização cross-browser e base global |
| `layout.css`     | Estrutura de página, grid e seções       |
| `components.css` | Estilo individual de cada componente     |
| `responsive.css` | Media queries para mobile e tablet       |

### Acessibilidade

- HTML semântico com `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Atributos `aria-label`, `aria-expanded`, `aria-hidden`, `aria-live` e `aria-describedby`
- `role="alert"` nos feedbacks das atividades
- Estados de foco visíveis via `focus-visible`
- Navegação por teclado funcional em todos os componentes
- Contraste adequado entre texto e fundo

---

## 📦 Dependências externas

| Lib                             | Versão | Uso               |
| ------------------------------- | ------ | ----------------- |
| [Swiper](https://swiperjs.com/) | 11     | Slider de imagens |

Carregada via **CDN** — sem necessidade de `npm install`.

---

## ✨ Diferenciais implementados

- Microinterações nos cards (transição suave de expand/collapse)
- Transições de estado nos botões das atividades
- Animação no ícone `+` do FAQ ao abrir/fechar
- Hover states em todos os elementos interativos
- Foco visível para navegação por teclado
- Semântica HTML completa para leitores de tela
