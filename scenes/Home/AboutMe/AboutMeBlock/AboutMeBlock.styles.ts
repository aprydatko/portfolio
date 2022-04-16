import styled from "styled-components";

export const AboutMeBlockSection = styled.div`
    padding-top: 120px;
    @media only screen and (max-width: 1200px) {
        margin-top: 0px;
        padding-top: 70px;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 30px;

    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 1200px) {
        margin-top: 0px;
        justify-content: flex-start;
    }

    @media only screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    max-width: 620px;

    display: flex;
    flex-direction: column;

    position: relative;
    padding-left: 55px;
    padding-top: 33px;

    & .button-resume {
        margin-top: 26px;

        @media screen and (max-width: 650px) {
            width: 100%;
        }
    }

    & .signature-icon {
        margin-top: 33px;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.color.font.primary};
        @media only screen and (max-width: 960px) {
            content: none;
        }
    }

    @media only screen and (max-width: 960px) {
        max-width: 100%;
        padding: 0;
    }
`;

export const MessageBlock = styled.div`
    & > p:first-child {
        font-weight: 400;
    }

    & > p {
        font-size: ${({ theme }) => theme.fontSize["sm"]};
        line-height: ${({ theme }) => theme.lineHeight.body};
        font-weight: 300;
        margin: 22px 0;

        @media screen and (max-width: 1024px) {
            font-size: ${({ theme }) => theme.fontSize["xs"]};
        }
    }
`;
