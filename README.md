# Elite Motors

Checkpoint 6 · Web Development · FIAP · Engenharia de Software · 1ESPJ.

**Henry Gabriel Lima Rigueira — RM 570063**
Professor: Wellington Cidade Silva.

Site de locação de carros importados, com identidade escura e detalhes dourados. Desenvolvido com React, Vite, Tailwind CSS e React Router. Projeto acadêmico: imagens e valores são ilustrativos.

## Executar

Requisito: Node.js 22.14 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra a URL exibida no terminal. No Windows, INICIAR.cmd também inicia o projeto.

```sh
npm test
npm run build
npm run preview
```

O build é gerado em dist/. Use um servidor HTTP para acessá-lo, em vez de abrir index.html diretamente.

## Páginas e estrutura

```text
src/
  components/
    Navbar.jsx
    Footer.jsx
    Card.jsx
  pages/
    Home.jsx
    Carros.jsx
    NotFound.jsx
  data/cars.js
  utils/format.js
  styles/
    index.css
    catalog.css
  App.jsx
  main.jsx
public/
  images/
tests/catalog.test.js
.vscode/
integrante.txt
```

As rotas são configuradas no App.jsx com React Router. O HashRouter permite acessar /#/ e /#/carros em hospedagens estáticas sem configurar redirecionamentos no servidor.

O Tailwind CSS é integrado ao Vite pelo plugin oficial e importado em src/styles/index.css. Os tokens de cor são definidos em @theme e os componentes combinam utilitários Tailwind com CSS responsivo.

## Funcionalidades

- Home com apresentação da locadora e modelos em destaque.
- Catálogo com cinco carros, fotos locais, modelos e valores de diária.
- Busca por marca/modelo, filtro por categoria e ordenação por valor.
- Estado vazio com limpeza de filtros.
- Menu móvel, navegação por teclado, foco visível e rota 404.

O escopo é um catálogo. Não há backend, cadastro, pagamento ou reserva.

## Git e autoria

Repositório: https://github.com/HenryGLR/CP_FRONT

A entrega foi organizada em três commits semânticos reais, conforme a solicitação final, com autoria de Henry Gabriel Lima Rigueira. As etapas de implementação estão em docs/TAREFAS.md.

Fluxo: branch de funcionalidade → Pull Request para dev → Pull Request de dev para main. A integração por rebase preserva três commits no histórico final, sem commits extras de merge. Os PRs reais podem ser consultados na aba Pull requests do repositório.

## Validação

Execute npm test e npm run build. O registro da conferência local está em docs/VALIDACAO.md.

## Imagens

As fotos estão incluídas em public/images e não exigem acesso à internet durante o uso. As fontes estão em public/images/FONTES.md. São ilustrações; não representam uma oferta de locação.
