import mongoose from 'mongoose';

////////////////////////////////////////////////////////////////////////////////

interface IDB
{
	readonly url : string;

	connect : () => Promise<void>;
}

////////////////////////////////////////////////////////////////////////////////

export default class DataBase implements IDB
{
	readonly url : string;
	
	////////////////////////////////////////////////////////////////////////////

	constructor( url : string )
	{
		this.url = url;
	}

	////////////////////////////////////////////////////////////////////////////

	async connect() : Promise<void>
	{
		return new Promise( ( resolve, reject ) =>
		{
			mongoose.connect( this.url, { useNewUrlParser : true, useUnifiedTopology : true }, error => reject( error ) );

			mongoose.connection.once( 'open', () => resolve() )
		});
	}
}