import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLList } from 'graphql';
import _ from 'lodash';

import { BuildingType, dummyBuildings } from './Building'

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
                return _.filter( dummyBuildings, { staffID : parent.id } )
            }
        }
    })
});

export const dummyStaff = 
[
	{
		id : '1',
        name : 'Jean MINIER',
        rating : 2,
        basePrice : 2000
	},
	{
		id : '2',
        name : 'Marie PELETEUSE',
        rating : 2,
        basePrice : 3000
    },
    {
		id : '3',
        name : 'Viviane POPEYE',
        rating : 3,
        basePrice : 4000
    },
    {
		id : '4',
        name : 'Marc MENHIR',
        rating : 3,
        basePrice : 4500
	},

]