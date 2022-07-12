import React from 'react';

import * as S from './Card.style';

interface IProps {
	noPadding?: boolean;
	hover?: boolean;
	withShadow?: boolean;
	noBorder?: boolean;
	/** Allow the content overflow the card container, e.g. dropdown selection */
	allowOverflow?: boolean;
	id?: string;
	children: React.ReactNode;
}

const Card = ({
	noPadding = false,
	withShadow = false,
	noBorder = false,
	hover = false,
	allowOverflow = false,
	id = 'cardComponent',
	children
}: IProps) => (
	<S.Wrapper id={id}>
		<S.Card
			className="card"
			{...{ withShadow, noBorder, hover, allowOverflow }}
		>
			<S.Content {...{ noPadding }}>{children}</S.Content>
		</S.Card>
	</S.Wrapper>
);

export default Card;
