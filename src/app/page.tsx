import React from "react";
import { Button, ConfigProvider } from "antd";

import theme from "@/theme/themeConfig";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Button type="default">Button</Button>
    </div>
  </ConfigProvider>
);

export default HomePage;
