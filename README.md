# Sistema_Web_Me_Ajuda_Ai

Sistema de ajuda para estudos online - Produzido na Disciplina de Desenvolvimento Web no curso Redes de Computadores

Projeto elaborado em 2020.2 - UFC Campus Quixadá

#### Demonstração Funcional:

  * https://vast-lowlands-21280.herokuapp.com/

#### Tecnologias Utilizadas:

  * Ferramentas de Desenvolvimento
    > Git
  
    > Github
  
    > Visual Studio Code
    
  * Front-End
   
    > HTML5
    
    > CSS3
    
    > Javascript
    
    > Jquery
    
    > Datatables
    
    > Handlebars
    
  * Back-End
  
    > NodeJS com Express
    
    > MongoDB com Mongoose
    
    > Nodemon
  
  #### Execução em Ambiente Linux
 
  As configurações da conexão com o banco de dados MongoDB se encontram no arquivo index.js presente na raiz do projeto e no arquivo db.js presente na pasta (config) 
  nestes arquivos é possível modificar parametros como:
  
  url da conexão com o banco e demais configurações pertinentes a conexão.
  
  Com o banco de dados já configurado, é necessário portanto clonar o repositório do github:
  
  `$ https://github.com/RomeuCamurca/Sistema_Web_Me_Ajuda_Ai.git`
  
  Com o repositório clonado, é necessário portanto baixar as dependências e executar o arquivo denominado index.js que está na raiz do projeto:
  
  `$ cd Sistema_Web_Me_Ajuda_Ai`
  
  `$ npm install`
  
  `$ npm start` ou `$ node index.js` ou `nodemon index.js`
  
  Nesta aplicação em específico a porta padrão é a 3000, porém é possível utilizar uma váriavel de ambiente para pegar a porta dinamicamente, como no exemplo:
  
  `const PORT = process.env.PORT || 3000`
  
  O serviço web se executado localmente estará disponível em: 
  
  * localhost:3000
  
  O serviço web pode estar também com acesso via ip público, um exemplo seria atráves de instâncias Amazon EC2, neste caso:
  
  * ip-público:3000
  
#### Requisitos do Sistema

Requisito | Descrição 
:----------: | :---------:
Persistência de dados | Armazenamento dos dados da aplicação em banco de dados. 
Criar dados | Inserção de dados via interface web.
Atualizar dados | Atualização de dados via interface web.
Deletar dados | Deletar dados via interface web.
Visualizar dados | Visualizar dados via interface web.
Exportar dados | Exportação de dados para formatos, PDF, Planilha, CSV. E também impressão das dados.  
