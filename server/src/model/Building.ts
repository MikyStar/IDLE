import { Entity, Column, BaseEntity, ObjectIdColumn, ObjectID, OneToMany } from "typeorm";

////////////////////////////////////////////////////////////////////////////

const COLLECTION_NAME = "buildings";

////////////////////////////////////////////////////////////////////////////

export enum BuildingsTypes
{
    MINE = 'mine',
    FACTORY = 'factory',
}

////////////////////////////////////////////////////////////////////////////

@Entity( COLLECTION_NAME )
export class Building extends BaseEntity
{
    @ObjectIdColumn({ primary : true })
    _id : ObjectID;
    
    @Column('string')
    name : string;

    @Column('string')
    type : BuildingsTypes;

    @Column('number')
    currentLevel : number;

    @Column('number')
    basePrice : number;

    @Column('number')
    productionRate : number;
    
    @Column('array')
    staff : string[];

    ////////////////////////////////////////////////////////////////////////

    constructor( name : string, type : BuildingsTypes, currentLevel : number, basePrice : number, productionRate : number, staff : string[] )
    {
        super();
        this.name = name;
        this.type = type;
        this.currentLevel = currentLevel;
        this.productionRate = productionRate;
        this.basePrice = basePrice;
        this.staff = staff;
    }
}