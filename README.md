# 🎓 Teste Técnico — Desenvolvedor Frontend EdTech

## 🚀 Como rodar

1. Clone o repositório:
```bash
git clone https://github.com/AndreDevFront/edtech-teste-frontend.git
cd edtech-teste-frontend
```

2. Abra com Live Server (VS Code):
   - Instale a extensão **Live Server**
   - Clique com botão direito no `index.html`
   - Selecione **"Open with Live Server"**
   - Acesse `http://127.0.0.1:5500`

---

## 📁 Estrutura do Projeto

```
edtech-teste-frontend/
├── index.html
├── css/
│   ├── reset.css        → Normalização e base global
│   ├── layout.css       → Estrutura de página e seções
│   ├── components.css   → Estilo de cada componente
│   └── responsive.css   → Media queries (mobile-first)
├── js/
│   ├── cards.js         → Toggle expand/collapse dos cards
│   ├── slider.js        → Inicialização do Swiper
│   ├── atividades.js    → Lógica das atividades + sessionStorage
│   └── accordion.js     → Comportamento exclusivo do FAQ
└── README.md
```

---

## 🛠️ Decisões Técnicas

### Sem frameworks — conforme requisito
Todo o projeto foi desenvolvido com **HTML5, CSS e JavaScript Vanilla** puros, sem uso de Bootstrap, Tailwind, React, Vue ou Angular.

### Swiper.js — slider
Utilizado para o componente de slider de imagens, conforme **explicitamente permitido** pelo enunciado do teste.

### `<details>` e `<summary>` — FAQ Accordion
Implementado com elementos **nativos do HTML5**, sem necessidade de JavaScript extra para a lógica de abrir/fechar.

### sessionStorage — Persistência das atividades
Toda a lógica de persistência foi implementada via `sessionStorage`, garantindo:
- ✅ Conteúdo preenchido restaurado ao recarregar
- ✅ Feedback exibido restaurado
- ✅ Estado dos botões restaurado
- ✅ Opção selecionada na atividade objetiva restaurada

### Acessibilidade
- HTML semântico completo
- Atributos `aria-label`, `aria-expanded`, `aria-hidden`, `aria-live`
- Estados de foco visíveis via `focus-visible`
- Navegação por teclado funcional

---

## 📦 Dependências externas

| Lib | Versão | Uso |
|---|---|---|
| [Swiper](https://swiperjs.com/) | 11 | Slider de imagens |

Carregada via **CDN** — sem necessidade de `npm install`.
