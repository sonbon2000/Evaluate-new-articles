import { handleSubmit } from "../client/js/formHandler";

describe('Test the function "handleSubmit()" to be define', () => {
  test("It should return true", async () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe('Test the function "handleSubmit()" is a function', () => {
  test("It is a function", async () => {
    expect(typeof handleSubmit).toBe("function");
  });
});
