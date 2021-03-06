# A-Wing
Sistema Web do LEDS Santa Teresa para estudos sobre o *framework* Angular (A-Wing).
[<img src="https://vignette.wikia.nocookie.net/pt.starwars/images/8/8d/A-wing_DICE.png/revision/latest?cb=20180116223039" alt="A-Wing" width="50%" height="50%">](https://www.starwars.com/databank/a-wing-fighter)

## Introdução
Sistema Web com controle de acesso de usuários e cadastro de informações sobre Naves, Pilotos de Naves e esquadrões da franquia Star Wars.

## Objetivo
Este projeto se prepõe a servir de base para que os participantes do LEDS Santa Teresa elaborem a estrutura necessária para o desenvolvimento de sistemas Web baseados no *framework* Angular (por isso o nome A-Wing) e o Node.js.
O principal objetivo é o de desenvolver as habilidades de cada um dos estudantes no desenvolvimento colaborativo de um Sistema Web.

## Ferramentas
* [Node.js](https://nodejs.org/en/) -- [Install Version 12](https://github.com/nodesource/distributions) (Módulos: express, morgan, promise-mysql, cors);
* [Angular](https://angular.io/guide/quickstart) -- [Install the Angular CLI](https://angular.io/guide/setup-local);
* MySql para o banco de dados ([Importar BD](https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-in-mysql-or-mariadb) -- [Dar privilégios a usuário](https://chartio.com/resources/tutorials/how-to-grant-all-privileges-on-a-database-in-mysql/));
* PhpMyAdmin para gerenciar o BD (Crie o usuário phpmyadmin, com senha phpmyadmin e [dê privilégios de acesso ao BD](https://chartio.com/resources/tutorials/how-to-grant-all-privileges-on-a-database-in-mysql/));
* [GitKraken](https://www.gitkraken.com/): Para controle de versão via Git (com interface visual);
* Editores sugeridos para o projeto:
  * [Visual Studio Code](https://code.visualstudio.com/)
  * [Atom](https://atom.io/)
* [Postman](https://www.getpostman.com/postman) para testes da API REST.

## Instalação dos módulos do projeto
* Clonar este projeto para a sua máquina via GitKraken;
* Usar o arquivo `database/db_awing.sql` para criar a base de dados via MySql ou PhpMyAdmin;
* Abrir um terminal (na pasta do projeto) e instalar os módulos necessários ao servidor:
  * `npm i`
  * `cd server`
  * `npm i`

## Execução do Projeto
* Abrir um terminal (na pasta do projeto) e executar comando para iniciar o compilador do TScript (manter ativo este terminal):
  * `cd server`
  * `npm run build`
* Abrir outro terminal (na pasta do projeto) e executar comando para iniciar o cliente em `http://localhost:4200/` e o servidor em `http://localhost:3000/`  (manter ativo este terminal):
  * `npm run serve`

Obs.1: Caso deseje iniciar apenas o servidor, abra um terminal (na pasta do projeto)e execute:
  * `cd server`
  * `npm run dev`

Obs.2: Para executar o Node em ambiente de produção deve-se incluir `NODE_ENV=production` antes do comando, por exemplo:
  * `NODE_ENV=production node server/build/index.js`
Em ambiente de desenvolvimento podemos executar o `nodemon` das seguintes formas:
  * `npm run dev` equivale a `NODE_ENV=development npm run dev`

## Montar uma Build do projeto Front-End
 * `ng build` gera uma build do projeto e grava no diretório `dist/`
 * `ng build --prod` gera uma build para enviar para o servidor de produção.

Obs.: Os arquivos `./src/environment/environment.ts` e `./src/environment/environment.prod.ts` são utilizados para configurar algumas variáveis de ambiente que são utilizadas no ambiente de desenvolvimento e no ambiente de produção respectivamente. Ao gerar uma build de produção o Angular substitui o environment.ts pelo environment.prod.ts. Ver mais detalhes em: [Environment Variables in Angular](https://alligator.io/angular/environment-variables/)

## Implantação em Produção

* Instalar Servidor LAMP:
  * `apt install apache2 php mysql phpmyadmin`

* Instalar o NodeJS:
  * `apt-get install curl`
  * Depois seguir os passos em [NodeSource -- NodeJS](https://github.com/nodesource/distributions/blob/master/README.md) para a distribuição GNU/Linux utilizada;

* Instalar PM2 pelo Node:
  * `npm install -g pm2`
  * Conferir dicas em [Setup NodeJS em Website](https://www.ionos.com/community/server-cloud-infrastructure/nodejs/set-up-a-nodejs-app-for-a-website-with-apache-on-ubuntu-1604/);

* Realizar uma Build do front-end:
  * `ng build --prod`

* Fazer upload desse conteúdo para o servidor, depois mover para /var/www/http:
  * `tar czvf awing.tar.gz dist/A-Wing`
  * `scp awing.tar.gz USUARIO@172.16.174.48:.`

* Enviar os arquivos do back-end para o servidor, depois mover para /var/www/http/server:
  * `tar --exclude='./server/node_modules' -czvf server.tar.gz ./server`
  * `scp server.tar.gz USUARIO@172.16.174.48:.`

* Instalar as dependências localmente na pasta 'server' (como superusuário):
  * `cd /var/www/html/server`
  * `npm i`

* Iniciar o Servidor pelo PM2 (como usuário comum):
  * `cd /var/www/html/server`
  * `NODE_ENV=production pm2 start /var/www/html/server/build/index.js --name awingserver --watch`
  * Obs.: Esse comando configura a variável `NODE_ENV` para indicar que o servidor está em produção; `--name` informa o nome do serviço iniciado pelo PM2; o `--watch` indica que o PM2 deve monitorar mudanças nos arquivos e reiniciar o serviço caso algum deles seja alterado (assim não precisamos ficar reiniciando o serviço manualmente).

* Salvar as configurações do PM2 (como usuário comum):
  * `pm2 save`

* Identificar a comando de configuração da reinicialização do PM2 (como usuário comum):
  * `pm2 startup`

* Copiar o texto gerado pelo comando anterior e executá-lo para configurar a reinicialização do PM2 (como superusuário).

## Vídeo de apoio
* [Angular Mysql CRUD Tutorial, REST API Node & Typescript](https://www.youtube.com/watch?v=lxYB79ANJM8)
  * [Github - FaztWeb/angular7-mysql-crud](https://github.com/FaztWeb/angular7-mysql-crud)
* [Nodejs y Mysql, Aplicación Completa (Login, Registro, CRUD, ES6+ y Más)](https://youtu.be/qJ5R9WTW0_E)
  * [Github - FaztTech/nodejs-mysql-links](https://github.com/FaztTech/nodejs-mysql-links)
* [Adding a Node + Typescript Backend to Your Angular App](https://youtu.be/Ad3fj9V7s6A)

## Dicas
* [Um modelo de ramificação Git bem-sucedido](https://nvie.com/posts/a-successful-git-branching-model/)
* [Git e contribuições para projetos Open Source - Udemy](https://www.udemy.com/share/1002c0AkodclZQQn4=/)

## Integração Contínua (CI)
* [Todas ferramentas de CI para GitHub](https://github.blog/2017-11-07-github-welcomes-all-ci-tools/)
* [Marketplace do GitHub - CI](https://github.com/marketplace/category/continuous-integration?before=Y3Vyc29yOjIx)
* [Travis CI: Instalar no GitHub](https://github.com/marketplace/travis-ci)
* [Travis CI: Documentação para Javascript/Node](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
* [Continuous Integration with Angular and Travis CI](https://youtu.be/ojr2Dy0Pjhw)

## Informações do Angular CLI
Abaixo segue alguns detalhes gerados pelo Angular CLI (excluir futuramente).

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
