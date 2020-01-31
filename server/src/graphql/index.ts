import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql'
import _ from 'lodash';

import { BuildingType } from './Building';
import { StaffType } from './Staff';
import { LoginResponseType } from './Login';
import { UserType } from './User';
import { LoginQuerry } from './Login';

import { Building } from '../model/Building';
import { User } from '../model/User'
import { buildings } from '../data/Buildings.json';
import { workers } from '../data/Workers'
import { Password } from '../core/Password';
import { Token } from '../core/Token';

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
			async resolve( parent, args )
			{
				return _.find( buildings, { id : args.id } );

				// ! FIXME
				// TODO actually when I'm doing here is showing the shop of buildings, so it should be like shop{ building } actually
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
			args : { token : { type : GraphQLString } },
			async resolve( parent, args )
			{
				return ( await Token.getUser( args.token ) )
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
		// TODO search for Swagger implementation

		...LoginQuerry,
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
				//TODO
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