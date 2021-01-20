import React from 'react';
import ShopPage from '../shop/shop';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
    <ShopPage/>
  </div>
);

export default HomePage;