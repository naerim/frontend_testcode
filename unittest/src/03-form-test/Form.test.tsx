import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

const user = userEvent.setup();

test("회원가입 버튼은 비활성화 상태다", () => {
  render(<Form />);
  expect(screen.getByRole("button", { name: "회원가입" })).toBeDisabled();
});

test("이용 약관에 동의하는 체크 박스를 클릭하면 회원가입 버튼은 활성화된다", async () => {
  render(<Form />);
  expect(screen.getByRole("button", { name: "회원가입" })).toBeDisabled();
  await user.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: "회원가입" })).toBeEnabled();
});

test("form의 접근 가능한 이름은 heading에서 입용한다", () => {
  render(<Form />);
  expect(
    screen.getByRole("form", { name: "신규 계정 등록" })
  ).toBeInTheDocument();
});
