import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
const items = [
  {
    label: <Link href="/processors">CPU / Processor</Link>,
    key: '0',
  },
  {
    label: <Link href="/motherboard">Motherboard</Link>,
    key: '1',
  },
  {
    label: <Link href="/ram">RAM</Link>,
    key: '2',
  },
  {

    label: <Link href="/powersuplyunit">Power Supply Unit</Link>,
    key: '3',
  },
  {

    label: <Link href="/storagedevice">Storage Device</Link>,
    key: '4',
  },
  {

    label: <Link href="/monitor">Monitor</Link>,
    key: '5',
  },
  {

    label: <Link href="/others">Others</Link>,
    key: '6',
  },
];
const DropdownComponent = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <button className='text-white bg-teal-500 hover:bg-teal-500 py-2 px-5 border border-teal-500 rounded-lg' onClick={(e) => e.preventDefault()}>
      <Space>
        Catagoris
        <DownOutlined />
      </Space>
    </button>
  </Dropdown>
);
export default DropdownComponent;