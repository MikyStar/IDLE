# IDLE

## The game

Hi !

This is a really basic IDLE click & collect game.

Start up by creating an account in the Settings tab so that we can record your progression.

In the Staff tab, you can hire workers with your money.

In the Map tab, you'll find different lands.

On those lands you can buy buildings such as Mines or Factories.

You can affect workers to those buildings.

Mines let you harvest ores whilst Factories can convert those ores to money.

This money lets you buy new workers, new factories, new mines, new lands and much more.

There's much more things you can do in the different tabs, just be curious ...

## Further explanantions

Go to the docs folder for further informations on the project ( Gantt, MindMaps, Mockups ... )

## Technos

### Client

- React
- TypeScript
- CSS' FlexBox & GridLayout system
- Docker

### Server

- NodeJS
- Express
- TypeScript
- MongoDB
- TypeOrm
- GraphQL
- TypeGraphQL
- JWT
- Bcrypt
- Docker

## Running it

`You'll need the .env files obviously not commited but also Docker and docker-compose or just use npm start inside server and client`

```sh
# To run the server
cd server && docker-compose up

# To run the client
cd client && docker build -t reactts . && docker run -it reactts
```

## Access GraphiQL

GraphiQL is like a [Postman](https://www.getpostman.com/) for GraphQL.

> Go to /graphiql

## MongoDB

The current instance of MongoDB is running on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

Please refer to the author of this repo for the matching .env file with the connection string.