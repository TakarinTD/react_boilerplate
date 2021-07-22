import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { v4 as uuid } from 'uuid';
import classNames from 'classnames';
import { Drawer, Hidden, List } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { SidebarWrapper, DrawerMobile } from './index.style';

const Sidebar = (props) => {
  const { menu, openSidebarWindow, openSidebarMobile, handleDrawerToggle } =
    props;
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [openGroup, setOpenGroup] = useState(null);

  const checkMenuActive = (route) => pathname === route;

  useEffect(() => {
    Object.keys(menu)
      .filter((key) => typeof menu[key] !== 'function')
      .every((key) => {
        const groupMenu = menu[key];
        const checked = groupMenu.items.every((item) => {
          const menuActive = checkMenuActive(item.route);
          if (menuActive && openGroup !== groupMenu.name) {
            setOpenGroup(groupMenu.name);
            return false;
          }
          return true;
        });
        if (!checked) return false;
        return true;
      });
  }, []);

  const renderSidebarMobile = () => (
    <Hidden mdUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="right"
        open={openSidebarMobile}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerMobile>
          <div className="drawerMobile">
            <List />
          </div>
        </DrawerMobile>
      </Drawer>
    </Hidden>
  );

  const renderSidebarWindow = () => (
    <Hidden smDown implementation="css">
      <Drawer
        variant="permanent"
        open={openSidebarWindow}
        classes={{
          paper: classNames('drawer', {
            ' drawerOpen': openSidebarWindow,
            ' drawerClose': !openSidebarWindow,
          }),
        }}
      >
        <List />
      </Drawer>
    </Hidden>
  );

  return (
    <SidebarWrapper>
      {renderSidebarWindow()}
      {renderSidebarMobile()}
    </SidebarWrapper>
  );
};

export default Sidebar;
