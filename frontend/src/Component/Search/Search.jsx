import React from 'react';

const Search = () => {
    return (
        <main className='main'>
            <div className="conatiner">
                <div className="menu__osint">
                    <div className="search__menu-btn">Номера</div>
                    <div className="search__menu-btn">Почты</div>
                    <div className="search__menu-btn">Никнеймы</div>
                    <div className="search__menu-btn">Сайт</div>
                    <button className='search__still'>
                        <p>Еще</p>
                        <span />
                    </button>
                </div>
                <form className="form__search">
                    <label htmlFor="">Поиск</label>
                    <input type="text"/>
                    <button className='form__btn'>

                    </button>
                </form>
            </div>
        </main>
    );
};

export default Search;