import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectIdColumn, ObjectID } from "typeorm";
import moment from 'moment';

////////////////////////////////////////////////////////////////////////////

const COLLECTION_NAME = "users";
const TIMESTAMP_FORMAT = "DD/MM/YYYY HH:mm:ss";

////////////////////////////////////////////////////////////////////////////

@Entity( COLLECTION_NAME )
export class User extends BaseEntity
{
    @ObjectIdColumn({ primary : true })
    _id : ObjectID;
    
    @Column('string', { unique : true,  })
    email : string;

    @Column('string')
    passwordHash : string;

    @Column('number')
    money : number = 5000;

    @Column('number')
    production : number = 0;

    @Column('datetime')
    lastUpdate : Date = moment().format( TIMESTAMP_FORMAT );

    @Column('array')
    staff : string[] = [];

    @Column('array')
    buildings : string[] = [];

    @Column('number')
    slotsAvailable : number = 6;
}