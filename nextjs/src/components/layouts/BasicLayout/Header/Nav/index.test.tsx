import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { Nav } from "./";

// next.js 12 pages directory 기준
// next에서 라우터 부분을 테스트하려면 목 객체를 사용해야 한다
// -> next-router-mock 라이브러리 사용하기
// <Link>에서 발생한 라우터 변화, useRouter를 활용한 URL 참조 혹은 변경에 대한 통합 테스트 가능

test("현재 위치는 'My Posts'이다", () => {
  mockRouter.setCurrentUrl("/my/posts"); // 현재 url이 "/my/posts"라고 가정한다
  render(<Nav onCloseMenu={() => {}} />);
  const link = screen.getByRole("link", { name: "My Posts" });
  expect(link).toHaveAttribute("aria-current", "page");
});

test("현재 위치는 'Create Post'이다", () => {
  mockRouter.setCurrentUrl("/my/posts/create");
  render(<Nav onCloseMenu={() => {}} />);
  const link = screen.getByRole("link", { name: "Create Post" });
  expect(link).toHaveAttribute("aria-current", "page");
});

// test.each
// 동일한 테스트를 매개변수만 변경해 반복하고 싶을때 사용
test.each([
  { url: "/my/posts", name: "My Posts" },
  { url: "/my/posts/123", name: "My Posts" },
  { url: "/my/posts/create", name: "Create Post" },
])("$url의 현재 위치는 $name이다", ({ url, name }) => {
  mockRouter.setCurrentUrl(url);
  render(<Nav onCloseMenu={() => {}} />);
  const link = screen.getByRole("link", { name });
  expect(link).toHaveAttribute("aria-current", "page");
});
