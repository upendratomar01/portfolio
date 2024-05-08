import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("renders a Get started heading", () => {
    render(<Page />);

    const heading = screen.getByText(/Get started/i);

    expect(heading).toBeInTheDocument();
  });
});
