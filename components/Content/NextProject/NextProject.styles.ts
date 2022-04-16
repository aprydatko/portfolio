import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 150px;
    background: linear-gradient(
        to top,
        ${({ theme }) => theme.color.body.primary} 0% 81%,
        ${({ theme }) => theme.color.body.secondary} 81% 100%
    );
`;

export const Wrapper = styled.div`
    margin-left: 20%;
    padding-top: 40px;
    padding-left: 60px;
    padding-bottom: 80px;
    border-left: 1px solid ${({ theme }) => theme.color.main.black};
    width: 345px;

    & > p {
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-size: ${({ theme }) => theme.fontSize["sm"]};
        font-weight: 300;
    }

    & > .arrow-icon {
        transform: rotate(-180deg);
    }
`;

export const Content = styled.div`
    position: relative;
`;

export const ImgWrap = styled.div`
    position: absolute;
    top: 30px;
    right: 0;

    width: 300px;
    height: 180px;
    background: ${({ theme }) => theme.color.body.secondary};
`;

export const SubTitle = styled.span`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["xs"]};
    line-height: 1;
`;

export const TitleWrap = styled.div`
    & > .block {
        font-family: ${({ theme }) => theme.fontFamily.secondary};
        font-size: ${({ theme }) => theme.fontSize["lg"]};
        font-weight: 400;
        line-height: 1;
        text-transform: none;
    }
`;
