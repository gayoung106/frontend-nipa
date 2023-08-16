import { render, screen } from "@testing-library/react";
import App from "./App01";

// ender: dom이 형성되는 절차
// screen : 결과화면

// describe

// 테스트 하나 만들기
// test('테스트 이름', () => { 테스트 내용 })

test("renders learn react link", () => {
  render(<App />); // App컴포넌트 렌더링 해보기로 함
  const linkElement = screen.getByText("This is TDD"); //화면에서 This is TDD를 가져와보자
  expect(linkElement).toBeInTheDocument();
  //기대한다(-에).matcher()무엇을?
});
//test 실행 명령어 npm run test
