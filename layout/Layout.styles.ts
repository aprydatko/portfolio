import styled from 'styled-components';

interface ContainerProps {
	openMenu: boolean | undefined;
}

export const Container = styled.div<ContainerProps>`
	margin: 0 auto;
	box-sizing: border-box;
	height: ${props => props.openMenu ? '100vh' : '100%'};
	overflow: ${props => props.openMenu ? 'hidden' : 'auto'};
`;