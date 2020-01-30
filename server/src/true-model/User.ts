import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

////////////////////////////////////////////////////////////////////////////

@Entity()
export class User
{
    @PrimaryGeneratedColumn()
    id : string;
    
    @Column('string')
    email : string;

    @Column('string')
    passwordHash : string;

    @Column('number')
    money : number;

    @Column('number')
    production : Number;

    @Column('datetime')
    lastUpdate : Date;

    @Column('array')
    staff : [String];

    @Column('array')
    buildings : [String];

    @Column('number')
    slotsAvailable : Number;
}