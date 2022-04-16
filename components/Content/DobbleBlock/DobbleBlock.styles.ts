import styled from "styled-components";

export const Container = styled.div`
    padding: 60px 0px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;

    height: 1200px;

    & .second-block {
        align-self: flex-end;

        & > div {
            text-align: right;
            top: calc(50% - 110px);
            left: -65%;
        }
    }
`;

export const Content = styled.div`
    position: relative;
    top: calc(50% - 110px);
    left: 80%;

    width: 360px;
`;

export const Block = styled.div`
    width: 450px;
    height: 660px;
    background: #ded6cb;
`;

export const Title = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["md"]};
    font-weight: 700;
    color: ${({ theme }) => theme.color.main.black};
`;

export const Description = styled.div`
    margin-bottom: 16px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 300;
    color: ${({ theme }) => theme.color.main.black};
`;
