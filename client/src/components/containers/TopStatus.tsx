import React from 'react';

import { FONT_SIZE_PRODUCTION } from '../../constants/index.json'
import Icon from '../utils/Icon';
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import dollar from '../../assets/icons/dollar.svg'

//////////////////////////////////////////////////////////////////////

interface Props
{
	tabName : string,
	canGoBack ?: boolean,
	onTabNameClick ?: () => void,
	totalMoney : string,
	productionRate : string
	style ?: React.CSSProperties
}

//////////////////////////////////////////////////////////////////////

const TopStatus : React.FC<Props> = ( { tabName, onTabNameClick, totalMoney, productionRate, style, canGoBack } : Props ) =>
{
	return	(
				<div style={{ ...mainStyle, ...style}} title={ canGoBack ? 'Go back' : '' } >

					<div onClick={ onTabNameClick } style={{ display : 'flex', alignItems : 'center', justifyContent : 'space-between', cursor : canGoBack ? 'pointer' : 'auto'  }}>
						{ canGoBack && <Icon file={  arrowLeft } /> }
						<div style={{ fontSize : '30px', fontWeight : 'lighter', marginLeft : FONT_SIZE_PRODUCTION }}>{ tabName }</div>
					</div>

					<div style={ productionStyle }>
						<Icon file={ dollar } style={{ marginRight : '10px' }} ratio={ FONT_SIZE_PRODUCTION } />
						{ totalMoney }
						<Icon file={ arrowRight } style={{ marginRight : '10px', marginLeft : '10px' }} ratio={ FONT_SIZE_PRODUCTION } />
						{ productionRate }
						&nbsp;/ s
					</div>

				</div>
			);
}

//////////////////////////////////////////////////////////////////////

const mainStyle : React.CSSProperties =
{
	display : 'flex',
	justifyContent : 'space-between',
	alignItems : 'center',
	padding : '20px'
}

const productionStyle : React.CSSProperties =
{
	display : 'flex',
	alignItems : 'center',
	justifyContent : 'space-arround',
	fontSize : FONT_SIZE_PRODUCTION,
}

//////////////////////////////////////////////////////////////////////

export default TopStatus;