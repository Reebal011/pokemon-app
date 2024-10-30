import React from "react";
import { render, screen } from "@testing-library/react";
import { ErrorState } from "./ErrorState";

// Test suite for ErrorState component
describe("ErrorState", () => {
  const errorMessage = "An error occurred!";

  beforeEach(() => {
    render(<ErrorState message={errorMessage} />);
  });

  it("renders error message", () => {
    // Check if the error message is in the document
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("has the correct class name", () => {
    // Check if the error state div has the correct class name using data-testid
    const errorStateDiv = screen.getByTestId("error-state");
    expect(errorStateDiv).toHaveClass("error-state");
  });
});
