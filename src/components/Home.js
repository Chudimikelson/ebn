import React from 'react';
import ShopByCategories from './ShopByCategories';
import Bss from './Bss';
import Banner from './Banner';
import Features from './Features';

export default function Home() {
  return (
      <React.Fragment>
          <Banner />
          <Bss/>
          <Features/>
          <ShopByCategories id="shopbycategories"/>         
          
      </React.Fragment> 
  )
}
