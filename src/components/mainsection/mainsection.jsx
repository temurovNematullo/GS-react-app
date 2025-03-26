import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../scss/style.css';
import Left from '../../assets/icon/Left.svg';
import Right from '../../assets/icon/Right.svg';
import { mainsectionAPI } from '../../API/api';
import Preloader from '../../assets/preloader/Preloader';
import { setMainProductId } from '../../redux/Slices/mainPageProductSlice';

export default function Mainsection() {
    const productId = useSelector((state) => state.mainPageProductReducer.id);

    const dispatch = useDispatch();

    const [getLocks, setLocks] = useState([]);

    const [currentLock, setCurrentLock] = useState(null); // Добавлено состояние для currentLock
    const [currentindexIMG, setCurrentindexIMG] = useState(0);

    // Обновление currentLock при изменении productId или getLocks
    useEffect(() => {

        (async () => {
            const data = await mainsectionAPI.getLocks();
            setLocks(data);
        })();

        if (getLocks.length > 0) {
            setCurrentLock(getLocks[productId]);
        }
    }, [productId, getLocks]); // Массив зависимостей гарантирует выполнение при изменении productId или getLocks

    const nextLock = () => {
        dispatch(setMainProductId((productId + 1) % getLocks.length));
    };

    const prevLock = () => {
        dispatch(setMainProductId((productId - 1 + getLocks.length) % getLocks.length));
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
            <section className="product">
                <button className="arrow left" onClick={prevLock}>
                    <img src={Left} alt="Left" />
                </button>
                <div className="product-image">
                    {getLocks.length > 0 ? (
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
                {getLocks.length > 0 ? (
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
