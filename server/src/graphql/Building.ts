import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID } from 'graphql';

import { StaffType } from './Staff';

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
		staff : { type : StaffType }
	})
});

export const dummyBuildings = 
[
	{
		id : '1',
		name : 'Mine 1 wood',
	},
	{
		id : '2',
		name : 'Mine 2 coal'
	}
]