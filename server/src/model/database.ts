interface IDB
{
	readonly url : string;
	launchDB : () => Promise<void>;
	connectToDB : () => Promise<void>;
}

////////////////////////////////////////////////////////////////////////////////

export class DataBase implements IDB
{
	readonly url : string;
	
	////////////////////////////////////////////////////////////////////////////

	constructor( url : string ) 
	{
		this.url = url;
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