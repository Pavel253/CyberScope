import React from "react";

<<<<<<< HEAD
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
=======
const Tools = () => {
  return (
    <div>
      <button type="button" className="search__menu-btn">
        Сайт
      </button>
      <button className="search__still" type="button" aria-label="Ещё">
        <p>Еще</p>
        <span />
>>>>>>> 57ef5a318f1ddaa9be9ede79b844307d66c2bafb
      </button>
    </div>
  );
};

export default Tools;
