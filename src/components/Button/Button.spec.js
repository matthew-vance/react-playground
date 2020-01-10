import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  const mockOnClick = jest.fn();
  const testText = "Test Text";
  const { getByText } = render(
    <Button onClick={mockOnClick}>{testText}</Button>,
  );
  test("renders children and is clickable", () => {
    const button = getByText(testText);
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
