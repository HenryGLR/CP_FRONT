# Etapas de implementação

Conforme a solicitação final, a entrega tem somente três commits semânticos de implementação, todos com autoria de Henry Gabriel Lima Rigueira.

1. **chore: configurar projeto React Vite e Tailwind da Elite Motors**
   - Dependências travadas, configuração do Vite, Tailwind e VS Code.
   - HTML de entrada, metadados, favicon e inicialização no Windows.
   - Criação da base para main e dev.

2. **feat: criar identidade premium e componentes reutilizaveis**
   - Navbar, Footer e Card.
   - Tema escuro e dourado, layout responsivo e acessibilidade.
   - Dados demonstrativos dos carros, fotos locais e formatação de valores.

3. **feat: concluir paginas catalogo rotas e validacao**
   - Home, Carros, página 404 e rotas em App.jsx.
   - Busca, categorias, ordenação e estado vazio.
   - Testes do catálogo, identificação do integrante e documentação.

Os commits registram adições reais de arquivos; não são commits vazios e não possuem datas retroativas. O histórico anterior da preparação local é preservado somente nas branches locais de arquivo e não integra este repositório remoto.

Fluxo de publicação: main e dev partem da configuração inicial; feat/elite-motors contém as etapas seguintes e é enviada em PR para dev. Após validação, dev é promovida por PR para main, usando rebase para manter três commits no histórico final.
