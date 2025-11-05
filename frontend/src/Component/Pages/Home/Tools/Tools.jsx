import React from "react";

const Tools = () => {
  return (
    <div>
      <button type="button" className="search__menu-btn">
        Сайт
      </button>
      <button className="search__still" type="button" aria-label="Ещё">
        <p>Еще</p>
        <span />
      </button>
    </div>
  );
};

export default Tools;
