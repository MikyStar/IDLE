import React from 'react';

import routes, { RouteType } from '../../routes/routes';

//////////////////////////////////////////////////////////////////////

interface NavBarProps
{
	width ?: string,
	index : number,
	onClick : ( index : number ) => void,
	className ?: string,
	style ?: React.CSSProperties
}

//////////////////////////////////////////////////////////////////////

const NavBar : React.FC<NavBarProps> = ( { width , index, onClick, className, style } : NavBarProps ) =>
{
	const NavBarItems = ( props : { route : RouteType, index : number }  ) =>
	{
		const { icon, name, path } = props.route;

		const innerFlex : React.CSSProperties =
		{
			display : 'flex',
			justifyContent : 'center',
			width : width || '100px'
		}

		const lineStyle : React.CSSProperties =
		{
			borderLeft : ( props.index === index ) ? '5px solid white' : ''
		}

		//////////////////////////////////////////////////////////////

		return	<div style={{ ...innerFlex, ...lineStyle, cursor : 'pointer' }}>
					<img
						key={ index }
						src={ icon }
						alt={ name }
						title={ name }
						style={ ( props.index === index ) ? {} : { opacity : 0.2 } }
						onClick={ () => onClick( props.index ) }
					/>
				</div>
	}

	//////////////////////////////////////////////////////////////////

	return	(
				<div style={{ ...flexStyle, ...style }} className={ className }>
					{ routes.map( ( route, i ) => <NavBarItems key={ i } route={ route } index={ i } /> ) }
				</div>
			);
}

//////////////////////////////////////////////////////////////////////

const flexStyle : React.CSSProperties =
{
	display : 'flex',
	flexDirection : 'column',
	justifyContent : 'space-around'
}

//////////////////////////////////////////////////////////////////////

export default NavBar;