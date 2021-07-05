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

export const H2 = styled.h2`
    padding: 0;
    margin: 0;
    
	font-size: ${({ theme }) => theme.fontSize[4]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.subHeading};

	color: ${props => props.theme.color.font.primary};
`;

export const H3 = styled.h3`
    padding: 0;
    margin: 0;
    
	font-size: ${({ theme }) => theme.fontSize[2]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: uppercase;

	color: ${props => props.theme.color.font.primary};
`;