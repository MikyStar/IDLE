import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Worker } from './Worker';

////////////////////////////////////////////////////////////////////////////////

@ObjectType()
export class Building
{
    @Field( type => String )
    _id : string;

    @Field( type => String )
    name : string;

    @Field( type => String )
    type : string;

    @Field( type => Int )
    currentLevel : number;

    @Field( type => Int )
    basePrice : number;

    @Field( type => Int )
    productionRate : number;

    @Field( type => [Worker])
    workers : Worker[];
}