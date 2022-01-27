import styled from 'styled-components';

export const Header = styled.div`
  padding-top: 240px;
  padding-bottom: 85px;

  @media only screen and (max-width: 1200px) {
    padding-top: 70px;
    padding-bottom: 0px;
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