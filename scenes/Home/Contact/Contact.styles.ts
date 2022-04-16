import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    padding-bottom: 115px;
    position: relative;
    background-color: ${({ theme }) => theme.color.body.secondary};
    // background-image: url(/my-projects-effect-one.svg);
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: 0 100%;

    & .my-projects > div {
        margin-top: 90px;
    }

    & h2 {
        position: absolute;
        top: -55px;

        @media screen and (max-width: 650px) {
            position: static;
        }
    }

    & .button-load {
        display: block;
        margin: 0 auto;
    }

    @media screen and (max-width: 650px) {
        margin-top: 0;
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const ButtonWrap = styled.div`
    // margin: 0 auto;
`;

export const Projects = styled.ul`
    margin-top: 60px;
`;

export const Project = styled.li`
    display: flex;
    margin-bottom: 118px;
`;

export const ProjectDescriptionWrap = styled.div`
    padding-top: 84px;
    padding-left: 100px;
`;

export const ProjectImage = styled.div`
    width: 540px;
    height: 352px;
    background-color: #ded6cb;
`;

export const Year = styled.div`
	margin-top: 40px;
	font-size: ${({ theme }) => theme.fontSize["md"]};
	line-height: 1;
	font-weight: bold;
	text-align: right;
}
`;

export const Position = styled.div``;

export const ProjectInfo = styled.div`
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    line-height: 1;

    & p {
        max-width: 200px;
        margin-top: 5px;
        line-height: 1.7;
    }
`;
