## Teste de Automação Keeggo

Esse projeto foi realizado com cypress em Javascript, 
com uso de BDD, no caso Cucumber.

Nos testes web, foi utilizado oa padrão de Page Object,
há uma pasta chamada `pages`, 
onde foi mapeado cada componente utilizado nos testes.

Cada parte do site foi separada de acordo com a página referente.
Dentro da pasta de cada página, há um arquivo `.feature` e um `.js`,
o arquivo `feature` é responsavel pela escrita em Gherkin enquanto
o arquivo `js` são os `step_definitions`

Também há um pequeno teste de API onde é testado o status da requisição e alguns campos retornados.

---

## Como executar os testes:

Clonar esse repositório com o comando `git clone`

É preciso ter a versão mais recente do [node](https://nodejs.org/en/download) para fazer uso do cypress

Para instalar o cypress:
`npm install cypress`

Após a instação, é possível executar os testes pelos seguintes comandos:
`npm run test` e `npx cypress run`

No comando `npx cypress run`, é preciso fazer o download do [npx](https://www.npmjs.com/package/npx)

