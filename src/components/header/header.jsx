import React, {useState} from 'react';
import Logo from '../../assets/icon/Logo.svg';
import Call from '../../assets/icon/Call.svg';
import Corz from '../../assets/icon/Corz.svg';  
import Like from '../../assets/icon/Like.svg';
import { NavLink } from 'react-router';
import '../../scss/style.css';

export default function Header()
{

const [dropdownMenu, setdropdownMenu] = useState(false);
const [select, setSelect] = useState(0);
const DropdownNameList= ["Каталог","Товары", "Услуги", "Новинки", "Акции", "Скидки", "Подарки"];
const DropdownName = DropdownNameList[select];
console.log(DropdownName);

const onClickSelect = (index) => {
    setSelect(index);
    setdropdownMenu(false);
}

    return(
        <header className="header"> 
        
        <a href="" className="header_logo">
            <img src={Logo} alt="" className="header_logo-image" width="50" height="42" loading="lazy"/>
        </a>
   
        <button className="menu-toggle" aria-label="Открыть меню" title="Open menu" >
            ☰
        </button>

        <nav className="header_menu">
            <ul className="header_menu-list">
               <li className="header_menu-item">
                    <NavLink to="/Главная" className="header_menu-link">Главная</NavLink>
                </li>

               <li className="header_menu-item">
                    <span onClick={() => setdropdownMenu(!dropdownMenu)} className="header_menu-link" id="catalogBtn">{DropdownName}</span>

                    <ul className={`dropdown--menu ${dropdownMenu ? "active" : ""}`} id="dropdownMenu">
                        {DropdownNameList.map((item, index)=>(
                            <li key={index} className={`dropdown--Item ${select === index ? "active": ""}`} onClick={()=>onClickSelect(index)} >{item}</li>
                        ))}
                    </ul>
                       
                </li>
         
               
                <li className="header_menu-item">
                    <NavLink to="/Оптом" className="header_menu-link">Оптовая продажа</NavLink>
                </li>
                <li className="header_menu-item">
                    <NavLink to="/О нас" className="header_menu-link">О нас</NavLink>
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