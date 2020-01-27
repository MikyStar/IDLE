import jwt from 'jsonwebtoken';

////////////////////////////////////////////////////////////////////////////////

interface IToken
{
	readonly secret : string;

    generate : ( json : JSON ) => Promise<string>;
    verify : ( token : JSON ) => Promise<boolean>;
    getUserID : ( token : JSON ) => Promise<string>;
}

////////////////////////////////////////////////////////////////////////////////

export default class Token implements IToken
{
	readonly secret : string;
	
	////////////////////////////////////////////////////////////////////////////

	constructor( secret : string )
	{
		this.secret = secret;
	}

	////////////////////////////////////////////////////////////////////////////

	async generate() : Promise<void>
	{
        return new Promise( ( resolve, reject ) =>
        {

        });
    }

    async verify() : Promise<void>
	{
        return new Promise( ( resolve, reject ) =>
        {

        });
    }
    
    async getUserID() : Promise<void>
	{
        return new Promise( ( resolve, reject ) =>
        {

        });
	}
}