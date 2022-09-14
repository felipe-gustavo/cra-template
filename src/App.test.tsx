import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  it("match with the screenshot", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  it("starts the logo to static", () => {
    render(<App />);

    const button = screen.getByRole("button");

    expect(button.textContent).toBe("Spin logo");
  });

  it("is switching the logo to spin", () => {
    render(<App />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(button.textContent).toBe("Static logo");
  });
});
