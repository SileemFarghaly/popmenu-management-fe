import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import DeleteMenuItem from "./DeleteMenuItem";
import EditMenuItem from "./EditMenuItem";

const MenuItemCard = (props) => {
  const [openDeleteMenuItemDialog, setOpenDeletetemDialog] = useState(false);
  const [openEditMenuItemDialog, setOpenEditMenuItemDialog] = useState(false);

  const [menuItem, setMenuItem] = useState(props.menuItem);

  return (
    <>
      <Card sx={{ width: "275px", minHeight: "390px" }}>
        <CardHeader title={menuItem.title} />
        <CardMedia component="img" height="194" image={menuItem.image} />
        <CardContent>
          <Typography variant="body2">{menuItem.description}</Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" style={{ width: "100%" }}>
            <Box flexGrow={1}>
              <IconButton onClick={() => setOpenDeletetemDialog(true)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => setOpenEditMenuItemDialog(true)}>
                <EditIcon />
              </IconButton>
            </Box>
            <Box style={{ marginTop: "12px" }}>
              <span>
                {Number.parseFloat(menuItem.price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </Box>
          </Box>
        </CardActions>
      </Card>
      <DeleteMenuItem
        open={openDeleteMenuItemDialog}
        onClose={() => setOpenDeletetemDialog(false)}
        onDelete={props.onDelete}
        menuItem={menuItem}
      />
      <EditMenuItem
        open={openEditMenuItemDialog}
        onClose={() => setOpenEditMenuItemDialog(false)}
        menuItem={menuItem}
        onComplete={(m) => {
          setMenuItem(m);
        }}
      />
    </>
  );
};
export default MenuItemCard;
