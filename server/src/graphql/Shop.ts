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

            // Retrieve the building
            const shopBuildings = shop!.buildings;
            const relation = ( building : BuildingModel ) => building._id.equals( buildingID ) ;
            //const buildingToBuy = shopBuildings!.find( building => building._id.equals( buildingID ) );
            const buildingIndex = shopBuildings.findIndex( relation );

            const buildingToBuy = ( () : Building =>
            {
                let founded;

                shopBuildings.forEach( building => 
                {
                    console.log( 'buildID', buildingID, 'a build id', building._id )
                    if( building._id.equals( buildingID ) )
                    {
                        founded = building;
                        console.log( 'founded')
                    }
                });

                return founded;
            })()

            // Making the transaction
            const userMoney = user.calculateMoney();
            
            console.log( 'the building', buildingToBuy )

            if( buildingToBuy!.basePrice <= userMoney )
            {
                console.log('true')
                // Remove from shop
                shopBuildings.splice( buildingIndex, 1 );
                shop!.buildings = shopBuildings;
                shop!.buildings.push( await shop.generateRandomBuilding() ); // TODO handle the name, maybe store the count of time I've bought something in the shop
                shop!.save()

                // Update user
                user.buildings.push( buildingToBuy!._id );
                user.production += buildingToBuy!.productionRate;
                user.money = userMoney - buildingToBuy!.basePrice;
                user.lastUpdate = Time.now;
                user.save();

                return { building : buildingToBuy }
            }
            else
                throw new Error( 'Not enough money' );
        }
        catch( error )
        {
            return { error }
        }
    }
}