import React from 'react';
import "../../../scss/style.css";
import description from "../../../assets/img/description.svg"

const DescriptionTables = () => {
    return (
       
<div className="tables-content tables--description active">
   <div className="description__text">
    <span className="description__text--first">Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, 
        четкие линии, красивые формы – этот замок сразу заявляет о своем высоком статусе. 
        Изысканный черный цвет корпуса в обрамлении из золота мгновенно притягивает взгляды. Функционален,
         удобен в работе и легок в уходе: для сохранения блеска достаточно лишь протереть поверхность салфеткой.</span>
         <h2 className="description__text--header" >Преимущества умного замка от Golden Soft с приложением:</h2>

        <ul className="description__list" id="descriptionList"></ul>

     <span className="description__text--second">
        Каждый ключ записывается в память замка с уникальным токеном, что делает почти невозможным подделку цифрового ключа. 
        Замки программируются с помощью Bluetooth-соединения с приложением на вашем устройстве или с помощью мастер – карты, 
        которая переводит замок в режим программирования, а после получения ключа вы сможете выставить для себя уникальный пин-код или настроить отпечаток пальца прямо через приложение.
        Также,вы всегда можете выписывать карты или браслеты стандарта Mifare с помощью Энкодера в связке с приложением на ПК либо Android
    </span>
   </div>
   <div className="description__image">
        <img src={description} alt=""/>
   </div>
</div>

    );
};

export default DescriptionTables;