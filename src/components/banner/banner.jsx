import React from 'react';
import '../../scss/style.css';

function Banner() {
    return (
        <section class="banner" >
            <div class="banner-info">
                <ul class="banner_info-list">
                    <li class="banner_info-item">
                        <span class="banner_info-number">5,567</span>
                    <span class="banner_info-text">Счастливых клиентов</span>
                </li>
                    <li class="banner_info-item">
                        <span class="banner_info-number">1245</span>
                    <span class="banner_info-text">Продуктов на выбор</span>
                </li>
                    <li class="banner_info-item">
                        <span class="banner_info-number">372</span>
                    <span class="banner_info-text">Продаж в день</span>
                </li>
                    <li class="banner_info-item">
                        <span class="banner_info-number">20</span>
                    <span class="banner_info-text">Лет на рынке</span>
                </li>
                </ul>
            </div>
        </section>
    );
}

export default Banner;