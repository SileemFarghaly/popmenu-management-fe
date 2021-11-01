import { Box, Button, Divider, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Menu from "./Menu";

const MenuContainer = () => {
  const [menus, setMenus] = useState([
    { id: 1, title: "Menu 1" },
    { id: 2, title: "Menu 2" },
  ]);
  const [activeMenu, setActiveMenu] = useState(1);

  // Realisticly, This is where I'd opt to use a reducer or even go down the route of Redux
  // For simplicities sake, just using state for the time being
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: "Spaghettios",
      description:
        "It's a can of Spaghettios, served straight from the can. Perfect for young children or sad men.",
      price: "2.99",
      image: "./spaghettios.jpg",
      parentMenuId: 1,
    },
    {
      id: 2,
      title: "Sinner's Sandwich",
      description:
        "Fresh sliced Deli Turkey, Strawberry Jam, and an assortment of cereal, served on White or Wheat, no crust.",
      price: "6.99",
      image: "./sinnersandwich.jpg",
      parentMenuId: 1,
    },
    {
      id: 3,
      title: "A Single Plum, Floating in Perfume",
      description: "Served in a Mans Hat",
      price: "13.99",
      image: "./singleplum.jpg",
      parentMenuId: 2,
    },
  ]);

  function addMenu() {
    const newMenu = {
      id: menus.length + 1,
      title: `Menu ${menus.length + 1}`,
    };
    setMenus([...menus, newMenu]);
  }

  function deleteMenuItem(id) {
    setMenuItems(
      menuItems.filter((x) => {
        return x.id !== id;
      })
    );
  }

  function addMenuItem(menuItem) {
    menuItem.parentMenuId = activeMenu;
    setMenuItems([...menuItems, { id: menuItems.length + 1, ...menuItem }]);
  }

  function editMenuItem(newMenuItem) {
    setMenuItems((m) => {
      m.splice(
        m.findIndex((x) => x.id === newMenuItem.id),
        1,
        newMenuItem
      );
      return m;
    });
  }

  return (
    <>
      <Typography variant="h1">Popmenu Test</Typography>
      <Divider />
      <Toolbar variant="dense">
        <Box display="flex" style={{ width: "100%" }}>
          <Box flexGrow={1}>
            {menus.map((x) => (
              <Button key={x.id} onClick={() => setActiveMenu(x.id)}>
                {x.title}
              </Button>
            ))}
          </Box>
          <Box>
            <Button onClick={addMenu}>New Menu</Button>
          </Box>
        </Box>
      </Toolbar>
      <Divider />
      <Menu
        menu={menus.find((x) => x.id === activeMenu)}
        menuItems={menuItems.filter((x) => x.parentMenuId === activeMenu)}
        deleteMenuItem={deleteMenuItem}
        addMenuItem={addMenuItem}
        editMenuItem={editMenuItem}
      />
    </>
  );
};
export default MenuContainer;
