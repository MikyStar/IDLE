import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLString } from 'graphql'
import _ from 'lodash';

import { BuildingType, dummyBuildings } from './Building';
import { StaffType, dummyStaff } from './Staff';
import { UserType, defaultUsers } from './User';

import Building from '../model/Building';

////////////////////////////////////////////////////////////////////////////

const RootQuery = new GraphQLObjectType(
{
	name : 'RootQueryTypes',
	fields :
	{
		building :
		{
			type : BuildingType,
			args : { id : { type : GraphQLID } },
			resolve( parent, args )
			{
				return _.find( dummyBuildings, { id : args.id } );
			}
		},
		buildings :
		{
			type : new GraphQLList( BuildingType ),
			resolve( parent, args ){ return dummyBuildings; }
		},

		////////////////////////////////////////////////////////////////////

		staff :
		{
			type : StaffType,
			args : { id : { type : GraphQLID } },
			resolve( parent, args )
			{
				return _.find( dummyStaff, { id : args.id } );
			}
		},
		staffMembers :
		{
			type : new GraphQLList( StaffType ),
			resolve( parent, args ){ return dummyStaff; }
		},

		////////////////////////////////////////////////////////////////////

		user :
		{
			type : UserType,
			args : { id : { type : GraphQLID } },
			resolve( parent, args )
			{
				return _.find( defaultUsers, { id : args.id } )
			}
		}
	}
});

const Mutation = new GraphQLObjectType(
{
	name : 'Mutation',
	fields :
	{
		buyBuilding :
		{
			type : BuildingType,
			args :
			{
				id : { type : GraphQLString },
				name : { type : GraphQLString },
			},
			resolve( parent, args )
			{
				let building = new Building({ id : args.id, name : args.name });

				return building.save();
			}
		}
	}
})

////////////////////////////////////////////////////////////////////////////

export default new GraphQLSchema(
{ 
	query : RootQuery,
	mutation : Mutation
});