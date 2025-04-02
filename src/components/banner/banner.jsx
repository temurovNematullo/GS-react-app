import React from 'react';
import style from './banner.module.css'

function Banner() {
    return (
        <section className={style.banner} >
            <div className={style.banner_info}>
                <ul className={style.banner_info_list}>
                    <li className={style.banner_info_item}>
                        <span className={style.banner_info_number}>5,567</span>
                    <span className={style.banner_info_text}>Счастливых клиентов</span>
                </li>
                    <li className={style.banner_info_item}>
                        <span className={style.banner_info_number}>1245</span>
                    <span className={style.banner_info_text}>Продуктов на выбор</span>
                </li>
                    <li className={style.banner_info_item}>
                        <span className={style.banner_info_number}>372</span>
                    <span className={style.banner_info_text}>Продаж в день</span>
                </li>
                    <li className={style.banner_info_item}>
                        <span className={style.banner_info_number}>20</span>
                    <span className={style.banner_info_text}>Лет на рынке</span>
                </li>
                </ul>
            </div>
        </section>
    );
}

export default Banner;