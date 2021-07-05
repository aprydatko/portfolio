import styled from 'styled-components';

export const AboutMeSection = styled.div`
  position: relative;
  padding-top: 268px;
  padding-bottom: 155px;

  background-color: ${({ theme }) => theme.color.body.secondary};
  background-image: url(/about-us-effect-one.svg);
  background-size: inherit;
  background-repeat: no-repeat;
  background-position: 104% 100%;

  &::before {
    content: '';
    position: absolute;
    bottom: -67px;
    left: -50px;
    width: 200px;
    height: 200px;
    background-image: url(/about-us-effect-two.svg);
    background-size: inherit;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
