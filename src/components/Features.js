import React from 'react';
import styled from 'styled-components';

export default function Features() {
  return (
    <Sbc>
        <section className="cert-header mb-md-4">
            <div className="container pb-1 pt-md-4 pt-3">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center b-md-r">
                    <p className="lead mb-3 bold text-contrast ">Website Launch Promo !!</p>
                        <h2 className="mb-md-3 bold text-contrast">10% Off </h2>
                    <p className="lead mt-0 text-gold text-center text-md-left bold">Discount applies ONLY to purchases &#8358;15,000 and above</p>
                    <p className="mb-md-3 bold text-contrast">valid till June 31, 2020 </p>
                    </div>
                    <div className="col-md-6 bbn">
                        <h4 className="text-contrast mt-0 text-center text-md-left tenali">Shop all your favorite natural skincare products for radiant and glowing skin: lightening lotions, glow oils, brightening black soaps, glow scrub and more</h4>
                        <nav className="nav"><a href="/#" className="nav-link nav-item dotted px-0 mx-2 ml-0 text-brand">Serums</a> <a href="/#" className="nav-link nav-item dotted px-0 mx-2 text-brand">Scrubs</a> <a href="/#" className="nav-link nav-item dotted px-0 mx-2 text-brand">Lotions</a><a href="/#" className="nav-link nav-item dotted px-0 mx-2 text-brand">African Black Soap</a>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        {/** 
        <section className="section">
        <div className="container bring-to-front">
            <div className="row gap-y">
                <div className="col-lg-3 promo-column">
                    <div className="rounded promo-block zoom-background">
                        <div className="absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100" ><img src={catPic1} alt="ebn"/></div>
                        <div className="content position-relative p-4">
                            <h4 className="text-contrast mt-0">Glow-up Sets</h4>
                            <p className="text-light mt-0">Smart electronic devices for your day to day life.</p><a href="javascript:;" className="btn btn-contrast">Shop Now</a>
                        </div>
                    </div>
                    <div className="rounded promo-block zoom-background mt-4">
                        <div className="absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100" ><img src={catPic1} alt="ebn"/></div>
                        <div className="content position-relative p-4">
                            <h4 className="text-contrast mt-0">Face set</h4>
                            <p className="text-light mt-0">Make your life easeier with these smart solutions.</p><a href="javascript:;" className="btn btn-contrast">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 promo-column">
                    <div className="rounded promo-block zoom-background">
                        <div className="absolute top right bottom left image-background cover overlay overlay-light alpha-3 w-100 h-100" ><img src={catPic2} alt="ebn"/></div>
                        <div className="content position-relative p-4">
                            <h4 className="text-darker mt-0">All Products</h4>
                            <p className="text-dark mt-0">Your personal smartphone are just one click away.</p><a href="javascript:;" className="btn btn-contrast">See All</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 promo-column">
                    <div className="rounded promo-block zoom-background">
                        <div className="absolute top right bottom left image-background cover overlay overlay-light alpha-3 w-100 h-100" ><img src={catPic1} alt="ebn"/></div>
                        <div className="content position-relative p-4">
                            <h4 className="text-darker mt-0">Kids Set</h4>
                            <p className="text-dark mt-0">Exclusive high quality wifi technology to extend your network.</p><a href="javascript:;" className="btn btn-contrast">Shop Now</a>
                        </div>
                    </div>
                    <div className="rounded promo-block zoom-background mt-4">
                        <div className="absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100" ><img src={catPic1} alt="ebn"/></div>
                        <div className="content position-relative p-4">
                            <h4 className="text-contrast mt-0">Skin Care Training</h4>
                            <p className="text-light mt-0">Enjoy your favorite playlist with an amazing sound quality.</p><a href="javascript:;" className="btn btn-contrast">Enroll Today</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    */}
    </Sbc>
  )
}

const Sbc = styled.div `
.cert-header {
    background-image: linear-gradient(45deg, #fb31bd, #fc9e2196);
  }
.text-gold {
    color: #feb868fa;
}
`