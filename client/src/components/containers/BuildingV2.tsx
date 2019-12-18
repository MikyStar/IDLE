import React from 'react'

import '../../styles/css/utils/Borders.css';
import star from '../../assets/icons/star.svg';
import people from '../../assets/icons/people.svg';
import hammer from '../../assets/icons/hammer.svg';
import bolt from '../../assets/icons/bolt.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';

//////////////////////////////////////////////////////////////////////

interface BuildingProps
{
	type : BuildingType,
	material : string, // TODO there too
	level : number,
	workers : number,
	productionRate : number,
	upgradePrice : string, // TODO make type with value and unit and if should be crossed
	style ?: React.CSSProperties
}

export enum BuildingType
{
	MINE = 'Mine',
	FACTORY = 'Factory'
}

//////////////////////////////////////////////////////////////////////

const WIDTH = 400;

//////////////////////////////////////////////////////////////////////

const Building : React.FC<BuildingProps> = ( { type, material, level, workers, productionRate, upgradePrice, style } : BuildingProps ) =>
{
	const productionIconSVG = type === BuildingType.FACTORY ? bolt : hammer;

	const Row = ( props : { children : JSX.Element[] }  ) =>	<div style={{ display : 'flex', justifyContent : 'space-arround' }}>
																	{ props.children }
																</div>

	//////////////////////////////////////////////////////////////////////

	return	(
				<div style={{ ...mainGrid, ...border, ...style }}>

					<div style={{ fontWeight : 'bolder', textAlign : 'center' }}>{ type }</div>
					<div style={{ fontStyle : 'italic' }}>{ material }</div>

					<div style={{ width : '1fr' }} ></div>

					<img key='levelIcon' src={ star } alt='Level' title='Level' />
					<div key='level'>{ level } / 5</div>

					<div style={{ width : '1fr' }} ></div>

					<img key='workersIcon' src={ people } alt='Workers' title='Workers' />
					<div key='workers'>{ workers } / 3</div>

					<div key='upgrade' className='border-normal' style={{ fontWeight : 'bolder', fontSize : '20px', padding : '5px', position : 'relative', cursor : 'pointer' }}>
						<div style={{ alignItems : 'center', display : 'flex', float : 'left', position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)' }}>
							<img src={ arrowUp } alt='Upgrade' title='Upgrade' height='30px' style={{ padding : '5px' }}/>
							<div style={{ padding : '5px' }}>{ upgradePrice }</div>
						</div>
					</div>

					<img key='productionIcon' src={ productionIconSVG } alt={ `${ type }` } title={ `${ type }` } />
					<div key='productionRate'>{ productionRate } / s</div>

					<div style={{ width : '1fr' }} ></div>

				</div>
			);
}

//////////////////////////////////////////////////////////////////////

const mainGrid : React.CSSProperties =
{
	display : 'grid',
	gridTemplateColumns : 'repeat(3, 1fr)',
	gridTemplateRows : 'repeat(4, 1fr)',
}

const border : React.CSSProperties =
{
	borderStyle : '3px solid white',
	borderRadius : '20px'
}

//////////////////////////////////////////////////////////////////////

export default Building;