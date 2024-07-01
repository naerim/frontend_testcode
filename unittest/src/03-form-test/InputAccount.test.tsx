import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputAccount } from "./InputAccount";

// API를 호출할 user 인스턴스 생성
// useEvent를 사용한 모든 인터랙션은 입력이 완료될 때까지 기다려야 하는 비동기 처리
const user = userEvent.setup();

test("메일주소 입력란", async () => {
  render(<InputAccount />);
  // <input type="text" /> 는 textbox라는 암묵적 역할을 한다
  const textbox = screen.getByRole("textbox", { name: "메일주소" });
  const value = "taro@test.com";
  // textbox에 value 입력
  await user.type(textbox, value);
  // 초깃값이 입력된 폼 요소가 존재하는지 검증
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("비밀번호 입력란", async () => {
  render(<InputAccount />);
  const password = screen.getByPlaceholderText("8자 이상");
  const value = "abcd1234";
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  // <input type="password" />는 역할을 가지지 않음
  // 대체수단으로 placeholder값을 가져옴
});
