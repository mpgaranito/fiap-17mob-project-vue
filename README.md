# Projeto FIAP 17MOB - Aplicações Cross-Platform com Vue



## Objetivo
Implementar uma Progressive Web App (PWA) o frameword Vuejs, aplicando os conhecimentos adquiridos durante as aulas e expandindo as habilidades adquiridas.


## Requisitos
Para que o objetivo do projeto seja atingido é necessário que os seguinte requerimentos sejam atendidos:

1. O desenvolvimento deve utilizar o framework Vuejs e o resultado final deve ser publicado no serviço Firebase Hosting;
2. O desenvolvimento deve utilizar um framework CSS responsivo já adaptado ao Vuejs para a interface de apresentação;
3. O desenvolvimento deve utilizar o sistema de autenticação oferecido pelo Firebase;
4. O aplicativo deve oferecer uma rota para que o usuário se cadastre;
5. O aplicativo deve solicitar autenticação do usuário para acesso a rotas internas do aplicativo, utilizando guardiões de rota para negar o acesso caso o mesmo não esteja autenticado;
6. Ao executar login os dados do usuário (nome e endereço) devem ser armazenados na store Vuex do aplicativo;
7. O aplicativo deve conter uma rota para edição do perfil do usuário, onde ele deve informar o nome completo;
8. O aplicativo deve conter uma rota para edição do endereço completo do usuário, que deve ser obtido a partir da digitação do CEP e os dados do endereço devem ser preenchidos automaticamente com o consumo de uma API;
9. Os dados extras do usuário (nome completo e endereço) devem ficar armazenados no serviço Firebase Database e devem ser carregados no login do usuário para a store Vuex;
10. O aplicativo deve oferecer uma opção para que o usuário finalize a sua sessão e retorne a rota de login;
11. O aplicativo deve consumir a API Rest do GitHub e listar todos os repositórios de um usuário a partir da digitação do nome desse usuário em um campo da tela inicial do aplicativo;
12. A listagem dos repositórios deve conter o nome do repositório, quantidade de estrelas e link para o mesmo;
13. A PWA deve conter ícones, splash screen e a tela de login deve ser exibida ao usuário com um aviso caso o mesmo esteja offline.

## Data limite de entrega
03/06/2019


## Data limite de correção dos trabalhos
16/06/2019


### Links úteis
1. Instalando vue-cli: https://github.com/vuejs/vue-cli/issues/3804
2. Bootstrap-vue: https://bootstrap-vue.js.org/docs
