import React from 'react';
import Catalog from '../components/catalog/catalog';
import RecentlyVeiwed from '../components/recently-viewed/recently_viewed';
import InfoProduct from '../components/infoProduct/infoProduct';

const CatalogPage = () => {
    return (
      <>
      <Catalog/>
      <RecentlyVeiwed/>
      <InfoProduct/>
      </>
    );
};

export default CatalogPage;