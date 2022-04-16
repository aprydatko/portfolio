import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
    padding-left: 60px;
    margin-bottom: 60px;
    margin-left: 60px;
    border-left: 1px solid ${({ theme }) => theme.color.font.primary};
    width: 200px;
`;

export const Content = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 300;
    color: ${({ theme }) => theme.color.font.primary};

    & > p {
        margin: 0;
        margin-top: 16px;
    }
`;

export const AvatarWrap = styled.div``;

export const Avatar = styled.div`
    margin: 16px 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Name = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 700;
    color: ${({ theme }) => theme.color.font.primary};
`;

export const Position = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["xs"]};
    font-weight: 300;
    color: ${({ theme }) => theme.color.font.primary};
`;
