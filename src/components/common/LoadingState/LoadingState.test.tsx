import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingState } from "./LoadingState";

describe("LoadingState", () => {
  it("renders loading message", () => {
    render(<LoadingState />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("has the correct class name", () => {
    render(<LoadingState />);

    const loadingStateDiv = screen.getByTestId("loading-state");
    expect(loadingStateDiv).toHaveClass("loading-state");
  });
});
