import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("이름을 표시한다", () => {
  render(<Form name="taro" />);
  expect(screen.getByText("taro")).toBeInTheDocument();
});

test("버튼을 표시한다", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("button")).toBeInTheDocument();
  // button은 button이라는 암묵적 역할을 가짐
});

test("heading을 표시한다", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("heading")).toHaveTextContent("계정 정보");
  // h1-h6은 heading이라는 암묵적 역할을 가짐
});

test("버튼을 클릭하면 이벤트 핸들러가 실행된다", () => {
  const mockFn = jest.fn();
  render(<Form name="taro" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
  // fireEvent를 통해 임의의 DOM 이벤트 발생시킴
});
