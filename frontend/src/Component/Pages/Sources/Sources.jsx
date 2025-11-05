import React from "react";

const Sources = ({ language }) => {
  return (
    <main className="main">
      <div className="container">
        <h2 className="h2">{language === "ru" ? "Исходники" : "Sources"}</h2>
        <a
          className="a__github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Pavel253/CyberScope"
        >
          github
        </a>
      </div>
    </main>
  );
};

export default Sources;
