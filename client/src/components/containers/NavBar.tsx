import React from 'react';

import routes, { RouteType } from '../../routes/routes';

//////////////////////////////////////////////////////////////////////

interface NavBarProps
{
	width ?: string,
	index : number
}

//////////////////////////////////////////////////////////////////////

const NavBar : React.FC<NavBarProps> = ( { width , index } : NavBarProps ) =>
{
	const style : React.CSSProperties =
	{
		height : '100%',
		display : 'flex',
		flexDirection : 'column',
		alignItems : 'space-between'
	}

	const NavBarItems = ( props : { route : RouteType, selected : boolean }  ) =>
	{
		const { icon, name, path } = props.route;

		const flex : React.CSSProperties =
		{
			display : 'flex',
			justifyContent : 'space-between',
			width : width || '100px'
		}

		//////////////////////////////////////////////////////////////

		return	<div style={ flex }>
					<div style={ props.selected ? { borderLeft : '5px solid white' } : {} }></div>
					<img
						key={ name }
						src={ icon }
						alt={ name }
						title={ name }
						style={ props.selected ? {} : { opacity : 0.2 } }
					/>
				</div>
	}

	//////////////////////////////////////////////////////////////////

	return	(
				<div style={ style }>
					{ routes.map( ( route, i ) => <NavBarItems route={ route } selected={ i === index } /> ) }
				</div>
			);
}

//////////////////////////////////////////////////////////////////////

export default NavBar;