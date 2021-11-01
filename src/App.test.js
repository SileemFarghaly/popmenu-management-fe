import { render, screen, fireEvent } from "@testing-library/react";
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

test("Open the Delete Dialog", () => {
  render(<DeleteMenuItem open={true} menuItem={{}} />);
  const linkElement = screen.getByText(/Are you sure you want to delete/i);
  expect(linkElement).toBeInTheDocument();
});

test("Add a menu", () => {
  render(<App />);
  const newMenuButton = screen.getByText("New Menu");
  newMenuButton.click();
  const menubutton = screen.getByText(/Menu 3/i);

  expect(menubutton).toBeInTheDocument();
});

test("Delete a Menu Item", () => {
  render(<App />);
  const deleteButton = document.getElementById("delete-1");
  const menuItemToBeDeleted = document.getElementById("menu-item-card-1");
  deleteButton.click();
  const confirmDeleteButton = document.getElementById("confirm-delete-1");
  confirmDeleteButton.click();

  expect(menuItemToBeDeleted).not.toBeInTheDocument();
});

test("Add a Menu Item", () => {
  render(<App />);
  const newMenuButton = document.getElementById("new-menu-item");
  newMenuButton.click();
  const menuItemNameField = document.getElementById("menu-item-title");
  const menuItemImageField = document.getElementById("menu-item-image");
  const menuItemDescField = document.getElementById("menu-item-desc");
  const menuItemPriceField = document.getElementById("menu-item-price");
  const saveButton = document.getElementById("add-menu-item");

  fireEvent.change(menuItemNameField, { target: { value: "MenuNameField" } });
  fireEvent.change(menuItemImageField, { target: { value: "MenuImageField" } });
  fireEvent.change(menuItemDescField, { target: { value: "MenuDescField" } });
  fireEvent.change(menuItemPriceField, { target: { value: "123" } });
  saveButton.click();

  const newMenuItemName = document.getElementById("menu-item-title-4");
  const newMenuItemImage = document.getElementById("menu-item-image-4");
  const newMenuItemDesc = document.getElementById("menu-item-desc-4");
  const newMenuItemPrice = document.getElementById("menu-item-price-4");

  var newMenuItem = document.getElementById("menu-item-card-4");

  expect(newMenuItem).toBeInTheDocument();
  expect(newMenuItemName.textContent).toEqual("MenuNameField");
  expect(newMenuItemImage.src).toEqual("http://localhost/MenuImageField");
  expect(newMenuItemDesc.textContent).toEqual("MenuDescField");
  expect(newMenuItemPrice.textContent).toEqual("$123.00");
});

test("Edit a Menu Item", () => {
  render(<App />);

  // Rely on an existing element for now
  const editSpaghettiosButton = document.getElementById("edit-1");
  editSpaghettiosButton.click();

  const editScreenSave = document.getElementById("edit-save-1");
  const menuItemNameField = screen.getByLabelText(/Menu Item Title/i);
  const menuItemImageField = screen.getByLabelText(/Menu Item Image/i);
  const menuItemDescField = screen.getByLabelText(/Menu Item Description/i);
  const menuItemPriceField = screen.getByLabelText(/Menu Item Price/i);

  fireEvent.change(menuItemNameField, {
    target: { value: "ChangeSpaghettiosTitle" },
  });
  fireEvent.change(menuItemImageField, {
    target: { value: "ChangeSpaghettiosImage" },
  });
  fireEvent.change(menuItemDescField, {
    target: { value: "ChangeSpaghettiosDesc" },
  });
  fireEvent.change(menuItemPriceField, { target: { value: "123" } });

  editScreenSave.click();

  const editedMenuItemName = document.getElementById("menu-item-title-1");
  const editedMenuItemImage = document.getElementById("menu-item-image-1");
  const editedMenuItemDesc = document.getElementById("menu-item-desc-1");
  const editedMenuItemPrice = document.getElementById("menu-item-price-1");

  expect(editedMenuItemName.textContent).toEqual("ChangeSpaghettiosTitle");
  expect(editedMenuItemImage.src).toEqual(
    "http://localhost/ChangeSpaghettiosImage"
  );
  expect(editedMenuItemDesc.textContent).toEqual("ChangeSpaghettiosDesc");
  expect(editedMenuItemPrice.textContent).toEqual("$123.00");
});
