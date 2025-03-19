export default function RecentlyVeiwed (){
    return(
        <section class="productcard">
        <h2 class="productcar_header">Вы недавно просмотрели
        <div class="productcard-scrol">
            <button class="productcard-left">left</button>
            <button class="productcard-right">right</button>
        </div>
    </h2>
        <ul class="Cartochka" id="productCards">
        <li class="product-card">
        <div class="product-card__labels">
          <img src="/img/donthave.svg" alt="Нет в наличии" loading="lazy"/>
          <span class="product-card__status">Нет в наличии</span>
          <span class="product-card__sale">sale</span>
        </div>
        
        
          <div class="product-card__gift">
            <img src="/img/podaroc.svg" alt="Подарок" loading="lazy"/>
            <span>Подарок</span>
          </div>
        
  
        <div class="product-card__image">
          <img src="/img/productcard (1).svg" alt="Вариативный замок Golden Soft для отеля." loading="lazy"/>
        </div>
        
        <div class="product-card__info">
          <p class="product-card__title">Вариативный замок Golden Soft для отеля.</p>
          <div class="product-card__price">
            <span class="product-card__new-price">7 000₽</span>
            <span class="product-card__old-price">8 000</span>
          </div>
        </div>
      </li>
        </ul>
    </section>
    )
}