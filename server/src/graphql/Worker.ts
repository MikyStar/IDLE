import { ObjectType, Field, ID, Int } from 'type-graphql';

////////////////////////////////////////////////////////////////////////////////

@ObjectType()
export class Worker
{
    @Field( type => ID )
    _id : string;

    @Field( type => String )
    name : string;

    @Field( type => String )
    type : string;

    @Field( type => Int )
    basePrice : number;

    @Field( type => Int )
    level : number;
}