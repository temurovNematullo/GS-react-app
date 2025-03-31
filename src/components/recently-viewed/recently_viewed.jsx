import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import Preloader from '../../assets/preloader/Preloader';
import have from '../../assets/img/have.svg'
import donthave from '../../assets/img/donthave.svg'
import podarok from '../../assets/img/podaroc.svg'
import { getRecentlyViewed } from "../../redux/Slices/recentlyViewedSlice";
import { useHorizontalScroll } from '../../assets/customHooks/useHorizontalScroll';

 function RecentlyVeiwed (){
  const dispatch = useDispatch()
  const {recentlyViewed, status} = useSelector(state=> state.recentlyViewedReducer)
 const {scrollLeft, scrollRight, listRef} = useHorizontalScroll()

  useEffect(()=>{
    dispatch(getRecentlyViewed())
  }, [])
console.log("Я тоже далбаеб",recentlyViewed)
    return(
        <section class="productcard">
        <h2 class="productcar_header">Вы недавно просмотрели
        <div class="productcard-scrol">
            <button class="productcard-left" onClick={scrollLeft}></button>
            <button class="productcard-right"onClick={scrollRight}></button>
        </div>
    </h2>
        <ul ref={listRef} class="Cartochka" id="productCards">
          
        {status === "loading" ? <Preloader/> : recentlyViewed.map((cardInfo) => ( <li key={cardInfo.id} className="product-card">
        
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
                    
                       <NavLink to={`/Каталог/${cardInfo.id}`} className="product-card__image">
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
    </section>
    )
}
export default React.memo(RecentlyVeiwed)