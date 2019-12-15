import React, { useState } from 'react'
import GridLayout ,{ Responsive, WidthProvider } from 'react-grid-layout';

//////////////////////////////////////////////////////////////////////

const ResponsiveGridLayout = WidthProvider( Responsive );

//////////////////////////////////////////////////////////////////////

interface BuildingProps
{
	type : string, // TODO make an enum
	material : string, // TODO there too
	level : number,
	workers : number,
	productionRate : number,
	upgradePrice : string, // TODO make type with value and unit
}

//////////////////////////////////////////////////////////////////////

const Building : React.FC<BuildingProps> = ( { type, material, level, workers, productionRate, upgradePrice } : BuildingProps ) =>
(
	<>
		<GridLayout
			className={ 'layout' }
			layout=	{[
						{ i: 'type', x: 0, y: 0, w: 1, h: 1, static : true },
						{ i: 'material', x: 4, y: 0, w: 1, h: 1, static : true },
						{ i: 'level', x: 4, y: 2, w: 1, h: 1, static : true },
						{ i: 'workers', x: 4, y: 4, w: 1, h: 1, static : true },
						{ i: 'productionRate', x: 4, y: 6, w: 1, h: 1, static : true },
						{ i: 'upgradePrice', x: 8, y: 4, w: 1, h: 1, static : true },
					]}
			rowHeight={ 20 }
			cols={ 12 }
			width={ 300 }
		>
			<div key='type'>Type : { type }</div>
			<div key='material'>Material : { material }</div>
			<div key='level'>Level : { level }</div>
			<div key='workers'>Workers : { workers }</div>
			<div key='productionRate'>Prod rate : { productionRate }</div>
			<div key='upgradePrice'>Up price :{ upgradePrice }</div>
		</GridLayout>
	</>
);

//////////////////////////////////////////////////////////////////////

export default Building;