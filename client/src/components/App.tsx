import React from 'react';

import TestGrid from './TestGrid';
import Building from './containers/Building';
import '../styles/css/App.css';

//////////////////////////////////////////////////////////////////////

const App:  React.FC = () =>
{
	return 	(
				<>
					<Building
						type='mine'
						material='coal'
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