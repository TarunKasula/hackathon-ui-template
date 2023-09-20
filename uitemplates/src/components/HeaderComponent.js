import React, { useState} from "react";
import { Switch, ConfigProvider } from "antd";
import { createFromIconfontCN} from "@ant-design/icons";
import "../styles/componentsCSS/Header.css";

function HeaderComponent() {
  const [themeText, setThemeText] = useState("Dark Mode");
  const [loginText, setLoginText] = useState("Login");
  
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });

  const onChange = (checked) => {
    console.log("switch to checked", checked);
    if (checked) setThemeText("Dark Mode");
    else setThemeText("Light Mode");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorWhite: "#092E5d",
          colorPrimary: "#ffffff",
          colorPrimaryHover: "#ffffff",
          colorTextQuaternary: "#ffffff",
          colorTextTertiary: "#fffff",
        },
      }}
    >
      <div className="head">
      <div className="headerText" style={{fontSize: '28px', fontWeight: 'bold'}}> Team Jupyter </div>
        <div className="headerDivider"></div>
      </div>
      <div className="headerText"> Hackathon UI </div>
      <Switch
        defaultChecked
        onChange={onChange}
        style={{ marginRight: "1vw" }}
      />
      <div className="modeText">{themeText}</div>
      <div className="divider" />
      <div className="headerEnd" title={"Hello, Username"}>Hello, Username </div>

      <div className="logout">
        <button
          onClick={() => {
            setLoginText("Logout");
            setTimeout(() => {
              setLoginText("Login");
            }, 5000);
          }}
        >
          {loginText} &nbsp;
          <IconFont type="icon-tuichu" />
        </button>
      </div>
    </ConfigProvider>
  );
}

export default HeaderComponent;
