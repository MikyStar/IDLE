
import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';

import { Token } from '../core/Token';
import { User } from '../model/User';
import { Worker } from './Staff';
import { Building } from './Building';

////////////////////////////////////////////////////////////////////////////

export const Shop = new GraphQLObjectType(
{
	name : 'Shop',
	fields : () =>
	({
		workers : { type : new GraphQLList( Worker ) },
		buildings : { type : new GraphQLList( Building ) },
	})
});

////////////////////////////////////////////////////////////////////////////

export const ShopQuerries =
{
	shop :
	{
		type : Shop,
		args : { token : { type : new GraphQLNonNull( GraphQLString ) } },
		description : "Retrieves the shop associated with the user",
		async resolve( parent, args )
		{
            const user = await Token.getUser( args.token );
            
            console.log( 'blop', user )

            return { workers : [], staff : [] };
		}
	},
};