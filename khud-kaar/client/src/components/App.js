import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../hoc/auth';
import AdminAuth from '../hoc/adminauth';

// pages for this product
import LandingPage from './views/LandingPage/LandingPage.js';
import LoginPage from './views/LoginPage/LoginPage.js';
import RegisterPage from './views/RegisterPage/RegisterPage.js';
import AdminLoginPage from './views/AdminLoginPage/AdminLoginPage.js';
import AdminRegisterPage from './views/AdminRegisterPage/AdminRegisterPage.js';
import AdminDashboard from './views/AdminDashboard/AdminDashboard.js';

import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';

import UploadProductPage from './views/UploadProductPage/UploadProductPage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path='/' component={Auth(LandingPage, null)} />
          <Route exact path='/login' component={Auth(LoginPage, false)} />
          <Route exact path='/register' component={Auth(RegisterPage, false)} />
          <Route
            exact
            path='/admin/login'
            component={AdminAuth(AdminLoginPage, false)}
          />
          <Route
            exact
            path='/admin/register'
            component={AdminAuth(AdminRegisterPage, false)}
          />

          <Route
            exact
            path='/admin/admindashboard'
            component={AdminAuth(AdminDashboard, true)}
          />

          <Route
            exact
            path='/product/upload'
            component={AdminAuth(UploadProductPage, true)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
