import { render, screen } from "@testing-library/react";
import Heading from "./Heading";
import { FUNCTION } from "../../../utils";

jest.mock("../../../utiles/functions/Functions", () => ({
  capitalizeFirstLetter: jest.fn(),
}));

describe("Heading Component", () => {
  it("renders the heading with capitalized text", () => {
    const mockHeading = "example heading";
    const capitalizedHeading = "Example heading";
    (FUNCTION.capitalizeFirstLetter as jest.Mock).mockReturnValue(
      capitalizedHeading
    );

    render(<Heading heading={mockHeading} />);

    expect(FUNCTION.capitalizeFirstLetter).toHaveBeenCalledWith(mockHeading);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      capitalizedHeading
    );
  });
});
