import { ObjectType, Field, ID, Int, Resolver, Query, Arg } from 'type-graphql';

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

@Resolver()
export class UserResolver
{
    @Query( returns => User )
    async user( /*@Arg( "token" )*/ token : string )
    {
		return ( await Token.getUser( token ) )
    }
}