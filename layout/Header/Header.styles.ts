import styled from "styled-components";

export const Head = styled.header`
    margin-top: 60px;
    margin-bottom: 30px;
    background: ${({ theme }) => theme.color.body.primary};

    @media only screen and (max-width: 1200px) {
        margin-top: 19px;
        margin-bottom: 19px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1510px;
    margin: 0 auto;
    // padding: 0 16px;
`;
