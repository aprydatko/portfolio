import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

interface WrapperProps {
    openMenu: boolean;
}

export const Wrapper = styled(motion.div)<WrapperProps>`
    position: relative;
    display: flex;
    flex-direction: column;

    opacity: ${(props) => (props.openMenu ? "1" : "0")};
    z-index: ${(props) => (props.openMenu ? "9999" : "-1")};

    position: fixed;
    top: 0;
    left: 0;

    width: calc(100% - 12px);
    height: 100vh;
    // background: linear-gradient(to top, ${({ theme }) =>
        theme.color.body.secondary} 0% 63%, ${({ theme }) =>
        theme.color.body.primary} 63% 100%);
    background: ${({ theme }) => theme.color.body.primary};
    // z-index: 9999;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: ${(props) => (props.openMenu ? "63%" : "0")};
        background: ${({ theme }) => theme.color.body.secondary};
        z-index: -1;
        transition: height 1s;
        transition-delay: 0.3s;

        @media screen and (max-width: 1024px) {
            height: ${(props) => (props.openMenu ? "95%" : "0")};
        }
    }

    &::before {
        content: "";
        position: absolute;
        bottom: ${(props) => (props.openMenu ? "0" : "-320px")};
        right: -80px;
        width: 300px;
        height: 350px;
        background-image: url(/pricing-table-effect-one.svg);
        background-size: inherit;
        background-repeat: no-repeat;
        background-position: 0% 100%;
        transition: bottom 1.5s;
        transition-delay: 0.3s;

        @media screen and (max-width: 1024px) {
            // display: none;
            bottom: ${(props) => (props.openMenu ? "0" : "-320px")};
            right: 0;
            opacity: 0.3;
        }
    }
`;

export const HiddenMenu = styled.div`
    position: relative;
    top: 0;
    left: 126px;

    @media screen and (max-width: 1024px) {
        position: static;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const ItemWrap = styled(motion.li)`
    & > a {
        font-family: ${({ theme }) => theme.fontFamily.secondary};
        font-size: 76px;
        line-height: 1.6;
        text-decoration: none;
        color: ${({ theme }) => theme.color.font.primary};
        transition: 225ms;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.color.font.secondary};
            transition: 225ms;
        }

        @media screen and (max-width: 1024px) {
            font-size: 42px;
            line-height: 2;
        }
    }
`;

export const WrapperMenu = styled.div`
    position: relative;
    padding: 0 16px;
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
        padding: 0;
    }

    & ul {
        position: absolute;
        bottom: 33px;
        left: 24px;
        // background: red;
        display: flex;
        flex-direction: column;
        & > li {
            margin-right: 0;
            & svg {
                width: 16px;
                height: 24px;
            }
            & .gmail {
                position: static;
                padding: 10px 0 6px 0;
            }
            & .gmail {
                position: static;
            }
            & .github {
                position: static;
            }
        }

        @media screen and (max-width: 1024px) {
            display: none;
        }
    }
`;
