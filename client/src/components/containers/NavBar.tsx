import React from 'react';

import routes, { RouteType } from '../../routes/routes';
import Icon from '../utils/Icon';
import { Link } from 'react-router-dom';

//////////////////////////////////////////////////////////////////////

interface NavBarProps
{
	width ?: string,
	index : number,
	iconRatio ?: string,
	onClick : ( index : number ) => void,
	className ?: string,
	style ?: React.CSSProperties
}

//////////////////////////////////////////////////////////////////////

const NavBar : React.FC<NavBarProps> = ( { width , index, onClick, className, style, iconRatio } : NavBarProps ) =>
{
	const NavBarItems = ( props : { route : RouteType , index : number }  ) =>
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

		return	<Link to={ path }>
					<div style={{ ...innerFlex, ...lineStyle, cursor : 'pointer' }}>
						<Icon
							file={ icon }
							name={ name }
							style={ ( props.index === index ) ? {} : { opacity : 0.2 } }
							onClick={ () => onClick( props.index ) }
							ratio={ iconRatio || '50px' }
						/>
					</div>
				</Link>
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