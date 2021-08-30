import React, {FC} from "react";
import navigation from "../../navigation";
import Navbar, {MenuItems} from "../Navbar/Navbar";
import "./layout.scss";

type Props = {
    item: MenuItems
}

const Layout:FC<Props> = ({ children }) => {
  return (
    <div className="layout-wrap">
        {children}
      <Navbar menu={navigation} />
    </div>
  );
}

export default Layout
