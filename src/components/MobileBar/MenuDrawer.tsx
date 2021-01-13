import {
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer
} from "@material-ui/core";
import * as React from "react";

type MenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  return (
    <SwipeableDrawer open={isOpen} onOpen={() => {}} onClose={onClose}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" secondary="Test" />
        </ListItem>
      </List>

      <List>
        <ListItem button>
          <ListItemText primary="Home" secondary="Test" />
        </ListItem>
      </List>
      
      <List>
        <ListItem button>
          <ListItemText primary="Home" secondary="Test" />
        </ListItem>
      </List>
      
      <List>
        <ListItem button>
          <ListItemText primary="Home" secondary="Test" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default MenuDrawer;
