import styled from 'styled-components';

export const Container = styled.div`
	margin: 40px 0;
`;

export const Wrapper = styled.ul`
	+margin: 40px 0;
	max-width: 70%;
	padding-left: 24px;
`;

export const WrapList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: space-between;
`;

export const Paragraph = styled.li`
    list-style-type: circle;
	padding-bottom: 40px;
	font-family: ${({ theme }) => theme.fontFamily.primary};
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 300;
	color: ${({ theme }) => theme.color.font.primary};
`;