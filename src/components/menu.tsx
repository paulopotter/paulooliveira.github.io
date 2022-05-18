import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import CONFIGS from "../services/configs";
import { MenuStyle } from "./styles/menu.style";
import classNames from "classnames";
import { ThemeContext } from "../pages/_app";

const { MENU_LINKS } = CONFIGS;

export function Menu() {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    window.addEventListener("click", (event) => {
      // @ts-ignore
      if (event.target.classList.contains("menu__overlay")) {
        toggleMenu();
      }
    });
  }, []);

  const { isDarkTheme } = useContext(ThemeContext);

  const menuStyle = MenuStyle({ isDarkTheme });

  return (
    <menu
      className={classNames(menuStyle.menu, {
        [menuStyle.menuOpened]: isMenuOpened,
      })}
    >
      <button
        className={menuStyle.menuIcon}
        aria-label="Menu"
        onClick={toggleMenu}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          className={menuStyle.menuIconSVG}
          viewBox="0 0 612 612"
        >
          <path d="M604.267 194.727c4.257 0 7.733-3.644 7.733-7.733v-40.169c0-4.256-3.283-7.733-7.733-7.733H7.733c-4.256 0-7.733 3.644-7.733 7.733v40.169c0 4.256 3.283 7.733 7.733 7.733h596.534zM0 326.084c0 4.256 3.283 7.733 7.733 7.733h596.533c4.256 0 7.733-3.645 7.733-7.733v-40.169c0-4.284-3.283-7.733-7.733-7.733H7.733c-4.256 0-7.733 3.645-7.733 7.733v40.169zm0 139.091c0 4.256 3.283 7.733 7.733 7.733h596.533c4.256 0 7.733-3.645 7.733-7.733v-40.169c0-4.256-3.283-7.732-7.733-7.732H7.733c-4.256 0-7.733 3.644-7.733 7.732v40.169z" />
        </svg>
      </button>
      <ul
        className={classNames(menuStyle.menuList, {
          [menuStyle.menuListActive]: isMenuOpened,
        })}
      >
        {Object.keys(MENU_LINKS)?.map((menuItem, index) => (
          <li className={menuStyle.menuListItem} key={`menu-${index}`}>
            <Link href={MENU_LINKS[menuItem]}>{menuItem}</Link>
          </li>
        ))}
      </ul>
      <div
        className={classNames(menuStyle.menuOverlay, {
          [menuStyle.menuOverlayActive]: isMenuOpened,
        })}
      ></div>
    </menu>
  );
}
