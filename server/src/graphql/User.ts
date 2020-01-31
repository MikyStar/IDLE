import { ObjectType, Field, ID, Int } from 'type-graphql';

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

    @Field( type => [Shop] )
    shop : Shop;
}