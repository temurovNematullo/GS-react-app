import '../../scss/style.css';

export default function Footer(){
   return (
    <footer className="footer">
        <div className="footer_container">
            <ul className="footer_container-list">
                
                    <ul className="footer_container-itemList">
                        <li className="footer_container-itemLogo">
                            <img src="/icon/Logo1.svg" alt="" className="footer_container-logo"/> 
                        </li>
                        <li className="footer_container-itemchat">
                           <a href=""> <img src="/icon/vk.svg" alt="" className="footer_container-logowk"/> </a>
                           <a href=""> <img src="/icon/twit.svg" alt="" className="footer_container-logotwit"/></a>
                           <a href=""> <img src="/icon/face.svg" alt="" className="footer_container-logoface"/></a>
                        </li>
                    </ul>
                <ul className="footer_container-itemList1">
                <li className="footer_container-item">
                    <h3 className="footer_container-itemhead">Навигация</h3>
                    <ul className="footer_container-itemlist1">
                      <a href="">  <li className="footer_container-itemItem">Главная </li> </a>
                      <a href="">  <li className="footer_container-itemItem">Каталог</li></a>
                      <a href="">  <li className="footer_container-itemItem">Оптовая продажа</li></a>
                      <a href="">  <li className="footer_container-itemItem">О нас</li></a>
                    </ul>
                </li>
                <li className="footer_container-item">
                    <h3 className="footer_container-itemhead">Наши контакты</h3>
                    <ul className="footer_container-itemlist1">
                        <li className="footer_container-PhonAndEmail">Телефоны</li>
                        <li className="footer_container-itemNumber1">+7 (988) 565 00 38</li>
                        <li className="footer_container-itemNumber2">+375 33 662 82 56</li>
                    
                        <li className="footer_container-PhonAndEmail">Email</li>
                        <li className="footer_container-itemEmail1">vladpertcev@mail.ru</li>
                        <li className="footer_container-itemEmail2">korobko416@gmail.com</li>
                    </ul>
                </li>
                <li className="footer_container-item">
                    <h3 className="footer_container-itemhead">Наш адрес</h3>
                    <ul className="footer_container-itemlist1">
                       <a href=""> <li className="footer_container-itemItem">Россия, Ростов-на-Дону ул. Богачева, 16</li></a>
                        
                    </ul>
                </li>
                <li className="footer_container-item">
                    <h3 className="footer_container-itemhead">информация</h3>
                    <ul className="footer_container-itemlist1">
                        <a href="">  <li className="footer_container-itemItem">Доставка и оплата</li> </a>
                      <a href="">  <li className="footer_container-itemItem">Каталог</li></a>
                      <a href="">  <li className="footer_container-itemItem">Оптовая продажа</li></a>
                    </ul>
                </li>
            </ul>
            </ul>

            <div className="footer_lineAndtext">
                <div className="footer_line"></div>
                <div className="footer_text">© 2021 Golden Soft All rights reserved.</div>
            </div>

        </div>   

    </footer>
   )
}