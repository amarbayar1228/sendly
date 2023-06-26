import { PhoneOutlined, MenuOutlined, MailOutlined, SettingOutlined,AppstoreOutlined  } from '@ant-design/icons';
import Link from 'next/link';
import { DownOutlined } from '@ant-design/icons';
import { Drawer, Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
  },
];
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const menuItems = [
    getItem('Бидний тухай', 'sub1', <MailOutlined />, [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]),
    getItem('Хувьцаа эзэмшигч', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Мэдээ мэдээлэл', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
    getItem('Асуулт', 'sub3', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
      ]),
      getItem('МАБ Бодлого', 'sub5', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
      ]),
  ];
  
  // submenu keys of first level
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const Header = () =>{
    const [open, setOpen] = useState(false);
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
        } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    const menu = () =>{
        return<div className='text-base flex gap-10 max-lg:flex-col'> 
            <Dropdown menu={{items}}>
                <Link href="/">
                    <div className='flex items-center gap-2 text-gray-500'>
                        Бидний тухай
                        <DownOutlined className='text-xs'/>
                    </div>
                </Link>
            </Dropdown>  
            <Dropdown menu={{items}}>
                <Link href="/">
                    <div className='flex items-center gap-2 text-gray-500'>
                        Хувьцаа эзэмшигч
                        <DownOutlined className='text-xs'/>
                    </div>
                </Link>
            </Dropdown>  
            <Dropdown menu={{items}}>
                <Link href="/">
                    <div className='flex items-center gap-2 text-gray-500'>
                        Мэдээлэл
                        <DownOutlined className='text-xs'/>
                    </div>
                </Link>
            </Dropdown>  
           
                <Link href="/">
                    <div className='flex items-center gap-2 text-gray-500'>
                        Асуулт 
                    </div>
                </Link>
            <Dropdown menu={{items}}>
                <Link href="/">
                    <div className='flex items-center gap-2 text-gray-500'>
                        Мэдээлэл
                        <DownOutlined className='text-xs'/>
                    </div>
                </Link>
            </Dropdown>  
        </div>
    }
    const mobileMenu = () =>{
        return  <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        
        items={menuItems}
      />
    }
    return<div className="fixed w-full bg-white z-20 ">
        <div className="w-full bg-sky-500 max-xl:px-5 ">
            <div className="mx-auto max-w-7xl flex justify-end text-white py-3 gap-5 text-sm max-[370px]:text-xs max-[370px]:gap-3">
                <div className="text-gray-50">Dollar $2.60 <span className="text-green-300 text-xs">11.11%</span></div>
                <div>+976 7799 7700</div>
                <div>Тусламж</div>
            </div>
        </div>
        <div className="w-full bg-white shadow-hdrShadow">
            <div className="mx-auto max-w-7xl flex justify-between items-center py-7 gap-5 text-sm max-xl:px-5">
                
                 <div className="flex items-center max-lg:justify-between max-lg:w-full">
                    <div className='text-2xl font-bold '>Sendly</div>

                    <div className="ml-20 max-lg:hidden">
                        {menu()}
                    </div>
                    <div className="ml-20 max-lg:block hidden">
                    <button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </button>
                    <Drawer title="Үндсэн цэс" placement="right" onClose={onClose} open={open}>
                            {mobileMenu()}
                    </Drawer>
                    </div>
                 </div>
                 <div className='max-lg:hidden border rounded-lg border-sky-500 text-sky-500 hover:text-sky-600 hover:border-sky-600'><button className="py-2 px-4 flex items-center gap-2"><PhoneOutlined rotate={95}/> Холбоо барих</button></div>
            </div>
        </div>
    </div>
}
export default Header;