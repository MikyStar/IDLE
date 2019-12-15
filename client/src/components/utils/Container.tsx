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

	children : ReactNode
}

interface Center
{
	X ?: boolean,
	Y ?: boolean
}

//////////////////////////////////////////////////////////////////////

const Container : React.FC<ContainerProps> = ( { noBorder, title, radius, thickness, color, center, dashed, children, padding } : ContainerProps ) =>
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

	const Tooltip = ( props: { children: React.ReactNode } ) => <div title={ title || '' }>{ props.children }</div>;

	const Border = ( props: { children: React.ReactNode } ) =>
	{
		return	(
					<div style={{
									border : ( !noBorder ) ? ( `${ dashed ? 'dashed' : 'solid' } ${ thickness || '3' }px ${ color || 'white' }` ) : '',
									borderRadius : ( !noBorder ) ? ( radius ? `${ radius }px` : '20px' ) : '',
								}}
					>{ props.children }</div>
				)
	};

	const Padding = ( props: { children: React.ReactNode } ) => <div style={{ padding : padding || '10px' }}>{ props.children }</div>

	const WrapContent = ( props: { children: React.ReactNode } ) => <div style={{ float : 'left', display : 'flex' }}>{ props.children }</div>

	const Centered = ( props: { children: React.ReactNode, X : boolean, Y : boolean } ) =>
	{
		return	(
					/*<div style={{ position : 'relative' }}>
						<div style={{ margin : 0, position : 'absolute', top : '50%', msTransform : 'translateY(-50%)', transform : 'translateY(-50%)' }}
						>
						{ props.children }
					</div>
				</div>*/
					<div style={{ display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column'}}>{ props.children }</div>
				)
	};

	/*
	top : ( center && center.Y ) ? '50%' : '0%',
	left : ( center && center.X ) ? '50%' : '0%',
	transform : `translate( ${ ( center && center.X ) ? '-50%' : '0%' }, ${ ( center && center.Y ) ? '-50%' : '0%' } )`
	*/

	//////////////////////////////////////////////////////////////////

	return	(
					<WrapContent>
						<Tooltip>
							<Border>
								<Padding>
									<Centered X={ howCentered.X } Y={ howCentered.Y }>
										{ children }
									</Centered>
								</Padding>
							</Border>
						</Tooltip>
					</WrapContent>
			);
}

//////////////////////////////////////////////////////////////////////

export default Container;