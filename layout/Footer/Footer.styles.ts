import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.color.footer.primary};
`;

export const FooterWrap = styled.footer`
    display: flex;
    justify-content: space-between;

    padding-top: 80px;
    padding-bottom: 50px;

    font-size: ${({ theme }) => theme.fontSize["xs"]};
    line-height: 1.3;
    font-weight: 300;
    color: ${({ theme }) => theme.color.font.primary};

    & > ul {
        align-items: center;
        z-index: 0;

        & > li {
            padding: 0 12px;
        }

        @media screen and (max-width: 960px) {
            margin-bottom: 30px;
        }
    }

    @media screen and (max-width: 960px) {
        padding-top: 40px;
        padding-bottom: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Info = styled.div`
    color: ${({ theme }) => theme.color.font.primary};

    & > a {
        text-decoration: none;
        color: ${(props) => props.theme.color.main.orange};
    }

    @media screen and (max-width: 960px) {
        line-height: 2;
    }

    @media screen and (max-width: 650px) {
        text-align: center;
    }
`;

export const Desinged = styled.div`
    & > a {
        text-decoration: none;
        color: ${(props) => props.theme.color.main.orange};
    }

    @media screen and (max-width: 960px) {
        line-height: 2;
    }
`;
