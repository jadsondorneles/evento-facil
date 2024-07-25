# Evento Fácil

## Documentação dos Endpoints da API Evento Fácil
Esta documentação detalha como utilizar cada endpoint da API Evento Fácil.

#### Lista Eventos - GET

**URL**: `/eventos/`

**Descrição**: Retorna uma lista de todos os eventos.

**Exemplo de Uso (cURL)**:
```sh
curl --location 'http://localhost:8089/eventos'
```

**Response**:
```json
[
    {
        "id": 1,
        "titulo": "Novo Evento 1",
        "descricao": "Descrição do novo evento",
        "data_inicio": "2024-07-20 23:00:00",
        "data_termino": "2024-07-28 12:00:00",
        "data_criacao": "2024-07-21 18:30:02",
        "data_edicao": "2024-07-21 18:30:02",
        "cor": null
    },
    {
        "id": 2,
        "titulo": "Novo Evento 2",
        "descricao": "Descrição do novo evento",
        "data_inicio": "2024-07-20 23:00:00",
        "data_termino": "2024-07-28 12:00:00",
        "data_criacao": "2024-07-21 18:30:26",
        "data_edicao": "2024-07-21 18:30:26",
        "cor": "#000000"
    }
]
```

#### Dados do Evento - GET

**URL**: `/eventos/{id_evento}`

**Descrição**: Retorna os dados de um evento específico.

**Exemplo de Uso (cURL)**:
```sh
curl --location 'http://localhost:8089/eventos/1'
```

**Response**:
```json
{
    "id": 1,
    "titulo": "Novo Evento",
    "descricao": "Descrição do novo evento",
    "data_inicio": "2024-07-20 23:00:00",
    "data_termino": "2024-07-28 12:00:00",
    "data_criacao": "2024-07-21 18:30:02",
    "data_edicao": "2024-07-21 18:30:02",
    "cor": null
}
```

#### Cria Novo Evento - POST

**URL**: `/eventos/`

**Descrição**: Cria um novo evento.

**Exemplo de Uso (cURL)**:
```sh
curl --location 'http://localhost:8089/eventos' \
--header 'Content-Type: application/json' \
--data '{
    "titulo": "Novo Evento 4",
    "descricao": "Descrição do novo evento",
    "data_inicio": "2024-07-20 23:00:00",
    "data_termino": "2024-07-28 12:00:00",
    "cor": "#000000"
}'
```

**Body**:
```json
{
    "titulo": "Novo Evento",
    "descricao": "Descrição do novo evento",
    "data_inicio": "2024-07-20 23:00:00",
    "data_termino": "2024-07-28 12:00:00",
    "cor": "#000000"
}
```

**Response**:
```json
{
    "sucesso": true,
    "mensagem": "Evento criado com sucesso"
}
```

#### Atualiza Evento - PUT

**URL**: `/eventos/{id_evento}`

**Descrição**: Atualiza um evento existente.

**Exemplo de Uso (cURL)**:
```sh
curl --location --request PUT 'http://localhost:8089/eventos/1' \
--header 'Content-Type: application/json' \
--data '{
    "titulo": "Evento Atualizado",
    "descricao": "Descrição atualizada do evento",
    "data_inicio": "2024-10-10 10:10:10",
    "data_termino": "2024-11-11 11:11:11"
}'
```

**Body**:
```json
{
    "titulo": "Evento Atualizado",
    "descricao": "Descrição atualizada do evento",
    "data_inicio": "2024-10-10 10:10:10",
    "data_termino": "2024-11-11 11:11:11"
}
```

**Response**:
```json
{
    "sucesso": true,
    "mensagem": "Evento atualizado com sucesso"
}
```

#### Deleta Evento - DELETE

**URL**: `/eventos/{id_evento}`

**Descrição**: Marca um evento como deletado (exclusão lógica).

**Exemplo de Uso (cURL)**:
```sh
curl --location --request DELETE 'http://localhost:8089/eventos/1'
```

**Response**:
```json
{
    "sucesso": true,
    "mensagem": "Evento removido com sucesso"
}
```

#### Filtra Evento Por Data - GET

**URL**: `/eventos/data/{data}`

**Descrição**: Filtra eventos pela data de início.

**Exemplo de Uso (cURL)**:
```sh
curl --location 'http://localhost:8089/eventos/data/20-07-2024'
```

**Response**:
```json
[
    {
        "id": 1,
        "titulo": "Novo Evento 1",
        "descricao": "Descrição do novo evento",
        "data_inicio": "2024-07-20 23:00:00",
        "data_termino": "2024-07-28 12:00:00",
        "data_criacao": "2024-07-21 18:30:02",
        "data_edicao": "2024-07-21 18:30:02",
        "cor": null
    },
    {
        "id": 2,
        "titulo": "Novo Evento 2",
        "descricao": "Descrição do novo evento",
        "data_inicio": "2024-07-20 23:00:00",
        "data_termino": "2024-07-28 12:00:00",
        "data_criacao": "2024-07-21 18:30:26",
        "data_edicao": "2024-07-21 18:30:26",
        "cor": "#ffffff"
    },
    {
        "id": 3,
        "titulo": "Novo Evento 3",
        "descricao": "Descrição do novo evento",
        "data_inicio": "2024-07-20 23:00:00",
        "data_termino": "2024-07-28 12:00:00",
        "data_criacao": "2024-07-21 18:41:12",
        "data_edicao": "2024-07-21 18:41:12",
        "cor": "#000000"
    }
]
```

#### Retorno de Tratamento de Erros

**Exemplo de Response de Erro**:
```json
{
    "titulo": "Erro na aplicação",
    "detalhe": "Formato de data inválido. Use o formato dd-mm-yyyy.",
    "tipo_detalhe": "InvalidArgumentException",
    "status": 400,
    "tipo": "error",
    "instancia": "/eventos/data/!20-07-2024",
    "codigo": 400
}
```