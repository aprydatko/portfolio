import styled from "styled-components";

export const MyResumeSection = styled.div`
    position: relative;
    padding-top: 120px;
    padding-bottom: 120px;
    overflow: hidden;

    &::after {
        content: "";
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
        content: "";
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

    @media only screen and (max-width: 960px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
