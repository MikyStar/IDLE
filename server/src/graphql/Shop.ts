import { ObjectType, Field, ID, Int, Resolver, Query, Arg, Mutation } from 'type-graphql';

import { Worker } from './Worker';
import { Building } from './Building';
import { Token } from '../core/Token';
import { User } from './User';
import { Shop as ShopModel } from '../model/Shop';

////////////////////////////////////////////////////////////////////////////////

@ObjectType()
export class Shop
{
    @Field( () => String )
    _id : string;

    @Field( () => User )
    user : User;

    @Field( () => [Building] )
    buildings : string;

    @Field( () => [Worker] )
    staff : Worker[];
}

////////////////////////////////////////////////////////////////////////////////

@Resolver()
export class ShopResolver
{
    @Query( () => Shop, { description : 'Retrives the shop associated with the user' })
    async shop( @Arg( 'token' ) token : string )
    {
        const user = await Token.getUser( token );
            
        const shop = await ShopModel.findOne( { _id : user.shopID } )

        return shop;
    }
}