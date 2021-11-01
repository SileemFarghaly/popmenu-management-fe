import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import NewMenuItem from "./NewMenuItem";

const Menu = (props) => {
  const [openAddMenuItemDialog, setOpenAddMenuItemDialog] = useState(false);

  return (
    <>
      <Paper style={{ minHeight: "200px" }}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography variant="h2">{props.menu.title}</Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              style={{ marginTop: "10px" }}
              onClick={() => {
                setOpenAddMenuItemDialog(true);
              }}
            >
              <AddIcon />
              New Menu Item
            </Button>
          </Box>
        </Box>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={3}>
          {props.menuItems.map((e, i) => (
            <Grid item key={e.id}>
              <MenuItemCard
                menuItem={e}
                onDelete={() => props.deleteMenuItem(e.id)}
                onEdit={props.editMenuItem}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <NewMenuItem
        open={openAddMenuItemDialog}
        onClose={() => setOpenAddMenuItemDialog(false)}
        onComplete={props.addMenuItem}
      />
    </>
  );
};

export default Menu;
