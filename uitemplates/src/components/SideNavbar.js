import React from "react";
import { ConfigProvider, Menu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  HomeOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "../styles/componentsCSS/Navbar.css";

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon, 
    children,
    label,
    type,
  };
}
const items2 = [getItem('Home', '1', <HomeOutlined />),
getItem('Option 2', '2', <DesktopOutlined />),
getItem('Option 3', '3', <ContainerOutlined />),
];

const SideNavbar = ({ menu }) => {
  return (
    <ConfigProvider theme={{
      components: {
        Menu: {
          "itemBorderRadius": 0
        }
      }
    }}>
      <div className="menuContainer">
        <Menu
          className="list"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0
          }}
          items={items2}
        />
      </div>
    </ConfigProvider>
  );
};

export default SideNavbar;
