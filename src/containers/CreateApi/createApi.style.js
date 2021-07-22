import styled from 'styled-components';
import { COLOR } from '../../styles/color';
import { mainColors } from '../../themes/styleConstant';

export default styled.div`
  .createApiContainer {
    color: rgba(0, 0, 0, 0.87);
    border: 0;
    word-wrap: break-word;
    font-size: 0.875rem;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    border-radius: 6px;
    padding: 10px 15px 15px 15px;
    overflow: visible;
    /* margin-top: 5px; */
  }
  .cardHeader {
    padding: 8px 20px 8px 10px;
    margin-top: -20px;
    border-radius: 3px;
    background-color: ${mainColors.havelockBlue};
    color: #fff;
    position: relative;
    width: auto;
    display: flex;
    align-items: center;
    .header {
      align-items: center;
      display: flex;
      width: 100%;
    }
  }
  .headerText {
    margin: 0;
    line-height: 30px;
    flex: 1;
    color: #fff;
    padding: 0 15px;
  }
  .cardButtonCreate {
    flex: 1;
  }
  .button {
    padding: 5px 15px;
    margin: 0px 5px;
    transition: 0.2s background-color 0.1s;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    &:hover,
    &:active {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .buttonIcon {
      width: 24px;
      height: 24px;
      padding-right: 5px;
    }
  }
  .buttonAuto {
    cursor: pointer;
    color: blue;
    /* &:hover,
    &:active {
      background-color:  ${COLOR.gray[200]};
    } */
  }
  .MuiTypography-colorTextSecondary {
    color: blue;
  }
  .container {
    flex-grow: 1;
    margin: 10px;
    padding-top: 1px;
  }
  .card-info-container {
    overflow: auto;
    min-height: 50px;
    max-height: 1000px;
    height: auto;
    width: unset;
    background: ${COLOR.gray[200]};
    border: 0px;
    overflow-wrap: break-word;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 4px 0px;
    border-radius: 6px;
    padding: 10px 15px 15px;
  }
  .card-data-container {
    margin: 20px 10px;
    min-height: 50px;
    height: auto;
    width: auto;
    background: ${COLOR.gray[200]};
    border: 0px;
    overflow-wrap: break-word;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 4px 0px;
    border-radius: 6px;
    padding: 10px 15px 15px;
  }
  .basic-info-container {
    margin: 10px 0;
    grid-gap: 50px;
  }
  .title-card {
    margin-top: 20px;
    text-transform: uppercase;
  }
  .input-url-api {
    padding-left: 5px;
    width: 90%;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
  .table-container {
    /* background: ${COLOR.gray[200]}; */
    border: 0px;
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 4px 0px;
  }
  .MuiFormControl-root {
    border: 0;
    display: inline-flex;
    padding: 0;
    position: relative;
    min-width: 0;
    flex-direction: column;
    vertical-align: top;
    width: 100%;
  }
  .form-control-select {
    width: 40%;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.12);
    text-align: 5px left;
  }
  .add {
    color: blue;
  }
  .MuiInput-input {
    padding-left: 5px;
  }
  .button-functions {
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
  }
  .button-structure {
    padding: 5px 15px;
    margin: 0px 5px;
    transition: 0.2s background-color 0.1s;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    &:hover,
    &:active {
      background-color: #fff;
    }
    .buttonIcon {
      width: 24px;
      height: 24px;
      padding-right: 5px;
    }
  }
  .button-check {
    color: green;
  }
  .cell {
    display: flex;
    justify-content: space-between;
    &:hover,
    &:active {
      background-color: ${COLOR.gray[200]};
    }
  }
  .cellSelect {
    display: flex;
    justify-content: space-between;
    background-color: ${COLOR.gray[200]};
  }
  .cell-head {
    height: 24px;
    display: flex;
    justify-content: space-between;
  }
  .cell-head-table2 {
    text-align: center;
  }
  .button-actions {
    display: flex;
  }
  .idAvailables {
    display: flex;
  }
  .footer-container {
    margin: 0 auto;
    position: fixed;
    bottom: 0%;
    background: white;
    right: 0;
  }
  .idAvailable {
    color: ${COLOR.blue[600]};
    padding-left: 5px;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: ${COLOR.gray[200]};
    }
  }
`;
