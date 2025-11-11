import React from "react";

const Tools = ({ setBtn, btn }) => {
  return (
    <div className="menu__active">
      <button type="button" className="menu__active-btn">
        shodan
      </button>
      <button type="button" className="menu__active-btn">
        Dirsearch
      </button>
      <button type="button" className="menu__active-btn">
        Sublist3r
      </button>
      <button type="button" className="menu__active-btn">
        WhatWeb
      </button>
      <button type="button" className="menu__active-btn">
        WhoIS
      </button>
    </div>
  );
};

export default Tools;
