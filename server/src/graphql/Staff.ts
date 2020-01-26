import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID } from 'graphql';

////////////////////////////////////////////////////////////////////////////

export const StaffType = new GraphQLObjectType(
{
    name : 'Staff',
    fields : () =>
    ({
        id : { type : GraphQLID },
        name : { type : GraphQLString },
        type : { type : GraphQLString },
        rating : { type : GraphQLInt },
        basePrice : { type : GraphQLInt },
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