import React from 'react';

const Header = () => {
    return (
        <header className="App-header">
        <div className="container">
          <div className="nav">
            <div className="a">Об инструменте</div>
            <div className="a">Вопросы</div>
            <div className="a">Цель</div>
            <div className="a">Исходники</div>
          </div>
          <button className="btn__language">
            <span className='Russia'>Русский</span>
            <span className="s-s">/</span>
            <span className='English'>Language</span>
          </button>
          <button className="btn__exit">
            
          </button>
        </div>
      </header>
    );
};

export default Header;