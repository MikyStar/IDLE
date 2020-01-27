import bcrypt from 'bcrypt';

import { Environment } from '../environment';

////////////////////////////////////////////////////////////////////////////////

export namespace Password
{
    export const hash = async ( password : string ) : Promise<string> =>
	{
        return new Promise( ( resolve, reject ) =>
        {
            bcrypt.hash( password, Environment.get.SALT_ROUNDS, ( error, hash ) => error ? reject( error ) : resolve( hash ) );
        });
    }

    export const compare = async ( inputed : string, hashInDB : string ) : Promise<boolean> =>
	{
        return new Promise( ( resolve, reject ) =>
        {
            bcrypt.compare( inputed, hashInDB, ( error, result ) => error ? reject( error ) : resolve( result ) );
        });
	}
}