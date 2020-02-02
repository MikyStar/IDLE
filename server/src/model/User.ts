import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID } from "typeorm";
import moment from 'moment';
import { ObjectId } from "mongodb";

import { Time } from '../core/Time';

////////////////////////////////////////////////////////////////////////////

const COLLECTION_NAME = "users";

////////////////////////////////////////////////////////////////////////////

@Entity( COLLECTION_NAME )
export class User extends BaseEntity
{
    @ObjectIdColumn({ primary : true })
    _id : ObjectID;
    
    @Column('string', { unique : true })
    email : string;

    @Column('string')
    passwordHash : string;

    @Column('number')
    money : number = 5000;

    @Column('number')
    production : number = 0;

    @Column('string')
    lastUpdate : string = Time.now;

    @Column('array')
    staff : string[] = [];

    @Column('array')
    buildings : ObjectId[] = [];

    @Column('string')
    shopID : ObjectID;

    @Column('number')
    slotsAvailable : number = 6;

    ////////////////////////////////////////////////////////////////////////

    constructor( email : string, passwordHash : string )
    {
        super();
        this.email = email;
        this.passwordHash = passwordHash;
    }

    ////////////////////////////////////////////////////////////////////////

    calculateMoney() : number
    {
        const secondsSinceLastUpdate = moment( new Date( Time.now ), Time.FORMAT ).diff( this.lastUpdate, 'seconds' );

        const amountProduced = secondsSinceLastUpdate * this.production;

        return amountProduced + this.money;
    }
}