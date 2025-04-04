import React from 'react';
import Mainsection from '../components/mainsection/mainsection';
import Banner from '../components/banner/banner';
import WhyGS from '../components/whyGS/whyGS';
import Categories from '../components/categories/categories';
import Popular_products from '../components/popular_products/popular_products';



function Main() {
    return (
        <>
            <Mainsection /> 
            <Banner />
            <WhyGS />
            <Categories />
            <Popular_products />
             
        </>
    );
}

export default Main;