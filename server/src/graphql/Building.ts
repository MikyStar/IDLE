import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID } from 'graphql';
import _ from 'lodash';

import { StaffType, dummyStaff } from './Staff';

////////////////////////////////////////////////////////////////////////////

export const BuildingType = new GraphQLObjectType(
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
				return _.find( dummyStaff, { id : parent.staffID } )
			} 
		}
	})
});

export const dummyBuildings = 
[
	{
		id : '1',
		name : 'Mine 1 wood',
		staffID : '1'
	},
	{
		id : '2',
		name : 'Mine 2 coal',
		staffID : '2'
	}
]