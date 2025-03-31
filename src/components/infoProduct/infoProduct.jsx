import React from 'react';
import "../../scss/style.css"
import floatimg from "../../assets/img/floatimg (1).svg"

const InfoProduct = () => {
    console.log("ля и я чтоль ска")
    return (
        <section class="information" id="informationlist">
        <div class="information_list" >
            <div class="information__list--data">
                <div class="information__text">
                    <h2 class="information__text--header">Нуждается, как будто в чем-то, в страхе.</h2>
                    <p>Ненавистный, но милый лев сидит, огромный, величественный, как подушка среди волн.
                        Он движется, неся в себе мощь и грацию.
                        Каждый его шаг — это искусство, каждое движение — ритм.</p>

                        <ul class="text__list" id="textList">
                        <li class="text__list--item"><img src="/icon/texticon.svg" alt="Дверь входная" loading="lazy"/><p class="item__text">Дверь входная</p></li>
                        </ul>

                        <p>Могучий лев сидит величественно на холме, его грива колышется на ветру.
                             Вокруг него мягкие, воздушные облака, словно подушка, поддерживающая его мощное тело. 
                             Позади заходящее солнце отбрасывает золотисто-оранжевые оттенки, а вдалеке виднеются силуэты гор.
                             В его глазах спокойствие и мудрость, а его поза излучает грацию и силу.</p>

                </div>

                <div class="information__img">
                    <img src={floatimg} alt=""/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default InfoProduct;