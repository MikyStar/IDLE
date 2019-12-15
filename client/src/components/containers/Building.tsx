import React, { useState } from 'react'
import GridLayout from 'react-grid-layout';

import '../../styles/css/Building.css';
import star from '../../assets/icons/star.svg';
import people from '../../assets/icons/people.svg';
import hammer from '../../assets/icons/hammer.svg';
import bolt from '../../assets/icons/bolt.svg';

//////////////////////////////////////////////////////////////////////

interface BuildingProps
{
	type : BuildingType,
	material : string, // TODO there too
	level : number,
	workers : number,
	productionRate : number,
	upgradePrice : string, // TODO make type with value and unit
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
						className={ 'layout border' }
						style={{ width : `${ WIDTH }px` }}
						layout=	{[
									{ i: 'type', x: 0, y: 0, w: 2, h: 1, static : true },
									{ i: 'material', x: 4, y: 0, w: 2, h: 1, static : true },
									{ i: 'levelIcon', x: 0, y: 2, w: 2, h: 1, static : true },
									{ i: 'level', x: 4, y: 2, w: 2, h: 1, static : true },
									{ i: 'workersIcon', x: 0, y: 4, w: 2, h: 1, static : true },
									{ i: 'workers', x: 4, y: 4, w: 2, h: 1, static : true },
									{ i: 'productionIcon', x: 0, y: 6, w: 2, h: 1, static : true },
									{ i: 'productionRate', x: 4, y: 6, w: 2, h: 1, static : true },
									{ i: 'upgradePrice', x: 8, y: 3.5, w: 2, h: 1, static : true },
								]}
						rowHeight={ 20 }
						cols={ 9 }
						width={ WIDTH }
						autoSize
					>
						<div key='type' style={{ fontWeight : 'bolder', textAlign : 'center' }}>{ type }</div>
						<div key='material' style={{ fontStyle : 'italic' }}>{ material }</div>
						<img key='levelIcon' src={ star } />
						<div key='level'>{ level } / 5</div>
						<img key='workersIcon' src={ people } />
						<div key='workers'>{ workers } / 3</div>
						<img key='productionIcon' src={ productionIconSVG } />
						<div key='productionRate'>{ productionRate } / s</div>
						<div key='upgradePrice' style={{ fontWeight : 'bold' }}>{ upgradePrice }</div>
					</GridLayout>
				</>
			);
}

//////////////////////////////////////////////////////////////////////

export default Building;