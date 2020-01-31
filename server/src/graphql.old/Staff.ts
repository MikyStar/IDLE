import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLList } from 'graphql';
import _ from 'lodash';

import { BuildingType } from './Building'

////////////////////////////////////////////////////////////////////////////

export const Worker : GraphQLObjectType  = new GraphQLObjectType(
{
	name : 'Worker',
	fields : () =>
	({
		id : { type : GraphQLID },
		name : { type : GraphQLString },
		type : { type : GraphQLString },
		rating : { type : GraphQLInt },
		basePrice : { type : GraphQLInt },
		buildings :
		{
			type : new GraphQLList( BuildingType ),
			resolve( parent, args )
			{
				// TODO
			}
		}
	})
});