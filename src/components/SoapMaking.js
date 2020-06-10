import React from 'react';
import styled from 'styled-components';
import banner from '../photos/IMG-1.jpg';
import FaQ from './FaQ';
import AboutAcademy from './AboutAcademy';
import Breadcrumb from './Breadcrumb';
import Review from './ReviewsCarousel';

export default function SoapCourse () {
    const current = "Mini Course";
    return (
        <Soapstyle>
            <section className="container-fluid cert-header">
                <div className="container pt-7 pb-3">
                <h4 className="text-light font-weight-light mb-0 pb-1">Etoile Beauty Academy</h4>
                <h1 className="text-contrast bold display-lg-4">Making Natural Skincare Course</h1>
                <p className="lead text-light pb-3 bbn">Start your journey to making simple and natural skincare products. Learn the skills you need to make skincare products for you, your family and friends.</p>
                <div className="py-3 text-contrast instructor">
                    <img id="instructor-img" src={banner} alt=""/> Esther C. Ojogwu
                    <span className="mr text-light lead"> - Instructor</span>
                </div>
                <a href="https://paystack.com/pay/etoileminicourse" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">Enroll Now</a>
                </div>
                
            </section>
            <Breadcrumb current={current}/>
            <section className="mt-1">
                <div className="container pt-2">
                    <div className="row gap-y">
                        <div className="col-12 col-md-6">            
                            <h5>About this Course</h5>
                            <p>This beginner course from Etoile Beauty Academy will teach you the safe and correct way to make customized skincare products from scratch.</p>
                            <p>This course introduces you to making natural skincare products from the most basic level. Gain the skills you need to start making simple skincare products for every day use and how to select and substitute ingredients to suit your skin preferences.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="learner-outcome py-3 rounded">
                                <ul>
                                <li className="py-3 lead">LEARNER CAREER OUTCOMES</li>
                                <li className="py-2 text-dark">50%<span className="ml-3">Started making thier own skincare products after completing this course.</span></li>
                                <li className="py-2 text-dark">50%<span className="ml-3">Enrolled for our Natural Skincare Formulation Course.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row gap-y">
                    <div className="col-10">
                            <h3 className="text-center text-md-left pb-4">Course Overview</h3>
                            <div className="row mx-auto">
                                <div className="col-12 col-md-2 text-title">MODULE 1</div>
                                <div className="col-md-10 text-dark">
                                    <p className="lead text-brand">Introduction to Skincare</p>
                                    <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>The skin: types and care.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Safety practices before making skincare products. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Equipment needed in making skincare products.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Measurement conversion.</span></li>
                                    </ul>
                                    <hr/>
                                </div>
                                <div className="col-12 col-md-2 text-title">MODULE 2</div>
                                <div className="col-md-10 text-dark">
                                    <p className="lead text-brand">Basic Guide to Making Skincare</p>
                                    <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>Product objective. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Ingredients selection and substitution.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Recipe development. </span></li>
                                    </ul>
                                    <hr/>
                                </div>
                                <div className="col-md-2 text-title">MODULE 3</div>
                                <div className="col-md-10 text-dark">
                                    <p className="lead text-brand">Product Formulas</p>
                                        <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>Emulsified scrub</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Black soap paste.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Face and body oil. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Whipped body butter.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Facial bar soap</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Face toner</span></li>
                                    </ul>
                                        <hr/>
                                </div>
                                <div className="col-md-2 text-title">MODULE 4</div>
                                <div className="col-md-10 text-dark">
                                <p className="lead text-brand">BONUS</p>
                                        <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>More on Carrier and Essential oils. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Recipe calculator (downloadable)</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Recommended ingredients suppliers</span></li>
                                    </ul>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-n5 pb-0">
                            <div className="row pb-0">
                                <div className="col-md-6 py-3"><h4 className="text-center text-title">Start today for a 10% discount</h4>
                                <div className="pt-3">
                                    <ul>
                                    <li className="py-3 text-dark"><i className="fas fa-clock"/><span className="ml-3">Approx. 1 week to complete</span></li>
                                    <li className="py-3 text-dark"><i className="fas fa-globe"/><span className="ml-3">100% Online</span></li>
                                    <li className="py-3 text-dark"><i className="fas fa-certificate"/><span className="ml-3">Certificate of proficiency</span></li>
                                    <li className="py-3 text-dark"><i className="fas fa-copy"/><span className="ml-3">Flexible schedule</span></li>
                                    <li className="py-3 text-dark"><i className="fas fa-user-graduate"/><span className="ml-3">Beginner level</span></li>
                                    </ul>
                                </div>
                                    <div className="text-center"><a href="https://paystack.com/pay/etoileminicourse" target="_blank" rel="noopener noreferrer" className="btn btn-success enroll px-3">Enroll Now</a></div>
                                </div>
                                <div className="col-md-6">
                                    {/** <p>What our past students had to say</p> */}
                                    <Review/>
                                </div>
                            </div>
                        </div>
                </div><hr/>
            </section>
            <AboutAcademy/><FaQ/>
        </Soapstyle>
    );
}

const Soapstyle = styled.div `
.cert-header {
    background-image: linear-gradient(45deg, #fb31bd, #fc9e2196);
}
#cert-img {
    max-width: 400px;
}
.instructor {
    font-size: 2rem;
}
#instructor-img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
}
#instructor-img-2 {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
}
#wywl {
    border: 1px solid grey;
}
.skills {
    font-size: 1rem;
    background: palevioletred;
    border-radius: .8rem;
    margin-right: .8rem;
    padding-left: .7rem;
    padding-right: .7rem;
    padding-bottom: .25rem;
}
.svgicon {
    font-size: 10px;
}
ul {
    list-style-type: none;
}
.learner-outcome {
    background: #f5f5f5;
}
.learner-outcome-2 {
    font-size: 1.5rem;
}
.enroll {
    font-size: 1.3rem;
}

`