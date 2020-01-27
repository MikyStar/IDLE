import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql'
import _ from 'lodash';

import { BuildingType } from './Building';
import { StaffType } from './Staff';
import { UserType, defaultUsers } from './User';

import Building from '../model/Building';
import User from '../model/User';
import { buildings } from '../data/Buildings';
import { workers } from '../data/Workers'

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
				//return _.find( dummyBuildings, { id : args.id } );
				Building.findById( parent.staffID );
			}
		},
		buildings :
		{
			type : new GraphQLList( BuildingType ),
			resolve( parent, args ){ return buildings; }
		},

		////////////////////////////////////////////////////////////////////

		staff :
		{
			type : StaffType,
			args : { id : { type : GraphQLID } },
			resolve( parent, args )
			{
				return _.find( workers, { id : args.id } );
			}
		},
		staffMembers :
		{
			type : new GraphQLList( StaffType ),
			resolve( parent, args ){ return workers; }
		},

		////////////////////////////////////////////////////////////////////

		user :
		{
			type : UserType,
			args :
			{
				id : { type : GraphQLID },
			},
			resolve( parent, args )
			{
				return _.find( defaultUsers, { id : args.id, } )
			}
		}
	}
});

////////////////////////////////////////////////////////////////////////////

const Mutation = new GraphQLObjectType(
{
	name : 'Mutation',
	fields :
	{
		addUser :
		{
			type : UserType,
			args :
			{
				email : { type : new GraphQLNonNull( GraphQLString ) },
				password : { type : new GraphQLNonNull( GraphQLString ) },
			},
			resolve( parent, args )
			{
				// TODO need to check if email exists already

				const user = new User(
				{
					email : args.email,
					passwordHash : args.password,
					money : 5000,
					production : 0,
					soltsAvailable : 6
				});

				return user.save();
			}
		},

		////////////////////////////////////////////////////////////////////

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
		},
	}
})

////////////////////////////////////////////////////////////////////////////

export default new GraphQLSchema(
{ 
	query : RootQuery,
	mutation : Mutation
});