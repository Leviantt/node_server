# node_server
## Запуск на своем устройстве
### Должно быть установлено:
* Node.js
* PostgreSQL
### Чтобы запустить сервер у себя нужно:
1. Создать базу данных в PostgreSQL с названием "node_postgres"
2. Выполнить скрипт из /sql/schema.sql
3. Создать файл .env по образцу .env.example со своими данными
4. В корневой директории выполнить
```
npm install
```
5. Чтобы запустить в режиме development
```
npm run dev
```
## Примеры запросов для films

### GET ALL
```
http://localhost:4000/films
```
### GET ONE
```
http://localhost:4000/films?id=1
```
### POST
```
http://localhost:4000/films
{
  "name": "some name",
  "year": 2020
}
```
### PUT
```
http://localhost:4000/films?id=4
{
  "name": "some name",
  "year": 2020
}
```
### DELETE
```
http://localhost:4000/films?id=2
```

## Примеры запросов для genres

### GET ALL
```
http://localhost:4000/genres
```
### GET ONE
```
http://localhost:4000/genres?id=1
```
### POST
```
http://localhost:4000/genres
{
  "name": "some name",
  "film_id": 1
}
```
### PUT
```
http://localhost:4000/genres?id=4
{
  "name": "some name",
  "film_id": 2
}
```
### DELETE
```
http://localhost:4000/genres?id=2
```
