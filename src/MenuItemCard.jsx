import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteMenuItem from "./DeleteMenuItem";
import EditMenuItem from "./EditMenuItem";

const MenuItemCard = (props) => {
  const [openDeleteMenuItemDialog, setOpenDeletetemDialog] = useState(false);
  const [openEditMenuItemDialog, setOpenEditMenuItemDialog] = useState(false);

  const [menuItem, setMenuItem] = useState(props.menuItem);

  return (
    <>
      <Card
        sx={{ width: "275px", minHeight: "390px" }}
        id={`menu-item-card-${menuItem.id}`}
      >
        <CardHeader
          title={menuItem.title}
          component="h3"
          titleTypographyProps={{
            id: `menu-item-title-${menuItem.id}`,
          }}
        />
        <CardMedia
          alt=""
          component="img"
          height="194"
          image={menuItem.image}
          id={`menu-item-image-${menuItem.id}`}
        />
        <CardContent>
          <Typography variant="body2" id={`menu-item-desc-${menuItem.id}`}>
            {menuItem.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" style={{ width: "100%" }}>
            <Box flexGrow={1}>
              <IconButton
                id={`delete-${menuItem.id}`}
                onClick={() => setOpenDeletetemDialog(true)}
                aria-label={`Delete ${menuItem.title}`}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                id={`edit-${menuItem.id}`}
                onClick={() => setOpenEditMenuItemDialog(true)}
                aria-label={`Edit ${menuItem.title}`}
              >
                <EditIcon />
              </IconButton>
            </Box>
            <Box style={{ marginTop: "12px" }}>
              {menuItem.price && (
                <span id={`menu-item-price-${menuItem.id}`}>
                  {Number.parseFloat(menuItem.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              )}
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
          props.onEdit(m);
        }}
      />
    </>
  );
};
export default MenuItemCard;
