import React from 'react';
import GridLayout from 'react-grid-layout';

//////////////////////////////////////////////////////////////////////

export default class TestGrid extends React.Component
{
	render()
	{
		const layout =
		[
			{ i: 'a', x: 0, y: 0, w: 1, h: 1, static : true },
			{ i: 'b', x: 1, y: 5, w: 3, h: 2, static : true },
			{ i: 'c', x: 4, y: 0, w: 1, h: 3, static : true },
			{ i: 'd', x: 4, y: 0, w: 6, h: 3, static : true },
			{ i: 'e', x: 0, y: 2, w: 2, h: 2, static : true }
		];

		return	(
					<GridLayout
						style={{ backgroundColor : 'purple' }}
						className="layout"
						layout={layout}
						cols={ 12 }
						rowHeight={30}
						width={1000}
						compactType={"horizontal"}
						isDraggable={ false }
					>
						<div key="a" style={{ backgroundColor : 'red' }}>a</div>
						<div key="b" style={{ backgroundColor : 'blue' }}>b</div>
						<div key="c" style={{ backgroundColor : 'green' }}>c</div>
						<div key="d" style={{ backgroundColor : 'pink' }}>d</div>
						<div key="e" style={{ backgroundColor : 'cornflowerblue' }}>e</div>
					</GridLayout>
				);
	}
}