import React from 'react';
import '../../scss/style.css';
import Return from "../../assets/img/return.svg"
import Evolute from "../../assets/img/evaluate.svg"


function WhyGS() {
    return (
        <section class="whyGS">
        <h2 class="whyGS-title">
            Почему GoldenService? 
        </h2>
        <div class="whyGS-info">
            <ul class="whyGS_info-list">
           
                <li class="whyGS_info-item">
                    <img src={Return} alt="" class="whyGS_info-img"/>
                    <span class="whyGS_info-text">Возврат удвоенной стоимости каждого замка в случае брака. </span>
                </li>
            
                <li class="whyGS_info-item">
                    <img src={Evolute} alt="" class="whyGS_info-img"/>
                    <span class="whyGS_info-text">Наносим ваш логотип компании на наш продукт</span>
                </li>

                <li class="whyGS_info-item">
                    <img src={Return} alt="" class="whyGS_info-img"/>
                    <span class="whyGS_info-text">Возврат удвоенной стоимости каждого замка в случае брака. </span>
                </li>

            </ul>
        </div>
    </section>
    );
}

export default WhyGS;