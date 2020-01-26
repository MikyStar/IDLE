import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } from 'graphql';
import _ from 'lodash';

////////////////////////////////////////////////////////////////////////////

export const UserType = new GraphQLObjectType(
{
	name : 'User',
	fields : () =>
	({
		id : { type : GraphQLString },
		email : { type : GraphQLString },
		passwordHash : { type : GraphQLString },
		staff : { type : GraphQLString }, // TODO change type
		money : { type : GraphQLInt },
		buildings : { type : GraphQLString }, // TODO change type
		production : { type : GraphQLInt }, 
		slotsAvailable : { type : GraphQLInt }, 
		timestampProduction : { type : GraphQLString },
	})
});

export const defaultUsers =
[
	{
		id : '1',
		email : 'test@mail.com',
		passwordHash : '1234',
		money : 10000
	}
]