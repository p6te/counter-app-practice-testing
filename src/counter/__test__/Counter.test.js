import React from "react";
import Counter from "../Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});
