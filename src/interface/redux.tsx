// 파일 이름 임시로 지어놨음
// 이 파일은 redux 내부 interface 파일입니다.

export interface ILoginState {
  isLogin: boolean;
}

export interface IIsLoggedInState {
  isLogin: {
    isLoggedIn: boolean;
  };
}
