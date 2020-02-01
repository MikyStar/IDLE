import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID } from "typeorm";
import { ObjectId } from 'mongodb';

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
    _id : ObjectId = new ObjectId();
    
    @Column('string')
    name : string;

    @Column('string')
    type : WorkerTypes;

    @Column('number')
    basePrice : number;

    @Column('number')
    level : number;

    ////////////////////////////////////////////////////////////////////////

    constructor( name : string, type : WorkerTypes, basePrice : number, level : number )
    {
        super();
        this.name = name;
        this.type = type;
        this.basePrice = basePrice;
        this.level = level;
    }
}