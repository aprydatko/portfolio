import styled from "styled-components";

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
    font-weight: 700;
`;

export const YearValue = styled.div`
    font-weight: 300;
`;

export const Value = styled.div``;

export const List = styled.ul``;

export const Item = styled.li``;

export const Image = styled.div`
    padding: 100px 0;
    width: 100%;
    height: 760px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: ${({ theme }) => theme.color.body.secondary};
`;

export const Wrapper = styled.div``;
