import React from 'react';

import TestGrid from './TestGrid';
import Building, { BuildingType } from './containers/Building';
import '../styles/css/App.css';

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
				</>
			);
}

//////////////////////////////////////////////////////////////////////

export default App;