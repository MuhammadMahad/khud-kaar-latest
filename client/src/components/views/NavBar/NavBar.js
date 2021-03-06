import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import logo from './72275122_2429458524006435_8737122305190133760_o.png';

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className='menu'
      style={{ position: 'fixed', zIndex: 5, width: '100%' }}
    >
      <div className='menu__container'>
        <div className='menu__logo'>
          <a href='/'>
            <img style={{ width: '100px', height: '50px' }} src={logo} alt='' />
          </a>
        </div>
        <div className='menu_left'>
          <LeftMenu mode='horizontal' />
        </div>

        <div className='menu_rigth'>
          <RightMenu mode='horizontal' />
        </div>
        <Button
          className='menu__mobile-button'
          type='primary'
          onClick={showDrawer}
        >
          <Icon type='align-right' />
        </Button>
        <Drawer
          title='Menu'
          placement='right'
          className='menu_drawer'
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode='inline' />
          <RightMenu mode='inline' />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
