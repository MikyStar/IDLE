import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLInputObjectType } from 'graphql';
import _ from 'lodash';

import { StaffType } from './Staff';
import { workers } from '../data/Workers'

////////////////////////////////////////////////////////////////////////////

export const BuildingType : GraphQLObjectType = new GraphQLObjectType(
{
	name : 'Building',
	fields : () =>
	({
		id : { type : GraphQLID },
		name : { type : GraphQLString },
		maxLevel : { type : GraphQLInt },
		currentLevel : { type : GraphQLInt },
		basePrice : { type : GraphQLInt },
		productionRate : { type : GraphQLInt },
		staff : 
		{
			type : StaffType,
			resolve( parent, args )
			{
				return _.find( workers, { id : parent.staffID } )
			} 
		}
	})
});