import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BrandCarousel from './BrandCarousel'

export default class Categories extends Component {
  render() {
    return (
      <section className='col-12 section mb-4'>
        <div className='bring-to-front'>
          <div className='row gap-y'>
            <div className='col-lg-3 promo-column'>
              <div className='rounded promo-block zoom-background'>
                <div className='lightening-brightening-img absolute top right bottom left image-background overlay overlay-dark alpha-1 w-100 h-100'></div>
                <div className='content position-relative p-4'>
                  <h4 className='text-contrast mt-0'>
                    Lightening & Brightening
                  </h4>
                  <p className='text-light mt-0'>
                    Find products suitable for light/fair skin here, also
                    improves complexion of users.
                  </p>
                  <Link
                    to='/lightening-&-brightening'
                    className='mt-3 btn btn-outline-light'
                  >
                    Glam me up
                  </Link>
                </div>
              </div>
              <div className='rounded promo-block zoom-background mt-4'>
                <div className='acne-img absolute top right bottom left image-background overlay overlay-dark alpha-1 w-100 h-100'></div>
                <div className='content position-relative p-4'>
                  <h4 className='text-contrast mt-0'>Acne</h4>
                  <p className='text-light mt-0'>
                    Find products to manage acne conditions.
                  </p>
                  <Link to='/acne' className='mt-3 btn btn-outline-light'>
                    Save Me
                  </Link>
                </div>
              </div>
            </div>
            {/** carousel for brand marketing here*/}
            <div className='col-lg-6 promo-column'>
              <div className='rounded promo-block zoom-background w-100'>
                <BrandCarousel />
              </div>
            </div>

            <div className='col-lg-3 promo-column'>
              <div className='rounded promo-block zoom-background'>
                <div className='skin-glow-img absolute top right bottom left image-background overlay overlay-dark alpha-2 w-100 h-100'></div>
                <div className='content position-relative p-4'>
                  <h4 className='text-contrast mt-0'>Skin Glow</h4>
                  <p className='text-light mt-0'>
                    Find products to improve radiance without interfering with
                    your complexion.
                  </p>
                  <Link to='/skin-glow' className='mt-3 btn btn-outline-light'>
                    Glow me up
                  </Link>
                </div>
              </div>
              <div className='rounded promo-block zoom-background mt-4'>
                <div className='skin-repair-img absolute top right bottom left image-background overlay overlay-dark alpha-2 w-100 h-100'></div>
                <div className='content position-relative p-4'>
                  <h4 className='text-contrast mt-0'>Skin Repair</h4>
                  <p className='text-light mt-0'>
                    Enjoy special products made to deliver premimium
                    antioxidants and restore your skin barrier.
                  </p>
                  <Link
                    to='/skin-repair'
                    className='mt-3 btn btn-outline-light'
                  >
                    Fix me up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
