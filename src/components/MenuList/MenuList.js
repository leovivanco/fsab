import React, { useContext } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Home, InsertDriveFile, Search, Info } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalProvider";

const MenuList = () => {
  const { menuList } = useContext(GlobalContext);

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
      {menuList.map(({ title, id, icon, path }) => (
        <ListItem button key={id} component={Link} to={path}>
          <ListItemIcon>{returnIcon(icon)}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuList;
