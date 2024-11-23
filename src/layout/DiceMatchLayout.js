import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import GameMain from "../diceMatch/game/container/GameMain";

class DiceMatchLayout extends Component {
  render() {
    return (
      <Routes>
        <Route path="/game" element={GameMain}></Route>
      </Routes>
    );
  }
}
export default DiceMatchLayout;
