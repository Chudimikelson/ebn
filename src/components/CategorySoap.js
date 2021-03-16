import React, { Component } from 'react'
import Products from './Products'
import { ProductConsumer } from '../Context'
import Helmet from 'react-helmet'
import Banner from './Banner'

export default class CategorySoap extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            Etoile Beauty Nigeria | Lightening Black Soap, Natural Body
            Brightening Lotion, Face Cream, Scrubs, Masks, Oils and Serums
          </title>
          <meta
            name='description'
            content='Etoile Beauty Nigeria is your best bet for buying organic and natural skin care products, lightening black soap, brightening lotions, creams and oils for a natural glowing face, body and all-round beauty'
          />
        </Helmet>
        <div className=''>
          <Banner />
          <div className='px-md-5 pb-2 mx-auto bring-to-front mt-n5 mt-md-n6 bg-contrast'>
            <div className='flex-containerz row'>
              <div className='text-center text-sm-left py-3 col-12 bg-contrast rounded'>
                <h3 className='text-brand'>Soaps and Scrubs</h3>
                <span>
                  African black soap varieties with Honey, Turmeric and other
                  healthy herbs
                </span>
              </div>
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter((products) => {
                      return products.category === 'soapandscrub'
                    })
                    .map((product) => {
                      return <Products key={product.id} product={product} />
                    })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
