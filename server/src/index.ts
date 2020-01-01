#!/usr/bin/env node
import { install as installSourceMapSupport } from 'source-map-support';

////////////////////////////////////////////////////////////////////////////////

export const main = async ( argv: string[] ) : Promise<void> =>
{
	console.log( "Hello, world!" );
}

////////////////////////////////////////////////////////////////////////////////

const onError = ( err: any ) =>
{
	console.log( err );
	process.exit( 1 );
}

process.on("uncaughtException", onError);
process.on("unhandledRejection", onError);

///////////////////////////////////////////////////////////////////////////////

installSourceMapSupport();
main(process.argv);
