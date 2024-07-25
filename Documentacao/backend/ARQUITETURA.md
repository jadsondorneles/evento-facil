# Evento Fácil

## Documentação da Arquitetura do Projeto

## Visão Geral

Este projeto foi desenvolvido seguindo os princípios de Orientação a Objetos, Clean Architecture e Clean Code.
O objetivo é garantir um código de fácil manutenção, testável e escalável.
A arquitetura está organizada em várias camadas, cada uma com responsabilidades distintas e bem definidas.

## Camadas da Arquitetura

### 1. Camada de Modelos (Models)

**Responsabilidade:**
A camada de Modelos é responsável por representar os dados do domínio. Cada modelo é responsável por interagir com o banco de dados. Utilizamos o Eloquent ORM para facilitar estas interações.

**Localização:**
`app/Models/`

### 2. Camada de Repositórios (Repositories)

**Responsabilidade:**
Os repositórios encapsulam a lógica de acesso a dados. Esta camada é responsável por se comunicar com os modelos para buscar, armazenar, atualizar e deletar os dados. A camada de repositórios garante que a lógica de acesso a dados esteja separada da lógica de negócios.

**Localização:**
`app/Repositories/`

### 3. Camada de Serviços (Services)

**Responsabilidade:**
Esta camada contém a lógica de negócios da aplicação. Os serviços coordenam as operações entre diferentes repositórios e controladores. A camada de serviços é responsável por implementar as regras de negócios e orquestrar chamadas entre os repositórios.

**Localização:**
`app/Services/`

### 4. Camada de Controladores (Controllers)

**Responsabilidade:**
Os controladores recebem as requisições HTTP, delegam a lógica de negócios para os serviços e retornam as respostas HTTP. Eles atuam como intermediários entre o usuário e a lógica de negócios da aplicação, processando as entradas e retornando as saídas apropriadas.

**Localização:**
`app/Controllers/`

### 5. Camada de Validação (Validators)

**Responsabilidade:**
Esta camada contém a lógica de validação para garantir que os dados fornecidos para a aplicação estejam corretos. A validação é um passo crucial para garantir a integridade dos dados que entram no sistema.

**Localização:**
`app/Validators/`

## Detalhes Técnicos

### Orientação a Objetos
A aplicação é desenvolvida com foco em princípios de Orientação a Objetos (OO), o que inclui encapsulamento, herança e polimorfismo. Cada entidade do domínio é representada por um objeto que possui propriedades e métodos que definem seu comportamento.

### Clean Architecture
A Clean Architecture propõe uma separação clara de responsabilidades em camadas distintas. Cada camada tem um papel específico e não deve depender de detalhes de implementação de outras camadas. As camadas mais internas (Modelos e Repositórios) não têm dependências em relação às camadas externas (Serviços e Controladores).

### Clean Code
O projeto segue os princípios de Clean Code, que incluem:
- **Código legível e compreensível:** Nomeação adequada de classes, métodos e variáveis.
- **Simplicidade e clareza:** Evitar complexidade desnecessária e manter o código simples.
- **Responsabilidade única:** Cada classe ou método tem uma única responsabilidade bem definida.
- **Testabilidade:** O código é escrito de forma que seja fácil de testar, com cobertura de testes automatizados para as principais funcionalidades.

### Detalhes de Implementação

- **Modelos:** Utilizam o Eloquent ORM para facilitar a interação com o banco de dados.
- **Repositórios:** Implementam a lógica de acesso a dados, encapsulando as operações CRUD.
- **Serviços:** Contêm a lógica de negócios, orquestrando operações entre os repositórios.
- **Controladores:** Recebem requisições HTTP, invocam os serviços apropriados e retornam as respostas HTTP.
- **Validação:** Garante que os dados de entrada atendam aos critérios definidos antes de serem processados.

## Configuração do Banco de Dados

A configuração do banco de dados é feita no arquivo `config/database.php`. Utilizamos o Illuminate Database Capsule Manager para configurar e gerenciar a conexão com o banco de dados.

## Rotas

As rotas da aplicação são definidas no arquivo `routes/web.php`. Utilizamos o Bramus Router para definir as rotas da aplicação, mapeando URLs para os métodos dos controladores.

## Testes

Os testes estão localizados na pasta `tests/`. Cada camada tem seus próprios testes para garantir que todas as partes do sistema funcionem conforme esperado. Utilizamos PHPUnit para escrever e executar os testes automatizados.