import styled from "styled-components";

export const Container = styled.div`
    margin: 60px 0;
`;

export const Wrapper = styled.ul`
    & > ul {
        margin: 16px 0;
        display: flex;
        justify-content: center;
    }
`;

export const Item = styled.li`
    padding-left: 16px;
    &:last-child {
        padding-left: none;
    }
    & > a {
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-size: ${({ theme }) => theme.fontSize["sm"]};
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        color: ${({ theme }) => theme.color.font.secondary};

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const List = styled.div`
    display: flex;
    justify-content: center;

    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 300;
    line-height: 1;
`;
