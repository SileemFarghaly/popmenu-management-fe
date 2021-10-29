import { render, screen } from "@testing-library/react";
import App from "./App";
import NewMenuItem from "./NewMenuItem";

test("renders the menu", () => {
  render(<App />);
  const linkElement = screen.getByText(/Popmenu Test/i);
  expect(linkElement).toBeInTheDocument();
});

test("Opens the create dialog with focus", () => {
  render(<NewMenuItem open={true} />);
  const linkElement = screen.getByTestId("test-menu-title-input");
  expect(linkElement).toHaveFocus();
});
