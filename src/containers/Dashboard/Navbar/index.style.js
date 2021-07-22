import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import {
  DRAWER_WIDTH,
  DRAWER_HOVER_WIDTH,
  HEADER_HEIGHT,
  FEATURE_COLORS,
  TRANSITION,
  BOX_SHADOW,
} from '../../../themes/configs';

const ToolbarStyled = styled(Toolbar)`
  .icon {
    color: ${FEATURE_COLORS.bgIconHeader};
  }
  .link-text {
    color: #ffffff;
    text-decoration: none;
  }
  .account {
    margin-left: 20px;
    margin-right: 76px;
  }

  @media (max-width: 748px) {
    .account {
      display: none;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;

  .botName {
    margin-left: 30px;
    font-weight: bold;
    font-size: 20px;
  }

  .brand {
    display: flex;
    align-items: center;
  }
`;

const NavbarLinkStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  border-radius: 100%;
  background-color: ${FEATURE_COLORS.tertiary};
  z-index: 1000;

  .avatar {
    width: 60px;
    height: 60px;
  }
`;

const MainPanel = styled.div`
  @media (min-width: 960px) {
    width: calc(
      100% -
        ${(props) =>
          props.openSidebarWindow ? DRAWER_HOVER_WIDTH : DRAWER_WIDTH}px
    );
  }
  position: relative;
  float: right;
  transition: ${TRANSITION.layout};
  max-height: 100%;
  width: 100%;
  background-color: ${FEATURE_COLORS.bgContent};
`;

const SidebarWrapper = styled.div`
  .router-link {
    text-decoration: none;
  }
  .drawer {
    width: ${DRAWER_HOVER_WIDTH}px;
    flex-shrink: 0;
    white-space: nowrap;
    box-shadow: ${BOX_SHADOW.layout};
    transition: ${TRANSITION.layout};
    border: none;
    padding-top: ${HEADER_HEIGHT + 20}px;
    z-index: 80;
  }
  .drawerOpen {
    width: ${DRAWER_HOVER_WIDTH}px;
  }
  .drawerClose {
    width: ${DRAWER_WIDTH}px;
    overflow: visible;
  }
  .groupMenu {
    position: relative;
    &:hover .rightTopMenuWrapper {
      display: block;
    }
  }
  .menuItem {
    display: flex;
    align-items: center;
    &:hover {
      background-color: ${FEATURE_COLORS.bgPrimarySidebar};
    }
  }
  .menuIcon {
    min-width: 24px;
    height: 30px;
    font-size: 24px;
    line-height: 30px;
    align-items: center;
    vertical-align: middle;
    color: ${FEATURE_COLORS.bgIconSidebar};
  }
  .menuTitle {
    overflow: hidden;
    white-space: nowrap;
    padding-left: 10px;
    margin: 0;
    transition: ${TRANSITION.layout};
    color: ${FEATURE_COLORS.bgIconSidebar};
  }
  .primary {
    color: ${FEATURE_COLORS.bgIconSidebar};
  }
  .hide {
    display: none;
  }
  .backgroundPrimary {
    background-color: ${FEATURE_COLORS.bgPrimarySidebar};
  }
  .nested {
    padding: 8px 16px 8px 32px;
    &:hover,
    &:visited {
      color: inherit;
    }
  }
  .rightTopMenuWrapper {
    background-color: transparent;
    position: absolute;
    right: ${-DRAWER_HOVER_WIDTH}px;
    top: 0;
    display: none;
    width: ${DRAWER_HOVER_WIDTH}px;
    padding-left: 8px;
  }
  .rightTopMenu {
    border-radius: 4px;
    background-color: ${FEATURE_COLORS.white};
    box-shadow: ${BOX_SHADOW.layout};
  }
`;

const DrawerMobile = styled(SidebarWrapper)`
  .drawerMobile {
    width: ${DRAWER_HOVER_WIDTH}px;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
`;

const Content = styled.div`
  margin-top: ${HEADER_HEIGHT + 20}px;
  padding: 20px 20px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - 20px);

  .menu {
    position: relative;
    top: -16px;
  }
`;

const ConsoleStyle = styled.div`
  position: relative;
  top: 0;
  height: 100vh;

  .appBar {
    background-color: ${FEATURE_COLORS.tertiary};
  }
`;

const ErrorStyle = styled.h1`
  text-align: center;
  font-weight: 500;
`;

const NotChoose = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export {
  ToolbarStyled,
  Title,
  NavbarLinkStyle,
  MainPanel,
  Loading,
  Content,
  ConsoleStyle,
  ErrorStyle,
  NotChoose,
  SidebarWrapper,
  DrawerMobile,
};
