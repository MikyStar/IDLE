import React from 'react'

import Icon from '../utils/Icon';
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
	style ?: React.CSSProperties,
	imageRatio ?: string
}

export enum BuildingType
{
	MINE = 'Mine',
	FACTORY = 'Factory'
}

//////////////////////////////////////////////////////////////////////

const Building : React.FC<BuildingProps> = ( { type, material, level, workers, productionRate, upgradePrice, style, imageRatio } : BuildingProps ) =>
{
	const Upgrade = () =>
	{
		return	(
					<div style={{
									display : 'flex',
									flexDirection : 'column',
									justifyContent : 'center',
									fontWeight : 'bolder',
									fontSize : '20px',
									padding : '5px',
									cursor : 'pointer',
									alignItems : 'center'
								}}
					>
						<div style=	{{
										display : 'flex',
										justifyContent :'space-around',
										borderRadius : '20px',
										border : '3px solid white',
										padding : '10px',
									}}
						>
							<Icon name='Upgrade' file={ arrowUp } ratio='20px' />
							<div style={{ verticalAlign : 'middle', textAlign : 'center', height : '100%', margin : 'auto' }}>{ upgradePrice }</div>
						</div>
					</div>
				);
	}

	//////////////////////////////////////////////////////////////////////

	return	(
				<div style={{ ...mainGrid, ...style }}>

					<div style={{ fontWeight : 'bolder', textAlign : 'center' }}>{ type }</div>
					<div style={{ fontStyle : 'italic' }}>{ material }</div>

					<div style={{ display : 'flex', flexBasis : 'row', justifyContent : 'center', gridColumn : 3, gridRow : '1/5' }} >
						<Upgrade />
					</div>

					<Icon name='Level' file={ star } />
					<div key='level'>{ level } / 5</div>

					<Icon name='Staff' file={ people } />
					<div key='workers'>{ workers } / 3</div>

					<Icon name='Production' file={ type === BuildingType.FACTORY ? bolt : hammer } />
					<div key='productionRate'>{ productionRate } / s</div>

				</div>
			);
}

//////////////////////////////////////////////////////////////////////

const mainGrid : React.CSSProperties =
{
	display : 'grid',
	gridTemplateColumns : 'repeat(3, 1fr)',
	gridTemplateRows : 'repeat(4, 1fr)',
	border : '3px solid white',
	borderRadius : '20px',
	padding : '10px',
	alignItems : 'center',
	textAlign : 'center'
}

//////////////////////////////////////////////////////////////////////

export default Building;