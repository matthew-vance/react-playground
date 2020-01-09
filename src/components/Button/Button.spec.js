import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from ".";

test("Button component renders children and is clickable", () => {
  const mockOnClick = jest.fn();
  const testText = "Test Text";
  const { getByText } = render(
    <Button onClick={mockOnClick}>{testText}</Button>
  );
  const button = getByText(testText);

  fireEvent.click(button);

  expect(mockOnClick).toHaveBeenCalled();
});
