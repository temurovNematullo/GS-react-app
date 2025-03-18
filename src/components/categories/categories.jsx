import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../scss/style.css';
import { mainsectionAPI } from '../../API/api';
import { useEffect, useState } from 'react';


const Categories = () => {
const navigate = useNavigate();

const handleClick = (link) => {
    navigate(link)
}

const [categories, setCategories] = useState([]);
const[page] = useState(1);
const[limit] = useState(4);



    useEffect(() => {
        
        ( async () => {
            const data = await mainsectionAPI.getCategories(page, limit);
            // setCategories(prevCategories =>[...prevCategories, ...data]);
            setCategories(data);

        })()
    },[page, limit]);

    return (
        <section class="category">
            <h2 class="category-title">Категории</h2>
            <div class="category_info">
                <ul class="category_info-list">
                    {categories.map((item) => (
                        <li class="category_info-item" key={item.id}>
                            <span class="category_info-text">{item.name}</span>
                            <button onClick={()=>handleClick(item.link)} class="category_info-button">Перейти</button>
                        </li>
                    ))}
                </ul>

            </div>
        
            <NavLink to="/Все категории"><button class="category-button">Все категории</button></NavLink>
        </section>
    );
};

export default Categories;