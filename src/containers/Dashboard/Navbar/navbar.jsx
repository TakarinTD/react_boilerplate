import React from 'react';
import { AppBar, Hidden, IconButton, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import NavbarLink from './navbarLink';
import { ToolbarStyled, Title } from './index.style';

export default function Navbar(props) {
  const { userInfo } = useSelector((state) => state.auth);
  const { handleDrawerToggle } = props;
  const { t } = useTranslation();

  return (
    <AppBar className="appBar">
      <ToolbarStyled>
        {/* TODO: check role admin */}
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <Title>
          <a href="/home" variant="h6" className="text">
            {t('LOGO')}
          </a>
        </Title>
        <a href="/info-user" className="link-text">
          <Typography className="account">User name</Typography>
        </a>
        <NavbarLink userInfo={userInfo} />
      </ToolbarStyled>
    </AppBar>
  );
}
