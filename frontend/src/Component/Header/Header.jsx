import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({
  activeHeader,
  setActiveHeader,
  toggleLanguage,
  language,
}) => {
  return (
    <header className={activeHeader ? "App-header" : "App-header active"}>
      <div className="container">
        <div className="nav">
          <Link to="/about-tools" className="a">
            {language === "ru" ? "Об инструменте" : "About Tools"}
          </Link>
          <Link to="/questions" className="a">
            {language === "ru" ? "Вопросы" : "Questions"}
          </Link>
          <Link to="/task" className="a">
            {language === "ru" ? "Цель" : "Task"}
          </Link>
          <Link to="/sources" className="a">
            {language === "ru" ? "Исходники" : "Sources"}
          </Link>
        </div>
        <div className="nav_language-exit">
          <button className="btn__language" onClick={toggleLanguage}>
            {language === "ru" ? "English" : "Русский"}
          </button>
          <Link to="/" className="btn__exit">
            {language === "ru" ? "Обратно" : "Back"}
          </Link>
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
