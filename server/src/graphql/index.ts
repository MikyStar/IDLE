import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql'
import _ from 'lodash';
import { Types } from 'mongoose';

import { BuildingType } from './Building';
import { StaffType } from './Staff';
import { UserType, defaultUsers } from './User';

import Building from '../model/Building';
import User from '../model/User';
import { buildings } from '../data/Buildings';
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

				// !!!!!!!!!!!!!!!! FIXME
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
			args : { id : { type : GraphQLID } },
			resolve( parent, args )
			{
				return _.find( defaultUsers, { id : args.id } )
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

		// Creates an account if email don't exists or logs you in. Either way send you back a connection token
		login :
		{
			type : UserType,
			args :
			{
				email : { type : new GraphQLNonNull( GraphQLString ) },
				password : { type : new GraphQLNonNull( GraphQLString ) },
			},
			description : "Creates an account if email don't exists or logs you in. Either way send you back a connection token",
			async resolve( parent, args )
			{
				const identifiedUser = await User.findOne( { email : args.email } );

				if( !identifiedUser )
				{
					console.log( args.password );
					const hash = await Password.hash( args.password );

					return ( await User.create({
													email : args.email,
													passwordHash : hash,
													money : 5000,
													production : 0,
													soltsAvailable : 6 
												})
							).save();
				}
				else
				{
					if( await Password.compare( args.password, identifiedUser.get( 'passwordHash' ) ) )
					{
						console.log( 'token', Token.generate( identifiedUser.get( 'id' ), identifiedUser.get( 'email' ) ) )
						return await Token.generate( identifiedUser.get( 'id' ), identifiedUser.get( 'email' ) );
					}
					else
						return console.log('Not allowed');
				}
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