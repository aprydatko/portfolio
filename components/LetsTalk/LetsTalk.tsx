import React from 'react';
import { Grid } from '../../styles';
import { Wrapper, Question, Email } from './LetsTalk.styles';

export const LetsTalk = (): JSX.Element => {
	return (
		<Wrapper>
			<Grid>
				<Question>Do you have project? Let’s talk!</Question>
				<Email href="malito:artyrpridatko@gmail.com">hi@robetrtlong.com</Email>
			</Grid>
		</Wrapper>
	);
};