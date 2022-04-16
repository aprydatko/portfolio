import styled from "styled-components";

export const DescriptionWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Description = styled.div`
    position: relative;

    // margin-top: 90px;
    padding-top: 34px;
    padding-bottom: 42px;
    padding-left: 55px;
    max-width: 620px;

    @media screen and (max-width: 960px) {
        padding-top: 24px;
        padding-bottom: 8px;
        max-width: 100%;
        margin-left: 170px;
    }

    @media only screen and (max-width: 650px) {
        margin-left: 0px;
    }

    & > p:first-child {
        margin-top: 0px;
        font-weight: 400;
    }

    & > div:first-child > p {
        margin-top: 0px;
        font-weight: 400;
    }

    & > div:last-child > p {
        margin-bottom: 0px;
    }

    & p {
        margin: 22px 0;
        font-size: ${({ theme }) => theme.fontSize["sm"]};
        font-weight: 300;
        color: ${({ theme }) => theme.color.font.primary};
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.color.font.primary};
    }
`;
