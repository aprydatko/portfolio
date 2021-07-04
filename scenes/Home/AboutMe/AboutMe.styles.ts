import styled from 'styled-components';

export const AboutMeSection = styled.div`
  position: relative;
  padding-top: 268px;
  padding-bottom: 260px;

  background-color: ${({ theme }) => theme.color.body.secondary}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
