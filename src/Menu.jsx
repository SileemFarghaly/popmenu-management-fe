import { Paper, Typography, Grid } from "@mui/material";
import MenuItemCard from "./MenuItemCard";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems([
      {
        title: "Spaghettios",
        description:
          "It's a can of Spaghettios, served straight from the can. Perfect for young children or sad men.",
        price: "$3.99",
        image: "./spaghettios.jpg",
      },
      {
        title: "Sinner's Sandwich",
        description:
          "Fresh sliced Deli Turkey, Strawberry Jam, and Fruit Loops, served on White or Wheat.",
        price: "$3.99",
        image: "./sinnersandwich.jpg",
      },
      {
        title: "A Single Plum, Floating in Perfume",
        description: "Served in a Mans Hat",
        price: "$3.99",
        image: "./singleplum.jpg",
      },
    ]);
  }, []);

  return (
    <Paper>
      <Typography variant="h1">Popmenu Test</Typography>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={3}>
        {menuItems.map((e, i) => (
          <Grid item key={i}>
            <MenuItemCard
              title={e.title}
              description={e.description}
              price={e.price}
              image={e.image}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Menu;
