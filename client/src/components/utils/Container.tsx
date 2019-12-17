import React, { Children, ReactNode } from 'react';

//////////////////////////////////////////////////////////////////////

interface ContainerProps
{
	radius ?: number,
	thickness ?: number,
	color ?: string,
	center ?: Center | boolean,
	dashed ?: boolean,
	padding ?: number,
	vertical ?: boolean,
	noBorder ?: boolean,
	title ?: string,
	style ?: React.CSSProperties,

	children : ReactNode
}

interface Center
{
	X ?: boolean,
	Y ?: boolean
}

//////////////////////////////////////////////////////////////////////

const Container : React.FC<ContainerProps> = ( { noBorder, style, title, vertical, radius, thickness, color, center, dashed, children, padding } : ContainerProps ) =>
{
	const howCentered : { X : boolean, Y : boolean } = ( () =>
	{
		if( !center )
			return { X : false, Y : false }
		else
		{
			if( typeof center === 'boolean' && center === true )
				return { X : true, Y : true }
			else
			{
				const X = center.X || false;
				const Y = center.Y || false;

				return { X, Y }
			}
		}
	})();

	//////////////////////////////////////////////////////////////////

	const border : React.CSSProperties =
	{
		border : ( !noBorder ) ? ( `${ dashed ? 'dashed' : 'solid' } ${ thickness || '3' }px ${ color || 'white' }` ) : '',
		borderRadius : ( !noBorder ) ? ( radius ? `${ radius }px` : '20px' ) : '',
	}

	const mPadding : React.CSSProperties = { padding : padding || '10px' }

	const centerFlex : React.CSSProperties =
	{
		display: 'flex',
		flexDirection : vertical ? 'row' : 'column',
		justifyContent : ( howCentered.X) ? 'center' : 'flex-start',
		alignItems : howCentered.Y ? 'center' : 'flex-start'
	}

	//////////////////////////////////////////////////////////////////

	return	(
				<>
					<div
						title={ title }
						style=	{{
									...style,
									...border,
									...mPadding,
									...centerFlex
								}}
					>
						{ children }
					</div>
				</>
			);
}

//////////////////////////////////////////////////////////////////////

export default Container;