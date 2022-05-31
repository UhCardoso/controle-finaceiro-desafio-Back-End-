# Sistema Controle Financeiro
Eu escolhi desenvolveresse projeto por ser algo objetivo e direto de desenvolver, mas que ao mesmo tempo é útil para qualquer pessoasno dia dia, para ajuda-las a ter um melhor controle dos seus gastos financeiros.

![alt text]https://i.ibb.co/RH1zrVb/captura.png?w=380)()

A aplicação foi desenvolvida usando o NodeJs com o express.
Esta aplicaçãofronecem dois tipos de retorno: uma renderização dos elementos em uma pagina HTML usando a li do EJS, ou uma API com formato JSON.

O EJS é um tamplate Engine que da o poder de usarmos funcionalidades do Java Script dentro do DOM html, para que possamos tratar os dados de retorno dinamicamente.

### Preparando ambiente para executar projeto
1 - Tenha o node instalado na maquina [baixe aqui](https://nodejs.org/en/download/)
2 - Tenha o MySql instalado [baixe aqui](https://www.mysql.com/downloads/)
3 - Dê o git clone deste projeto
4 - Entre na pasta baixada e use o comando "npm install" para instalar todas as dependencias do projeto.
5 - na pasta src/database abra o arquivo index.js e troque o usuario e a senha do MySql pelo usuario e senha que vc criou na hora da instalação do MySql;
6 - Na raiz do projeto dê um "npm run start" para iniciar o servidor da aplicação
7 - Acesse o endereço "http://localhost:3132/" no seu navegador para olhar o funcionamento da aplicação.

Mas caso prefira consumir a api, siga os passos abaixo.

## Rota da api de controle de saldo

### Listando transações: metodo get()
![alt text]https://i.ibb.co/d64B3Kp/cap1.png?w=380)()

### Salvando nova transção: metodo post()
![alt text]https://i.ibb.co/Zx6W4VT/post.png?w=380)()

### Editando transação: metodo update()
![alt text]https://i.ibb.co/X8nHztk/upda.png?w=380)()

### Deletando transação: metodo delete()
![alt text]https://i.ibb.co/TrnSp7Q/delt.png?w=380)()


## Consumindo a API referente a B3
![alt text]https://i.ibb.co/71FC3v6/b3.png?w=380)()
Acessando "http://localhost:3132/b3" a api de cotação retorna as informações das empreses presetes no mercado de ações.
Eu utilizei a lib do Axios para poder consumir a api de contação e depois retornar o resultado da consulta para um resultado visual.

![alt text]https://i.ibb.co/h1qGtMZ/cotac.png?w=380)()
