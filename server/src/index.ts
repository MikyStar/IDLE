#!/usr/bin/env node

////////////////////////////////////////////////////////////////////////////////

import "reflect-metadata";
import { install as installSourceMapSupport } from 'source-map-support';
import express from 'express';
import cors from 'cors';
//import graphqlHTTP from 'express-graphql';
import clear from 'clear';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

import DataBase from './core/DataBase';
import { Environment } from './environment';
import { GraphQLResolvers } from './graphql';

////////////////////////////////////////////////////////////////////////////////

Environment.check();
clear();

////////////////////////////////////////////////////////////////////////////////

const GRAPHQL_ROUTE = `/graphql/v${ Environment.get.API_VERSION }`;
const MOTD = `NodeJS service running in ${ Environment.get.NODE_ENV } mode => http://${ Environment.get.HOST_ADRESS }:${ Environment.get.PORT }${ GRAPHQL_ROUTE }`;

////////////////////////////////////////////////////////////////////////////////

installSourceMapSupport();

const app = express();
const dataBase = new DataBase( Environment.get.MONGO_URL );

( function enableCORS()
	{ app.use( cors() ) }
)();

( function startService()
	{ app.listen( Environment.get.PORT, () => console.log( MOTD ) ) }
)();

( function setupTestRoute()
	{ app.get( '/', ( request, response ) => response.send( 'The server received a GET resquest' ) ) }
)();

dataBase.connect().then(
	resolve => console.log( `Connected to DB => ${ Environment.get.MONGO_URL }` ),
	error => console.error( error )
);

( async function setupGraphQL()
{
	const schema = await buildSchema(
	{
		resolvers : GraphQLResolvers,
		container : Container
	});

	const apolloServer = new ApolloServer( { schema } );

	apolloServer.applyMiddleware( { app } );
})();

////////////////////////////////////////////////////////////////////////////////

process.on( "uncaughtException", ( event : any ) => { console.error( event ); process.exit( -1 ) } );
process.on( "unhandledRejection", ( event : any ) => { console.error( event ); process.exit( -1 ) } );