#!/usr/bin/env node

////////////////////////////////////////////////////////////////////////////////

import "reflect-metadata";
import { install as installSourceMapSupport } from 'source-map-support';
import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import clear from 'clear';
import { createConnection } from 'typeorm';

import DataBase from './core/DataBase';
import RootQuery from './graphql';
import { Environment } from './environment';

import { User } from './model/User'

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
	resolve => console.log( 'Connected to DB' ),
	error => console.error( error )
);

( function setupGraphQL()
{
	app.use( GRAPHQL_ROUTE, graphqlHTTP(
	{
		// TODO look more on rootValue -> https://github.com/graphql/express-graphql#options
		schema : RootQuery,
		graphiql : true 
	}));
})();

////////////////////////////////////////////////////////////////////////////////

const typeormConfig =
{
	type : "mongodb",
	useNewUrlParser : true,
	useUnifiedTopology : true,
	url : Environment.get.MONGO_URL,
	synchronize : true,
	entities : [ User ]
}

//@ts-ignore
createConnection( typeormConfig ).then( connection => console.log( 'TypeORM is working .......... MAYBE ??' ))

////////////////////////////////////////////////////////////////////////////////

process.on( "uncaughtException", ( event : any ) => { console.error( event ); process.exit( -1 ) } );
process.on( "unhandledRejection", ( event : any ) => { console.error( event ); process.exit( -1 ) } );