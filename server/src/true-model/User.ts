import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ObjectIdColumn } from "typeorm";

////////////////////////////////////////////////////////////////////////////

@Entity()
export class User extends BaseEntity
{
    @ObjectIdColumn()
    id : string;
    
    @Column('string')
    email : string;

    @Column('string')
    passwordHash : string;

    @Column('number', { default : 5000 })
    money : number;

    @Column('number', { default : 0 })
    production : number;

    @Column('datetime', { default : Date.now })
    lastUpdate : Date;

    @Column('array')
    staff : [string];

    @Column('array')
    buildings : [string];

    @Column('number', { default : 6 })
    slotsAvailable : number;
}