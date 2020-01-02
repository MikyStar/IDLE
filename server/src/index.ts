#!/usr/bin/env node
import { install as installSourceMapSupport } from 'source-map-support';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';

////////////////////////////////////////////////////////////////////////////////

const DEFAULT_PORT = 4000;
dotenv.config();

////////////////////////////////////////////////////////////////////////////////

export const main = async ( argv: string[] ) : Promise<void> =>
{

	const app = express();

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
		app.listen( process.env.port || DEFAULT_PORT, () =>
		{
			console.log( `NodeJS server running in ${ process.env.NODE_ENV } mode.` );
		});
	}

	////////////////////////////////////////////////////////////////////////////

	allowJSONBodyHandling();
	enableCORS();

	launchServer();

	process.on( "uncaughtException", onError );
	process.on( "unhandledRejection", onError );
}

///////////////////////////////////////////////////////////////////////////////

installSourceMapSupport();
main(process.argv);
