import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../scss/style.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/Slices/categoriesSlice';

const Categories = () => {
    const dispatch = useDispatch()
const {categories} = useSelector((state)=> state.categories)


const navigate = useNavigate();

const handleClick = (link) => {
    navigate(link)
}


    useEffect(() => {
       
        dispatch(fetchCategories());
       
    },[]);

    return (
        <section class="category">
            <h2 class="category-title">Категории</h2>
            <div class="category_info">
                <ul class="category_info-list">
                    {categories.map((item) => (
                        <li class="category_info-item" key={item.id}>
                            <span class="category_info-text">{item.name}</span>
                            <button onClick={()=>handleClick(item.id)} class="category_info-button">Перейти</button>
                        </li>
                    ))}
                </ul>

            </div>
        
            <NavLink to="/Все категории"><button class="category-button">Все категории</button></NavLink>
        </section>
    );
};

export default Categories;