import React, { useContext } from 'react';
import style from './banner.module.css'
import {themeContext} from '../../providers/theme'

function Banner() {
    const [theme] = useContext(themeContext)
    return (
        <section className={`${style[`banner__${theme}`]}`} >
            <div className={style.banner_info}>
                <ul className={style.banner_info_list}>
                    <li className={style.banner_info_item}>
                        <span className={style.banner_info_number}>5,567</span>
                        <span className={`${style[`banner_info__${theme}`]}`}>Счастливых клиентов</span>
                    </li>
                    <li className={style.banner_info_item}>
                        <span className={style.banner_info_number}>1245</span>
                        <span className={`${style[`banner_info__${theme}`]}`}>Продуктов на выбор</span>
                    </li>
                    <li className={style.banner_info_item}>
                        <span className={style.banner_info_number}>372</span>
                        <span className={`${style[`banner_info__${theme}`]}`}>Продаж в день</span>
                    </li>
                    <li className={style.banner_info_item}>
                        <span className={style.banner_info_number}>20</span>
                        <span className={`${style[`banner_info__${theme}`]}`}>Лет на рынке</span>
                    </li>
                </ul>
            </div>
        </section >
    );
}

export default Banner;