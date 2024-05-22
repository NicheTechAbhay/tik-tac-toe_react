/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './Component/Authentication/Login';
import OrganizationList from './Component/OrganizationList/OrganizationList';
import OrganizationDashboard from './Component/Dashboard/organizationDashboard';
import SiteList from './Component/SiteDashboard/SiteList';
import SiteDashboard from './Component/SiteDashboard/SiteDashboard';
import ApiTrial from './Component/backendTest';



const App: React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/organization-list" element={<OrganizationList />} />
      <Route path="/site-list" element={<SiteList />} />
      <Route path="/site-dashboard" element={<SiteDashboard />} />
      <Route path="/organization-dashboard" element={<OrganizationDashboard/>} />
      <Route path="/backend_Test" element={<ApiTrial/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
