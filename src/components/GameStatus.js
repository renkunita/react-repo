import React from 'react'
import styled from 'styled-components'

const StyledGameStatus = styled.div`
	color: ${({ color }) => (color ? color : "#333333")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "1em")};
`;

const GameStatus = ({ className, title, text, color, fontSize }) => (
	<StyledGameStatus
		className={className}
		color={color}
		fontSize={fontSize}
	>{`${title}: ${text}`}</StyledGameStatus>
);

export default GameStatus