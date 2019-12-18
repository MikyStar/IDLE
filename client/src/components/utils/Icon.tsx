import React from 'react';

//////////////////////////////////////////////////////////////////////

export interface IIcon
{
	name : string,
	file : string,
	ratio ?: number
}

//////////////////////////////////////////////////////////////////////

const DEFAULT_RATIO = '30px';

//////////////////////////////////////////////////////////////////////

const Icon = ( props : { icon : IIcon, style ?: React.CSSProperties, ratio ?: number } ) =>
	<img
		src={ props.icon.file }
		alt={ props.icon.name }
		title={ props.icon.name }
		style={{ ...props.style, height : props.ratio || DEFAULT_RATIO, width : props.ratio || DEFAULT_RATIO }}
	/>

//////////////////////////////////////////////////////////////////////

export default Icon;