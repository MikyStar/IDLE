import * as dotenv from 'dotenv';
import chalk from 'chalk';

////////////////////////////////////////////////////////////////////////////////

dotenv.config();

////////////////////////////////////////////////////////////////////////////////

export namespace Environment
{
    /**
     * @description Verifies if the required environment variables are in the sytstem
     * 
     * @tutorial - To add one to your system simply create a file with a `.env` extension at the end,
     * you can now affect values to variables like so :
     * 
     * - MY_VAR="some string of characters"
     */
    export const check = () =>
    {
        const { NODE_ENV, MONGO_URL, PORT, SALT_ROUNDS, JWT_SECRET, API_VERSION, HOST_ADRESS, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env

        if( !NODE_ENV || !MONGO_URL || !PORT || !SALT_ROUNDS || !JWT_SECRET || API_VERSION || HOST_ADRESS || DB_USER || DB_PASSWORD || DB_NAME || DB_HOST )
            console.error( chalk.red( 'One of the following environment variable is missing : NODE_ENV, MONGO_URL, PORT, SALT_ROUNDS, JWT_SECRET, API_VERSION, HOST_ADRESS, DB_USER, DB_PASSWORD, DB_NAME, DB_HOST\n' ) );
    }

    export const get =
    {
        NODE_ENV : process.env.NODE_ENV! as string,
        MONGO_URL : process.env.MONGO_URL as string,
        PORT : process.env.PORT as string,
        SALT_ROUNDS : Number.parseInt( process.env.SALT_ROUNDS as string ),
        JWT_SECRET : process.env.JWT_SECRET as string,
        API_VERSION : Number.parseInt( process.env.API_VERSION as string ),
        HOST_ADRESS : process.env.HOST_ADRESS as string,
        DB_NAME : process.env.DB_NAME as string,
        DB_USER : process.env.DB_USER as string,
        DB_PASSWORD : process.env.DB_PASSWORD as string,
        DB_HOST : process.env.DB_HOST as string,
    }
}