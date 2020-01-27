import * as dotenv from 'dotenv';

////////////////////////////////////////////////////////////////////////////////

dotenv.config();

////////////////////////////////////////////////////////////////////////////////

interface IEnv
{
    NODE_ENV : () => string,
    MONGO_URL : () => string,
    REST_PORT : () => string,
    SALT_ROUNDS : () => string
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the access to required .env variables
 */
export const env : IEnv =
{
    NODE_ENV : () =>
    {
        if( !process.env.NODE_ENV ) 
            console.error( 'No NODE_ENV value in .env file' );

        return process.env.NODE_ENV as string;
    },

    MONGO_URL : () =>
    {
        if( !process.env.MONGO_URL ) 
            console.error( 'No MONGO_URL value in .env file' );

        return process.env.MONGO_URL as string;
    },

    REST_PORT : () =>
    {
        if( !process.env.REST_PORT ) 
            console.error( 'No REST_PORT value in .env file' );

        return process.env.REST_PORT as string;
    },
    
    SALT_ROUNDS : () =>
    {
        if( !process.env.SALT_ROUNDS ) 
            console.error( 'No SALT_ROUNDS value in .env file' );

        return process.env.SALT_ROUNDS as string;
    },
}