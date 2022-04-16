import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.body.secondary};
`;

export const Head = styled.div`
    margin-top: 160px;
    // padding-bottom: 83px;
    position: relative;
    background-color: ${({ theme }) => theme.color.body.secondary};
    // background-image: url(/pricing-table-effect-two.svg);
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: -5% 100%;

    & .my-blog > div {
        margin-top: 90px;
    }

    & .my-blog > div > div:first-child > p {
        font-weight: 400;
    }

    & h2 {
        position: absolute;
        top: -55px;
    }

    & .button-load {
        display: block;
        margin: 0 auto;
    }

    @media screen and (max-width: 960px) {
        padding-bottom: 60px;
    }
`;

export const Header = styled.div`
    padding-top: 60px;

    display: flex;
    justify-content: space-between;
`;

export const Content = styled.div`
    padding-top: 40px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 300;
    color: ${({ theme }) => theme.color.font.primary};

    & > p:first-child {
        font-weight: 400;
    }
`;

export const ProjectInfo = styled.div`
    width: 100%;
    padding-top: 80px;
    padding-left: 35px;
    margin-left: 35px;
    height: 300px;

    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 300;
    color: ${({ theme }) => theme.color.font.primary};

    border-left: 1px solid ${({ theme }) => theme.color.main.black};
`;

export const InfoWrap = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.div`
    white-space: nowrap;
`;

export const YearValue = styled.div`
    font-weight: 700;
`;

export const Value = styled.div``;

export const List = styled.ul``;

export const Item = styled.li``;

export const Image = styled.div`
    margin: 100px 0 60px 0;
    width: 100%;
    height: 760px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: ${({ theme }) => theme.color.body.secondary};
`;

export const Wrapper = styled.div``;
