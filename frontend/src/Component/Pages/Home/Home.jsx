import React, { useState } from 'react';
import './Home.scss';
import Tools from './Tools/Tools';

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
                    <Tools />
                </div>

                <form className="form__search" >
                    <label htmlFor="search-input">Поиск</label>
                    <div className="form__row">
                        <input
                            id="search-input"
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Адрес сайта"
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