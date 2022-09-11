import './App.css';
//import SlidePuzzle from './components/SlidePuzzle';

import Board from './components/Board';

/* ↓これ追加 */
import styled from "styled-components";

/* ↓これ追加 */
const StyledHeader = styled.h1`
  color: black;
  width: 100%;
  margin: 20px auto 0;
  text-align: center;
`;

const App = () => {
  return (
    <>
    <StyledHeader>15SlidePuzzle</StyledHeader>
      <Board/>
    </>
  );
};

export default App;