import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql'
import _ from 'lodash';

import { LoginQuerry } from './Login';
import { UserQuerries } from './User';
import { ShopQuerries } from './Shop';

////////////////////////////////////////////////////////////////////////////

// TODO search for Swagger implementation

const RootQuery = new GraphQLObjectType(
{
	name : 'RootQueryTypes',
	fields :
	{
		...UserQuerries,
		//...ShopQuerries
	}
});

////////////////////////////////////////////////////////////////////////////

const Mutation = new GraphQLObjectType(
{
	name : 'Mutation',
	fields :
	{
		...LoginQuerry,
	}
})

////////////////////////////////////////////////////////////////////////////

export default new GraphQLSchema(
{ 
	query : RootQuery,
	mutation : Mutation
});