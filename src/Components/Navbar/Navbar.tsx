import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

type MenuItems = {
  name: string;
  image: string;
};

type Props = {
  menu: MenuItems[];
  type: "bottom" | "top";
};

const Navbar: FC<Props> = ({ menu, type = "bottom" }) => {
  const { pathname } = useLocation();
  const slug = pathname.slice(1);
  return (
    <nav>
      <ul className={`nav-${type}`}>
        {menu.map((item) => (
          <li
            key={item.name}
            className={slug === item.name.toLowerCase() ? "active" : ""}
          >
            <Link to={item.name.toLowerCase()}>
              {item.image && <img src={item.image} alt={item.name} />}
              <div className="link-name">{item.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
