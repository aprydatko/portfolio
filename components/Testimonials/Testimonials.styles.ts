import styled from "styled-components";

export const Container = styled.div``;

export const QuoteWrap = styled.div`
    text-align: center;
`;

export const Content = styled.p`
    max-width: 600px;
    margin: 0 auto;
    padding-top: 63px;

    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    color: ${({ theme }) => theme.color.font.primary};
`;

export const TestimonialsList = styled.div`
    margin-top: 110px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TestimonialsItem = styled.div`
    margin: 0 25px;

    &.active {
        position: relative;
    }

    &.active > .avatar {
        width: 90px;
        height: 90px;
        background: ${({ theme }) => theme.color.body.secondary};
        opacity: 1;
    }

    &.active > .person-wrap {
        display: block;
        position: absolute;
        bottom: -97px;
        left: -30px;
    }

    @media screen and (max-width: 650px) {
        margin: 0 6px;
    }
`;

export const Avatar = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${({ theme }) => theme.color.body.secondary};
    opacity: 0.7;
`;

export const PersonWrap = styled.div`
    display: none;
`;

export const Name = styled.div`
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
`;

export const Position = styled.div`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
`;
