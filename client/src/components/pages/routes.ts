import dashboard from '../../assets/icons/dashboard.svg';
import map from '../../assets/icons/map.svg';
import briefcase from '../../assets/icons/briefcase.svg';
import people from '../../assets/icons/people.svg';
import brain from '../../assets/icons/brain.svg';
import settings from '../../assets/icons/settings.svg';

import Dashboard from './Dashboard';
import Items from './Items';
import Map from './Map';
import Research from './Research';
import Settings from './Settings';
import Staff from './Staff';

//////////////////////////////////////////////////////////////////////

export interface RouteType
{
	name : string,
	icon : string,
	path : string,
	page : React.FC
}

//////////////////////////////////////////////////////////////////////

const routes : RouteType[] =
[
	{
		name : 'Dashboard',
		icon : dashboard,
		path : '/',
		page : Dashboard
	},
	{
		name : 'Map',
		icon : map,
		path : '/map',
		page : Map
	},
	{
		name : 'Items',
		icon : briefcase,
		path : '/items',
		page : Items
	},
	{
		name : 'Staff',
		icon : people,
		path : '/staff',
		page : Staff
	},
	{
		name : 'Research',
		icon : brain,
		path : '/research',
		page : Research
	},
	{
		name : 'Settings',
		icon : settings,
		path : '/settings',
		page : Settings
	},
];

//////////////////////////////////////////////////////////////////////

export default routes;