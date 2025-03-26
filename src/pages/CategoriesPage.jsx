import React, { useState } from 'react';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, loadMoreCategories, resetCategories} from '../redux/Slices/categoriesSlice';
import Preloader from '../assets/preloader/Preloader'

function CategoriesPage() {
 const dispatch = useDispatch()
 const{ categories, page, hasMore, status} = useSelector(state=> state.categories)
 console.log(categories);



    useEffect(() => {
            dispatch(fetchCategories());
    }, [ dispatch]);

    const fetchAllCategories = () => {
        if(hasMore){
       dispatch(loadMoreCategories())
       dispatch(fetchCategories())
    }
    };
    
  
    return (
        <div class="categorycollection">
        <h2>Категории</h2>
        <div class="">
           
            <ul class="category__list">
                {status === "error" && "Ошибка данные не загужены"}
            {status === "loading" ? <Preloader /> : categories.map((item) => (
                    <li class="category--item"><a href="" ><img src={item.image} alt=""/>
                    <span class="category--item__text">{item.name}</span> </a></li>
                ))}
               
        </ul>
        </div>
        <button onClick={fetchAllCategories} class="showall" disabled = {!hasMore || status ==="loading"}>Смотреть еще</button>
        </div>
    );
}

export default CategoriesPage;