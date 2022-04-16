import styled from 'styled-components';

export const Background = styled.div`
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
`;

export const Wrapper = styled.div`
    position: fixed;
    top: calc(50% - 150px);
    left: calc(50% - 150px);

    width: 300px;
    height: 200px;

    background: #f7f5f2;
    border-radius: 16px;
   	box-shadow: 0 3px 10px rgb(0 0 0 / 15%);
    z-index: 9999;
`;

export const Position = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize[1]};
    font-weight: 300;
`;

export const Content = styled.div``;

export const Headline = styled.div`
    font-size: 20px;
    text-align: center;
    color: #333;
`;

export const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        margin-top: 50px;
        margin-bottom: 40px;
        transform: scale(2.5);
        
        & > path {
            fill: ${props => props.theme.color.main.orange};
        }
    }
`;