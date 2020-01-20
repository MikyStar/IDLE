export interface IMoney
{
	value : number,
	unit : Unit
}

//////////////////////////////////////////////////////////////////////

export enum Unit
{
	k = 'k',
	M = 'M',
	Md = 'Md',
	G = 'G',
}

//////////////////////////////////////////////////////////////////////

export default class Money
{
	static add( a : IMoney, b : IMoney ) : IMoney
	{
		const newValue = a.value + b.value;

		if( a.unit === b.unit )
		{
			return amIgoingToANewUnit( a, b )
				? { value : newValue, unit : getNextUnit( a.unit ) }
				: { value : newValue, unit : a.unit }
		}
		else
		{
			const highestUnit = ( howManyZeros( a.unit ) > howManyZeros( b.unit ) ) ? a.unit : b.unit;

			if( howManyZeros( a.unit ) )
			{
				// TODO
			}
		}

		return { unit : Unit.G, value : 2 }
	}

	static substract( toMe : IMoney, thatQuantity : IMoney ) : IMoney
	{
		return { unit : Unit.k, value : 0 } // TODO
	}

	static isGreater( isThis : IMoney, greaterThan : IMoney ) : boolean
	{
		if( isThis.unit === greaterThan.unit )
			return isThis.value > greaterThan.value;
		else
			return howManyZeros( isThis.unit ) > howManyZeros( greaterThan.unit );
	}
}

//////////////////////////////////////////////////////////////////

const amIgoingToANewUnit = ( a : IMoney, b : IMoney ) : boolean =>
{
	if( a.unit === b.unit )
		return a.value + b.value >= 1000;
	else
		return false;
}

/**
 * @description Returns the number of zeros associated with a Unit
 *
 * @param unit
 */
const howManyZeros = ( unit : Unit ) : number =>
{
	const humanPosition = ( Object.keys( Unit ).findIndex( ( el : string ) => el === String( unit ) ) ) + 1; // start at 1, SORRY

	return humanPosition * 3;
}

const getNextUnit = ( unit : Unit ) : Unit =>
{
	const arrayedUnits = Object.keys( Unit );

	const currentPosition = arrayedUnits.findIndex( ( el : string ) => el === String( unit ) );

	return Object.values( Unit )[ currentPosition + 1 ];
}

//////////////////////////////////////////////////////////////////

const money1 : IMoney = { unit : Unit.M, value : 34 };
const money2 : IMoney = { unit : Unit.M, value : 23 };

console.log('next unit', getNextUnit( Unit.Md ) );
console.log( 'isGreater', Money.isGreater( money1, money2 ));
