import React, { useContext } from "react";
import "../../scss/style.css";
import Return from "../../assets/img/return.svg";
import Evolute from "../../assets/img/evaluate.svg";
import { themeContext } from "../../providers/theme";

function WhyGS() {
  const { theme } = useContext(themeContext);

  return (
    <section class={`whyGS whyGS__${theme}`}>
      <h2 class="whyGS-title">Почему GoldenService?</h2>
      <div class="whyGS-info">
        <ul class="whyGS_info-list">
          <li class={`WhyInfo whyGS_info__${theme}`}>
            <img src={Return} alt="" class="whyGS_info-img" />
            <span class={`WhyText whyGS_infoText__${theme}`}>
              Возврат удвоенной стоимости каждого замка в случае брака.{" "}
            </span>
          </li>

          <li class={`WhyInfo  whyGS_info__${theme}`}>
            <img src={Evolute} alt="" class="whyGS_info-img" />
            <span class={`WhyText whyGS_infoText__${theme}`}>
              Наносим ваш логотип компании на наш продукт
            </span>
          </li>

          <li class={`WhyInfo whyGS_info__${theme}`}>
            <img src={Return} alt="" class="whyGS_info-img" />
            <span class={`WhyText whyGS_infoText__${theme}`}>
              Возврат удвоенной стоимости каждого замка в случае брака.{" "}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhyGS;
