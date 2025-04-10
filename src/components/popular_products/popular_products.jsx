import "../../scss/style.css";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect} from "react";
import { fetchPopularProduct } from "../../redux/Slices/popularProductSlice";
import { useHorizontalScroll } from "../../assets/customHooks/useHorizontalScroll";
import { themeContext } from "../../providers/theme";

export default function Popular_products(){
    const dispatch = useDispatch()
    const [theme] = useContext(themeContext)
    const {products} = useSelector(state=> state.popularProductsReducer)  
const {scrollLeft, scrollRight, listRef} = useHorizontalScroll()
    useEffect(()=> {
      dispatch(fetchPopularProduct())
    },[])

    return (
      <section class={`popular_product popular_product__${theme}`}>

      <h2 class="popular_product-title">
          Наши популярные продукты
          <div class="popular_product-scrol">
          <button onClick={scrollLeft} class="popular_product-left"></button>
          <button onClick={scrollRight} class="popular_product-right"></button>
      </div>
      </h2>

      <div class="popular_product-info">
          <ul ref={listRef} class="popular_product-list">
            {products.map((product, index)=>(
              <li key={index} className="product-card">
                       
              <NavLink to={`/Каталог/${product.id}`} className="product-card__image">
                  <img src={product.image} alt={product.title} />
              </NavLink>

              <div className="product-card__info">
                  <p className="product-card__title">{product.title}</p>
                  <div className="product-card__price">
                      <span className="product-card__new-price">{product.newPrice}</span>
                      <span className="product-card__old-price">{product.oldPrice}</span>
                  </div>
              </div>
          </li> 
            ) )}
             
          </ul>
      </div>
   </section>
    )
}