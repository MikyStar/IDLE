import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } from 'graphql';
import _ from 'lodash';

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
		buildings : { type : GraphQLString }, // TODO change type
	})
});

const RootQuery = new GraphQLObjectType(
{
	name : 'RootQueryTypes',
	fields :
	{ 
		user :
		{
			type : UserType,
			args : { buildings : { type : GraphQLString } }, // TODO change type
			resolve( parent, args )
			{
			}
		}
	}
});

////////////////////////////////////////////////////////////////////////////

export default new GraphQLSchema({ query : RootQuery });