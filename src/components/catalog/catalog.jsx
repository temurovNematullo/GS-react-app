import React from 'react';
import { NavLink } from 'react-router';


const Catalog = () => {
    return (
        <>
        <section className="catalog-section" id="catalog-section">
            <div className="catalog__List">
                <div className="catalog--header">
                    <h2>Накладные электронные замки</h2>
                </div>
                <div className="reset--filters">
                    <button className="reset--filters__button">Сбросить фильтры</button>
                    <span className="have--filters">
                        Электронные кодовые замки <img src="/icon/cancel.svg" alt="" loading="lazy" />
                    </span>
                    <select name="" id="" className="filter--product">
                        <option value="popular--product">Популярные</option>
                        <option value="min--priceFilter">Низкая цена</option>
                        <option value="max--priceFilter">Максимальная цена</option>
                    </select>
                </div>

                <div className="conteiner--filter">
                    <div className="filter--accordeonConteiner">
                        <span className="filter--accordeonConteiner__header">Фильтр</span>

                        <details className="accordeonfilter">
                            <summary className="accordion-header">
                                <label>Цена</label>
                            </summary>
                            <div className="accordion">
                                <div className="inputs">
                                    <input type="number" id="minPrice" value="1000" />
                                    <input type="number" id="maxPrice" value="24500" />
                                </div>
                                <div className="slider-container">
                                    <input type="range" id="minRange" min="0" max="100000" value="10000" />
                                    <input type="range" id="maxRange" min="0" max="100000" value="24500" />
                                    <div className="slider-track"></div>
                                </div>
                            </div>
                        </details>

                        <details className="accordeonfilter">
                            <summary className="accordion-header">
                                <label>Особенности</label>
                            </summary>
                            <div className="accordion">
                                <ul className="features">
                                    <li className="feature-item">
                                        <label className="feature-label">
                                            <input type="checkbox" />
                                            <span className="custom-checkbox"></span>
                                            <span className="feature-text">Электронные кодовые замки</span>
                                            <span className="feature-count">(65)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className="accordeonfilter">
                            <summary className="accordion-header">
                                <label>Цвет</label>
                            </summary>
                            <div className="accordion">
                                <ul className="features">
                                    <li className="feature-item">
                                        <label className="feature-label">
                                            <input type="checkbox" />
                                            <span className="custom-checkbox"></span>
                                            <span className="feature-text">Черный/золота</span>
                                            <span className="feature-count">(65)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className="accordeonfilter">
                            <summary className="accordion-header">
                                <label>Материал</label>
                            </summary>
                            <div className="accordion">
                                <ul className="features">
                                    <li className="feature-item">
                                        <label className="feature-label">
                                            <input type="checkbox" />
                                            <span className="custom-checkbox"></span>
                                            <span className="feature-text">Сталь</span>
                                            <span className="feature-count">(65)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className="accordeonfilter">
                            <summary className="accordion-header">
                                <label>Размеры</label>
                            </summary>
                            <div className="accordion">
                                <ul className="features">
                                    <li className="feature-item">
                                        <label className="feature-label">
                                            <input type="checkbox" />
                                            <span className="custom-checkbox"></span>
                                            <span className="feature-text">300Х100 мм</span>
                                            <span className="feature-count">(65)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <ul id="catalogContainer" className="catalog-list">
                        <li className="product-card">
                            <div className="product-card__labels">
                                <img src="/img/donthave.svg" alt="Нет в наличии" />
                                <span className="product-card__status">Нет в наличии</span>
                                <span className="product-card__sale">sale</span>
                            </div>

                            <div className="product-card__gift">
                                <img src="/img/podaroc.svg" alt="Подарок" />
                                <span>Подарок</span>
                            </div>

                            <NavLink to="Вариативный замок Golden Soft для отеля." className="product-card__image">
                                <img src="/img/productcard (1).svg" alt="Вариативный замок Golden Soft для отеля." />
                            </NavLink>

                            <div className="product-card__info">
                                <p className="product-card__title">Вариативный замок Golden Soft для отеля.</p>
                                <div className="product-card__price">
                                    <span className="product-card__new-price">7 000₽</span>
                                    <span className="product-card__old-price">8 000₽</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="catalog--pagination">
                    <span className="pagination-dots"></span>
                </div>
            </div>
        </section>
        </>
    );
};

export default Catalog;