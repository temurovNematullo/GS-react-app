import React from 'react';
import Catalog from '../components/catalog/catalog';
import RecentlyVeiwed from '../components/recently-viewed/recently_viewed';
import InfoProduct from '../components/infoProduct/infoProduct';
import { useLocation } from 'react-router';

const CatalogPage = () => {
  const location = useLocation()
  console.log(location.pathname)
    return (
      <>
      <Catalog />
      <RecentlyVeiwed/>
      <InfoProduct/>
      </>
    );
};

export default CatalogPage;