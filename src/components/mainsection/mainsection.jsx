import '../../scss/style.css'
import Gold from '../../assets/img/Gold.jpg'

export default function Mainsection() {
  return (
    
      <section className="product">
            <div className="product-image">
                <img src={Gold} alt="Golden Soft GS-200Z-5"/>
            </div>
            <div className="product-info">
              
                <h2 className="product-name">
                    Golden Soft<br/>
                    GS-200Z-5 для офиса
                </h2>
           
                <br/>
                <p className="product-text">Замок дверной электронный Golden Soft  </p>
                <p className="product-text">GS-200Z-5 имеет роскошный глянцевый</p>
                <p className="product-text">блеск, четкие линии, красивые формы.</p>
                <br/>
                <p className="product-text">Подходит для установки на деревянную/межкомнатную дверь.</p>
                <p className="product-text"> деревянную/межкомнатную дверь.</p>
                <br/>
                <p className="product_price">Цена</p>
                <div className="price">
                    
                    <span className="current-price">33 000₽</span>
                    <span className="old-price">37 000₽</span>
                </div>
                <button className="buy-button">Добавить в корзину</button>
            
                <div className="pagination">
                    <button className="arrow left">
                        <img src="/icon/Left.svg" alt="Left"/>
                    </button>
                    <div className="dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <button className="arrow right">
                        <img src="/icon/Right.svg" alt="Right"/>
                    </button>
                </div>
        </div>
        </section>
   
  );
}