import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

type NavigationBarProps = {
  onClickBurger: () => void;
};

const NavigationBar = ({ onClickBurger }: NavigationBarProps) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={onClickBurger}>
          <MenuIcon />
        </IconButton>

        <Typography>Hello There</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
