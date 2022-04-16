import styled from "styled-components";

export const Container = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 960px) {
        margin-top: 0;
        margin-bottom: 30px;
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;

    width: 120px;
    margin-right: 55px;

    @media only screen and (max-width: 960px) {
        position: relative;
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
        position: relative;
        top: 16px;
        left: 35px;
        margin-left: 0px;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding: 0px;
    }
`;

export const Item = styled.li`
    margin-bottom: 40px;
    text-align: right;

    @media only screen and (max-width: 960px) {
        max-width: 100px;
        margin-right: 50px;
        margin-bottom: 8px;
        text-align: left;
    }

    @media only screen and (max-width: 480px) {
        margin: 0;
        padding: 0 16px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
`;

export const Count = styled.div`
    margin-top: 16px;
    font-size: ${({ theme }) => theme.fontSize["md"]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    font-weight: ${({ theme }) => theme.fontWeight.subHeading};
`;

export const Text = styled.div`
    font-size: ${({ theme }) => theme.fontSize["xs"]};
    line-height: ${({ theme }) => theme.lineHeight.subHeading};
    font-weight: ${({ theme }) => theme.fontWeight.subHeading};

    @media screen and (max-width: 960px) {
        margin-top: 5px;
    }

    @media screen and (max-width: 480px) {
        // margin-top: 5px;
        font-size: ${({ theme }) => theme.fontSize["xs"]};
    }
`;
