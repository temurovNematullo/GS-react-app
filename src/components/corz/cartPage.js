import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./cartPage.module.css";
import {
  addQuantity,
  deleteItem,
  deleteQuantity,
} from "../../redux/Slices/cartSlice";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <>
      <h2>Корзина</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div className={style.cartItem}>
              <div className={style.cartItemDetails} key={item.productId}>
                <h5>{item.title}</h5>
                <img
                  className={style.cartImage}
                  src={item.imageIndex}
                  alt={item.title}
                />
                <p>Цена: {item.newPrice}</p>
                <div className={style.cartItemQuantity}>
                  <button
                    onClick={() => dispatch(deleteQuantity(item.productId))}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => dispatch(addQuantity(item.productId))}>
                    +
                  </button>
                  <button onClick={() => dispatch(deleteItem(item.productId))}>
                    Удалить продукт
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>Корзина пуста</div>
      )}
      <div className="cart-total-price">
        <h4>
          Итого:{" "}
          {cartItems.reduce(
            (acc, item) => acc + item.newPrice * item.quantity,
            0
          )}{" "}
        </h4>
      </div>
    </>
  );
}

export default CartPage;
