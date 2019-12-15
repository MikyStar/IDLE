import React from 'react'
import GridLayout from 'react-grid-layout';

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
}

export enum BuildingType
{
	MINE = 'Mine',
	FACTORY = 'Factory'
}

//////////////////////////////////////////////////////////////////////

const WIDTH = 400;

//////////////////////////////////////////////////////////////////////

const Building : React.FC<BuildingProps> = ( { type, material, level, workers, productionRate, upgradePrice } : BuildingProps ) =>
{
	const productionIconSVG = type === BuildingType.FACTORY ? bolt : hammer;

	return	(
				<>
					<GridLayout
						className={ 'layout border-normal' }
						style={{ width : `${ WIDTH }px` }}
						layout=	{[
									{ i: 'type', x: 2, y: 0, w: 2, h: 1, static : true },
									{ i: 'material', x: 6, y: 0, w: 2, h: 1, static : true },
									{ i: 'levelIcon', x: 0, y: 2, w: 2, h: 1, static : true },
									{ i: 'level', x: 4, y: 2, w: 2, h: 1, static : true },
									{ i: 'workersIcon', x: 0, y: 4, w: 2, h: 1, static : true },
									{ i: 'workers', x: 4, y: 4, w: 2, h: 1, static : true },
									{ i: 'productionIcon', x: 0, y: 6, w: 2, h: 1, static : true },
									{ i: 'productionRate', x: 4, y: 6, w: 2, h: 1, static : true },
									{ i: 'upgrade', x: 8, y: 3, w: 3, h: 2, static : true },
								]}
						rowHeight={ 20 }
						cols={ 12 }
						width={ WIDTH }
						autoSize
					>
						<div key='type' style={{ fontWeight : 'bolder', textAlign : 'center' }}>{ type }</div>
						<div key='material' style={{ fontStyle : 'italic' }}>{ material }</div>

						<img key='levelIcon' src={ star } alt='Level' title='Level' />
						<div key='level'>{ level } / 5</div>

						<img key='workersIcon' src={ people } alt='Workers' title='Workers' />
						<div key='workers'>{ workers } / 3</div>

						<img key='productionIcon' src={ productionIconSVG } alt={ `${ type }` } title={ `${ type }` } />
						<div key='productionRate'>{ productionRate } / s</div>

						<div key='upgrade' className='border-normal' style={{ fontWeight : 'bolder', fontSize : '20px', padding : '5px', position : 'relative', cursor : 'pointer' }}>
							<div style={{ alignItems : 'center', display : 'flex', float : 'left', position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)' }}>
								<img src={ arrowUp } alt='Upgrade' title='Upgrade' height='30px' style={{ padding : '5px' }}/>
								<div style={{ padding : '5px' }}>{ upgradePrice }</div>
							</div>
						</div>
					</GridLayout>
				</>
			);
}

//////////////////////////////////////////////////////////////////////

export default Building;