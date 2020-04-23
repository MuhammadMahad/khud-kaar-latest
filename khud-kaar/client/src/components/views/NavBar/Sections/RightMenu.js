/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { ADMIN_SERVER } from '../../../Config';

import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RightMenu(props) {
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.admin);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push('/login');
      } else {
        alert('Log Out Failed');
      }
    });
  };

  const adminlogoutHandler = () => {
    axios.get(`${ADMIN_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push('/admin/login');
      } else {
        alert('Log Out Failed');
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key='mail'>
          <a href='/login'>Signin</a>
        </Menu.Item>
        <Menu.Item key='app'>
          <a href='/register'>Signup</a>
        </Menu.Item>
      </Menu>
    );
  } else if (admin.adminData && admin.adminData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key='upload'>
          <a href='/product/upload'>Upload Product</a>
        </Menu.Item>
        <Menu.Item key='registeradmin'>
          <a href='/admin/register'>Register a new admin</a>
        </Menu.Item>
        <Menu.Item key='adminlogout'>
          <a onClick={adminlogoutHandler}>Admin Logout</a>
        </Menu.Item>
      </Menu>
    );
  } else if (user.userData && user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key='cart' style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href='/user/cart' style={{ marginRight: -22, color: '#667777' }}>
              <Icon
                type='shopping-cart'
                style={{ fontSize: 30, marginBottom: 3 }}
              />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key='logout'>
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return <div></div>;
  }
}

export default withRouter(RightMenu);
