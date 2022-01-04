import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const WelcomeInfo = styled(motion.div)`
  position: relative;
  top: 50px;
  right: -35px;
  padding-left: 24px;

  max-width: 300px;
  height: 230px;

  box-sizing: border-box;
  z-index: 9999;

  &.mobile-menu {
    position: absolute;
    max-width: 340px;
    top: 55%;
    // top: ${props => props.openMenu ? '55%' : '100%'};
    opacity: ${props => props.openMenu ? '1' : '0'};
    right: 150px;
    transition: 2s;
    transition-delay: .5s;
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

  & .social {
    & > .gmail {
      top: 4px;
    }
    & > svg {
      width: 25px;
    }
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 1px;
    height: ${props => props.className === 'mobile-menu' ? props.openMenu ? '100%' : '0' : '100%'};
    background: ${({ theme }) => theme.color.font.primary};
    transition: 2s;
    transition-delay: .5s;
  }

  @media only screen and (max-width: 1200px) {
    top: 0px;
    max-width: 400px;
    height: auto;
    margin-left: 170px;
  }

  @media only screen and (max-width: 650px) {
    margin-left: 0px;
  }

  @media only screen and (min-width: 1200px) {
     & .quick-information {
        display: none;
     }
  }
`;

export const WelcomeDescription = styled.div`
  padding-top: 34px;
  padding-bottom: 16px;

  font-size: ${({ theme }) => theme.fontSize[1]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: ${({ theme }) => theme.lineHeight.heading};

  color: ${({ theme }) => theme.color.font.primary};
`;