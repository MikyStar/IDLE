import { sign, verify as jwtVerify } from 'jsonwebtoken';

import { Environment } from '../environment';
import { User } from '../true-model/User';
import { ObjectId } from 'mongodb';

////////////////////////////////////////////////////////////////////////////////

const DEFAULT_JWT_EXPIRATION = "1d";

////////////////////////////////////////////////////////////////////////////////

export namespace Token
{
	export const generate = async ( user : User ) : Promise<string> =>
	{
        return new Promise( ( resolve, reject ) =>
        {
            sign( { id : user._id, test : 'test' }, Environment.get.JWT_SECRET, { expiresIn : DEFAULT_JWT_EXPIRATION }, ( error, token ) => error ? reject( error ) : resolve( token ) );
        });
    }

    export const getUser = async ( token : string ) : Promise<User> =>
    {
        return new Promise( ( resolve, reject ) =>
        {
            const decrypted = jwtVerify( token, Environment.get.JWT_SECRET );

            User.findOne( { _id : new ObjectId( decrypted.id ) } ).then( user => resolve( user ) )
        });
    }
}