import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key='shop'>
        <a href='/'>Home</a>
      </Menu.Item>
      <Menu.Item key='blog'>
        <a href='/blog'>Blog</a>
      </Menu.Item>
      <Menu.Item key='aboutus'>
        <a href='/aboutus'>About Us</a>
      </Menu.Item>
      <Menu.Item key='contactus'>
        <a href='/contactus'>Contact Us</a>
      </Menu.Item>
      {/* <SubMenu title={<span>Blogs</span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu> */}
    </Menu>
  );
}

export default LeftMenu;
