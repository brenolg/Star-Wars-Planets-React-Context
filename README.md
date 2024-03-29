# Projeto Star Wars Planets

Este é uma aplicação web que permite ao usuário buscar planetas do universo Star Wars através da API pública disponibilizada pela Lucasfilm Ltd. Foram utilizados filtros em JavaScript para manipular e apresentar os dados dos planetas na aplicação, além dos hooks useState e useEffect do React para gerenciar o estado da aplicação. A Context API do React foi utilizada para permitir o compartilhamento de informações entre componentes da aplicação.

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
* Vite
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

Não é necessário rodar o projeto localmente para ver o jogo rodando, pois ele está rodando nesse [link](https://brenolg.github.io/Star-Wars-Planets-React-Context/).

Caso queira rodar local mesmo assim, siga o tutorial abaixo.

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _brenolgar@gmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```
2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git@github.com:brenolg/Star-Wars-Planets-React-Context.git
```
3. Acesse o diretório do projeto e depois utilize o comando npm install para instalar todas as dependências necessárias:
```javascript
  cd Star-Wars-Planets-Planets-React-Context
  npm install
```

4. Inicie o servidor local com o comando
```javascript
 npm run dev
```
Abra o navegador e acesse [http://localhost:3000/star-wars-planets.](http://localhost:5173/Star-Wars-Planets-React-Context)

---

# Requisitos do Projeto

1. Utilizar React e Context API para gerenciar o estado da aplicação
2. Possuir um layout responsivo tanto para desktop, tablet e mobile
3. Eleentos html completamente customizados
4. Utilizar keyframes para gerar animação de naves no header
5. Utilizar a API pública de planetas da Lucasfilm Ltd para obter os dados dos planetas
6. Exibir uma lista com todos os planetas da API e permitir que o usuário visualize as informações de cada planeta da lista
7. Permitir que o usuário pesquise planetas pelo nome
8. Permitir que o usuário pesquise planetas por múltiplos valores numéricos
9. Não permitir pesquisar por filtros numéricos repetidos
10. Exibir um botão que possibilita deletar um filtro de valor numérico ao clicar
11. Exibir um botão que possibilita deletar todas filtragens numéricas simultaneamente ao clicar
12. Quando não houver mais filtros disponíveis o botão ficará desabilitado
13. Permitir que o usuário ordene as colunas de forma ascendente ou descendente
14. Implementar testes utilizando o framework Jest

# Agradecimentos

Agradecemos à Trybe por proporcionar a oportunidade de desenvolver este projeto e aprender novas tecnologias. Também agradecemos à comunidade de desenvolvedores que contribui para o desenvolvimento do React e outras tecnologias utilizadas neste projeto. E, é claro, agradecemos a George Lucas por criar um universo tão incrível que inspira tantas pessoas até hoje.
