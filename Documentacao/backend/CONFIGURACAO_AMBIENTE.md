# Evento Fácil

## Configuração e Execução

### Requisitos Gerais

1. **Servidor Web**: Apache ou Nginx.
2. **PHP**: Versão 8.1 ou superior.
3. **Banco de Dados**: MySQL ou MariaDB.
4. **Composer**: Para gerenciar dependências PHP.
5. **Git**: Para clonar o repositório.

### Configuração no Microsoft Windows

#### Passo 1: Instalação de PHP

1. **Baixar PHP**:
   - Acesse o site oficial do PHP [php.net](https://windows.php.net/download/) e baixe a versão PHP 8.1 ou superior.

2. **Extrair PHP**:
   - Extraia o arquivo ZIP em uma pasta, por exemplo `C:\php`.

3. **Configurar Variáveis de Ambiente**:
   - Adicione `C:\php` ao PATH nas variáveis de ambiente do sistema.

4. **Verificar Instalação**:
   - Abra o prompt de comando e execute `php -v` para verificar a instalação.

#### Passo 2: Instalação do Composer

1. **Baixar Composer**:
   - Acesse o site oficial do Composer [getcomposer.org](https://getcomposer.org/download/) e baixe o instalador para Windows.

2. **Instalar Composer**:
   - Execute o instalador e siga as instruções na tela.

3. **Verificar Instalação**:
   - Abra o prompt de comando e execute `composer -v` para verificar a instalação.

#### Passo 3: Configuração do Banco de Dados

1. **Instalar MySQL**:
   - Baixe e instale o MySQL Community Server a partir do site oficial [mysql.com](https://dev.mysql.com/downloads/mysql/).

2. **Criar Banco de Dados**:
   - Abra o MySQL Command Line Client e execute o sql contido na pasta:
   ```sh
   /Design/BancoDeDados/0_CREATE.sql
   ```

#### Passo 4: Clonar o Repositório

1. **Instalar Git**:
   - Baixe e instale o Git a partir do site oficial [git-scm.com](https://git-scm.com/).

2. **Clonar o Repositório**:
   - Abra o Git Bash ou o prompt de comando e execute:
     ```sh
     git clone https://github.com/jadsondorneles/evento-facil.git
     cd evento-facil
     ```

#### Passo 5: Instalar Dependências

1. **Instalar Dependências do Projeto**:
   - No prompt de comando, deCodigo\EventoFacil.API dentro da pasta do projeto, execute:
     ```sh
     cd ./Codigo/EventoFacil.API
     composer install
     ```

#### Passo 6: Configuração do Projeto

1. **Configurar Banco de Dados**:
   - O projeto utiliza `dotenv` para configurar as variáveis de ambiente. Copie e cole o arquivo de exemplo `.env.example` e renomei para `.env`:
     ```sh
     cp .env.example .env
     ```

   - Neste arquivo `.env` na raiz do projeto, adicione as credenciais do banco de dados:
     ```sh
     DB_HOST=localhost
     DB_DATABASE=evento_facil
     DB_USERNAME=root
     DB_PASSWORD=
     ```

2. **Criar Tabelas**:
   - Execute o script SQL fornecido que se encontra na pasta `/Design/BancoDeDados/0_CREATE.sql` para criar a tabela `eventos` no banco de dados `evento_facil`.

#### Passo 7: Executar a Aplicação

1. **Iniciar o Servidor Local**:
   - No prompt de comando, dentro da pasta do projeto, execute:
     ```sh
     php -S localhost:8089 -t public
     ```

2. **Acessar a Aplicação**:
   - Abra o navegador e acesse `http://localhost:8089`.

#### Passo 8: Executar Testes

1. **Executar Testes**:
   - No prompt de comando, dentro da pasta do projeto, execute:
     ```sh
     vendor\bin\phpunit
     ```

### Postman

Foi disponibilizado um arquivo de coleção do Postman com os endpoints da API. Para importar a coleção, siga os passos abaixo:

1. **Local do arquivo**:
   - O arquivo `EventoFacil.postman_collection.json` está disponível na pasta `/Codigo/Postman` do repositório.

2. **Importar Coleção**:
   - Abra o Postman e clique em `Import` no canto superior esquerdo.
   - Selecione o arquivo `EventoFacil.postman_collection.json` e clique em `Open`.

3. **Utilizar Endpoints**:
   - A coleção será importada com todos os endpoints da API. Você pode testar cada endpoint individualmente.

## Configuração do Ambiente

### Configuração no Linux

#### Passo 1: Instalação de PHP

1. **Atualizar Pacotes**:
   - Abra o terminal e execute:
     ```sh
     sudo apt update
     ```

2. **Instalar PHP**:
   - Execute o seguinte comando para instalar o PHP 8.1 ou superior:
     ```sh
     sudo apt install php8.1 php8.1-cli php8.1-mbstring php8.1-xml php8.1-curl
     ```

3. **Verificar Instalação**:
   - Execute `php -v` para verificar a instalação.

#### Passo 2: Instalação do Composer

1. **Baixar e Instalar Composer**:
   - No terminal, execute:
     ```sh
     php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
     php composer-setup.php
     sudo mv composer.phar /usr/local/bin/composer
     ```

2. **Verificar Instalação**:
   - Execute `composer -v` para verificar a instalação.

#### Passo 3: Configuração do Banco de Dados

1. **Instalar MySQL**:
   - No terminal, execute:
     ```sh
     sudo apt install mysql-server
     ```

2. **Criar Banco de Dados**:
   - Acesse o MySQL:
     ```sh
     sudo mysql -u root -p
     ```
   - Execute o sql contido na pasta:
     ```sh
     /Design/BancoDeDados/0_CREATE.sql
     ```

#### Passo 4: Clonar o Repositório

1. **Instalar Git**:
   - No terminal, execute:
     ```sh
     sudo apt install git
     ```

2. **Clonar o Repositório**:
   - No terminal, execute:
     ```sh
     git clone https://github.com/jadsondorneles/evento-facil.git
     cd evento-facil
     ```

#### Passo 5: Instalar Dependências

1. **Instalar Dependências do Projeto**:
   - No terminal, dentro da pasta do projeto, execute:
     ```sh
     composer install
     ```

#### Passo 6: Configuração do Projeto

1. **Configurar Banco de Dados**:
   - O projeto utiliza `dotenv` para configurar as variáveis de ambiente. Copie e cole o arquivo de exemplo `.env.example` e renomei para `.env`:
     ```sh
     cp .env.example .env
     ```

   - Neste arquivo `.env` na raiz do projeto, adicione as credenciais do banco de dados:
     ```sh
     DB_HOST=localhost
     DB_DATABASE=evento_facil
     DB_USERNAME=root
     DB_PASSWORD=
     ```

2. **Criar Tabelas**:
   - Execute o script SQL fornecido para criar a tabela `eventos` no banco de dados `evento_facil`.

#### Passo 7: Executar a Aplicação

1. **Iniciar o Servidor Local**:
   - No terminal, dentro da pasta do projeto, execute:
     ```sh
     php -S localhost:8089 -t public
     ```

2. **Acessar a Aplicação**:
   - Abra o navegador e acesse `http://localhost:8089`.

#### Passo 8: Executar Testes

1. **Executar Testes**:
   - No terminal, dentro da pasta do projeto, execute:
     ```sh
     vendor/bin/phpunit
     ```