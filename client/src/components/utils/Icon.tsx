import React from 'react';

//////////////////////////////////////////////////////////////////////
interface Props
{
	name ?: string,
	file : string,
	ratio ?: string,
	style ?: React.CSSProperties,
	onClick ?: () => void
}

//////////////////////////////////////////////////////////////////////

const DEFAULT_RATIO = '30px';

//////////////////////////////////////////////////////////////////////

const Icon : React.FC<Props> = ( { name, file, style, ratio, onClick } : Props ) =>
	<img
		src={ file }
		alt={ name }
		title={ name }
		style={{ ...style, height : ratio || DEFAULT_RATIO, width : ratio || DEFAULT_RATIO }}
		onClick={ onClick }
	/>

//////////////////////////////////////////////////////////////////////

export default Icon;