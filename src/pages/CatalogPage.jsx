import React from 'react';
import Catalog from '../components/catalog/catalog';
import RecentlyVeiwed from '../components/recently-viewed/recently_viewed';
import InfoProduct from '../components/infoProduct/infoProduct';
import { useLocation } from 'react-router';
import FormData from '../components/test/test1';

const CatalogPage = () => {
  const location = useLocation()
  console.log(location.pathname)
    return (
      <>
      <Catalog />
      <FormData/>

      <RecentlyVeiwed/>
      <InfoProduct/>
      </>
    );
};

export default CatalogPage;