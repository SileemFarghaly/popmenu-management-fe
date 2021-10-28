import { Paper, Typography, Grid } from "@mui/material";
import MenuItemCard from "./MenuItemCard";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems([
      {
        title: "Spaghettios",
        description: "It's a can of Spaghettios",
        price: "$3.99",
      },
      {
        title: "Spaghettios2",
        description: "The Sequel",
        price: "$3.99",
      },
      {
        title: "Spaghettios",
        description: "It's a can of Spaghettios",
        price: "$3.99",
      },
      {
        title: "Spaghettios2",
        description: "The Sequel",
        price: "$3.99",
      },
      {
        title: "Spaghettios",
        description: "It's a can of Spaghettios",
        price: "$3.99",
      },
      {
        title: "Spaghettios2",
        description: "The Sequel",
        price: "$3.99",
      },
      {
        title: "Spaghettios",
        description: "It's a can of Spaghettios",
        price: "$3.99",
      },
      {
        title: "Spaghettios2",
        description: "The Sequel",
        price: "$3.99",
      },
      {
        title: "Spaghettios",
        description: "It's a can of Spaghettios",
        price: "$3.99",
      },
      {
        title: "Spaghettios2",
        description: "The Sequel",
        price: "$3.99",
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
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Menu;
