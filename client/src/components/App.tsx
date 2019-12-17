import React from 'react';

import '../styles/css/App.css';
import TestGrid from './TestGrid';
import Building, { BuildingType } from './containers/Building';
import NavBar from './containers/NavBar';
import Container from './utils/Container';

//////////////////////////////////////////////////////////////////////

const App:  React.FC = () =>
{
	const mainStyle : React.CSSProperties =
	{
		height : '100%',
		position: 'relative',
		border: '1px solid red',
		backgroundColor: '#212121',
		color: '#f5f5f5',
		fontFamily: "Courier New, Courier, monospace"
	}
	//////////////////////////////////////////////////////////////////

	return 	(
				<div style={ mainStyle }>
					{/*
						<Building
							type={ BuildingType.FACTORY }
							material='Coal'
							level={ 1 }
							workers={ 1 }
							productionRate={ 3 }
							upgradePrice={ '5k' }
						/>
					 */}

					<NavBar />

					<Container title='Test' center={{ Y : true }} style={{ width : '1500px' }}>
						<div style={{ height : '200px', width : '300px', backgroundColor : 'green' }}></div>
						<Container  noBorder><div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div></Container>
						<Container noBorder center={{ X : true }}><div>Illo provident consequuntur incidunt possimus tempora impedit, magni, </div></Container>
					</Container>
				</div>
			);
}

//////////////////////////////////////////////////////////////////////

export default App;