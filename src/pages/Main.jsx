import React from 'react';
import Mainsection from '../components/mainsection/mainsection';
import Banner from '../components/banner/banner';
import WhyGS from '../components/whyGS/whyGS';
import Categories from '../components/categories/categories';
import CategoriesPage from '../components/categories/categories';


function Main() {
    return (
        <>
            <Mainsection /> 
            <Banner />
            <WhyGS />
            <CategoriesPage />
        </>
    );
}

export default Main;