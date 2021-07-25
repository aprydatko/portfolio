import styled from 'styled-components';

export const Header = styled.div`
  padding-top: 240px;
  padding-bottom: 85px;

  @media only screen and (max-width: 1200px) {
    padding-top: 70px;
    padding-bottom: 60px;
    background: ${({ theme }) => theme.color.body.secondary};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const WelcomeWrap = styled.div`
  max-width: 550px;
`;

export const WelcomeSubtitle = styled.span`
  display: block;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize[2]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 300;
  line-height: 1;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.font.primary};

  @media only screen and (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize[1]};
  }
  @media only screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize[0]};
  }
`;

export const WelcomeInfo = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  padding-left: 24px;

  max-width: 277px;
  height: 230px;
  position: relative;

  box-sizing: border-box;

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
    height: 100%;
    background: ${({ theme }) => theme.color.font.primary};
    
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

export const QuickInformation = styled.div`
  
`;