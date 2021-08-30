import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../navigation";

export type MenuItems = {
  name: string;
  image: string;
};

type Props = {
  menu: MenuItems[];
  type?: "bottom" | "top";
};

const Navbar: FC<Props> = ({ menu, type = "bottom" }) => {
  return (
    <nav>
      <ul className={`nav-${type}`}>
        {menu.map((item) => (
          <li
            key={item.name}
            style={{maxWidth: `${100/navigation.length}%`}}
          >
            <NavLink to={item.name.toLowerCase()} activeClassName={'active'}>
              {item.image && <img src={item.image} alt={item.name} />}
              <div className="link-name">{item.name}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
