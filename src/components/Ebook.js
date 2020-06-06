import React from 'react';
import guide from '../photos/guide.jpg';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';

function Ebook () {
    const current = "Skincare Guide Ebook";
    return (
        <Bookstyle>
        <section className="paddit">
            <div className="container-fluid mt-n5">
            <Breadcrumb current={current}/>
            </div>
            <div className="container pt-0 mt-n4">
                <div className="row justify-content-between">
                    <div className="col-12 col-md-4 mb-4">
                        <img className="image-responsive course-img rounded" src={guide} alt="etoile academy"/>
                    </div>
                    <div className="col-12 col-md-7"> 
                            <h3 className="text-center text-dark text-md-left pb-4">Table of Content</h3>
                                <div className="text-title text-center text-md-left">MODULE 1</div>
                                    <p className="lead text-brand text-center text-md-left">Introduction to Skincare</p>
                                    <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER ONE: The skin and skincare products.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER TWO: Before formulation: Things you need to know. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER THREE: Formulation development.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER FOUR: About natural ingredients.</span></li>
                                    </ul>
                                    <hr/>
                                <div className="text-title text-center text-md-left">MODULE 2</div>
                                    <p className="lead text-brand text-center text-md-left">Guide to Skincare formulation</p>
                                    <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER FIVE: Formulating procedures and techniques. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER SIX: Classification of skincare products.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER SEVEN: How to create different product formulas from scratch. </span></li>
                                        
                                    </ul>
                                    <hr/>
                                <div className="text-title text-center text-md-left">MODULE 3</div>
                                    <p className="lead text-brand text-center text-md-left">Product Formulation.</p>
                                        <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER EIGHT: Cream and lotion formulation.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER NINE: Anhydrous products- Oils and others.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER TEN: Hydrous products- Toners and serums. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>CHAPTER ELEVEN- Soap making.</span></li>
                                    </ul>
                                        <hr/>
                                <div className="text-title text-center text-md-left">MORE</div>
                                <p className="lead text-brand text-center text-md-left">BONUS</p>
                                        <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>Recipe collection</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>More on Carrier and Essential oils. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Recommended ingredients suppliers</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Natural ingredients dictionary. </span></li>
                                    </ul>
                                    <hr/>
                        </div>
                        <div className="col-12 col-md-6 mx-auto text-center">
                            <a href="https://paystack.com/pay/etoilensfguide" target="_blank" className="btn btn-success enroll px-3">Purchase Now</a>
                        </div>
                </div>
            </div>
        </section></Bookstyle>
    );
}

const Bookstyle = styled.div `
.course-img {
    width: 100%;
}
ul {
    list-style-type: none;
}`
export default Ebook;