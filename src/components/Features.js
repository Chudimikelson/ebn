import React from 'react';
import styled from 'styled-components';
import catPic1 from '../photos/active glow set.jpg';
import catPic2 from '../photos/allproducts.jpg';
import {Link} from 'react-router-dom';

export default function Features() {
  return (
    <>
        <section className="bg-light edge bottom-right">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                    <h2 className="mb-3">Etoile Beauty offers</h2>
                        <h2 className="mb-3">10% Off on Collections</h2>
                    </div>
                    <div className="col-md-6">
                        <p className="mt-0 text-muted">All popular technology gadgets are up to 35% off. Shop now for your favorites tablets, smartphones, watches and more"</p>
                        <nav className="nav"><a href="javascript:;" className="nav-link nav-item dotted px-0 mx-2 ml-0">Serums</a> <a href="javascript:;" className="nav-link nav-item dotted px-0 mx-2">Scrubs</a> <a href="javascript:;" className="nav-link nav-item dotted px-0 mx-2">Lotions</a><a href="javascript:;" className="nav-link nav-item dotted px-0 mx-2">African Black Soap</a>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
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
    </>
  )
}

const Sbc = styled.div `

.flex-container {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  justify-content: center;
}

.finess {
  width:50%;
  font-size: 1.5rem;
  background: rgba(250,248,250, 0.5);
  position: relative;
  bottom: 10rem;
  text-align: center;
}

.btn:hover {
  background: #28a745;
}
.card {
  border: none;
}
img {
  width:100%;
  border-radius: .5rem;
}

`