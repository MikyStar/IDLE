import React from 'react';

//////////////////////////////////////////////////////////////////////

interface Props
{
	tabName : string,
	onTabNameClick : () => void,
	totalMoney : string,
	productionRate : string
	style ?: React.CSSProperties
}

//////////////////////////////////////////////////////////////////////

const TopStatus : React.FC<Props> = ( { tabName, onTabNameClick, totalMoney, productionRate, style } : Props ) =>
{
	return	(
				<div style={{ ...mainStyle, ...style }}>

					<div onClick={ onTabNameClick }>
						<div>{ tabName }</div>
					</div>

				</div>
			);
}

//////////////////////////////////////////////////////////////////////

const mainStyle : React.CSSProperties =
{
	display : 'flex',
	justifyContent : 'space-between'
}

//////////////////////////////////////////////////////////////////////

export default TopStatus;