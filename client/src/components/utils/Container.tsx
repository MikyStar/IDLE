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

	const WrapContent = ( props: { children: React.ReactNode } ) => <div style={{ float : 'left', position : 'initial', width : '100%' }}>{ props.children }</div>

	const Centered = ( props: { children: React.ReactNode, X : boolean, Y : boolean } ) =>
	{
		const styleForVertical : React.CSSProperties =
		{
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column'
		}

		const styleForHorizontal : React.CSSProperties =
		{
			textAlign : 'center',
			margin : '0 auto'
		}

		const finalStyle = ( () =>
		{
			let final = {};

			if( props.X )
				final = { ...final, ...styleForHorizontal }

			if( props.Y )
				final = { ...final, ...styleForVertical }

			return final;
		})()

		return <div style={{ ...finalStyle }}>{ props.children }</div>
	};

	/*
	top : ( center && center.Y ) ? '50%' : '0%',
	left : ( center && center.X ) ? '50%' : '0%',
	transform : `translate( ${ ( center && center.X ) ? '-50%' : '0%' }, ${ ( center && center.Y ) ? '-50%' : '0%' } )`
	*/

	//////////////////////////////////////////////////////////////////

	return	(
				<Centered X={ howCentered.X } Y={ howCentered.Y }>
					<WrapContent>
						<Tooltip>
							<Border>
								<Padding>
									{ children }
								</Padding>
							</Border>
						</Tooltip>
					</WrapContent>
				</Centered>
			);
}

//////////////////////////////////////////////////////////////////////

export default Container;