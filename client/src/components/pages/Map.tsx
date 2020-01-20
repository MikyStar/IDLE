import React from 'react';

import { BUILDING_WIDTH, IMAGE_RATIO_BUILDING } from '../../constants/index.json'
import Building, { BuildingType } from '../containers/Building';

//////////////////////////////////////////////////////////////////

const Map : React.FC = () =>
(
	<div>
		<Building
			type={ BuildingType.FACTORY }
			material='Coal'
			level={ 1 }
			workers={ 1 }
			productionRate={ 3 }
			upgradePrice={ 5000 }
			onUpgrade={ () => console.log( "up" ) }
			imageRatio={ IMAGE_RATIO_BUILDING }
			style={{ width : BUILDING_WIDTH }}
		/>
	</div>
)

//////////////////////////////////////////////////////////////////

export default Map;