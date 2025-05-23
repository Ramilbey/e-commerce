import { it, expect } from "vitest";
import { formatMoney } from "./money";

it("formats 1999 cents as $19.99", () => {
  //create our first test
  expect(formatMoney(1999)).toBe("$19.99");
});

it("display 2 decimals", () => {
  //create our second test  
  expect(formatMoney(1090)).toBe("$10.90");
});
