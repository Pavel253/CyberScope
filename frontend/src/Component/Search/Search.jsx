import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const q = query.trim();
        if (!q) return;
        try {
            // Пример вызова API
            const response = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error('Ошибка поиска:', error);
        }
    };

    return (
        <main className='main'>
            <div className="container">
                <div className="menu__osint">
                    <button type="button" className="search__menu-btn">Номера</button>
                    <button type="button" className="search__menu-btn">Почты</button>
                    <button type="button" className="search__menu-btn">Никнеймы</button>
                    <button type="button" className="search__menu-btn">Сайт</button>
                    <button className='search__still' type="button" aria-label="Ещё">
                        <p>Еще</p>
                        <span />
                    </button>
                </div>

                <form className="form__search" onSubmit={handleSubmit}>
                    <label htmlFor="search-input">Поиск</label>
                    <div className="form__row">
                        <input
                            id="search-input"
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Введите номер, почту или ник"
                            aria-label="Поисковый запрос"
                        />
                        <button className='form__btn' type="submit" aria-label="Найти">
                            Найти
                        </button>
                    </div>
                </form>

                {results.length > 0 && (
                    <div className="search__results">
                        <h2>Результаты поиска</h2>
                        <ul>
                            {results.map((result, index) => (
                                <li key={index}>{result}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Search;