import React, { useState } from "react";
import "./Questions.scss";
const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(false);

  return (
    <main className="main__question">
      <div className="container">
        <h2 className="main__title-question">Вопросы</h2>
        <div className="container__question">
          <div
            className={
              activeQuestion ? "questions__item" : "questions__item active"
            }
            onClick={() => setActiveQuestion(!activeQuestion)}
          >
            <div className="questions__subtitle">
              <h3>1. Как использовать данный инструмент?</h3>
              <button className="btn__vector" />
            </div>
            <p className="questions__text">
              Для использования инструмента перейдите на главную страницу и
              введите адрес сайта или ключевое слово в поле поиска. Нажмите
              кнопку "Найти", чтобы получить результаты.
            </p>
          </div>
          <div
            className={
              activeQuestion ? "questions__item" : "questions__item active"
            }
            onClick={() => setActiveQuestion(!activeQuestion)}
          >
            <div className="questions__subtitle">
              <h3>1. Как использовать данный инструмент?</h3>
              <button className="btn__vector" />
            </div>
            <p className="questions__text">
              Для использования инструмента перейдите на главную страницу и
              введите адрес сайта или ключевое слово в поле поиска. Нажмите
              кнопку "Найти", чтобы получить результаты.
            </p>
          </div>
          <div
            className={
              activeQuestion ? "questions__item" : "questions__item active"
            }
            onClick={() => setActiveQuestion(!activeQuestion)}
          >
            <div className="questions__subtitle">
              <h3>1. Как использовать данный инструмент?</h3>
              <button className="btn__vector" />
            </div>
            <p className="questions__text">
              Для использования инструмента перейдите на главную страницу и
              введите адрес сайта или ключевое слово в поле поиска. Нажмите
              кнопку "Найти", чтобы получить результаты.
            </p>
          </div>
          <div
            className={
              activeQuestion ? "questions__item" : "questions__item active"
            }
            onClick={() => setActiveQuestion(!activeQuestion)}
          >
            <div className="questions__subtitle">
              <h3>1. Как использовать данный инструмент?</h3>
              <button className="btn__vector" />
            </div>
            <p className="questions__text">
              Для использования инструмента перейдите на главную страницу и
              введите адрес сайта или ключевое слово в поле поиска. Нажмите
              кнопку "Найти", чтобы получить результаты.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Questions;
