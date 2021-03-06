import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const EditMenuItem = (props) => {
  const [menuItemTitle, setMenuItemTitle] = useState(props.menuItem.title);
  const [menuItemImage, setMenuItemImage] = useState(props.menuItem.image);
  const [menuItemDesc, setMenuItemDesc] = useState(props.menuItem.description);
  const [menuItemPrice, setMenuItemPrice] = useState(props.menuItem.price);

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Edit Menu Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="edit-menu-item-title"
          label="Menu Item Title"
          style={{ marginTop: "10px" }}
          value={menuItemTitle}
          onChange={(e) => setMenuItemTitle(e.target.value)}
          inputProps={{
            "data-testid": "test-edit-menu-title-input",
          }}
        />
        <TextField
          fullWidth
          id="edit-menu-item-image"
          label="Menu Item Image"
          style={{ marginTop: "10px" }}
          value={menuItemImage}
          onChange={(e) => setMenuItemImage(e.target.value)}
        />
        <TextField
          fullWidth
          id="edit-menu-item-desc"
          label="Menu Item Description"
          style={{ marginTop: "10px" }}
          value={menuItemDesc}
          onChange={(e) => setMenuItemDesc(e.target.value)}
        />
        <TextField
          fullWidth
          id="edit-menu-item-price"
          label="Menu Item Price"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          style={{ marginTop: "10px" }}
          value={menuItemPrice}
          onChange={(e) => {
            if (!isNaN(e.target.value)) setMenuItemPrice(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="flex-end">
          <Button
            color="secondary"
            onClick={() => {
              props.onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            id={`edit-save-${props.menuItem.id}`}
            variant="contained"
            onClick={() => {
              props.onComplete({
                id: props.menuItem.id,
                title: menuItemTitle,
                description: menuItemDesc,
                price: menuItemPrice,
                image: menuItemImage,
                parentMenuId: props.menuItem.parentMenuId,
              });
              props.onClose();
            }}
          >
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default EditMenuItem;
