import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Home, InsertDriveFile, Search, Info } from "@material-ui/icons";

const MenuList = ({ menuList }) => {
  const returnIcon = (icon) => {
    switch (icon) {
      case "Home":
        return <Home />;
      case "InsertDriveFile":
        return <InsertDriveFile />;
      case "Search":
        return <Search />;
      case "Info":
        return <Info />;
      default:
    }
  };

  return (
    <List>
      {menuList.map(({ title, id, icon }) => (
        <ListItem button key={id}>
          <ListItemIcon>{returnIcon(icon)}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuList;
