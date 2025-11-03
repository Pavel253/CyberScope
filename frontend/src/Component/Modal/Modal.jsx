import React from "react";
import "./Modal.scss";

const Modal = ({ activeModal, setActiveModal }) => {
  return (
    <div
      className={activeModal ? "modal active" : "modal"}
      onClick={() => setActiveModal(false)}
    >
      <div
        className={activeModal ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="h3">
          Создатель проекта не несет ответственность за использование
          инструмента, представленных на данном ресурсе
        </h3>
        <button className="btn" onClick={() => setActiveModal(false)}>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <div className="content__menu">
          <h4 className="h4">Цель предоставления инструментов</h4>
          <span>
            Все материалы и инструменты на сайте предназначены исключительно для
            ознакомительных, образовательных и этичных целей. Они не должны
            использоваться для незаконных действий, нарушения конфиденциальности
            или причинения вреда.
          </span>
          <h4 className="h4">Соблюдение законодательства</h4>
          <span>
            Пользователь обязан самостоятельно убедиться, что его действия
            соответствуют законам страны, в которой он находится. Создатель
            сайта не контролирует и не отвечает за возможные нарушения со
            стороны посетителей.
          </span>
          <h4 className="h4">Технические риски</h4>
          <span>
            Сайт не гарантирует 100% точность результатов. Данные из открытых
            источников могут быть устаревшими или ошибочными. Пользователь
            использует инструменты на свой страх и риск.
          </span>
          <h4 className="h4">Этические нормы</h4>
          <span>
            Пользователь обязуется использовать инструменты в соответствии с
            этическими нормами, уважая права и конфиденциальность других лиц.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
