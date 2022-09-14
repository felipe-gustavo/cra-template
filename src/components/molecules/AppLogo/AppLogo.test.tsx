import { render, screen } from "@testing-library/react";

import { AppLogo } from "./AppLogo";

describe("<Logo />", () => {
  it("render with spin mode has spin class", () => {
    render(<AppLogo spin />);

    const img = screen.getByRole("img");
    expect(img.classList).toContain("spin");
  });

  it("render with non spin mode hasn't spin class", () => {
    render(<AppLogo spin={false} />);

    const img = screen.getByRole("img");
    expect(img.classList).not.toContain("spin");
  });
});
