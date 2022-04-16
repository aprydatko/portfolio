import styled from "styled-components";

export const Container = styled.div`
    margin-top: 160px;
    padding-bottom: 160px;
    position: relative;
    // background-color: ${({ theme }) => theme.color.body.secondary};
    // background-image: url(/pricing-table-effect-two.svg);
    background: linear-gradient(
        to top,
        ${({ theme }) => theme.color.body.primary} 0% 20%,
        ${({ theme }) => theme.color.body.secondary} 20% 100%
    );
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: 0 80%;

    &::before {
        content: "";
        position: absolute;
        bottom: 400px;
        left: -50px;
        width: 300px;
        height: 400px;
        background-image: url(/pricing-table-effect-two.svg);
        background-repeat: no-repeat;
    }

    @media screen and (max-width: 960px) {
        background-image: none;
        padding-bottom: 100px;
    }

    & .my-projects > div {
        margin-top: 75px;
    }

    & h2 {
        position: absolute;
        top: -55px;
    }

    & .button-load {
        display: block;
        margin: 0 auto;
    }
`;

export const ButtonWrap = styled.div`
    padding-top: 30px;
    // margin: 0 auto;
`;

export const Projects = styled.ul`
    margin-top: 60px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Project = styled.li`
    width: 440px;
    margin-bottom: 60px;

    &:hover {
        & > div {
            display: block;
        }
    }

    @media only screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const ProjectDescriptionWrap = styled.div`
    display: none;
    position: relative;
    bottom: 0;
    left: 0;
    text-align: center;
    color: ${({ theme }) => theme.color.main.white};

    & > h4 {
        color: ${({ theme }) => theme.color.main.white};
    }

    @media only screen and (max-width: 960px) {
        padding-left: 0;
        width: 200px;
        margin: 0 auto;
    }
`;

export const ProjectImage = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    position: relative;
    width: 100%;
    height: 500px;
    background-color: #ded6cb;
    overflow: hidden;
    cursor: pointer;

    background-size: cover;
    background-repeat: no-repeat;

    &:hover {
        & > div {
            display: block;
        }
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(/icons/search.svg);
            background-repeat: no-repeat;
            background-position: 94% 8%;
        }
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.2);
        }
    }

    @media only screen and (max-width: 960px) {
        width: 100%;
        height: 450px;
    }
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

export const FullImgWrap = styled.div`
    box-shadow: 0 3px 10px rgb(0 0 0 / 15%);
    background: rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
`;

export const FullImg = styled.div`
    margin: 16px 16px 100px 16px;
    position: fixed;
    top: 30px;
    left: calc(50% - 500px);
    width: 1000px;
    height: 650px;
    z-index: 9999;

    background-repeat: no-repeat;
    background-size: cover;

    & .close {
        position: absolute;
        top: 0;
        right: -30px;
        cursor: pointer;

        &:hover {
            fill: ${({ theme }) => theme.color.font.secondary};
        }
    }
`;
