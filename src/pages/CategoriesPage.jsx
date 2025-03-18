import React from 'react';
import { useEffect, useState } from 'react';
import { mainsectionAPI } from '../API/api';


function CategoriesPage() {
    const [categories, setCategories] = useState([]); 
    const [limit] = useState(8);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async()=>{
            const data = await mainsectionAPI.getCategories(page,limit);
            setCategories(prevdata=>[...prevdata, ...data]);
          
        })()

        
    }, [page, limit]);

    const fetchAllCategories = async () => {
        setPage((prevPage) => prevPage + 1);
    };
    
 
    return (
        <div class="categorycollection">
        <h2>Категории</h2>
        <div class="">
            <ul class="category__list">
                {categories.map((item) => (
                    <li class="category--item"><a href="" ><img src={item.image} alt=""/>
                    <span class="category--item__text">{item.name}</span> </a></li>
                ))}
            
        </ul>
        </div>
        <button onClick={fetchAllCategories} class="showall">Смотреть еще</button>
        </div>
    );
}

export default CategoriesPage;