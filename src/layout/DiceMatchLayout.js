import React, { Component } from "react";

class DiceMatchLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <nav style={{ height: "56px" }}>
          <button>게임 시작</button>
          <button>로그인</button>
          <button>회원가입</button>
        </nav>
      </React.Fragment>
    );
  }
}
export default DiceMatchLayout;
