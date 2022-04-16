import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const WelcomeInfo = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    top: 50px;
    right: -40px;
    padding-left: 24px;

    width: 340px;
    height: 230px;

    box-sizing: border-box;
    z-index: 9999;

    &.mobile-menu {
        position: absolute;
        max-width: 340px;
        top: 55%;
        // top: ${(props) => (props.openMenu ? "55%" : "100%")};
        opacity: ${(props) => (props.openMenu ? "1" : "0")};
        right: 150px;
        transition: 2s;
        transition-delay: 0.5s;

        @media screen and (max-width: 1024px) {
            display: none;
        }
    }

    & .quick-information {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & > div {
            text-align: left;
            line-height: 1.7;
            margin-top: 16px;
            margin-bottom: 16px;
        }
    }

    & > ul {
        position: relative;
        top: 20px;
        justify-content: flex-start;

        @media only screen and (max-width: 1200px) {
            top: 6px;
        }

        & > li {
            padding: 0 12px;

            @media only screen and (max-width: 1200px) {
                padding: 0 6px;
            }
        }
    }

    & .social {
        margin-top: 16px;
        & > svg {
            font-size: 25px;

            @media only screen and (max-width: 1200px) {
                font-size: 20px;
            }
        }
    }

    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 1px;
        height: ${(props) =>
            props.className === "mobile-menu"
                ? props.openMenu
                    ? "100%"
                    : "0"
                : "100%"};
        background: ${({ theme }) => theme.color.font.primary};
        transition: 2s;
        transition-delay: 0.5s;
    }

    @media only screen and (max-width: 1200px) {
        top: 16px;
        right: -170px;
        max-width: 400px;
        height: auto;
    }

    @media only screen and (max-width: 650px) {
        max-width: 260px;
        height: auto;
        margin-left: 0px;
        padding: 0 16px;
        right: -35px;
    }

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 1200px) {
        & .quick-information {
            display: none;
        }
    }
`;

export const WelcomeDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeight.heading};
    line-height: ${({ theme }) => theme.lineHeight.body};

    color: ${({ theme }) => theme.color.font.tertiary};
    box-sizing: border-box;

    @media only screen and (max-width: 1200px) {
        font-size: 16px;
    }
`;
