import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLInputObjectType } from 'graphql';
import _ from 'lodash';

import { Worker } from './Staff';
import { workers } from '../data/Workers'

////////////////////////////////////////////////////////////////////////////

export const Building : GraphQLObjectType = new GraphQLObjectType(
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
			type : Worker,
			resolve( parent, args )
			{
				return _.find( workers, { id : parent.staffID } )
			} 
		}
	})
});