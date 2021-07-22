import React from 'react';
import CreateApiContainer from '../containers/CreateApi';

export default function CreateApi(props) {
  const { history } = props;
  return <CreateApiContainer history={history} />;
}
