import styled from "styled-components";

export const Container = styled.div`
    padding: 60px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & .title {
        margin: 16px 0;
    }
`;

export const List = styled.ul``;

export const Item = styled.li`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 300;
    line-height: 1.7;
    color: #3c4649;
`;
