import React, { useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Building, { BuildingType } from './containers/Building';
import NavBar from './containers/NavBar';
import TopStatus from './containers/TopStatus';
import routes from '../components/pages/routes';

//////////////////////////////////////////////////////////////////////

const DEFAULT_TAB_INDEX = 0;
const NAVBAR_WIDTH = '100px';
const BUILDING_WIDTH = '250px';
const IMAGE_RATIO_BUILDING = '30px';
const IMAGE_RATIO_NAVBAR = '45px';

//////////////////////////////////////////////////////////////////////

const App:  React.FC = () =>
{
	const [ tabSelectedIndex, setSelectedTabIndex ] = useState( DEFAULT_TAB_INDEX );

	//////////////////////////////////////////////////////////////////

	return	(
					<div style={{ ...mainStyle, ...mainGrid }}>

						<Router>
							<NavBar
								iconRatio={ IMAGE_RATIO_NAVBAR }
								style={{ gridArea : 'nav' }}
								index={ tabSelectedIndex }
								onClick={ index => setSelectedTabIndex( index ) }
							/>

							<TopStatus
								canGoBack
								tabName={ routes[ tabSelectedIndex ].name }
								productionRate='me too'
								totalMoney='here also'
								style={{ gridArea : 'status' }}
								onTabNameClick={ () => console.log( 'back' ) }
							/>

							<div style={{ gridArea : 'content' }}>
								<Switch>
									{ routes.map( ( route, index ) => <Route exact key={ index } path={ route.path } component={ route.page } /> ) }
								</Switch>
							</div>
						</Router>

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
	gridTemplateColumns : `${ NAVBAR_WIDTH } auto`,
	gridTemplateRows : '10% auto',
	gridTemplateAreas :	`
							'nav status'
							'nav content'
						`
}

//////////////////////////////////////////////////////////////////////

export default App;