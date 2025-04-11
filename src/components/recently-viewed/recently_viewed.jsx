import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import Preloader from "../../assets/preloader/Preloader";
import have from "../../assets/img/have.svg";
import donthave from "../../assets/img/donthave.svg";
import podarok from "../../assets/img/podaroc.svg";
import {
  getRecentlyViewed,
  deleteRecentlyCards,
} from "../../redux/Slices/recentlyViewedSlice";
import { useHorizontalScroll } from "../../assets/customHooks/useHorizontalScroll";
import style from "../catalog/catalog.module.css";
import { themeContext } from "../../providers/theme";

function RecentlyVeiwed() {
  const dispatch = useDispatch();
  const { theme } = useContext(themeContext);
  const { recentlyViewed, status } = useSelector(
    (state) => state.recentlyViewedReducer
  );
  const { scrollLeft, scrollRight, listRef } = useHorizontalScroll();

  useEffect(() => {
    dispatch(getRecentlyViewed());
  }, []);

  return (
    <section class={`productcard productcard__${theme}`}>
      <h2 class="productcar_header">
        Вы недавно просмотрели
        <div class="productcard-scrol">
          <button class="productcard-left" onClick={scrollLeft}></button>
          <button class="productcard-right" onClick={scrollRight}></button>
        </div>
      </h2>
      <ul ref={listRef} class="Cartochka" id="productCards">
        {status === "loading" ? (
          <Preloader />
        ) : (
          [...recentlyViewed].reverse().map((cardInfo) => (
            <li key={cardInfo.id} className={style.product_card}>
              <div className={style.product_card__labels}>
                {cardInfo.status ? (
                  <>
                    {" "}
                    <img src={have} alt="В наличии" />
                    <span className={style.product_card__status}>
                      В наличии
                    </span>{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <img src={donthave} alt="Нет в наличии" />
                    <span className={style.product_card__status}>
                      Нет в наличии
                    </span>{" "}
                  </>
                )}
                {cardInfo.oldPrice && (
                  <span className={style.product_card__sale}>sale</span>
                )}
              </div>
              {cardInfo.isGift ? (
                <div className={style.product_card__gift}>
                  <img src={podarok} alt="Подарок" />
                  <span>Подарок</span>
                </div>
              ) : (
                ""
              )}

              <NavLink
                to={`/Каталог/${cardInfo.productId}`}
                className={style.product_card__image}
              >
                <img
                  src={cardInfo.imageIndex}
                  alt="Вариативный замок Golden Soft для отеля."
                />
              </NavLink>

              <div className={style.product_card__info}>
                <p className={style.product_card__title}>{cardInfo.title}</p>
                <div className={style.product_card__price}>
                  <span className={style.product_card__new_price}>
                    {cardInfo.newPrice}
                  </span>
                  <span className={style.product_card__old_price}>
                    {cardInfo.oldPrice}
                  </span>
                </div>
                <button
                  onClick={() => dispatch(deleteRecentlyCards(cardInfo.id))}
                >
                  Удалить из недавних
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
export default React.memo(RecentlyVeiwed);
