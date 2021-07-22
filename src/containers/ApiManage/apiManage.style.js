import styled from 'styled-components';
import { mainColors } from '../../themes/styleConstant';

export default styled.div`
  .api-manage-container {
    min-height: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .cardHeader {
    padding: 8px 20px 8px 10px;
    margin-top: -20px;
    margin-bottom: 20px;
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
  .headTitle {
    text-transform: uppercase;
    margin: 0;
    line-height: 30px;
    flex: 1;
    color: #fff;
    padding: 0 15px;
  }
`;
