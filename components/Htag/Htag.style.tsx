import styled from "styled-components";

export const H1 = styled.h1`
    padding: 0;
    margin: 0;

    font-size: ${({ theme }) => theme.fontSize["xl"]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    color: ${(props) => props.theme.color.font.primary};

    @media only screen and (max-width: 1024px) {
        font-size: 60px;
    }
    @media only screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.fontSize["md"]};
    }
`;

export const H2 = styled.h2`
    padding: 0;
    margin: 0;

    font-size: ${({ theme }) => theme.fontSize["lg"]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    color: ${(props) => props.theme.color.font.primary};

    @media only screen and (max-width: 1024px) {
        font-size: 60px;
    }
    @media only screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.fontSize["md"]};
    }
`;

export const H3 = styled.h3`
    padding: 0;
    margin: 0;

    font-size: ${({ theme }) => theme.fontSize["md"]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: uppercase;

    color: ${(props) => props.theme.color.font.primary};
`;

export const H4 = styled.h4`
    padding: 0;
    margin: 0;

    font-size: ${({ theme }) => theme.fontSize["md"]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 300;

    color: ${(props) => props.theme.color.font.primary};
`;
