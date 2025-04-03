import "../../scss/style.css";
import like from "../../assets/icon/Corz.svg";
import Tabulate from "./content-tables/content-table-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchCharactericProduct, setNewIndexImg } from "../../redux/Slices/charactericSlice";
import { NavLink, useParams } from "react-router";

export default function Characteric() {
    const productId = useParams()
    const reviewsRef = useRef()
    const dispatch = useDispatch()

const [selectImg, setSelectImg] = useState()

const {charactericProduct} = useSelector((state)=> state.charactericReducer)
console.log("charactericProduct",charactericProduct)
const rating = [1,2,3,4,5]
const {reviews} = useSelector((state)=> state.reviewsReducer)
const reviewsCount = reviews?.length || 0;

const totalRating = reviews.map((item)=> item.rating).reduce((acc, num) => acc + num, 0)
const averageRating = Math.ceil(totalRating / reviewsCount)


const scrollToReviews = ()=>{
    if(reviewsRef.current){
        reviewsRef.current.scrollIntoView({behavior: "smooth", block: "start"})
    }
}

const hadlClick = (newImg) => {
  
 console.log("Произошло нажатие ")
    if (charactericProduct.length !== 0) {
        setSelectImg(newImg)
      dispatch(setNewIndexImg({ newImg }));
    }
  };

useEffect(()=>{
    
    dispatch(fetchCharactericProduct(productId))
   
},[productId])

  return (
    <>
    <section class="characteric-index" id="charactericindex">
    <ul class="characteric-index_list">
        {charactericProduct.map((charactericItem)=>  <> <li class="characteric-index_item">
            <ul class="characteric-index_itemlist">
                <li class="characteric-index_listitem">
                    <ul class="characteric-indeximg">
                   
                        <li class="characteric-img">
                            <img src={charactericItem.imageIndex} alt="" class="index_img"/>
                        </li>
                    
                    </ul>
                </li>
                <li class="characteric-index_listitem">
                    <ul class="characteric-imges">
                    {charactericItem.images.map((item)=>
                        <li onClick={()=>hadlClick(item)}  classname="characteric-index_imges">
                        <img src={item} alt=""  className={item === selectImg ? "item_img_active" : "item_img"}/>
                        
                    </li> )}
                    </ul>
                </li>
            </ul>
        </li>
        <li class="characteric-index_item">
             <ul class="characteric-firstrow">
                <li class="characteric_firstrow-item">
                    <span class="characteric-productID">{charactericItem.productId}</span>
                </li>
                <li class="characteric_firstrow-item">
                {rating.map((ratingItem)=> (  <span
          key={ratingItem}
          className={ratingItem <= averageRating  ? "characteric-star_empty" : "characteric-star"}
        />))}
                </li>
                <li class="characteric_firstrow-item">
                    <NavLink onClick={scrollToReviews} to= "">
                        <span class="review-count">({reviewsCount}) Отзывов</span>
                        </NavLink>
                                          
                </li>
             </ul>

             <ul class="characteric-secondtrow">
                <li class="characteric-secondstrow_item">
                    <h2 class="characteric-secondstrow_header" > {charactericItem.title}</h2>
                </li>
             </ul>

             <ul class="characteric-thirdrow_install-suit">
                <li class="characteric-secondtrow_install-option">
                    <p class="characteric-thirdrow_header">Подходит для установки на:</p>
                </li>
                </ul>

                <ul class="characteric-fourdrow_install-suit">
                <li class="characteric-secondtrow_install-option">
                    <span class="checked" id="door-check"></span> <span class="characteric-secondtrow_name">Деревянную дверь</span> 
                    <input type="checkbox" id="door" class="install-checkbox" hidden/>
                </li>
                <li class="characteric-secondtrow_install-option">
                    <span class="unchecked" id="locker-check"></span> <span class="characteric-secondtrow_name">Межкомнатную дверь</span> 
                    <input type="checkbox" id="locker" class="install-checkbox" hidden/>
                </li>
             </ul>
             
             <ul class="characteric-sixrow">
                <div class="complactation__dropdown">
                <li class="characteric-complact_data">
                    <span class="characteric-fourdrow_text">Комплектация</span>
                </li>
                <div class="dropdown">
                    <button class="dropdown-btn">
                        Smart замок без приложения 
                        <span class="dropdown__arrow">
                            <img src="/icon/arrow.svg" alt=""/>
                        </span>
                    </button>
                    
                    <ul class="dropdown-menu">
                        <li class="dropdown-item" data-value="base">Базовая</li>
                        <li class="dropdown-item" data-value="standard">Стандарт</li>
                        <li class="dropdown-item" data-value="premium">Премиум</li>
                    </ul>
                </div>  
            </div>
             <div class="complact__color--list">
                <li class="characteric-color_data">
                    <span class="characteric-fourdrow_text">Цвет</span>
                </li>
                <ul class="color_list">
                   {charactericItem.colors.map((coloritem)=>
                   <>  
                   <li key = {coloritem.id} class="color-list_item" style={{backgroundColor: coloritem.hex}}/>
                    </>)}
                  

                    </ul>
                </div>
               
             </ul>
            
             <div class="price_charackter">
                <span class="current-price">{charactericItem.newPrice}</span>
                <span class="old-price">    {charactericItem.oldPrice}</span>
            </div>
              <div class="like_row">

            <button class="buy-button_charakter">Купить</button>
            <a href="/" class="charackter_logo-icon">
                <img src={like} alt="" class="charackter_logo-image" width="17" height="15" loading="lazy"/>
            </a>
            <a href="" class="addlike">В избраное</a>
    </div>

    <div class="accordeon">
        <details class="accordeon_item">
            <summary class="accordeon_header">Оплата
                <span class="arrowAccordeon"></span>
            </summary>
            <p class="accordeon_text">Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, 
                Безналичными для юридических лиц,
                 Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении</p>
        </details>
    
        <details class="accordeon_item">
            <summary class="accordeon_header">Монтаж и доставка
                <span class="arrowAccordeon"></span>
            </summary>
            <p class="accordeon_text">Вы можете оплатить картой, через PayPal или СБП.

            </p>
        </details>
    
        <details class="accordeon_item">
            <summary class="accordeon_header">Гарантии и выгода
                <span class="arrowAccordeon"></span>
            </summary>
            <p class="accordeon_text"> Доставка занимает от 2 до 5 рабочих дней, в зависимости от региона.</p>
        </details>
    </div>
        </li> </>)}
       
    </ul>
</section>
<Tabulate  ref={reviewsRef}/>
</>
  );
}