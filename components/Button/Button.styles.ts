import styled from "styled-components";

export const ButtonWrap = styled.button`
    display: inline-block;

    box-sizing: border-box;
    height: 48px;

    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    &.primary {
        color: ${({ theme }) => theme.color.main.white};
        background-color: ${({ theme }) => theme.color.main.orange};
    }

    &.primary:hover {
        color: ${({ theme }) => theme.color.main.white};
        background-color: ${({ theme }) => theme.color.main.orange};
    }

    &.ghost {
        color: ${({ theme }) => theme.color.font.primary};
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.color.main.orange};
    }

    &.ghost:hover {
        color: ${({ theme }) => theme.color.main.white};
        background-color: ${({ theme }) => theme.color.main.orange};
    }

    &.nostroke {
        color: ${({ theme }) => theme.color.main.orange};
        background-color: transparent;
        border: 1px solid transparent;
    }

    &.nostroke:hover {
        color: ${({ theme }) => theme.color.main.white};
        background-color: ${({ theme }) => theme.color.main.orange};
    }

    &.large {
        width: 269px;
    }

    &.middle {
        width: 212px;
    }

    &.small {
        width: 120px;
    }
`;
