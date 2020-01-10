import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextField from ".";

describe("TextField component", () => {
  let input, value, mockOnChange, getByRole, rerender;

  beforeEach(() => {
    value = "";
    mockOnChange = jest.fn(ev => {
      value = ev.target.value;
    });

    ({ getByRole, rerender } = render(
      <TextField value={value} onChange={mockOnChange} />,
    ));
    input = getByRole("textbox");
  });

  it("calls onChange function", () => {
    expect(input.value).toEqual("");
    fireEvent.change(input, { target: { value: "a" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    rerender(<TextField value={value} onChange={mockOnChange} />);
    expect(input.value).toEqual("a");
  });
});
