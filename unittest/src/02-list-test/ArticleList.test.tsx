import { render, screen, within } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

test("items의 수만큼 목록을 표시한다", () => {
  render(<ArticleList items={items} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
  // getAllByRole: 지정한 역할과 일치하는 모든 요소를 배열로 취득하는 API
  // <li>요소는 listitem이라는 암묵적 역할을 힌다
});

test("items의 수만큼 목록을 표시한다", () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
  // within을 사용해서 취득할 노드의 범위를 좁힌다
});

test("목록을 표시한다", () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  // <ul>요소는 list라는 암묵적 역할을 한다
});

test("목록에 표시할 데이터가 없으면 '게재된 기사가 없습니다'를 표시한다", () => {
  render(<ArticleList items={[]} />);
  const list = screen.queryByRole("list");
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull();
  expect(screen.getByText("게재된 기사가 없습니다")).toBeInTheDocument();
  // getByRole이나 getByLabelText는 존재하지 않은 요소의 취득을 시도하면 오류 발생
  // '존재하지 않음'을 테스트하려면 queryBy 접두사를 붙인 API를 사용해야 한다
});
