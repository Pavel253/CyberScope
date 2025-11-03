import React from "react";

import "./AboutTools.scss";

const AboutTools = ({ language, activeModal, setActiveModal }) => {


  return (
    <main className="main main__tools">
      <div className="container">
        <h3 className="h3">
          {language === "ru"
            ? "Находит различную информацию как почты, номеров, данные сайта как домены и ip сайта(shodan). Исключительно по открытым источникам"
            : "Finds various information such as mail, numbers, site data such as domains and the IP of the site. Exclusively from open sources"}
        </h3>
        <button className={activeModal ? "btn active" : "btn"} onClick={() => setActiveModal(true)}>
          {language === "ru" ? "Предисловие" : "The preface"}
        </button>
      </div>
    </main>
  );
};

export default AboutTools;
