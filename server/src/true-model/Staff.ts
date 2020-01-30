import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID } from "typeorm";

////////////////////////////////////////////////////////////////////////////

const COLLECTION_NAME = "staff";

////////////////////////////////////////////////////////////////////////////

export enum WorkerTypes
{
    MINER = 'miner',
    WOKER = 'worker',
    SCIENTIST = 'scientist'
}

////////////////////////////////////////////////////////////////////////////

@Entity( COLLECTION_NAME )
export class Worker extends BaseEntity
{
    @ObjectIdColumn({ primary : true })
    _id : ObjectID;
    
    @Column('string')
    name : string;

    @Column('string')
    type : WorkerTypes;

    @Column('number')
    basePrice : number;

    ////////////////////////////////////////////////////////////////////////

    constructor( name : string, type : WorkerTypes, basePrice : number )
    {
        super();
        this.name = name;
        this.type = type;
        this.basePrice = basePrice;
    }
}