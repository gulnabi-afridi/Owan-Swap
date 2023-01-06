import React,{useState} from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useTheme } from "next-themes";

function Layout({ children }) {
  const [mode, Set_Mode] = useState(true);
  const [mode_Box, Set_Mode_Box] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header Mode={mode} SetMode={Set_Mode} ModeBox={mode_Box} SetModeBox={Set_Mode_Box} Theme={theme} SetTheme={setTheme} />
      <main>{children}</main>
      <Footer Mode={mode} SetMode={Set_Mode} ModeBox={mode_Box} SetModeBox={Set_Mode_Box} Theme={theme} SetTheme={setTheme} />
    </>
  );
}

export default Layout;
