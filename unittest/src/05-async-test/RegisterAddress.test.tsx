import { render, screen } from "@testing-library/react";
import { mockPostMyAddress } from "./fetchers/mock";
import {
  clickSubmit,
  inputContactNumber,
  inputDeliveryAddress,
} from "./testingUtils";
import { RegisterAddress } from "./RegisterAddress";

// 목 모듈을 사용하는 테스트는 jest.mock(모듈 경로)을 실행해야함
jest.mock("./fetchers");

async function fillValuesAndSubmit() {
  const contactNumber = await inputContactNumber();
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

async function fillInvalidValuesAndSubmit() {
  const contactNumber = await inputContactNumber({
    name: "내림",
    phoneNumber: "abc-def",
  });
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

beforeEach(() => {
  jest.resetAllMocks();
});

test("성공하면 '등록됐습니다'가 표시된다", async () => {
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("등록됐습니다")).toBeInTheDocument();
});

test("실패하면 '등록에 실패했습니다'가 표시된다", async () => {
  const mockFn = mockPostMyAddress(500);
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("등록에 실패했습니다")).toBeInTheDocument();
});

test("유효성 검사 오류가 발생하면 메시지가 표시된다", async () => {
  render(<RegisterAddress />);
  await fillInvalidValuesAndSubmit();
  expect(
    screen.getByText("올바르지 않은 값이 포함되어 있습니다")
  ).toBeInTheDocument();
});

test("원인이 명확하지 않은 오류가 발생하면 메시지가 표시된다", async () => {
  render(<RegisterAddress />);
  await fillValuesAndSubmit();
  expect(
    screen.getByText("알 수 없는 오류가 발생했습니다")
  ).toBeInTheDocument();
});
