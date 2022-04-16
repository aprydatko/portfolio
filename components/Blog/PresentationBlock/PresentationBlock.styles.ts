import styled from "styled-components";

export const Container = styled.div`
    margin: 60px 0;
`;

export const Wrapper = styled.div`
    position: relative;
    padding-left: 60px;
    margin-bottom: 60px;
    margin-left: 60px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 85%;
        border-left: 1px solid black;
    }
`;

export const Content = styled.div`
    padding-top: 50px;
    margin-bottom: 250px;
    // max-width: 50%;

    & h3 {
        margin-bottom: 30px;
        max-width: 60%;
        text-transform: none;
    }

    & p {
        max-width: 40%;
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-size: ${({ theme }) => theme.fontSize["sm"]};
        font-weight: 300;
        color: ${({ theme }) => theme.color.font.primary};
    }

    &::before {
        content: "";
        position: absolute;
        top: calc(50%);
        right: 0;
        width: 400px;
        height: 450px;
        background: #ded6cb;
    }
`;
