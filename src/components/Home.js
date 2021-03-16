import React from 'react'
import ShopByCategories from './ShopByCategories'
import Bss from './Bss'
import Banner from './Banner'
import Advrt from './Advrt'

export default function Home() {
  return (
    <div>
      <Banner />
      <Bss />
      <Advrt />
      <ShopByCategories id='shopbycategories' />
    </div>
  )
}
