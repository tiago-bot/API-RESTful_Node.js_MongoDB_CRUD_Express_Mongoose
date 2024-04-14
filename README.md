<h1>Visão Geral</h1>
<p>Esta é uma API RESTful desenvolvida em Node.js utilizando o framework Express.js para lidar com solicitações HTTP e o Mongoose como ODM (Object-Document Mapper) para interagir com um banco de dados MongoDB. A API permite realizar operações CRUD (Create, Read, Update, Delete) em uma coleção de pessoas.</p>

<h2>Funcionalidades</h2>
<li>Criação de Pessoas: Permite criar uma nova pessoa fornecendo seu nome, idade e status de aprovação.</li>
<li>Listagem de Pessoas: Recupera todas as pessoas cadastradas no banco de dados.</li>
<li>Recuperação de Pessoa por ID: Retorna os detalhes de uma pessoa específica com base em seu ID.</li>
<li>Atualização de Pessoa: Permite atualizar os detalhes de uma pessoa existente.</li>
<li>Exclusão de Pessoa: Remove uma pessoa do banco de dados com base em seu ID.</li>

<h2>Componentes Principais</h2>
<li>Express.js</li>
<i>O Express.js é um framework web para Node.js que simplifica o processo de criação de aplicativos web e APIs RESTful. Ele fornece uma série de recursos para lidar com solicitações HTTP, roteamento e muito mais.</i>
 <br>  </br> 
<li>Mongoose</li>
<i>É uma biblioteca do Node.js que fornece uma interface elegante e simples para modelar os dados da aplicação e interagir com o MongoDB. Ele permite definir modelos de dados com esquemas, facilitando a validação e manipulação dos dados.</i>
  <br>  </br> 
<li>MongoDB</li>
<i>O MongoDB é um banco de dados NoSQL de alto desempenho, orientado a documentos. Ele armazena dados em formato JSON-like (BSON) e oferece escalabilidade e flexibilidade para aplicativos modernos.</i>
 <br>  </br> 
<h2>Rotas da API</h2>
<li>POST /person: Cria uma nova pessoa no banco de dados.</li>
<li>GET /person: Retorna todas as pessoas cadastradas.</li>
<li>GET /person/:id: Retorna os detalhes de uma pessoa específica com base em seu ID.</li>
<li>PATCH /person/:id: Atualiza os detalhes de uma pessoa existente.</li>
<li>DELETE /person/:id: Exclui uma pessoa do banco de dados com base em seu ID.</li>

<h2>Modelo de Dados</h2>

<h3>O modelo de dados para uma pessoa consiste nos seguintes campos:</h3>

<li>name: Nome da pessoa (String)</li>
<li>age: Idade da pessoa (Number)</li>
<li>approved: Status de aprovação da pessoa (Boolean)</li>

<h2>Configuração e Execução</h2>
<li>Antes de executar a aplicação, certifique-se de ter o Node.js e o MongoDB instalados em seu sistema. Para segurança, você também pode configurar as variáveis de ambiente no arquivo .env para fornecer as credenciais do banco de dados.</li>

<li>Para instalar as dependências do projeto, execute o comando: <b>npm init -y e npm install</b> </li>
<li>Para iniciar o servidor, execute o comando: <b>npm start</b> </li>
O servidor será iniciado na porta 3000 por padrão.

<h2>Conclusão</h2>
<i>Esta API RESTful oferece uma maneira simples e eficaz de gerenciar informações de pessoas, fornecendo endpoints para criar, recuperar, atualizar e excluir dados do banco de dados MongoDB. Ela é adequada para uma variedade de aplicativos web e móveis que necessitam de um backend robusto e escalável.</i>i>

