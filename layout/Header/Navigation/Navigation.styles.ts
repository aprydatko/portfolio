import styled from "styled-components";

export const MenuBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ThemeBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Email = styled.a`
    margin-left: 106px;

    font-size: ${({ theme }) => theme.fontSize["xs"]};
    font-weight: ${({ theme }) => theme.fontWeight.subHeading};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};

    color: ${({ theme }) => theme.color.link.primary};
    text-decoration: none;
    transition: 225ms;

    &:hover {
        color: ${({ theme }) => theme.color.link.secondary};
        transition: 225ms;
    }

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const HiddenMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const Line = styled.div`
    margin: 0 16px;
    width: 1px;
    height: 25px;
    background: ${({ theme }) => theme.color.body.secondary};

    &.dark-line {
        background: ${({ theme }) => theme.color.font.tertiary};
    }
`;
