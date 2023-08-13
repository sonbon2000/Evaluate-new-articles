import { checkForName } from "../js/nameChecker";

describe("Test the checkForName function", () => {
  test("check for name", () => {
    expect(checkForName("Kirk")).toBe(true);
    expect(checkForName("Son")).not.toBe(true);
  });
});
