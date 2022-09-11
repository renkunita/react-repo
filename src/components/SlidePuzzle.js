import React from 'react'
import styled from 'styled-components'

const StyledSlidePuzzle = styled.div`
	background-color: ${({ boardColor }) => boardColor};
	box-sizing: border-box;
	border: 1vmin solid ${({ boardColor }) => boardColor};
	border-radius: 1vmin;
	height: ${({ sideLength }) => sideLength};
	position: relative;
	width: ${({ sideLength }) => sideLength};
	z-index: 0;
`;

const Piece = styled.div`
	box-sizing: border-box;
	height: ${({ piece }) => piece.height}px;
	padding: 0.3vmin;
	position: absolute;
	left: ${({ piece }) => piece.x}px;
	top: ${({ piece }) => piece.y}px;
	transition: ${({ piece }) => (piece.isShuffle ? `all linear 100ms` : "")};
	transform: translate3d(
		${({ piece }) => piece.offsetX}px,
		${({ piece }) => piece.offsetY}px,
		0
	);
	user-select: none;
	width: ${({ piece }) => piece.width}px;
	z-index: ${({ piece }) => (piece.blank ? 1 : 3)};
`;

const SlidePuzzle = ({ className, slidePuzzle, boardColor, sideLength }) => (
	<StyledSlidePuzzle
		className={className}
		ref={slidePuzzle.slidePuzzleNode}
		boardColor={boardColor}
		sideLength={sideLength}
	>
		{slidePuzzle.pieces.map((piece, i) => (
			<Piece
				className={`piece piece-${piece.baseId}`}
				piece={piece}
				onMouseDown={slidePuzzle.handleMouseDown}
				key={piece.baseId}
			>
				{!piece.blank && (
					<React.Fragment>
						
						
					</React.Fragment>
				)}
			</Piece>
		))}
	</StyledSlidePuzzle>
);

export default SlidePuzzle