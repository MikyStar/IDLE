import React, { useState } from 'react';

import '../styles/css/App.css';
import TestGrid from './TestGrid';
import Building, { BuildingType } from './containers/Building';
import NavBar from './containers/NavBar';
import Container from './utils/Container';

//////////////////////////////////////////////////////////////////////

const DEFAULT_TAB_INDEX = 1;

//////////////////////////////////////////////////////////////////////

const App:  React.FC = () =>
{
	const [ tabSelectedIndex, setSelectedTabIndex ] = useState( DEFAULT_TAB_INDEX )

	//////////////////////////////////////////////////////////////////

	return	(
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

					<NavBar
						index={ tabSelectedIndex }
						onClick={ index => setSelectedTabIndex( index ) }
					/>
				</div>
			);
}

//////////////////////////////////////////////////////////////////

const mainStyle : React.CSSProperties =
{
	height : '100vh',
	padding : 0,
	margin : 0,
	backgroundColor: '#212121',
	color: '#f5f5f5',
	fontFamily: 'Courier New, Courier, monospace'
}

//////////////////////////////////////////////////////////////////////

export default App;