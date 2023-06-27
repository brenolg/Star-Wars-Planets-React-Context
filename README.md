# Projeto Star Wars Planets

Este é um projeto desenvolvido durante o curso de Desenvolvimento Web Full-Stack da Trybe. O objetivo do projeto é criar uma aplicação web que permite ao usuário buscar planetas do universo Star Wars através da API pública disponibilizada pela Lucasfilm Ltd. Foram utilizados filtros em JavaScript para manipular e apresentar os dados dos planetas na aplicação, além dos hooks useState e useEffect do React para gerenciar o estado da aplicação. A Context API do React foi utilizada para permitir o compartilhamento de informações entre componentes da aplicação.

<br/>

<img width="100%" src="./src/images/starWars.gif" />

<a	href="https://brenolg.github.io/Star-Wars-Planets-React-Context/"
	target="_blank"
	rel="noopener noreferrer"> Star Wars Planets Page
<a/>

<br/>

# Funcionalidades

* Permitir que o usuário filtre planetas pelo nome;
* Permitir que o usuário filtre por características numéricas dos planetas;
* Exibir informações sobre o planeta pesquisado, como clima, terreno e número de filmes em que apareceu;
* Organizar dados de forma ascendente ou descendente;
* Exibir uma lista com todos os planetas da API;
* Permitir que o usuário visualize as informações de cada planeta da lista.

# Tecnologias Utilizadas

* React
* JavaScript
* Filtros em JavaScript
* Context API
* Hooks (useState e useEffect) do React
* HTML
* CSS
* RTL
* Jest
* PropTypes
## Instalação do projeto localmente

Não é necessário rodar o projeto localmente para ver o jogo rodando, pois ele está rodando nesse [link](https://brenolg.github.io/Star-Wars-Planets/).

Caso queira rodar local mesmo assim, siga o tutorial abaixo.

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _brenolgar@gmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```
2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:brenolg/Star-Wars-Planets.git
```
3. Acesse o diretório do projeto e depois utilize o comando npm i para instalar todas as dependências necessárias:
```javascript
  cd Star-Wars-Planets
  npm i
```
4. Por último, rode o comando npm start e acesse o projeto via browser, no caminho http://localhost:3000/star-wars-planets.
---

# Requisitos do Projeto

1. Utilizar React e Context API para gerenciar o estado da aplicação
2. Utilizar a API pública de planetas da Lucasfilm Ltd para obter os dados dos planetas
3. Exibir uma lista com todos os planetas da API e permitir que o usuário visualize as informações de cada planeta da lista
4. Permitir que o usuário pesquise planetas pelo nome
5. Permitir que o usuário pesquise planetas por múltiplos valores numéricos
6. Não permitir pesquisar por filtros numéricos repetidos
7. Exibir um botão que possibilita deletar um filtro de valor numérico ao clicar
8. Exibir um botão que possibilita deletar todas filtragens numéricas simultaneamente ao clicar
9. Quando não houver mais filtros disponíveis o botão ficará desabilitado
10. Permitir que o usuário ordene as colunas de forma ascendente ou descendente
11. Implementar testes utilizando o framework Jest

# Agradecimentos

Agradecemos à Trybe por proporcionar a oportunidade de desenvolver este projeto e aprender novas tecnologias. Também agradecemos à comunidade de desenvolvedores que contribui para o desenvolvimento do React e outras tecnologias utilizadas neste projeto. E, é claro, agradecemos a George Lucas por criar um universo tão incrível que inspira tantas pessoas até hoje.
