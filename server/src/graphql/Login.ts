import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLInputObjectType } from 'graphql';

////////////////////////////////////////////////////////////////////////////

export const LoginResponseType = new GraphQLObjectType(
{
	name : 'LoginResponse',
	fields : () =>
	({
		token : { type : GraphQLString },
		error : { type : GraphQLString },
	})
});