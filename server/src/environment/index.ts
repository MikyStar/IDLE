import * as dotenv from 'dotenv';
import chalk from 'chalk';

////////////////////////////////////////////////////////////////////////////////

dotenv.config();

////////////////////////////////////////////////////////////////////////////////
export namespace Environment
{
    /**
     * Verifies if the required environment variables are in the sytstem
     * 
     * To add one to your system simply create a file with a `.env` extension at the end,
     * you can now affect values to variables like so :
     * 
     * MY_VAR="some string of characters"
     */
    export const check = () =>
    {
        const { NODE_ENV, MONGO_URL, REST_PORT, SALT_ROUNDS } = process.env;

        if( !NODE_ENV || !MONGO_URL || !REST_PORT || !SALT_ROUNDS )
            console.error( chalk.red( 'One of the following environment variable is missing : NODE_ENV, MONGO_URL, REST_PORT_SALT_ROUNDS\n' ) );
    }

    export const get =
    {
        NODE_ENV : process.env.NODE_ENV! as string,
        MONGO_URL : process.env.MONGO_URL as string,
        REST_PORT : process.env.REST_PORT as string,
        SALT_ROUNDS : process.env.SALT_ROUND as string,
    }
}