import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import DropdownComponent from '../UI/Dropdown';

const { Header } = Layout;


const Navbar = () => {
  const { data: session } = useSession();

  console.log("from header", session);
  return(
    <Layout className="layout">
      <Header className='flex justify-between'>
        <div className="text-2xl font-bold pt-4" style={{ color: 'white' }}> PC Builder</div>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>Profile</Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>Settings</Menu.Item>
        </Menu> */}
        <div>
          <DropdownComponent></DropdownComponent>
        </div>
        {/* <div>
        <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
        <Button className=''>Sign up</Button>
      </div> */}
        <div>
          {session?.user ? (
            <items>
              <Button onClick={() => signOut()} type="primary" danger>
                Logout
              </Button>
            </items>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <items>Login</items>
            </Link>
          )}
        </div>
      </Header>
    </Layout>
  );
}


export default Navbar;