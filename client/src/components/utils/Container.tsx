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

	const WrapContent = ( props: { children: React.ReactNode } ) => <div style={{ float : 'left' }}>{ props.children }</div>

	/*
	float : 'left',
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
								{ children }
							</Padding>
						</Border>
					</Tooltip>
				</WrapContent>
			);
}

//////////////////////////////////////////////////////////////////////

export default Container;