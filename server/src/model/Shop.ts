import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID, OneToMany } from "typeorm";

import { Worker, WorkerTypes } from './Staff';
import { Building, BuildingsTypes } from './Building';

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
    buildings : Building[];

    ////////////////////////////////////////////////////////////////////////

    constructor( userID : ObjectID )
    {
        super();

        this.userID = userID;
        this.buildings = this.generateBuilding();
        this.staff = this.generateStaff();
    }

    ////////////////////////////////////////////////////////////////////////

    private generateBuilding() : Building[]
    {
        const toReturn : Building[] = [];

        for( let i = 0; i < SHOP_LENGTH; i++ )
        {
            const baseLevel = 1;
            const basePrice = Math.floor( ( Math.random() * 20 ) + 10 ) * 100; // TODO rework
            const baseProduction = Math.floor( ( Math.random() * 20 ) + 5 ); // TODO rework

            toReturn.push( new Building( `Building${ i }`, BuildingsTypes.MINE, baseLevel, basePrice, baseProduction, [] ) );
        }

        return toReturn;
    }

    private generateStaff() : Worker[]
    {
        const toReturn : Worker[] = [];

        for( let i = 0; i < SHOP_LENGTH; i++ )
        {
            const baseLevel = 1;
            const basePrice = Math.floor( ( Math.random() * 20 ) + 10 ) * 100; // TODO rework

            toReturn.push( new Worker( `Worker${ i }`, WorkerTypes.MINER, basePrice, baseLevel ) );
        }

        return toReturn;
    }
}