import { ObjectType, Field, ID, Int } from 'type-graphql';

import { Worker } from './Worker';
import { Building } from './Building';

////////////////////////////////////////////////////////////////////////////////

@ObjectType()
export class Shop
{
    @Field( type => ID )
    _id : string;

    @Field( type => Worker )
    worker : string;

    @Field( type => [Building] )
    buildings : string;

    @Field( type => [Worker] )
    staff : Worker[];
}