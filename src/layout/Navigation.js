import { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav style={{ height: "56px" }}>
        <button>게임 시작</button>
        <button>로그인</button>
        <button>회원가입</button>
      </nav>
    );
  }
}

export default Navigation;
