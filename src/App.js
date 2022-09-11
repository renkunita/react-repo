import './App.css';
//import SlidePuzzle from './components/SlidePuzzle';

import Board from './components/Board';

/* ↓これ追加 */
import styled from "styled-components";

/* ↓これ追加 */
const StyledHello = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <>
      <Board/>
    </>
  );
};

export default App;