import { render, screen } from "@testing-library/react";
import App from "./App";
import DeleteMenuItem from "./DeleteMenuItem";
import EditMenuItem from "./EditMenuItem";
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

test("Opens the edit dialog with focus", () => {
  render(<EditMenuItem open={true} menuItem={{}} />);
  const linkElement = screen.getByTestId("test-edit-menu-title-input");
  expect(linkElement).toHaveFocus();
});

test("Render the Delete Dialog", () => {
  render(<DeleteMenuItem open={true} menuItem={{}} />);
  const linkElement = screen.getByText(/Are you sure you want to delete/i);
  expect(linkElement).toBeInTheDocument();
});
