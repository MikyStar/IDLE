import { ObjectType, Field, ID, Int, Resolver, Query, Arg, ArgsType, Args, Mutation } from 'type-graphql';

import { Token } from '../core/Token';
import { Shop } from './Shop';
import { Building } from './Building';
import { Worker } from './Worker';

////////////////////////////////////////////////////////////////////////////////
@ObjectType()
export class User
{
    @Field( type => ID )
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
}

////////////////////////////////////////////////////////////////////////////////

@ObjectType()
class LoginType
{
    @Field( () => String )
    token : string;

    @Field( () => String )
    error : string;
}

@Resolver( User )
export class UserResolver
{
    @Query( () => User, { description : 'Returns a user given his token.' } )
    async user( @Arg('token') token : string )
    {
        console.log('Reached user resolver and token is', token)
		return ( await Token.getUser( token ) )
    }

    @Mutation( () => LoginType )
    async login( @Arg( "token" ) token : string )
    {
		return ( await Token.getUser( token ) )
    }
}