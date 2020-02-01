import { ObjectType, Field, ID, Int, Resolver, Query, Arg, ArgsType, Args, Mutation } from 'type-graphql';

import { Token } from '../core/Token';
import { Password } from '../core/Password';
import { User as UserModel } from '../model/User';
import { Shop } from './Shop';
import { Building } from './Building';
import { Worker } from './Worker';
import { ObjectID } from 'typeorm';

////////////////////////////////////////////////////////////////////////////////
@ObjectType()
export class User
{
    @Field( type => String )
    _id : string;

    @Field( type => String )
    email : string;

    @Field( type => String )
    passwordHash : string;

    @Field( type => Int )
    money : number;

    @Field( type => Int )
    production : number;

    @Field( type => String )
    lastUpdate : string;

    @Field( type => [Worker] )
    staff : Worker[];

    @Field( type => [Building] )
    buildings : Building[];

    @Field( type => Shop )
    shop : Shop;

    @Field( type => Int )
    slotsAvailable : number;
}

////////////////////////////////////////////////////////////////////////////////

@ObjectType()
class LoginType
{
    @Field( () => String, { nullable : true } )
    token ?: string;

    @Field( () => String, { nullable : true } )
    error ?: string;
}

@Resolver( User )
export class UserResolver
{
    @Query( () => User, { description : 'Returns a user given his token.' } )
    async user( @Arg('token') token : string )
    {
		return ( await Token.getUser( token ) )
    }

    @Mutation( () => LoginType )
    async login( @Arg( "email" ) email : string, @Arg( "password" ) password : string )
    {
        const identifiedUser = await UserModel.findOne( { where : { email : email } } );

        if( !identifiedUser )
        {
            const hash = await Password.hash( password );
            const newUser = await new UserModel( email, hash ).save();

            const token = await Token.generate( newUser );
            return { token }
        }
        else
        {
            const isPasswordOk = await Password.compare( password, identifiedUser.passwordHash );

            if( isPasswordOk )
            {
                const token = await Token.generate( identifiedUser );
                return { token }
            }
            else
                return { error : 'Wrong password' }
        }
    }
}