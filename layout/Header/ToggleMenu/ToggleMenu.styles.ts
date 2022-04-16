import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

interface Props {
    state: string;
}

export const Button = styled(motion.button)<Props>`
    position: relative;
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    aligh-items: center;

    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    svg {
        position: relative;
        transform: scale(1);
        top: ${({ state }) => (state === "open" ? "7px" : "11px")};
        transition: 0.3s;
    }

    svg > path {
        stroke: ${({ theme }) => theme.color.font.primary};
        // transition: .5s;
    }

    &::before {
        position: absolute;
        top: calc(50% - 25px);
        left: calc(50% - 25px);
        content: "";
        width: 50px;
        height: 50px;
        background: ${({ theme }) => theme.color.body.secondary};
        border-radius: 50px;
        opacity: 0;
        // transform: scale(0.5);
        transition: all 2s ease-in-out 0.5s;
    }

    &:hover {
        position: relative;

        &::before {
            opacity: 1;
            transform: scale(1.5);
            transition: all 0.5s ease-in-out 0.5s;
        }

        svg {
            // transform: scale(1.2);
        }

        svg > path {
            stroke: ${({ theme }) => theme.color.font.secondary};
            fill: ${({ theme }) => theme.color.font.secondary};
            transition: 0.5s;
        }
    }
`;
