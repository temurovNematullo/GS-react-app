import "../../scss/style.css";

export default function Popular_products(){
    
    return (
        <>
        <div class="product-card__labels">
        <img src="${product.available ? '/img/have.svg' : '/img/donthave.svg'}" 
             alt="${product.available ? 'В наличии' : 'Нет в наличии'}"/>
        <span class="product-card__status">${product.status}</span>
        ${product.oldPrice ? '<span class="product-card__sale">sale</span>' : ''}
      </div>
      
      ${product.isGift ? `
        <div class="product-card__gift">
          <img src="/img/podaroc.svg" alt="Подарок">
          <span>Подарок</span>
        </div>
      ` : ''}

      <div class="product-card__image">
        <img src="${product.image}" alt="${product.title}"/>
      </div>
      
      <div class="product-card__info">
        <p class="product-card__title">${product.title}</p>
        <div class="product-card__price">
          <span class="product-card__new-price">${product.newPrice}₽</span>
          ${product.oldPrice ? `<span class="product-card__old-price">${product.oldPrice}</span>` : ''}
        </div>
      </div>
      </>
    )
}