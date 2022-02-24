#  Chapter II - Desafio 01: Introdução ao SOLID :rocket: :purple_heart:

## :dart: Objetivo

01: Criar uma aplicação de listagem e cadastro de usuários utilizando os conceitos de SOLID aprendidos.

## :white_check_mark: Requisitos

### Rotas da aplicação
- [x] POST /users
- [x] PATCH /users/:user_id/admin
- [x] GET /users/:user_id
- [x] GET /users/:user_id

### Específicação dos testes

#### Teste do model
- [x] Should be able to create an user with all props

#### Testes do repositório
- [x] Should be able to create new users
- [x] Should be able to list all users
- [x] Should be able to find user by ID
- [x] Should be able to find user by e-mail address
- [x] Should be able to turn an user as admin

##### Testes de useCases
- [x] Should be able to create new users
- [x] Should not be able to create new users when email is already taken
- [x] Should be able to turn an user as admin
- [x] Should not be able to turn a non existing user as admin
- [x] Should be able to get user profile by ID
- [x] Should not be able to show profile of a non existing user
- [x] Should be able to list all users
- [x] Should not be able to a non admin user get list of all users
- [x] Should not be able to a non existing user get list of all users
