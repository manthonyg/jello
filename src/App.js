import React from "react";
import { RecoilRoot } from "recoil";
import Board from "./pages/Board";

function App() {
  return (
    <RecoilRoot>
      <Board />
    </RecoilRoot>
  );
}

export default App;
