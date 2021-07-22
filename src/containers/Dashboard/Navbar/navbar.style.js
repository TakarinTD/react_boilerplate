import styled from 'styled-components';

import { cyan } from '@material-ui/core/colors';

const NavbarStyle = styled.div`
  @media (max-width: 748px) {
    .account {
      display: none;
    }
  }
  .link-text {
    color: #ffffff;
    text-decoration: none;
  }
  .appBar {
    background-color: white;
    border-bottom: 0;
    margin-bottom: 0;
    position: fixed;
    top: 0px;
    z-index: 90;
    color: #ffffff;
    border: 0;
    transition: all 150ms ease 0s;
    display: block;
  }
  .toolbar {
    background-color: #000034;
    margin-right: auto;
    margin-left: auto;
  }
  .flexTitle {
    display: flex;
    flex-grow: 1;
    align-items: center;
  }
  .brand {
    display: flex;
    align-items: center;
  }
  .botName {
    margin-left: 30px;
    font-weight: bold;
    font-size: 20px;
  }
  .whiteText {
    color: #ffffff;
  }
  .account {
    margin-left: 20px;
    margin-right: 76px;
  }
  .noti {
    align-items: center;
    display: flex;
    .clearDiv {
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;
      :hover .clear {
        color: ${cyan[500]};
        text-decoration: underline;
      }
    }
    .MuiIcon-root,
    .language {
      color: #ffffff;
    }
    .notiContainer {
      background-color: #ffffff;
      box-shadow: -4px -4px 4px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }
    .notiIcon {
      margin-right: 10px;
    }
    .notifyBadge {
      margin-right: 20px;
    }
    .notiItem {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .notiItem {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .notiItemHighlight {
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      :hover {
        background-color: ${cyan[100]};
      }
    }
  }
`;
export default NavbarStyle;
