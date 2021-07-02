import styled from 'styled-components';

export const H1 = styled.h1`
    padding: 0;
    margin: 0;
    
	font-size: ${({ theme }) => theme.fontSize[3]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.subHeading};

	color: ${props => props.theme.color.font.primary};
`;