import React from 'react';

import routes, { RouteType } from '../../routes/routes';

//////////////////////////////////////////////////////////////////////

interface NavBarProps
{
	width ?: string,
	index : number,
	onClick : ( index : number ) => void
}

//////////////////////////////////////////////////////////////////////

const NavBar : React.FC<NavBarProps> = ( { width , index, onClick } : NavBarProps ) =>
{
	const style : React.CSSProperties =
	{
		height : '100%',
		display : 'flex',
		flexDirection : 'column',
		alignItems : 'space-between'
	}

	const NavBarItems = ( props : { route : RouteType, index : number }  ) =>
	{
		const { icon, name, path } = props.route;

		const flex : React.CSSProperties =
		{
			display : 'flex',
			justifyContent : 'space-between',
			width : width || '100px'
		}

		const cursor : React.CSSProperties = { cursor : 'pointer' }

		//////////////////////////////////////////////////////////////

		return	<div style={ flex }>
					<div style={ ( props.index === index ) ? { borderLeft : '5px solid white' } : {} }></div>
					<img
						key={ index }
						src={ icon }
						alt={ name }
						title={ name }
						style={ ( props.index === index ) ? { ...cursor } : { opacity : 0.2, ...cursor } }
						onClick={ () => onClick( props.index ) }
					/>
				</div>
	}

	//////////////////////////////////////////////////////////////////

	return	(
				<div style={ style }>
					{ routes.map( ( route, i ) => <NavBarItems route={ route } index={ i } /> ) }
				</div>
			);
}

//////////////////////////////////////////////////////////////////////

export default NavBar;