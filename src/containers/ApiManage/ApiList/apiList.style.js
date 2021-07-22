import styled from 'styled-components';
import { COLOR } from '../../../styles/color';

export default styled.div`
  .table-container {
    border: 0px;
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 4px 0px;
  }
  .cell {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
    &:hover,
    &:active {
      background-color: ${COLOR.gray[200]};
    }
  }
  .cellSelect {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLOR.gray[200]};
  }
  .cell-head {
    height: 24px;
    display: flex;
    justify-content: space-between;
  }
  .root .MuiTextField-root {
    height: 10px;
  }
  .add {
    color: blue;
    cursor: pointer;
  }
  .button-actions {
    display: flex;
  }
`;
