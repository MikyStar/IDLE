# IDLE

## Technos

### Client

- React
- TypeScript
- Apollo
- CSS' FlexBox & GridLayout system
- Docker

### Server

- NodeJS
- TypeScript
- MongoDB
- GraphQL
- GraphiQL
- Docker

## Running it

`You'll need the .env files obviously not commited but also Docker and docker-compose`

```sh
# To run the server
cd server && docker-compose up

# To run the client
cd client && docker build -t reactts . && docker run -it reactts
```

## Access GraphiQL

> Go to /graphql

## MongoDB

The current instance of MongoDB is actually running on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

Please refer to the author of this repo for the mathing .env file with the connection string.