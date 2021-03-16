import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BrandCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className='one image-background carou-img' />
        <Carousel.Caption>
          <div className='content position-relative p-4 text-center'>
            <Link to='/shop' className='mt-3 btn btn-outline-light'>
              Shop all Products
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='four image-background carou-img' />
        <Carousel.Caption>
          <div className='content position-relative p-4 text-center'>
            <Link to='/shop' className='mt-3 btn btn-dark'>
              Shop all Products
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='two image-background carou-img' />
        <Carousel.Caption>
          <div className='content position-relative p-4 text-center'>
            <Link to='/shop' className='mt-3 btn btn-outline-light'>
              Shop all Products
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='five image-background carou-img' />
        <Carousel.Caption>
          <div className='content position-relative p-4 text-center'>
            <Link to='/shop' className='mt-3 btn btn-outline-light'>
              Shop all Products
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='six image-background carou-img' />
        <Carousel.Caption>
          <div className='content position-relative p-4 text-center'>
            <Link to='/shop' className='mt-3 btn btn-outline-light'>
              Shop all Products
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BrandCarousel
