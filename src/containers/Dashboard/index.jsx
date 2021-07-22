import React from 'react';
import DashboardStyle from './dashboard.style';
import Navbar from './Navbar/navbar';

export default function Dashboard(props) {
  const { children } = props;
  return (
    <DashboardStyle>
      <Navbar />
      <div className="content">{children}</div>
    </DashboardStyle>
  );
}
