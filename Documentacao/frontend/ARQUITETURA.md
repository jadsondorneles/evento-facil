# Evento Fácil

## Documentação da Arquitetura do Projeto Frontend

## Visão Geral

Este projeto foi desenvolvido seguindo os princípios de Clean Architecture e Clean Code. O objetivo é garantir um código de fácil manutenção, testável e escalável.
A arquitetura está organizada em várias camadas, cada uma com responsabilidades distintas e bem definidas.

## Camadas da Arquitetura

### 1. Camada de Dados (Data)

**Responsabilidade:**
A camada de Dados é responsável pela comunicação com APIs externas e pelo gerenciamento do estado global da aplicação.
Esta camada encapsula a lógica de acesso a dados e fornece uma interface para o resto da aplicação interagir com os dados.

**Localização:**
`src/app/_data/`

#### Estrutura:

- **Clients:** Contém clientes API para comunicação com serviços externos.
  - `eventoFacilClientApi.ts`
- **Services:** Contém serviços que encapsulam a lógica de negócio relacionada à manipulação de dados.
  - `apiResponseService.ts`
  - `eventoService.ts`
- **Store:** Contém a lógica de gerenciamento de estado utilizando bibliotecas como Redux ou Zustand.
  - `slices/` (Ex.: `snackbarSlice.ts`)
  - `store.ts`
  - `tanstackCacheStore.ts`
- **Utils:** Contém utilitários e funções auxiliares.
  - `browser.ts`
  - `string.ts`
- **Zustand:** Contém a configuração do Zustand para persistência de estado.
  - `zustandPersister.ts`

### 2. Camada de Domínio (Domain)

**Responsabilidade:**
A camada de Domínio define as entidades do domínio, constantes, tipos e erros específicos da aplicação.
Esta camada é independente de frameworks e fornece a base lógica sobre a qual a aplicação é construída.

**Localização:**
`src/app/_domain/`

#### Estrutura:

- **Constantes:** Definições de constantes usadas na aplicação.
  - `appRoutes/routes.ts`
  - `apiEndpoints.ts`
  - `envVariables.ts`
  - `tanstackQueryKeys.ts`
  - `zustandStoreKeys.ts`
- **Errors:** Definição de erros específicos da aplicação.
  - `ApiRequestError.ts`
- **Types:** Definição de tipos e interfaces usados na aplicação.
  - `api/EventoType.ts`
  - `api/FormError.ts`
  - `EventoFormData.ts`

### 3. Camada de Apresentação (Presenter)

**Responsabilidade:**
A camada de Apresentação é responsável por renderizar a interface do usuário.
Ela contém componentes React que utilizam os dados fornecidos pelas camadas inferiores e os apresentam ao usuário.

**Localização:**
`src/app/_presenter/`

#### Estrutura:

- **Components:** Contém componentes reutilizáveis da interface do usuário.
  - `Alert/`
  - `AnimationEventos/`
  - `Calendar/`
  - `DateTimePicker/`
  - `Dialog/`
  - `ErroLayout/`
  - `Evento/`
  - `EventoForm/`
  - `FullScreenDialog/`
  - `Snackbar/`
- **Controllers:** Contém hooks e controladores para gerenciar o estado e a lógica dos componentes.
  - `usePageController.ts`
- **Providers:** Contém provedores para gerenciamento de estado e configuração de bibliotecas.
  - `tanstack/appQueryClient.ts`
  - `reactQueryProvider.tsx`

### 4. Camada de Utilitários (Utils)

**Responsabilidade:**
A camada de Utilitários contém funções e bibliotecas auxiliares que são usadas em várias partes da aplicação.
Essas funções auxiliam na manipulação de dados, formatação, e outras tarefas comuns.

**Localização:**
`src/utils/`

## Detalhes Técnicos

### Clean Architecture
A Clean Architecture propõe uma separação clara de responsabilidades em camadas distintas. Cada camada tem um papel específico e não deve depender de detalhes de implementação de outras camadas.
As camadas mais internas (Domínio e Dados) não têm dependências em relação às camadas externas (Apresentação).

### Clean Code
O projeto segue os princípios de Clean Code, que incluem:
- **Código legível e compreensível:** Nomeação adequada de classes, métodos e variáveis.
- **Simplicidade e clareza:** Evitar complexidade desnecessária e manter o código simples.
- **Responsabilidade única:** Cada classe ou método tem uma única responsabilidade bem definida.
- **Testabilidade:** O código é escrito de forma que seja fácil de testar, com cobertura de testes automatizados para as principais funcionalidades.