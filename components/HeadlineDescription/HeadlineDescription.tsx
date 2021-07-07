import React from 'react';
import { HeadlineDescriptionProps } from './HeadlineDescription.props';
import { Description, DescriptionWrap } from './HeadlineDescription.styles';

export const HeadlineDescription = ({ data, className }: HeadlineDescriptionProps): JSX.Element => {
	return (
		<DescriptionWrap className={className}>
			<Description>
				{data.map((description, index) => (
					<div key={index}>
						<p>{description}</p>
					</div>
				))}
			</Description>
		</DescriptionWrap>
	);
};