import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

////////////////////////////////////////////////////////////////////////////

const UserType = new GraphQLObjectType(
{
	name : 'User',
	fields : () =>
	({
		id : { type : GraphQLString },
		email : { type : GraphQLString },
		passwordHash : { type : GraphQLString },
		staff : { type : GraphQLString }, // TODO change type
		money : { type : GraphQLInt },
	})
});