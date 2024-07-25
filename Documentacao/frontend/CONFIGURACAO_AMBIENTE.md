# Evento Fácil

## Documentação de Configuração e Execução do Projeto

### Requisitos
- Node.js v18.18
- npm ou yarn
- Sistema operacional: Windows ou Linux

### 1. Configuração no Microsoft Windows

#### Passo 1: Instalação do Node.js
1. Baixe e instale a versão 18 do Node.js a partir do [site oficial do Node.js](https://nodejs.org/).
2. Verifique a instalação:
    ```sh
    node -v
    npm -v
    ```

#### Passo 2: Configuração do Projeto

1. Clone o repositório do projeto:
    ```sh
    git clone https://github.com/jadsondorneles/evento-facil.git
    cd ./Codigo/EventoFacil.UI
    ```

2. Instale as dependências do projeto:
    ```sh
    npm install
    ```

3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente conforme necessário.

4. Execute o projeto em modo desenvolvimento:
    ```sh
    npm run dev
    ```

5. Acesse o projeto no navegador:
    - Abra o navegador e vá para `http://localhost:3000`.

### 2. Configuração no Linux

#### Passo 1: Instalação do Node.js

1. Use `nvm` (Node Version Manager) para instalar o Node.js:

    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    source ~/.bashrc
    nvm install 18.18.0
    nvm use 18.18.0
    ```

2. Verifique a instalação:
    ```sh
    node -v
    npm -v
    ```

#### Passo 2: Configuração do Projeto

1. Clone o repositório do projeto:
    ```sh
    git clone https://github.com/jadsondorneles/evento-facil.git
    cd ./Codigo/EventoFacil.UI
    ```

2. Instale as dependências do projeto:
    ```sh
    npm install
    ```

3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente conforme necessário.

4. Execute o projeto em modo desenvolvimento:
    ```sh
    npm run dev
    ```

5. Acesse o projeto no navegador:
    - Abra o navegador e vá para `http://localhost:3000`.

### Scripts

Aqui estão alguns scripts úteis definidos no seu `package.json`:

- `dev`: Executa o projeto em modo de desenvolvimento.
    ```sh
    npm run dev
    ```

- `build`: Cria a versão de produção do projeto.
    ```sh
    npm run build
    ```

- `start`: Inicia a aplicação em modo de produção.
    ```sh
    npm start
    ```

- `lint`: Verifica o código usando o ESLint.
    ```sh
    npm run lint
    ```

- `test`: Executa os testes definidos.
    ```sh
    npm test
    ```
### Executando Testes

Para executar os testes, use:
```sh
npm test
```