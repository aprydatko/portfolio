import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 24px;
    height: 36px;
`;

export const Select = styled.div`
    position: absolute;
    top: 8px;
`;

export const Item = styled(motion.div)`
    width: 24px;
    height: 20px;
    margin-bottom: 16px;

    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &:last-child {
        margin-bottom: 0px;
    }
`;
