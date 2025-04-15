import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icon/Logo.svg";
import Call from "../../assets/icon/Call.svg";
import Corz from "../../assets/icon/Corz.svg";
import Like from "../../assets/icon/Like.svg";
import { NavLink } from "react-router";
import { themeContext } from "../../providers/theme";
import style from "./header.module.css";
import "../../scss/style.css";

export default function Header({ setIsCartOpen }) {
  const { theme, toggleTheme, user } = useContext(themeContext);
  const [dropdownMenu, setdropdownMenu] = useState(false);
  const [select, setSelect] = useState();
  const [DropdownName, setDropdownName] = useState();
  const navigate = useNavigate();
  const DropdownNameList = [
    "Каталог",
    "Товары",
    "Услуги",
    "Новинки",
    "Акции",
    "Скидки",
    "Подарки",
  ];

  useEffect(() => {
    if (DropdownName !== null) {
      navigate(DropdownName);
      setdropdownMenu(false);
    }
  }, [DropdownName]);

  useEffect(() => {
    if (user) {
      navigate("/Главная");
    }
  }, [user]);

  const onClickSelect = (index) => {
    setSelect(index);
    setDropdownName(DropdownNameList[index]);
    setdropdownMenu(false);
  };

  const onClickTheme = () => {
    toggleTheme();
  };

  const navigateClick = () => {
    navigate("/Главная");
  };

  return (
    <header className={`header header__${theme}`}>
      <p className="header_logo">
        <img
          src={Logo}
          alt=""
          className="header_logo-image"
          width="50"
          height="42"
          loading="lazy"
        />
      </p>

      <button
        className="menu-toggle"
        aria-label="Открыть меню"
        title="Open menu"
      >
        ☰
      </button>

      <nav className="header_menu">
        <ul className="header_menu-list">
          <li className="header_menu-item">
            <NavLink to="/Главная" className="header_menu-link">
              Главная
            </NavLink>
          </li>

          <li className="header_menu-item">
            <NavLink
              to={DropdownName}
              className="header_menu-link"
              id="catalogBtn"
              onClick={() => setdropdownMenu(!dropdownMenu)}
            >
              {select ? DropdownName : "Каталог"}
            </NavLink>
            {dropdownMenu && (
              <div
                className="overlay"
                onClick={() => setdropdownMenu(false)}
              ></div>
            )}
            <ul
              className={`dropdown--menu ${dropdownMenu ? "active" : ""}`}
              id="dropdownMenu"
            >
              {DropdownNameList.map((item, index) => (
                <li
                  key={index}
                  className={`dropdown--Item ${select === index ? "active" : ""}`}
                  onClick={() => onClickSelect(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>

          <li className="header_menu-item">
            <NavLink to="/Оптом" className="header_menu-link">
              Оптовая продажа
            </NavLink>
          </li>
          <li className="header_menu-item">
            <NavLink to="/О нас" className="header_menu-link">
              О нас
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header_menu-action">
        <NavLink to="" className="header_menu-number">
          <img
            src={Call}
            alt=""
            className="header_logo-image"
            width="20"
            height="20"
          />
          +992(922) 34 45
        </NavLink>
        <NavLink to="/Избранное" className="header_logo-icon">
          <img
            src={Corz}
            alt=""
            className="header_logo-image"
            width="32"
            height="32"
            loading="lazy"
          />
        </NavLink>
        <span onClick={() => setIsCartOpen(true)} className="header_logo-icon">
          <img
            src={Like}
            alt=""
            className="header_logo-image"
            width="32"
            height="32"
            loading="lazy"
          />
        </span>
        {user ? (
          <div className={style.userContainer}>
            <span>{user.name}</span>
            <img className={style.userAvatar} src={user.avatar} />
          </div>
        ) : (
          <>
            <NavLink className="registFormLink" to="/registrationForm">
              Регистрация
            </NavLink>
            <NavLink className="authFormLink" to="/authForm">
              Войти
            </NavLink>
          </>
        )}
        <div onClick={onClickTheme} className={style.buttonContainer}>
          <button className={style.themeButton}>
            {theme === "light" ? "Светлая" : "Темная"}
          </button>
        </div>
      </div>
    </header>
  );
}
