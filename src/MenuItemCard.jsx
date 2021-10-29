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

const MenuItemCard = (props) => {
  const [openDeleteMenuItemDialog, setOpenDeletetemDialog] = useState(false);

  return (
    <>
      <Card sx={{ width: "275px", minHeight: "390px" }}>
        <CardHeader title={props.menuItem.title} />
        <CardMedia component="img" height="194" image={props.menuItem.image} />
        <CardContent>
          <Typography variant="body2">{props.menuItem.description}</Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" style={{ width: "100%" }}>
            <Box flexGrow={1}>
              <IconButton onClick={() => setOpenDeletetemDialog(true)}>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Box>
            <Box style={{ marginTop: "12px" }}>
              {!isNaN(props.menuItem.Price) && (
                <span>
                  {Number.parseFloat(props.menuItem.price).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                    }
                  )}
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
        menuItem={props.menuItem}
      />
    </>
  );
};
export default MenuItemCard;
