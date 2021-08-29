import React, {FC} from "react";
import navigation from "../../navigation";
import Navbar, {MenuItems} from "../Navbar/Navbar";
import "./layout.scss";

type Props = {
    item: MenuItems
}

const Layout:FC<Props> = ({ item }) => {
  return (
    <div className="layout-wrap">
      <div className="main-content">
        <h1 className={'h1'} title={item.name}>{item.name}</h1>
        <div className="text-center">
            <img className={'main-icon'} src={item.image} />
        </div>
      </div>
      <Navbar menu={navigation} />
    </div>
  );
}

export default Layout
