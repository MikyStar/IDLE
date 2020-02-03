import { ObjectType, Field, ID, Int, Resolver, Query, Arg, Mutation } from 'type-graphql';
import { ObjectId } from 'mongodb';

import { Worker } from './Worker';
import { Building } from './Building';
import { Token } from '../core/Token';
import { User } from './User';
import { Shop as ShopModel } from '../model/Shop';
import { Building as BuildingModel } from '../model/Building';
import { Time } from '../core/Time';

////////////////////////////////////////////////////////////////////////////////

@ObjectType()
export class Shop
{
    @Field( () => String )
    _id : string;

    @Field( () => User )
    user : User;

    @Field( () => [Building] )
    buildings : Building[];

    @Field( () => [Worker] )
    staff : Worker[];
}

////////////////////////////////////////////////////////////////////////////////

@ObjectType()
class BuyBuildingType
{
    @Field( () => Building, { nullable : true } )
    building ?: Building;

    @Field( () => String, { nullable : true } )
    error ?: string;
}

@ObjectType()
class ShopQueryType
{
    @Field( () => Shop, { nullable : true } )
    shop ?: Shop;

    @Field( () => String, { nullable : true } )
    error ?: string;
}


////////////////////////////////////////////////////////////////////////////////

@Resolver()
export class ShopResolver
{
    @Query( () => ShopQueryType, { description : 'Retrives the shop associated with the user' } )
    async shop( @Arg( 'token' ) token : string )
    {
        try
        {
            const user = await Token.getUser( token );

            if( !user )
                throw new Error( 'Wrong token' );

            const shop = await ShopModel.findOne( { _id : user.shopID } );

            // !
            // ! Seems like I've messed up the scheme, buildings._id seems to be different at each request
            // !

            if( !shop )
                throw new Error( 'No shop could have been retrieved');

            return { shop };
        }
        catch( error )
        {
            return { error }
        }
    }

    @Mutation( () => BuyBuildingType, { description : 'Buy a building, taking care of money and production updates' } )
    async buyBuilding( @Arg( 'token' ) token : string, @Arg( 'buildingID' ) buildingID : string )
    {
        try
        {
            const user = await Token.getUser( token );

            if( !user )
                throw new Error( 'Wrong token' );

            const shop = await ShopModel.findOne( { _id : user.shopID } );

            if( !shop )
                throw new Error( "Your shop couldn't have been retrieved." );

            const building = shop.buyBuilding( buildingID );

            if( !building )
                throw new Error( "Error buying the building" );

            return { building };

        }
        catch( error )
        {
            return { error };
        }
    }
}