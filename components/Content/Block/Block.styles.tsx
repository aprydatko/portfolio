import styled from "styled-components";

export const Container = styled.div`
    & .block {
        text-transform: none;
    }

    &.header {
        padding-top: 0px;
    }

    &.title {
        padding-top: 40px;
    }
`;

export const Header = styled.div`
    padding-top: 60px;

    display: flex;
    justify-content: space-between;
`;

export const Content = styled.div`
    // padding-top: 40px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 300;
    color: ${({ theme }) => theme.color.font.primary};

    &.first-bold > p:first-child {
        font-weight: 400;
    }

    &.bold > p {
        font-weight: 400;
    }

    &.header {
        padding-top: 40px;
    }

    &.title {
        padding-top: 20px;
    }
`;
