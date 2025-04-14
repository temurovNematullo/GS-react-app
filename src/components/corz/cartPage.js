import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./cartPage.module.css";
import ReactDOM from "react-dom";
import {
  addQuantity,
  deleteItem,
  deleteQuantity,
  updateQuantity,
  updateQuantityValue,
} from "../../redux/Slices/cartSlice";

function CartPage({ isOpen, setIsCartOpen }) {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={style.overlay} onClick={() => setIsCartOpen(false)}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Корзина</h2>
        <div className={style.scrollByY}>
          {cartItems.length > 0 ? (
            <div className={style.scrollByY}>
              {cartItems.map((item) => {
                return (
                  <div className={style.cartItem} key={item.productId}>
                    <div className={style.cartItemDetails}>
                      <h5>{item.title}</h5>
                      <img
                        className={style.cartImage}
                        src={item.imageIndex}
                        alt={item.title}
                      />
                      <p>Цена: {item.newPrice}</p>
                      <div className={style.cartItemQuantity}>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                productId: item.productId,
                                type: "quantityMinus",
                              })
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              updateQuantityValue({
                                productId: item.productId,
                                quantity: e.target.value,
                              })
                            )
                          }
                        />
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                productId: item.productId,
                                type: "quantityPlus",
                              })
                            )
                          }
                        >
                          +
                        </button>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                productId: item.productId,
                                type: "deleteProduct",
                              })
                            )
                          }
                        >
                          Удалить продукт
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Корзина пуста</div>
          )}
        </div>
        <div className="cart-total-price">
          <h4>
            Итого:{" "}
            {cartItems.reduce(
              (acc, item) => acc + item.newPrice * item.quantity,
              0
            )}
          </h4>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CartPage;
