import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID, OneToMany } from "typeorm";
import { ObjectId } from 'mongodb';

import { Worker, WorkerTypes } from './Staff';
import { Building, BuildingsTypes } from './Building';
import { User } from "./User";
import { Time } from '../core/Time';

////////////////////////////////////////////////////////////////////////////

const COLLECTION_NAME = "shops";
const SHOP_LENGTH = 5;

////////////////////////////////////////////////////////////////////////////

@Entity( COLLECTION_NAME )
export class Shop extends BaseEntity
{
    @ObjectIdColumn({ primary : true })
    _id : ObjectId = new ObjectId();
    
    @Column('string', { unique : true })
    userID : ObjectId;

    @Column('array')
    staff : Worker[] = [];
    
    @Column('array')
    buildings : Building[] = [];

    ////////////////////////////////////////////////////////////////////////

    constructor( userID : ObjectId )
    {
        super();

        this.userID = userID;
        this.generateBuilding().then( buildings => this.buildings = buildings );
        this.generateStaff().then( staff => this.staff = staff );
    }

    ////////////////////////////////////////////////////////////////////////

    private async generateBuilding() : Promise<Building[]>
    {
        const toReturn : Building[] = [];

        for( let i = 0; i < SHOP_LENGTH; i++ )
            toReturn.push( await this.generateRandomBuilding( String( i ) ) );

        return toReturn;
    }

    async generateRandomBuilding( name ?: string ) : Promise<Building>
    {
        const baseLevel = 1;
        const basePrice = Math.floor( ( Math.random() * 20 ) + 10 ) * 100; // TODO rework
        const baseProduction = Math.floor( ( Math.random() * 20 ) + 5 ); // TODO rework

        return new Building( `Building${ name }`, BuildingsTypes.MINE, baseLevel, basePrice, baseProduction, [] );
    }

    private async generateStaff() : Promise<Worker[]>
    {
        const toReturn : Worker[] = [];

        for( let i = 0; i < SHOP_LENGTH; i++ )
        {
            const baseLevel = 1;
            const basePrice = Math.floor( ( Math.random() * 20 ) + 10 ) * 100; // TODO rework

            const worker = new Worker( `Worker${ i }`, WorkerTypes.MINER, basePrice, baseLevel );

            toReturn.push( worker );
        }

        return toReturn;
    }
    
    ////////////////////////////////////////////////////////////////////////

    /**
     * @description Remove from shop and create a new one, update User ( production, money, lastUpdate, buildings )
     * 
     * @param buildingID 
     */
    async buyBuilding( buildingID : string ) : Promise<Building>
    {
        const shopBuildings = this.buildings;

        let buildingIndex;
        let buildingToBuy ;
        shopBuildings.forEach( ( building, index ) => 
        {
            console.log( 'parsed', building._id.toHexString(), 'arg', buildingID );

            if( building._id.toHexString() === buildingID )
            {
                buildingToBuy = building;
                buildingIndex = index;
            }
        });

        if( !buildingToBuy )
            throw new Error( 'Building not found' );

        // Making the transaction
        const user = await User.findOne( { _id : this.userID } ) as User;

        if( !user )
            throw new Error( "Couldn't retrieve the user from the shop" );

        const userMoney = user.calculateMoney();
        
        if( buildingToBuy!.basePrice <= userMoney )
        {
            // Remove from shop //! Not happening well
            shopBuildings.splice( buildingIndex, 1 );
            this.buildings = shopBuildings;
            this.buildings.push( await this.generateRandomBuilding() ); // TODO handle the name, maybe store the count of time I've bought something in the shop
            this.save()

            // Update user
            user.buildings.push( new ObjectId( buildingToBuy!._id ) );
            user.production += buildingToBuy!.productionRate;
            user.money = userMoney - buildingToBuy!.basePrice;
            user.lastUpdate = Time.now;
            user.save();

            return buildingToBuy;
        }
        else
            throw new Error( 'Not enough money' );

    }
}