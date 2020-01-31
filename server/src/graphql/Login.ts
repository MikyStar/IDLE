import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

import { Password } from '../core/Password';
import { Token } from '../core/Token';
import { User } from '../model/User';

////////////////////////////////////////////////////////////////////////////

export const LoginResponseType = new GraphQLObjectType(
{
	name : 'LoginResponse',
	fields : () =>
	({
		token : { type : GraphQLString },
		error : { type : GraphQLString },
	})
});

////////////////////////////////////////////////////////////////////////////

export const LoginQuerry =
{
	login :
	{
		type : LoginResponseType,
		args :
		{
			email : { type : new GraphQLNonNull( GraphQLString ) },
			password : { type : new GraphQLNonNull( GraphQLString ) },
		},
		description : "Creates an account if email don't exists. Send you back a connection token",
		async resolve( parent, args )
		{
			const identifiedUser = await User.findOne( { where : { email : args.email } } );

			if( !identifiedUser )
			{
				const hash = await Password.hash( args.password );
				const newUser = await new User( args.email, hash ).save();

				const token = await Token.generate( newUser );
				return { token }
			}
			else
			{
				const isPasswordOk = await Password.compare( args.password, identifiedUser.passwordHash );

				if( isPasswordOk )
				{
					const token = await Token.generate( identifiedUser );
					return { token }
				}
				else
					return { error : 'Wrong password' }
			}
		}
	},
};