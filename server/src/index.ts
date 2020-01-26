#!/usr/bin/env node
import { install as installSourceMapSupport } from 'source-map-support';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import account from './routes/account';
import progression from './routes/progression';
import shop from './routes/shop';
import DataBase from './model/DataBase';
import User from './graphql/User';
import RootQuery from './graphql';

////////////////////////////////////////////////////////////////////////////////

const DEFAULT_PORT = 5001;
const API_BASE_NAME = '/api';
const ROUTES = [ account, progression, shop ];

////////////////////////////////////////////////////////////////////////////////

export const main = async ( argv: string[] ) : Promise<void> =>
{
	const app = express();
	const dataBase = new DataBase( '', String( process.env.port || DEFAULT_PORT ) ); // TODO add real url from .env

	////////////////////////////////////////////////////////////////////////////

	const onError = ( err: any ) =>
	{
		console.log( err );
		process.exit( 1 );
	}

	const allowJSONBodyHandling = () => app.use( bodyParser.json() );

	const enableCORS = () => app.use( cors() );

	const startRestService = () =>
	{
		// TODO launch database
		app.listen( dataBase.port, () =>  console.log( `NodeJS REST service running in ${ process.env.NODE_ENV } mode, port ${ dataBase.port }` ) );
	}

	const connectToDB = ( url ?: string ) =>
	{
		if( !url ) onError( 'You need to provide a connection string to the DB through a .env file, please contact the maintainer.\n' )

		mongoose.connect( url as string, { useNewUrlParser : true, useUnifiedTopology : true } );

		mongoose.connection.once( 'open', () => console.log( `Connected to DB through ${ url }` ) )
	}

	const setupTestRoute = () => app.get( '/', ( request, response ) => response.send( 'The server received a GET resquest' ) );

	const setupRoutes = () => ROUTES.forEach( route => app.use( API_BASE_NAME, route ) );

	const setupGraphQL = () => app.use( '/graphql', graphqlHTTP(
	{
		schema : RootQuery,
		graphiql : true 
	}));

	////////////////////////////////////////////////////////////////////////////

	dotenv.config();
	installSourceMapSupport();

	allowJSONBodyHandling();
	enableCORS();

	startRestService();

	setupTestRoute();
	setupRoutes();
	connectToDB( process.env.MONGO_URL )
	setupGraphQL();

	process.on( "uncaughtException", onError );
	process.on( "unhandledRejection", onError );
}

///////////////////////////////////////////////////////////////////////////////

main( process.argv );
