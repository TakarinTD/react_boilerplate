import React, { useState } from 'react';
import {
  MenuItem,
  Avatar,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  // Link,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import NavbarLinkStyle from './navbarLink.style';
import { logout } from '../../../redux/auth/actions';

export default function NavbarLink(props) {
  const { userInfo } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = async () => {
    setAnchorEl(null);
    await dispatch(logout());
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderAvatar = () => {
    // const { name, avatar, bgColor } = userInfo;
    const name = 'User name';
    const avatar = null;
    const bgColor = 'blue';
    if (avatar)
      return <Avatar className="avatar" src={avatar} onClick={handleOpen} />;
    const words = name.split(' ');
    return (
      <Avatar
        className="avatar"
        onClick={handleOpen}
        style={{ backgroundColor: bgColor }}
      >
        {words[words.length - 1].slice(0, 1).toUpperCase()}
      </Avatar>
    );
  };

  return (
    <NavbarLinkStyle>
      {renderAvatar()}
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement="bottom-end"
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'center top',
            }}
          >
            <Paper className="notiContainer">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList role="menu">
                  {/* <MenuItem className="dropdownItem">
                    <Link
                      href="/your-campaign-overview"
                      color="inherit"
                      underline="none"
                    >
                      {t('yourCampaignOverview')}
                    </Link>
                  </MenuItem> */}
                  <MenuItem onClick={handleLogout} className="dropdownItem">
                    {t('logout')}
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </NavbarLinkStyle>
  );
}
