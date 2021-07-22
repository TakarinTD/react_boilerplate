import styled from 'styled-components';
import { mainColors } from '../../themes/styleConstant';

export default styled.div`
  .api-manage-container {
    min-height: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
  }
  .headTitle {
    text-transform: uppercase;
  }
  .icon {
    cursor: pointer;
  }
  .headButtons {
    display: flex;
    justify-content: flex-end;
    .headButton {
      margin: 5px;
      padding: 5px;
      color: white;
    }
  }
  .table {
    margin: 5px 0;
  }
  .headerCell {
    background: ${mainColors.havelockBlue};
    border: 1px solid rgba(224, 224, 224, 1);
    color: white;
  }
  .cellContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cellIcon {
      visibility: hidden;
    }
    :hover .cellIcon {
      visibility: visible;
    }
  }
`;
