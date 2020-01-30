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
        const { NODE_ENV, MONGO_URL, PORT, SALT_ROUNDS, JWT_SECRET, API_VERSION, HOST_ADRESS } = process.env

        if( !NODE_ENV || !MONGO_URL || !PORT || !SALT_ROUNDS || !JWT_SECRET || API_VERSION || HOST_ADRESS )
            console.error( chalk.red( 'One of the following environment variable is missing :' +
                'NODE_ENV, MONGO_URL, PORT, SALT_ROUNDS, JWT_SECRET, API_VERSION, HOST_ADRESS\n' ) );
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
    }
}