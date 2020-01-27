#!/usr/bin/env node
import { install as installSourceMapSupport } from 'source-map-support';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import graphqlHTTP from 'express-graphql';

import DataBase from './model/DataBase';
import RootQuery from './graphql';

////////////////////////////////////////////////////////////////////////////////

const DEFAULT_PORT = 5001;
const API_BASE_NAME = '/api';
const GRAPHIQL_ROUTE = '/graphiql';
const ROUTES = [ ];

////////////////////////////////////////////////////////////////////////////////

dotenv.config();

export const main = async ( argv: string[] ) : Promise<void> =>
{
	const app = express();
	const dataBase = new DataBase( process.env.MONGO_URL as string );

	////////////////////////////////////////////////////////////////////////////

	const onError = ( err: any ) =>
	{
		console.log( err );
		process.exit( 1 );
	}

	const allowJSONBodyHandling = () => app.use( bodyParser.json() );

	const enableCORS = () => app.use( cors() );

	const startRestService = () => app.listen( process.env.REST_PORT, () =>  console.log( `NodeJS REST service running in ${ process.env.NODE_ENV } mode, port ${ process.env.REST_PORT }` ) );

	const setupTestRoute = () => app.get( '/', ( request, response ) => response.send( 'The server received a GET resquest' ) );

	//const setupRoutes = () => ROUTES.forEach( route => app.use( API_BASE_NAME, route ) );

	const setupGraphQL = () => app.use( GRAPHIQL_ROUTE, graphqlHTTP(
	{
		schema : RootQuery,
		graphiql : true 
	}));

	////////////////////////////////////////////////////////////////////////////

	installSourceMapSupport();

	allowJSONBodyHandling();
	enableCORS();

	startRestService();

	setupTestRoute();
	//setupRoutes();
	dataBase.connect().then( 
		resolve => console.log( 'Connected to DB' ),
		error => console.error( error )
	);
	setupGraphQL();

	process.on( "uncaughtException", onError );
	process.on( "unhandledRejection", onError );
}

///////////////////////////////////////////////////////////////////////////////

main( process.argv );