import React, { useState } from "react";
import AppRouter from "../AppRouter";
import SideNavbar from "./SideNavbar";
import HeaderComponent from "./HeaderComponent";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "../styles/componentsCSS/Layout.css";
import "../styles/componentsCSS/contentContainer.css";

const { Footer, Content, Header, Sider } = Layout;

function PageLayout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: "100%", minWidth: "100%" }}>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#092E5d",
            paddingLeft: "0%",
            paddingRight: "0%",
          }}
        >
          <HeaderComponent />
        </Header>
        <Layout hasSider>
          <Sider
            width={"20vw"}
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={"4vw"}
          >
            <Button
              className="menuIconContainer"
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined className="Icon" />
                ) : (
                  <MenuFoldOutlined className="Icon" />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
            ></Button>
            <SideNavbar />
          </Sider>
          <Content className="content">
            {" "}
            <AppRouter />
          </Content>
        </Layout>
        <footer
          style={{
            position: "fixed",
            bottom: "0",
            width: "100vw",
            backgroundColor: "#ececec",
            alignContent: "space-evenly",
            paddingLeft: "46vw",
            paddingRight: "40vw",
            paddingBottom: "1vh",
            paddingTop: "1vh",
            marginTop: "1vh",
          }}
        >
          &#169; Team Jupyter
        </footer>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
