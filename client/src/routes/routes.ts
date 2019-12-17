import dashboard from '../assets/icons/dashboard.svg';
import map from '../assets/icons/map.svg';
import briefcase from '../assets/icons/briefcase.svg';
import people from '../assets/icons/people.svg';
import brain from '../assets/icons/brain.svg';
import settings from '../assets/icons/settings.svg';

//////////////////////////////////////////////////////////////////////

export interface RouteType
{
	name : string,
	icon : string,
	path : string
}

//////////////////////////////////////////////////////////////////////

const routes : RouteType[] =
[
	{
		name : 'Dashboard',
		icon : dashboard,
		path : '/'
	},
	{
		name : 'Map',
		icon : map,
		path : '/map'
	},
	{
		name : 'Items',
		icon : briefcase,
		path : '/items'
	},
	{
		name : 'Staff',
		icon : people,
		path : '/staff'
	},
	{
		name : 'Research',
		icon : brain,
		path : '/research'
	},
	{
		name : 'Settings',
		icon : settings,
		path : '/settings'
	},
];

//////////////////////////////////////////////////////////////////////

export default routes;