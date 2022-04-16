import styled from "styled-components";

export const Button = styled.button`
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    aligh-items: center;

    font-size: 20px;

    background: transparent;
    border: none;
    cursor: pointer;

    svg > path {
        fill: ${({ theme }) => theme.color.font.primary};
        transition: fill 0.3s ease-out;
    }

    &:hover {
        svg > path {
            fill: ${({ theme }) => theme.color.font.secondary};
            transition: fill 0.3s ease-out;
        }
    }
`;
