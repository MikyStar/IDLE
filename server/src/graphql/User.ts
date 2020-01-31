import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLObjectTypeConfig } from 'graphql';
import _ from 'lodash';

import { Token } from '../core/Token';

////////////////////////////////////////////////////////////////////////////

export const UserType = new GraphQLObjectType(
{
	name : 'User',
	fields : () =>
	({
		_id : { type : GraphQLString },
		email : { type : GraphQLString },
		passwordHash : { type : GraphQLString },
		staff : { type : GraphQLString }, // TODO change type
		money : { type : GraphQLInt },
		buildings : { type : GraphQLString }, // TODO change type
		production : { type : GraphQLInt }, 
		slotsAvailable : { type : GraphQLInt }, 
		lastUpdate : { type : GraphQLString },
	})
});

////////////////////////////////////////////////////////////////////////////

export const UserQuerries =
{
	user :
	{
		type : UserType,
		args : { token : { type : GraphQLString } },
		async resolve( parent, args )
		{
			return ( await Token.getUser( args.token ) )
		}
	}
}