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

const NewMenuItem = (props) => {
  const [menuItemTitle, setMenuItemTitle] = useState("");
  const [menuItemImage, setMenuItemImage] = useState("");
  const [menuItemDesc, setMenuItemDesc] = useState("");
  const [menuItemPrice, setMenuItemPrice] = useState("");

  function resetState() {
    setMenuItemTitle("");
    setMenuItemImage("");
    setMenuItemDesc("");
    setMenuItemPrice("");
  }

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>New Menu Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="menu-item-title"
          label="Menu Item Title"
          style={{ marginTop: "10px" }}
          value={menuItemTitle}
          onChange={(e) => setMenuItemTitle(e.target.value)}
          inputProps={{
            "data-testid": "test-menu-title-input",
          }}
        />
        <TextField
          fullWidth
          id="menu-item-image"
          label="Menu Item Image"
          style={{ marginTop: "10px" }}
          value={menuItemImage}
          onChange={(e) => setMenuItemImage(e.target.value)}
        />
        <TextField
          fullWidth
          id="menu-item-desc"
          label="Menu Item Description"
          style={{ marginTop: "10px" }}
          value={menuItemDesc}
          onChange={(e) => setMenuItemDesc(e.target.value)}
        />
        <TextField
          fullWidth
          id="menu-item-price"
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
              resetState();
              props.onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            id="add-menu-item"
            variant="contained"
            onClick={() => {
              props.onComplete({
                title: menuItemTitle,
                description: menuItemDesc,
                price: menuItemPrice,
                image: menuItemImage,
              });
              resetState();
              props.onClose();
            }}
          >
            Add
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewMenuItem;
