import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import _ from 'lodash';

////////////////////////////////////////////////////////////////////////////

const BuildingType = new GraphQLObjectType(
{
	name : 'Building',
	fields : () =>
	({
		id : { type : GraphQLString },
		name : { type : GraphQLString }
	})
});

const RootQuery = new GraphQLObjectType(
{
	name : 'RootQueryTypes',
	fields :
	{ 
		building :
		{
			type : BuildingType,
			args : { id : { type : GraphQLString } }, // TODO change type
			resolve( parent, args )
			{
				return _.find( dummyBuildings, { id : args.id } );
			}
		}
	}
});

const dummyBuildings = 
[
	{
		id : '1',
		name : 'Mine 1 wood'
	},
	{
		id : '2',
		name : 'Mine 2 coal'
	}
]

////////////////////////////////////////////////////////////////////////////

export default new GraphQLSchema({ query : RootQuery });