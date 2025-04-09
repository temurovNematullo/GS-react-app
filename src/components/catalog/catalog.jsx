import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { fetchCatalogData , setCurrentPage, setParams} from '../../redux/Slices/catalogCardsSlice';
import Preloader from '../../assets/preloader/Preloader';
import have from '../../assets/img/have.svg'
import donthave from '../../assets/img/donthave.svg'
import podarok from '../../assets/img/podaroc.svg'
import { putRecentlyCards} from "../../redux/Slices/recentlyViewedSlice";
import style from"./catalog.module.css"
import { debounce } from "lodash";
import { useLayoutEffect } from "react";
const Catalog = () => {
const dispatch = useDispatch()
const {cards, status, page, totalPage, sortBy, order, hasMore} = useSelector(state=> state.catalogCards)
const listRef = useRef()

const [selectedValue, setSelectedValue]= useState()
const [searchValue, setSearchValue] = useState("")
const [minPrice, setMinPrice] = useState()
const [maxPrice, setMaxPrice] = useState()
const [title, setTitle]=useState()

const changePage =(newPage)=>{   
        dispatch(setCurrentPage(newPage));       
}

const changeFilter = (value)=>{
    setSelectedValue(value)
    if(value === "min--priceFilter"){
    dispatch(setParams({ sortBy: "newPrice", order: "asc" }));
    }
    if(value === "max--priceFilter"){
        dispatch(setParams({ sortBy: "newPrice", order: "desc" }));
    }
    value === "product--haveFilter" && dispatch(setParams({sortBy: "status", order: "desc"}))
}

const handlClickResetFilters = ()=>{
    dispatch(setParams({sortBy: " ", order: " "}))
    setTitle("")
    setSelectedValue("filter--list")
}

const handleClick =(cardInfo)=>{
    console.log("Клик по товару:", cardInfo);
    dispatch(putRecentlyCards(cardInfo))
}

const handSearchForId =  debounce((term)=>{
    setSearchValue(term)
}, 1000)


useLayoutEffect(() => {
    if (status === "success") {
      requestAnimationFrame(() => {
        listRef.current?.scrollIntoView();
      });
    }
  }, [status]);

useEffect(()=>{
dispatch(fetchCatalogData(title))
},[page, sortBy, order, dispatch, title])

const renderData = useMemo(()=>{
    let data = cards
    if(searchValue){
     data = data.filter((item)=> item.productId === searchValue)
    }
    if(minPrice || maxPrice){
      data =  data.filter((item)=>{
            if(minPrice && item.newPrice < minPrice) return false
            if(maxPrice && item.newPrice > maxPrice) return false
            return true
        })
    }
    return data
}, [cards,searchValue, minPrice, maxPrice])

console.log(renderData)

    return (
        <>
        <section className="catalog-section" id="catalog-section">
            <div ref={listRef} className={style.catalog__List}>
                <div className={style.catalog_header}>
                    <h2>Накладные электронные замки</h2>
                </div>
                <div className={style.reset_filters}>
                    <button className={style.reset_filters__button} onClick={handlClickResetFilters}>Сбросить фильтры</button>
                    <span className={style.have_filters}>
                        <input  type="text" onChange={(e)=> handSearchForId(e.target.value)} id="searchForId" placeholder='Поиск по Id ...' />
                    </span>
                    <span className={style.have_filters}>
                        <input  type="text" onChange={(e)=> setTitle(e.target.value)} id="searchForTitle" placeholder='Поиск по названию ...' />
                    </span>
                     <button disabled={ page === 1 } onClick={() => { if (page > 1) changePage(page - 1); }}>Prev</button> 

                <button disabled={!hasMore} onClick={() => changePage(page + 1)}>Next</button>
                    <select  value={selectedValue} name="" id="" className={style.filter_product} onChange={(event)=>changeFilter(event.target.value)}>
                        <option value="filter--list" hidden>Выбрать фильтр</option>
                        <option value="product--haveFilter">В наличии</option>
                        <option value="min--priceFilter">По  возрастанию цен</option>
                        <option value="max--priceFilter">По убыванию цен</option>
                    </select>
                </div>

                <div className={style.conteiner_filter}>
                    <div className={style.filter_accordeonConteiner}>
                        <span className={style.filter_accordeonConteiner__header}>Фильтр</span>

                        <details className={style.accordeonfilter}>
                            <summary className={style.accordion_header}>
                                <label>Цена</label>
                            </summary>
                            <div className={style.accordion}>
                                <div className={style.inputs}>
                                    <input type="number" id="minPrice" value={minPrice}  onChange={(e)=> setMinPrice(Number(e.target.value))} />
                                    <input type="number" id="maxPrice" value={maxPrice}  onChange={(e)=> setMaxPrice(Number(e.target.value))} />
                                    
                                </div>
                            
                            </div>
                        </details>

                        <details className={style.accordeonfilter}>
                            <summary className={style.accordion_header}>
                                <label>Особенности</label>
                            </summary>
                            <div className={style.accordion}>
                                <ul className={style.features}>
                                    <li className={style.feature_item}>
                                        <label className={style.feature_label}>
                                            <input type="checkbox" />
                                            <span className={style.custom_checkbox}></span>
                                            <span className={style.feature_text}>Электронные кодовые замки</span>
                                            <span className={style.feature_count}>(65)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className={style.accordeonfilter}>
                            <summary className={style.accordion_header}>
                                <label>Цвет</label>
                            </summary>
                            <div className={style.accordion}>
                                <ul className={style.features}>
                                    <li className={style.feature_item}>
                                        <label className={style.feature_label}>
                                            <input type="checkbox" />
                                            <span className={style.custom_checkbox}></span>
                                            <span className={style.feature_text}>Черный/золота</span>
                                            <span className={style.feature_count}>(65)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <ul id="catalogContainer" className={style.catalog_list}>
                       {status === "loading" ? <Preloader/> : renderData.map((cardInfo) => ( <li key={cardInfo.productId} className={style.product_card}>
                       
                            <div className={style.product_card__labels}>
                            {cardInfo.status ? <> <img src={have} alt="В наличии" />
                                <span className={style.product_card__status}>В наличии</span> </> : <> <img src={donthave} alt="Нет в наличии" />
                                <span className={style.product_card__status}>Нет в наличии</span> </>}
                               {cardInfo.oldPrice &&  <span className={style.product_card__sale}>sale</span>}
                               
                            </div>
                           {cardInfo.isGift ?  <div className={style.product_card__gift}>
                                <img src={podarok} alt="Подарок" />
                                <span>Подарок</span>
                            </div>: ""}
                         
                            <NavLink to={`/Каталог/${cardInfo.productId}`} onClick={() => handleClick(cardInfo)} className={style.product_card__image}>
                                <img src={cardInfo.imageIndex} alt={cardInfo.title} />
                            </NavLink>

                            <div className={style.product_card__info}>
                                <p className={style.product_card__title}>{cardInfo.title}</p>
                                <div className={style.product_card__price}>
                                    <span className={style.product_card__new_price}>{cardInfo.newPrice}</span>
                                    <span className={style.product_card__old_price}>{cardInfo.oldPrice}</span>
                                </div>
                            </div>
                        </li>  ))}
                    </ul>
                </div>
               
                {/* <div className={style.catalog_pagination}>
                    <span className={style.pagination_dots}></span>
                   
                </div> */}
            </div>
        </section>
        </>
    );
};

export default React.memo(Catalog);