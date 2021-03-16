import React from 'react'
import cover from '../photos/reviewslide1.jpg'
import minicourse from '../photos/Screenshot.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Advrt() {
  return (
    <section className='bg-light mt-n5'>
      <Acads>
        <div class='px-sm-6 bring-to-front pt-sm-4'>
          <div className='row gap-y'>
            <div className='col-12 mx-auto'>
              <div class='shadow-box px-3'>
                <div className='row text-center text-md-left '>
                  <div className='col-12 col-md-6 d-md-flex bootcamp'>
                    <div className='col-md-6 py-3'>
                      <div className='mb-3 text-contrast lead'>
                        Etoile Skincare Training
                      </div>
                      <h5 className='text-body'>
                        Empower yourself with our one month hands-on training on
                        professional skincare formulation
                      </h5>
                      <p className='text-body'>
                        Apply Now to build a career and start a business of your
                        own. Registration Now Open
                      </p>
                    </div>
                    <div className='col-12 col-md-6 my-auto'>
                      <img
                        className='image-responsive course-img'
                        src={cover}
                        alt='etoile academy'
                      />
                      <div>
                        <Link to='/Natural-Skincare-Formulation'>
                          <button className='btn btn-success my-3'>
                            Register
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6 d-md-flex mini-course'>
                    <div className='col-12 col-md-6 py-3'>
                      <div className='mb-3 text-brand tenali font-md'>
                        Beginners' Guide eBook
                      </div>
                      <h4 className='text-body'>
                        Purchase our step-by-step guide to making natural
                        skincare products
                      </h4>
                      <p className='text-body'>
                        We have made this guide so simple that you can start to
                        make your own products in less than 7 days.
                      </p>
                    </div>
                    <div className='col-12 col-md-6 my-auto'>
                      <img
                        src={minicourse}
                        alt='etoile academy'
                        className='image-responsive course-img'
                      />
                      <div>
                        <a
                          className='no-decor-links'
                          href='https://bit.ly/3j9sAwd'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <button className='btn btn-success my-3'>
                            Buy Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Acads>
    </section>
  )
}

const Acads = styled.div`
  .course-img {
    width: 100%;
    max-width: 400px;
    height: 16rem;
    border-radius: 2%;
  }
  .bootcamp {
    background: palevioletred;
  }
  .mini-course {
    background: white;
  }
`
