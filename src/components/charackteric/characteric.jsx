import "../../scss/style.css";
import like from "../../assets/icon/Corz.svg";
import indeximg from "../../assets/img/indeximg.svg";


import Tabulate from "./content-tables/content-table-pagination";

export default function Characteric() {
  return (
    <>
    <section class="characteric-index" id="charactericindex">
    <ul class="characteric-index_list">
        <li class="characteric-index_item">
            <ul class="characteric-index_itemlist">
                <li class="characteric-index_listitem">
                    <ul class="characteric-indeximg">
                        <li class="characteric-img">
                            <img src={indeximg} alt="" class="index_img"/>
                        </li>
                    </ul>
                </li>
                <li class="characteric-index_listitem">
                    <ul class="characteric-imges">
                        <li class="characteric-index_imges">
                            <img src="/img/imges1 (1).svg" alt="" class="index_img"/>
                        </li>
                        <li class="characteric-index_imges">
                            <img src="/img/imges1 (2).svg" alt="" class="index_img"/>
                        </li>
                        <li class="characteric-index_imges">
                            <img src="/img/imges1 (3).svg" alt="" class="index_img"/>
                        </li>
                        <li class="characteric-index_imges">
                            <img src="/img/imges1 (4).svg" alt="" class="index_img"/>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="characteric-index_item">
             <ul class="characteric-firstrow">
                <li class="characteric_firstrow-item">
                    <span class="characteric-productID">JA182765</span>
                </li>
                <li class="characteric_firstrow-item">
                    <span class="characteric-star_empty"></span>
                    <span class="characteric-star_empty"></span>
                    <span class="characteric-star_empty"></span>
                    <span class="characteric-star"></span>
                    <span class="characteric-star"></span>
                </li>
                <li class="characteric_firstrow-item">
                    <a href="reviews">
                        <span class="review-count">(12) Отзывов</span>
                    </a>                            
                </li>
             </ul>

             <ul class="characteric-secondtrow">
                <li class="characteric-secondstrow_item">
                    <h2 class="characteric-secondstrow_header" >Дверной Замок Golden Soft для офиса</h2>
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
                   
                    <li class="color-list_item">
                        <img src="/icon/Icon color.svg" alt=""/>
                    </li>
                    <li class="color-list_item1">

                    </li>
                    <li class="color-list_item2"/>

                    </ul>
                </div>
               
             </ul>
            
             <div class="price_charackter">
                <span class="current-price">33 000₽</span>
                <span class="old-price">37 000₽</span>
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
        </li>
    </ul>
</section>
<Tabulate/>
</>
  );
}