import React from 'react';

import '../styles/css/App.css';
import TestGrid from './TestGrid';
import Building, { BuildingType } from './containers/Building';
import Container from './utils/Container';

//////////////////////////////////////////////////////////////////////

const App:  React.FC = () =>
{
	return 	(
				<>
					<Building
						type={ BuildingType.FACTORY }
						material='Coal'
						level={ 1 }
						workers={ 1 }
						productionRate={ 3 }
						upgradePrice={ '5k' }
					/>

					<Container title='Test' /*center={{ X : true }}*/>
						<div style={{ height : '200px' }}></div>
						<Container center noBorder><div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div></Container>
						<div>Illo provident consequuntur incidunt possimus tempora impedit, magni, amet suscipit aliquid iste veritatis quaerat commodi qui harum nostrum eveniet saepe? </div>
					</Container>
				</>
			);
}

//////////////////////////////////////////////////////////////////////

export default App;