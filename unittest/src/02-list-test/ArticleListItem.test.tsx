import { render, screen } from "@testing-library/react";
import { ArticleListItem, ItemProps } from "./ArticleListItem";

const item: ItemProps = {
  id: "howto-testing-with-typescript",
  title: "타입스크립트를 사용한 테스트 작성법",
  body: "테스트 작성 시 타입스크립트를 사용하면 테스트의 유지보수가 쉬워진다",
};

test("링크에 id로 만든 URL을 표시한다", () => {
  render(<ArticleListItem {...item} />);
  expect(screen.getByRole("link", { name: "더 알아보기" })).toHaveAttribute(
    "href",
    "/articles/howto-testing-with-typescript"
  );
  // '더 알아보기'라는 문자열을 가진 링크에 속성을 조사하는 매처인 toHaveAttribute로 테스트한다
});
