import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLList } from 'graphql';
import _ from 'lodash';

import { BuildingType } from './Building'
import { buildings } from '../data/Buildings';

////////////////////////////////////////////////////////////////////////////

export const StaffType : GraphQLObjectType  = new GraphQLObjectType(
{
	name : 'Staff',
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
				return _.filter( buildings, { staffID : parent.id } )
			}
		}
	})
});