import React from 'react';

import Icon from '../utils/Icon';
import arrowLeft from '../../assets/icons/arrow-left.svg'

//////////////////////////////////////////////////////////////////////

interface Props
{
	tabName : string,
	onTabNameClick ?: () => void,
	totalMoney : string,
	productionRate : string
	style ?: React.CSSProperties
}

//////////////////////////////////////////////////////////////////////

const TopStatus : React.FC<Props> = ( { tabName, onTabNameClick, totalMoney, productionRate, style } : Props ) =>
{
	return	(
				<div style={{ ...mainStyle, ...style }} title={ onTabNameClick && 'Go back' } >

					<div onClick={ onTabNameClick }>
						{ onTabNameClick && <Icon file={  arrowLeft } /> }
						<div style={{ fontSize : '30px', fontWeight : 'lighter' }}>{ tabName }</div>
					</div>

					<div></div>

				</div>
			);
}

//////////////////////////////////////////////////////////////////////

const mainStyle : React.CSSProperties =
{
	display : 'flex',
	justifyContent : 'space-between',
	alignItems : 'center',
	padding : '10px'
}

const productionStyle : React.CSSProperties =
{
	display : 'flex'
}

//////////////////////////////////////////////////////////////////////

export default TopStatus;