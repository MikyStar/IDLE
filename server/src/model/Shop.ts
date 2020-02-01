import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID, OneToMany } from "typeorm";

import { Worker, WorkerTypes } from './Staff';
import { Building, BuildingsTypes } from './Building';
import { generateRandomID } from './index'

////////////////////////////////////////////////////////////////////////////

const COLLECTION_NAME = "shops";
const SHOP_LENGTH = 5;

////////////////////////////////////////////////////////////////////////////

@Entity( COLLECTION_NAME )
export class Shop extends BaseEntity
{
    @ObjectIdColumn({ primary : true })
    _id : ObjectID;
    
    @Column('string', { unique : true })
    userID : ObjectID;

    @Column('array')
    staff : Worker[] = [];
    
    @Column('array')
    buildings : Building[] = [];

    ////////////////////////////////////////////////////////////////////////

    constructor( userID : ObjectID )
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
        {
            const baseLevel = 1;
            const basePrice = Math.floor( ( Math.random() * 20 ) + 10 ) * 100; // TODO rework
            const baseProduction = Math.floor( ( Math.random() * 20 ) + 5 ); // TODO rework

            const building = new Building( `Building${ i }`, BuildingsTypes.MINE, baseLevel, basePrice, baseProduction, [] );

            toReturn.push( building );
        }

        return toReturn;
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
}