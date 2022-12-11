# [Desafio Drugovich](https://github.com/drugovich/teste-front-end-angular)

## O Projeto

Projeto consiste em uma aplicação de cadastro de clientes (nome, cnpj e status). Foram criado duas páginas:

- Página de listagem de clientes `/clientes` e `/`
- Página de criação ou edição de cliente `/cliente` ou `/cliente/:id`

Aplicação faz uso da MockAPI para buscar, cadastrar e atualizar dados dos clientes.
> https://63966e4a90ac47c68085cb9c.mockapi.io

## Uso
Antes de executar a aplicação, instale as dependências com
o comando `npm install`

Para executar a aplicação use o comando `npm run start`

## Estrutura

Serviços:
- ClientService

Modelos
- Client
- ClientStatus

Views
- ClientsViewComponent
- ClientViewComponent

Componentes
- TopbarComponent

Outras Dependências
- ngx-mask
