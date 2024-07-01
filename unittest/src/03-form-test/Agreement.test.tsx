import { render, screen } from "@testing-library/react";
import { Agreement } from "./Agreement";

test("fieldset의 접근 가능한 이름을 legend에서 인용합니다", () => {
  render(<Agreement />);
  expect(
    screen.getByRole("group", { name: "이용 약관 동의" })
  ).toBeInTheDocument();
  // <fieldset>요소는 group이라는 암묵적 역할을 한다
  // <legend>요소는 <fieldset>의 하위 요소로서 그룹에 제목을 붙이는 역할을 한다
  // <legend>요소가 있으면 요소 안의 문자가 암묵적으로 해당 그룹의 접근 가능한 이름으로 할당돼 검증할 수 있다
});

test("체크 박스가 체크되어 있지 않습니다", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});
