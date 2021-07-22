import React from 'react';
import ApiManageContainer from '../containers/ApiManage';

export default function Home(props) {
  const { history } = props;
  return <ApiManageContainer history={history} />;
}
