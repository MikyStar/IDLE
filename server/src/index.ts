#!/usr/bin/env node
import { install as installSourceMapSupport } from 'source-map-support';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import fileSystem from 'fs';

import account from './routes/account';
import progression from './routes/progression';
import shop from './routes/shop';
import DataBase from './model/DataBase';

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

	const launchServer = () =>
	{
		// TODO launch database
		app.listen( dataBase.port, () =>  console.log( `NodeJS server running in ${ process.env.NODE_ENV } mode, port ${ dataBase.port }` ) );
	}

	const setupTestRoute = () => app.get( '/', ( request, response ) => response.send( 'The server received a GET resquest' ) );

	const setupRoutes = () => ROUTES.forEach( route => app.use( API_BASE_NAME, route ) );

	////////////////////////////////////////////////////////////////////////////

	dotenv.config();
	installSourceMapSupport();

	allowJSONBodyHandling();
	enableCORS();

	launchServer();

	setupTestRoute();
	setupRoutes();

	process.on( "uncaughtException", onError );
	process.on( "unhandledRejection", onError );
}

///////////////////////////////////////////////////////////////////////////////

main( process.argv );
