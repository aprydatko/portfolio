import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 100px 0;
`;

export const Avatar = styled.div`
    margin: 0 auto;
    width: 140px;
    height: 140px;
    background: #ded6cb;
    border-radius: 50%;
`;

export const Content = styled.div`
    margin-top: 30px;
    text-align: center;

    & ul > li {
        margin: 0 12px;
    }
`;

export const Name = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["md"]};
    font-weight: 300;
`;

export const Position = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["md"]};
    font-weight: 300;
`;

export const SocialWrap = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
`;
