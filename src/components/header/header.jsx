import Logo from '../../assets/icon/Logo.svg';
import Call from '../../assets/icon/Call.svg';
import Corz from '../../assets/icon/Corz.svg';  
import Like from '../../assets/icon/Like.svg';
import '../../scss/style.css';

export default function Header()
{
    return(
        <header className="header"> 
        
        <a href="" className="header_logo">
            <img src={Logo} alt="" className="header_logo-image" width="50" height="42" loading="lazy"/>
        </a>
   
        <button className="menu-toggle" aria-label="Открыть меню" title="Open menu">
            ☰
        </button>

        <nav className="header_menu">
            <ul className="header_menu-list">
               <li className="header_menu-item">
                    <a href="/" className="header_menu-link">Главная</a>
                </li>
                <li className="header_menu-item">
                    <a href="#" className="header_menu-link" id="catalogBtn">Каталог</a>
                    <ul className="dropdown--menu" id="dropdownMenu">
                        <li><a href="#">Товары</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Новинки</a></li>
                    </ul>
                </li>
                <li className="header_menu-item">
                    <a href="/" className="header_menu-link">Оптовая продажа</a>
                </li>
                <li className="header_menu-item">
                    <a href="/" className="header_menu-link">О нас</a>
                </li>
            </ul>
        </nav>
       
        <div className="header_menu-action">
             <a href="/" className="header_menu-number">
                <img src={Call} alt="" className="header_logo-image" width="20" height="20"/>
                 +992(922) 34 45</a>
            <a href="/" className="header_logo-icon">
                <img src={Corz} alt="" className="header_logo-image" width="32" height="32" loading="lazy"/>
            </a>
            <a href="/" className="header_logo-icon">
                <img src={Like} alt="" className="header_logo-image" width="32" height="32" loading="lazy"/>
            </a>
       
        </div>

    </header>
    )
}