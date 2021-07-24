import styled from 'styled-components';

export const MyResumeSection = styled.div`
  position: relative;
  padding-top: 155px;
  padding-bottom: 214px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 65%;
    left: 45px;
    width: 200px;
    height: 200px;
    // background-image: url(/resume-effect-two.svg);
    background-size: inherit;
    background-repeat: no-repeat;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -45px;
    right: -45px;
    width: 200px;
    height: 200px;
    // background-image: url(/resume-effect-one.svg);
    background-size: inherit;
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: 1200px) {
		padding-top: 60px;
    padding-bottom: 100px;
	}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
