import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

//create a test suite for clean code
describe("formatMoney", () => {
  it("formats 1999 cents as $19.99", () => {
    //create our first test
    expect(formatMoney(1999)).toBe("$19.99");
  });

  it("display 2 decimals", () => {
    //create our second test
    expect(formatMoney(1090)).toBe("$10.90");
    expect(formatMoney(100)).toBe("$1.00"); // mutliple checks
  });
});
