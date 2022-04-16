import styled from "styled-components";

interface ContainerProps {
    openMenu: boolean | undefined;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 100vh;

    margin: 0 auto;
    box-sizing: border-box;
`;
