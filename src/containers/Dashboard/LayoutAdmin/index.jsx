import React, { useState, useEffect } from 'react';
import { Hidden, IconButton, Icon } from '@material-ui/core';

import { adminMenu } from '../../../configs/routeConfig';

import Navbar from '../Navbar/navbar';
import Sidebar from '../Navbar/siderbar';
import { MainPanel, Content, ConsoleStyle } from '../Navbar/index.style';

const ConsoleLayout = ({ children }) => {
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);
  const [openSidebarWindow, setOpenSideBarWindow] = useState(true);

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setOpenSidebarMobile(false);
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', resizeFunction);
    };
  }, []);

  const handleDrawerToggle = () => {
    setOpenSidebarMobile(!openSidebarMobile);
  };

  const handleSideBarWidthToggle = () => {
    setOpenSideBarWindow(!openSidebarWindow);
  };

  return (
    <ConsoleStyle>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <MainPanel openSidebarWindow={openSidebarWindow}>
        <Sidebar
          menu={adminMenu}
          handleDrawerToggle={handleDrawerToggle}
          openSidebarMobile={openSidebarMobile}
          openSidebarWindow={openSidebarWindow}
        />
        <Content>
          <Hidden smDown>
            <IconButton className="menu" onClick={handleSideBarWidthToggle}>
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          {children}
        </Content>
      </MainPanel>
    </ConsoleStyle>
  );
};

export default ConsoleLayout;
