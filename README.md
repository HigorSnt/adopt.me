<h1 align="center">
    <img alt="Proffy" src=".github/adopte.me.png" height="80px" />
    <br>🐾 Projeto de Desenvolvimento Web 2020.3<br>
    <img src=".github/cc-ufcg.png" width="200px"/>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/HigorSnt/adopt.me?style=flat-square">
  <img alt="GitHub" src="https://img.shields.io/github/license/HigorSnt/adopt.me?style=flat-square">
  </br>
  <a href="https://insomnia.rest/run/?label=adopt.me&uri=https%3A%2F%2Fraw.githubusercontent.com%2FHigorSnt%2Fadopt.me%2Fmaster%2F.github%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-sobre">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="./server/README.md">Documentação da API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🦉 Sobre

Em tempos que estamos todos em casa, isolados ~~(ou pelo menos deveríamos)~~, nunca se fez tão importante ter um amigo por perto, então por que não facilitar as pessoas a encontrarem novos amigos? 🙆🙆‍♂️
  
Estima-se que apenas no Brasil existe cerca de 30 milhões de animais abandonados, além dos animais apreendidos com pessoas que realizam maus-tratos e atividades ílicitas. E durante esse momento pandêmico diversas ONG's vem relatando o aumento de casos de abandono, como mostra [essa reportagem da Folha de S. Paulo.](https://www1.folha.uol.com.br/cotidiano/2020/06/abandono-de-animais-se-multiplica-na-pandemia-e-atinge-ate-cavalos-e-coelhos.shtml)
  
Logo, a ideia por trás desse projeto é unir ONG's que realizam a conexão entre pessoas e animais vítimas de maus-tratos, de abandono, ou de qualquer outras circunstâncias que os levaram a chegar nessas instituições, e pessoas interessadas em dar um novo lar para esses bichinhos. Portanto, a ONG realizará um cadastro sendo passado algumas informações importantes, e daí poderá postar fotos e informações dos animais.  
Os usuários acessarão o site e poderão filtrar por espécie e localidade, além de verificar informações mais detalhadas sobre o próprio animal e a instituição, poderá realizar uma doação e entrar em contato com os responsáveis para tratar diretamente sobre a adoção, isso tudo sem necessidade de realização de cadastro.

## 🛠 Utilização

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/HigorSnt/adopt.me.git
```

2. Executando a Aplicação:

```sh
  # Inicialmente, é importante entrar na pasta gerada após o comando de clone
  $ cd adopt.me

  # Em seguida, é importante abrir a pasta da API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npx knex:migrate
  # Inicie a API
  $ yarn start # ou npm start

  # Aplicação web
  $ cd client
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start
```

## 🦊 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
