import React, { Children, ReactNode } from 'react';

//////////////////////////////////////////////////////////////////////

interface ContainerProps
{
	radius ?: number,
	thickness ?: number,
	color ?: string,
	center ?: Center,
	dashed ?: boolean,
	padding ?: number,
	vertical ?: boolean,
	noBorder ?: boolean

	children : ReactNode
}

interface Center
{
	X ?: boolean,
	Y ?: boolean
}

//////////////////////////////////////////////////////////////////////

const Container : React.FC<ContainerProps> = ( { noBorder, radius, thickness, color, center, dashed, children, padding } : ContainerProps ) =>
{
	return	(
				<div style=	{{
								border : ( !noBorder ) ? ( `${ dashed ? 'dashed' : 'solid' } ${ thickness || '3' }px ${ color || 'white' }` ) : '',
								borderRadius : ( !noBorder ) ? ( radius ? `${ radius }px` : '20px' ) : '',
								position : center ? 'relative' : 'absolute',
								padding : padding ? `${ padding }px` : '10px'
							}}
				>
					<div style=	{{
									float : 'left',
									top : ( center && center.Y ) ? '50%' : '0%',
									left : ( center && center.X ) ? '50%' : '0%',
									transform : `translate( ${ ( center && center.X ) ? '-50%' : '0%' }, ${ ( center && center.Y ) ? '-50%' : '0%' } )`
								}}
					>
						{ children }
					</div>
				</div>
			);
}

//////////////////////////////////////////////////////////////////////

export default Container;