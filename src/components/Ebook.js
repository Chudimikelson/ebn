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
                            <h3 className="text-center text-dark text-md-left pb-4">What you will learn</h3>
                                <div className="text-title text-center text-md-left">MODULE 1</div>
                                    <p className="lead text-brand text-center text-md-left">Introduction to Skincare</p>
                                    <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>The skin: types and care.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Safety practices before making skincare products. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Equipment needed in making skincare products.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Measurement conversion.</span></li>
                                    </ul>
                                    <hr/>
                                <div className="text-title text-center text-md-left">MODULE 2</div>
                                    <p className="lead text-brand text-center text-md-left">Basic Guide to Making Skincare</p>
                                    <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>Product objective. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Ingredients selection and substitution.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Recipe development. </span></li>
                                    </ul>
                                    <hr/>
                                <div className="text-title text-center text-md-left">MODULE 3</div>
                                    <p className="lead text-brand text-center text-md-left">Product Formulas</p>
                                        <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>Emulsified scrub</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Black soap paste.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Face and body oil. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Whipped body butter.</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Facial bar soap</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Face toner</span></li>
                                    </ul>
                                        <hr/>
                                <div className="text-title text-center text-md-left">MODULE 4</div>
                                <p className="lead text-brand text-center text-md-left">BONUS</p>
                                        <ul className="ml-0 lead text-muted">
                                        <li><i className="far fa-check-circle mr-3"></i><span>More on Carrier and Essential oils. </span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Recipe calculator (downloadable)</span></li>
                                        <li><i className="far fa-check-circle mr-3"></i><span>Recommended ingredients suppliers</span></li>
                                    </ul>
                                    <hr/>
                        </div>
                        <div className="col-12 col-md-6 mx-auto text-center">
                            <button className="btn btn-success enroll px-3">Purchase Now</button>
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