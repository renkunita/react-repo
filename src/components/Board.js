import React from 'react';
import styled from 'styled-components';

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

const Board = styled.div`
    display: grid;
    width: 320px;
    margin:40px auto 0;
    grid-template-columns: 80px 80px 80px 80px;
    grid-template-rows: 80px 80px 80px 80px;
`;


const Piece = styled.div`
    border: 2px solid #000;
    color: red;
    font-size: 40px;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const FrmButton = styled.button`
    width: 100%;
    height: 80px;
    display: flex;
    border: 0px solid #000;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const BtnShuffle = styled.button`
    border: 2px solid #000;
    color: black;
    background-color: #f4f4f4;
    font-size: 20px;
    width: 100px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7px;

`;


const onClick = function (ind) {
    const indexList=[
        [2,5],
        [1,3,6],
        [2,4,7],
        [3,8],
        [1,6,9],
        [2,5,7,10],
        [3,6,8,11],
        [4,7,12],
        [5,10,13],
        [6,9,11,14],
        [7,10,12,15],
        [8,11,16],
        [9,14],
        [10,13,15],
        [11,14,16],
        [12,15]
    ];
    const iList = indexList[ind];
    let emptyInd = -1;
    let tmp="";

    iList.map((value, index) =>{
        if("" === document.getElementById("piece"+String(value)).textContent){
            tmp = document.getElementById("piece"+String(ind+1)).textContent;
            document.getElementById("piece"+String(value)).textContent = tmp;
            document.getElementById("piece"+String(ind+1)).textContent = "";
        }
    })

};

const onClickShuffle = function () {
    const min = 0 ;
    const max = 15 ;

    for (let i = 0; i < 2000; ++i){
        var r = Math.floor( Math.random() * (max + 1 - min) ) + min ; 
        onClick(r);
    }
};

export default (props) => {
    const list = [];
    const array = new Array();
    for (let i = 0; i < 15; ++i){
        list.push(<Piece id={"piece"+String(i+1)} onClick={() => {onClick(i);}}>{i+1}</Piece>);
    }
    list.push(<Piece id={"piece16"} onClick={() => {onClick(15);}}>{""}</Piece>);
    
    return (
    <>
    <FrmButton>
        <BtnShuffle onClick={() => {onClickShuffle();}}>shuffle</BtnShuffle>
    </FrmButton>
    <Board>
        {list}
    </Board>
    </>
)};


    
