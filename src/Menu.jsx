import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import NewMenuItem from "./NewMenuItem";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [openAddMenuItemDialog, setOpenMenuItemDialog] = useState(false);

  useEffect(() => {
    setMenuItems([
      {
        id: "1",
        title: "Spaghettios",
        description:
          "It's a can of Spaghettios, served straight from the can. Perfect for young children or sad men.",
        price: "2.99",
        image: "./spaghettios.jpg",
      },
      {
        id: "2",
        title: "Sinner's Sandwich",
        description:
          "Fresh sliced Deli Turkey, Strawberry Jam, and Fruit Loops, served on White or Wheat.",
        price: "6.99",
        image: "./sinnersandwich.jpg",
      },
      {
        id: "3",
        title: "A Single Plum, Floating in Perfume",
        description: "Served in a Mans Hat",
        price: "13.99",
        image: "./singleplum.jpg",
      },
    ]);
  }, []);

  return (
    <>
      <Paper>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography variant="h1">Popmenu Test</Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              style={{ marginTop: "10px" }}
              onClick={() => {
                setOpenMenuItemDialog(true);
              }}
            >
              <AddIcon />
              New Menu Item
            </Button>
          </Box>
        </Box>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={3}>
          {menuItems.map((e, i) => (
            <Grid item key={i}>
              <MenuItemCard
                menuItem={e}
                onDelete={() => {
                  setMenuItems(menuItems.filter((x) => x.id !== e.id));
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <NewMenuItem
        open={openAddMenuItemDialog}
        onClose={() => setOpenMenuItemDialog(false)}
        onComplete={(m) => {
          setMenuItems([...menuItems, { id: menuItems.length + 1, ...m }]);
        }}
      />
    </>
  );
};

export default Menu;
