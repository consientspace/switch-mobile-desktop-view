import * as React from "react";

import NavigationBar from "./NavigationBar";
import MenuDrawer from "./MenuDrawer";

const MobileBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  return (
    <>
      <NavigationBar onClickBurger={() => setIsDrawerOpen(true)} />
      <MenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default MobileBar;
