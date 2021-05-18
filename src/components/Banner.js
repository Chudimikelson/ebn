import React from 'react'
import styled from 'styled-components'
import banner from '../photos/banner.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <Bannerstyle>
      <section className='paddit'>
        <div className='container-fluid cert-header'>
          <div className='row'>
            <div className='col-12 col-md-5 order-2 my-auto'>
              <img
                className='img-responsive p-1 p-md-3 cover'
                alt='Etoile Beauty Nig'
                src={banner}
              />
            </div>
            <div className='col-12 col-md-7 my-auto'>
              <div className='text-center text-nowrap pt-md-4'>
                <h4 className='text-gold text-light tenali bold mb-0 pb-1'>
                  The Good Skin Fairy
                </h4>
                <h2 className='text-contrast bold display-lg-2 caveat'>
                  Etoile Beauty{' '}
                </h2>
                <p className='text-light text-gold '>
                  Simple, Natural and Plant Based Skincare
                </p>
                <Link to='/shop' className='bbn'>
                  <button className='mybtn btn btn-primary text-light bold caveat d-none'>
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Bannerstyle>
  )
}

const Bannerstyle = styled.div`
  .cert-header {
    background-image: linear-gradient(45deg, #fb31bd, #fc9e2196);
  }
`

export default Banner
