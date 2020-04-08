import React, { Component } from 'react';
import Accordion from './Accordion';
import logo from  '../photos/logo.jpg';
import paystack from '../photos/paystack-1.png';
import atmpay from '../photos/paystack-2.png';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
    return (
      
        <div className="footer pb-1">
            <div class="container pt-5 pb-2">
              <div className="d-md-none"><Accordion className="col-12"/></div>
                    <div className="bbn">
                    <div className="row">
                        <div className="col-md-2 shadow-box py-1 shadow-hover"><Link className="no-decor-links" to="/Academy">
                            <div class="bg-light p-3 icon-xl shadow-box rounded-circle center-flex mx-auto"><i className="fas fa-chalkboard-teacher" /></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Etoile Academy</h6></Link>
                        </div>
                        <div className="col-md-2 shadow-box py-1 shadow-hover">
                            <div className="bg-light p-3 icon-xl rounded-circle center-flex mx-auto"><i className="fas fa-store"/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">DIY Store</h6>
                        </div>
                        <div className="col-md-2 shadow-box py-1 shadow-hover">
                            <div className="bg-light p-3 icon-xl rounded-circle center-flex mx-auto"><i  className="fas fa-shipping-fast"/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Shipping Information</h6>
                        </div>
                        <div className="col-md-2 shadow-box py-1 shadow-hover">
                            <div className="bg-light p-3 icon-xl rounded-circle center-flex mx-auto"><i className="fas fa-route"/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Order Tracking</h6>
                        </div>
                        <div className="col-md-2 shadow-box py-1 shadow-hover">
                            <div className="bg-light p-3 icon-xl rounded-circle center-flex mx-auto"><i className="fas fa-credit-card" /></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Secure Checkout</h6>
                        </div>
                        <div className="col-md-2 shadow-box py-1 shadow-hover">
                            <div className="bg-light p-3 icon-xl rounded-circle center-flex mx-auto"><i className="fas fa-headset" /></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Contact Us</h6>
                        </div>
                    </div>
                    </div>
                    <hr className="border-dark my-md-5"/>
                    <div className="row align-items-center">
                        <div className="col-md-4 bbn">
                            <nav className="nav flex-wrap">
                                <a className="nav-item py-1 mr-3" href="#">FAQs</a>
                                <a className="nav-item py-1 mr-3" href="#">Privacy</a>
                                <a class="nav-item py-1 mr-3" href="#">Terms of use</a>
                                <a className="nav-item py-1" href="#">Return Policy</a>
                            </nav>
                        </div>
                        <div className="col-md-4 text-center bbn">
                            <a className="d-inline-block align-middle mr-3" href="#">
                                <img className="img-responsive rounded-circle" src={logo} alt="" style={{width:'4rem', height:'4rem'}}/>
                            </a>
                        </div>
                        <div className="col-md-4 d-flex">
                            <nav className="nav mx-auto ml-md-auto">
                                <a className="btn btn-sm btn-light mr-2" href="https://wa.me/+2348142195884"><i className="fab fa-whatsapp"></i>
                                </a>
                                <a className="btn btn-sm btn-light mr-2" href="https://facebook.com/etoileskincareng/shop"><i className="fab fa-facebook"></i>
                                </a>
                                <a className="btn btn-sm btn-light mr-2" href="https://instagram.com/etoile_skincare"><i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-sm btn-light mr-2" href="#"><i className="fas fa-phone"></i>
                                </a>
                                <a className="btn btn-sm btn-light" href="#"><i className="fas fa-envelope"></i>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="row align-items-center mt-md-4">
                        <div className="col-md-6">
                            <p className="mt-4 small mb-md-0 text-center text-md-left">All Rights Reserved.</p>
                            <p className="small mb-md-0 text-center text-md-left">© 2020  <a href="#" target="_blank"> Etoile Beauty Nigeria</a></p>
                            <p className="small text-center text-md-left">Design by Blackgene Development</p>
                        </div>
                        <div className="col-md-6">Payment Methods
                        <div className="d-md-flex"><img className="img-responsive bbn w-40" src={paystack} alt="Payment methods" style={{height:'50px'}}/><img className="img-responsive w-50 mx-auto" src={atmpay} alt="Payment methods" style={{height:'50px'}}/></div>
                        
                        </div>
                    </div>
                </div>
  
        </div>
     
    )
  }
}
