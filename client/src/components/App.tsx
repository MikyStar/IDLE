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
	const [ tabSelectedIndex, setSelectedTabIndex ] = useState( DEFAULT_TAB_INDEX );

	//////////////////////////////////////////////////////////////////

	return	(
				<div style={{ ...mainStyle, ...mainGrid }}>
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
						style={{ gridArea : 'nav' }}
						index={ tabSelectedIndex }
						onClick={ index => setSelectedTabIndex( index ) }
					/>
					<div style={{ backgroundColor : 'green', gridArea : 'status' }}></div>
					<div style={{ backgroundColor : 'red', gridArea : 'content' }}></div>
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

const mainGrid : React.CSSProperties =
{
	display : 'grid',
	gridTemplateColumns : '100px auto',
	gridTemplateRows : '10% auto',
	gridTemplateAreas :	`
							'nav status'
							'nav content'
						`
}

//////////////////////////////////////////////////////////////////////

export default App;