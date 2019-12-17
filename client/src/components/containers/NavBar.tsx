import React from 'react';

import routes, { RouteType } from '../../routes/routes';

//////////////////////////////////////////////////////////////////////

interface NavBarProps
{

}

//////////////////////////////////////////////////////////////////////

const NavBar : React.FC<NavBarProps> = ( {} : NavBarProps ) =>
{
	const style : React.CSSProperties =
	{
		height : '100%',
		display : 'flex',
		flexDirection : 'column',
		alignItems : 'space-between'
	}

	const NavBarItems = ( {}  ) =>
	{

	}

	//////////////////////////////////////////////////////////////////

	return	(
				<div style={ style }>
					{ routes.map( route => <img key={ route.name } src={ route.icon } alt={ route.name } title={ route.name } /> ) }
				</div>
			);
}

//////////////////////////////////////////////////////////////////////

export default NavBar;