import { createConnection } from 'typeorm';

import { User } from '../model/User'

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
			const typeormConfig =
			{
				type : "mongodb",
				useNewUrlParser : true,
				useUnifiedTopology : true,
				url : this.url,
				synchronize : true,
				entities : [ User ]
			}

			createConnection( typeormConfig ).then( ( connection : any ) => resolve( connection ));
		});
	}
}