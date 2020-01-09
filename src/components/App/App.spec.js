import React from "react";
import { render } from "@testing-library/react";
import App from ".";

test("displays hello world", () => {
  const { getByText } = render(<App />);
  getByText("Hello, world!");
});
