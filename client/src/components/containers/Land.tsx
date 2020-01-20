import React from 'react';

import { BuildingProps } from './Building';

//////////////////////////////////////////////////////////////////

interface Props
{
	style ?: React.CSSProperties,
	buildings : BuildingProps[],
	name : string,
	unlockPrice : string
}

//////////////////////////////////////////////////////////////////

const Land : React.FC<Props> = ({ style }) =>
{
	const calculateProduction : any = () =>
	{
		return '';
	}

	const calculateSlots : any = () =>
	{
		return null;
	}

	//////////////////////////////////////////////////////////////////

	const Title : React.FC = () =>
	(
		<>
		</>
	)

	//////////////////////////////////////////////////////////////////

	return	(
				<div style={{ ...mainStyle, ...style }}>

					<Title />

				</div>
			);
}

//////////////////////////////////////////////////////////////////

const mainStyle : React.CSSProperties =
{
	display : 'flex',
	flexDirection : 'row',
	justifyContent : 'space-arround',
	alignItems : 'center'
}

//////////////////////////////////////////////////////////////////

export default Land;
