import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { fetchCatalogData , setCurrentPage, setParams} from '../../redux/Slices/catalogCardsSlice';
import Preloader from '../../assets/preloader/Preloader';
import have from '../../assets/img/have.svg'
import donthave from '../../assets/img/donthave.svg'
import podarok from '../../assets/img/podaroc.svg'
import { putRecentlyCards} from "../../redux/Slices/recentlyViewedSlice";

const Catalog = () => {
const dispatch = useDispatch()
const {cards, status, page, totalPage, sortBy, order, hasMore} = useSelector(state=> state.catalogCards)
const {recentlyViewed} = useSelector(state=> state.recentlyViewedReducer)

const changePage =(newPage)=>{   
        dispatch(setCurrentPage(newPage));   
}

const changeFilter = (event)=>{

    const value = event.target.value
    if(value === "min--priceFilter"){
    dispatch(setParams({ sortBy: "newPrice", order: "asc" }));
    }
    if(value === "max--priceFilter"){
        dispatch(setParams({ sortBy: "newPrice", order: "desc" }));
    }
    value === "product--haveFilter" && dispatch(setParams({sortBy: "status", order: "desc"}))
}

const ResetFilter = ()=>{

}

const handleClick =(cardInfo)=>{
    console.log("Клик по товару:", cardInfo);
    dispatch(putRecentlyCards(cardInfo))
}

useEffect(()=>{
dispatch(fetchCatalogData())
},[page, sortBy, hasMore, order, dispatch])
console.log(cards)
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
                    <select name="" id="" className="filter--product" onChange={changeFilter}>
                        <option value="filter--list">Сортировка</option>
                        <option value="product--haveFilter">В наличии</option>
                        <option value="min--priceFilter">По убыванию цен</option>
                        <option value="max--priceFilter">По возрастанию цен</option>
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
                       {status === "loading" ? <Preloader/> : cards.map((cardInfo) => ( <li key={cardInfo.id} className="product-card">
                       
                            <div className="product-card__labels">
                            {cardInfo.status ? <> <img src={have} alt="В наличии" />
                                <span className="product-card__status">В наличии</span> </> : <> <img src={donthave} alt="Нет в наличии" />
                                <span className="product-card__status">Нет в наличии</span> </>}
                               {cardInfo.oldPrice &&  <span className="product-card__sale">sale</span>}
                               
                            </div>
                           {cardInfo.isGift ?  <div className="product-card__gift">
                                <img src={podarok} alt="Подарок" />
                                <span>Подарок</span>
                            </div>: ""}
                         
                            <NavLink to={`/Каталог/${cardInfo.id}`} onClick={() => handleClick(cardInfo)} className="product-card__image">
                                <img src={cardInfo.image} alt="Вариативный замок Golden Soft для отеля." />
                            </NavLink>

                            <div className="product-card__info">
                                <p className="product-card__title">{cardInfo.title}</p>
                                <div className="product-card__price">
                                    <span className="product-card__new-price">{cardInfo.newPrice}</span>
                                    <span className="product-card__old-price">{cardInfo.oldPrice}</span>
                                </div>
                            </div>
                        </li>  ))}
                    </ul>
                </div>
                <div className="catalog--pagination">
                    <span className="pagination-dots"></span>
                    <button disabled = {hasMore} onClick={() => changePage(page - 1)}>Prev</button> <button disabled = {!hasMore} onClick={() => changePage(page + 1)}>NExt</button>
                </div>
            </div>
        </section>
        </>
    );
};

export default Catalog;