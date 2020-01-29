import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLInputObjectType } from 'graphql';

import { UserType } from './User';

////////////////////////////////////////////////////////////////////////////

export const LoginResponseType = new GraphQLObjectType(
{
	name : 'LoginResponse',
	fields : () =>
	({
		user : { type : UserType },
		token : { type : GraphQLString },
		error : { type : GraphQLString },
	})
});