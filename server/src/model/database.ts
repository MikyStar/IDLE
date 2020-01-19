interface IDB
{
	readonly url : string;
	readonly port : string;

	launchDB : () => Promise<void>;
	connectToDB : () => Promise<void>;
}

////////////////////////////////////////////////////////////////////////////////

export default class DataBase implements IDB
{
	readonly url : string;
	readonly port : string;
	
	////////////////////////////////////////////////////////////////////////////

	constructor( url : string, port : string )
	{
		this.url = url;
		this.port = port;
	}

	////////////////////////////////////////////////////////////////////////////

	async launchDB() : Promise<void>
	{
		return new Promise( ( resolve, reject ) =>
		{
			console.log( 'TODO' );
		});
	}

	async connectToDB() : Promise<void>
	{
		return new Promise( ( resolve, reject ) =>
		{
			console.log( 'TODO' );
		});
	}
}