import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../scss/style.css';
import Left from '../../assets/icon/Left.svg';
import Right from '../../assets/icon/Right.svg';
import Preloader from '../../assets/preloader/Preloader';
import { fetchMainProducts, setMainProductId } from '../../redux/Slices/mainPageProductSlice';
import { themeContext } from '../../providers/theme';

export default function Mainsection() {
const [theme] = useContext(themeContext)

const {mainProducts, id} = useSelector((state)=> state.mainPageProductReducer)
console.log(mainProducts)
    const dispatch = useDispatch();

    const [currentLock, setCurrentLock] = useState(null); 
    const [currentindexIMG, setCurrentindexIMG] = useState(0);


    useEffect(() => {
           dispatch(fetchMainProducts())
          
        
    }, []);

    useEffect(()=>{
        if (mainProducts.length > 0) {
            setCurrentLock(mainProducts[id]);
        }
    }, [id, mainProducts])

    const nextLock = () => {
        dispatch(setMainProductId((id + 1) % mainProducts.length));
    };

    const prevLock = () => {
        dispatch(setMainProductId((id - 1 + mainProducts.length) % mainProducts.length));
    };

    const nextIMG = () => {
        if (currentLock?.imageUrl?.length > 0) {
            setCurrentindexIMG((currentindexIMG + 1) % currentLock.imageUrl.length);
        }
    };

    const prevIMG = () => {
        if (currentLock?.imageUrl?.length > 0) {
            setCurrentindexIMG((currentindexIMG - 1 + currentLock.imageUrl.length) % currentLock.imageUrl.length);
        }
    };

  

    return (
        <>
            <section className={`product product__${theme}`}>
                <button className="arrow left" onClick={prevLock}>
                    <img src={Left} alt="Left" />
                </button>
                <div className="product-image">
                    {mainProducts.length > 0 ? (
                        <>
                            {/* Исправлен некорректный индекс для изображения */}
                            <img
                                src={currentLock?.imageUrl?.[currentindexIMG]} // Используем currentLock для URL изображения
                                alt={currentLock?.name || 'Product Image'}
                            />
                            <div className="pagination_img">
                                <button className="arrow left" onClick={prevIMG}>
                                    <img src={Left} alt="Left" />
                                </button>
                                <button className="arrow right" onClick={nextIMG}>
                                    <img src={Right} alt="Right" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <Preloader />
                    )}
                </div>
                {mainProducts.length > 0 ? (
                    <div className="product-info">
                        <h2 className="product-name">{currentLock?.name}</h2>
                        <h2 className="product-for">{currentLock?.for}</h2>
                        <br />
                        <p className="product-text">{currentLock?.description}</p>
                        <p className="product-text">{currentLock?.features}</p>
                        <br />
                        <p className="product_price">Цена</p>
                        <div className="price">
                            <span className="current-price">{currentLock?.price?.current}</span>
                            <span className="old-price">{currentLock?.price?.old}</span>
                        </div>
                        <br />
                        <button className="buy-button">Добавить в корзину</button>
                        <div className="pagination"></div>
                    </div>
                ) : (
                    <Preloader />
                )}
                <button className="arrow right" onClick={nextLock}>
                    <img src={Right} alt="Right" />
                </button>
            </section>
        </>
    );
}
