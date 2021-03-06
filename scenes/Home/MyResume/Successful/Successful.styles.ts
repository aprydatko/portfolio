import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 120px;

    @media only screen and (max-width: 960px) {
        margin-top: 0px;
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;

    width: 120px;
    margin-right: 55px;

    & li:last-child {
        margin-bottom: 0;
    }

    @media only screen and (max-width: 960px) {
        position: relative;
        margin-top: 16px;
        margin-right: 0px;
        margin-left: 170px;
        marign-bottom: 0;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 40px;
        display: flex;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 100%;
            background-color: ${({ theme }) => theme.color.font.primary};
        }
    }

    @media only screen and (max-width: 650px) {
        margin-left: 35px;
    }

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

export const Item = styled.li`
    margin-bottom: 40px;
    text-align: right;

    @media only screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        max-width: 100px;
        margin-right: 50px;
        margin-bottom: 0px;
        text-align: left;
    }

    @media only screen and (max-width: 480px) {
        margin-bottom: 30px;
    }
`;

export const Text = styled.div`
    margin-top: 6px;

    font-size: ${({ theme }) => theme.fontSize["xs"]};
    line-height: 1;
    font-weight: ${({ theme }) => theme.fontWeight.subHeading};

    @media only screen and (max-width: 480px) {
        font-size: ${({ theme }) => theme.fontSize["xs"]};
    }
`;
