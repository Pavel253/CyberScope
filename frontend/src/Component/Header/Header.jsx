import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = ({
  activeHeader,
  setActiveHeader,
  toggleLanguage,
  language,
}) => {
  const navigate = useNavigate();

  return (
    <header className={activeHeader ? "App-header" : "App-header active"}>
      <div className="container">
        <div className="nav">
          <NavLink to="/about-tools" className="a" activeClassName="active">
            {language === "ru" ? "Об инструменте" : "About Tools"}
          </NavLink>
          <NavLink to="/questions" className="a" activeClassName="active">
            {language === "ru" ? "Вопросы" : "Questions"}
          </NavLink>
          <NavLink to="/task" className="a" activeClassName="active">
            {language === "ru" ? "Цель" : "Task"}
          </NavLink>
          <NavLink to="/sources" className="a" activeClassName="active">
            {language === "ru" ? "Исходники" : "Sources"}
          </NavLink>
        </div>
        <div className="nav_language-exit">
          <button className="btn__language" onClick={toggleLanguage}>
            {language === "ru" ? "English" : "Русский"}
          </button>
          <button className="btn__exit" onClick={() => navigate(-1)}>
            {language === "ru" ? "Обратно" : "Back"}
          </button>
        </div>
      </div>
      <div className="container__btn">
        <button
          className="btn__header-active"
          onClick={() => setActiveHeader(!activeHeader)}
        >
          {activeHeader
            ? language === "ru"
              ? "Закрыть"
              : "Close"
            : language === "ru"
            ? "Открыть"
            : "Open"}
        </button>
      </div>
    </header>
  );
};

export default Header;
