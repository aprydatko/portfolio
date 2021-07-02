import styled from 'styled-components';

export const Header = styled.div`
  padding-top: 117px ;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Welcome = styled.div`
  max-width: 550px;
`;

export const WelcomeSubtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize[2]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 300;
  line-height: 1;

  color: ${({ theme }) => theme.color.font.primary};
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.color.font.primary};
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