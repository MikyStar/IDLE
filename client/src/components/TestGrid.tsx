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
			{ i: 'e', x: 10, y: 0, w: 6, h: 2, static : true }
		];

		return	(
					<>
					<GridLayout
						style={{ backgroundColor : 'purple' }}
						className="layout"
						layout={layout}
						cols={ 12 }
						rowHeight={30}
						width={1000}
						isDraggable={ false }
					>
						<div key="a" style={{ backgroundColor : 'red' }}>a</div>
						<div key="b" style={{ backgroundColor : 'blue' }}>b</div>
						<div key="c" style={{ backgroundColor : 'green' }}>c</div>
						<div key="d" style={{ backgroundColor : 'pink', color : 'cyan', fontSize : '15px', fontWeight : "bolder" }}>
							<p>D1</p>
							<p>2</p>
							<p>3</p>
							<p>4</p>
						</div>
						<div key="e" style={{ backgroundColor : 'cornflowerblue' }}>
							<div style={{ backgroundColor: 'brown', padding : '20px' }}>
								<EmbededGrid />
							</div>
						</div>
					</GridLayout>

					<div style={{ backgroundColor: 'orange', padding : '20px' }}>
						<EmbededGrid />
					</div>
					</>
				);
	}
}

//////////////////////////////////////////////////////////////////////

const EmbededGrid = () =>
{
	const layout =
		[
			{ i: 'f', x: 0, y: 0, w: 1, h: 1, static : true },
			{ i: 'g', x: 1, y: 5, w: 2, h: 2, static : true },
			{ i: 'h', x: 2, y: 0, w: 5, h: 2, static : true },
		];

		return	(
					<GridLayout
						style={{ backgroundColor : 'white' }}
						className="layout"
						layout={layout}
						cols={ 12 }
						rowHeight={30}
						width={1000}
						isDraggable={ false }
					>
						<div key="f" style={{ backgroundColor : 'grey' }}>f</div>
						<div key="g" style={{ backgroundColor : 'darkblue' }}>g</div>
						<div key="h" style={{ backgroundColor : 'darkgreen' }}>h</div>
					</GridLayout>
				);
}