import React from 'react';

import routes, { RouteType } from '../../routes/routes';

//////////////////////////////////////////////////////////////////////

interface NavBarProps
{
	width ?: string
}

//////////////////////////////////////////////////////////////////////

const NavBar : React.FC<NavBarProps> = ( { width } : NavBarProps ) =>
{
	const style : React.CSSProperties =
	{
		height : '100%',
		display : 'flex',
		flexDirection : 'column',
		alignItems : 'space-between'
	}

	const NavBarItems = ( props : { route : RouteType }  ) =>
	{
		const { icon, name, path } = props.route;

		const flex : React.CSSProperties =
		{
			display : 'flex',
			justifyContent : 'space-between',
			width : width || '100px'
		}

		const border : React.CSSProperties =
		{
			borderLeft : '5px solid white',
		}


		return	<div style={ flex }>
					<div style={ border }></div>
					<img key={ name } src={ icon } alt={ name } title={ name } />
				</div>
	}

	//////////////////////////////////////////////////////////////////

	return	(
				<div style={ style }>
					{ routes.map( route => <NavBarItems route={ route } /> ) }
				</div>
			);
}

//////////////////////////////////////////////////////////////////////

export default NavBar;