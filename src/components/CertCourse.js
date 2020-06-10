import React from 'react';
import styled from 'styled-components';
import advanced from '../photos/Cover.jpg';
import FaQ from './FaQ';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import banner from '../photos/IMG-1.jpg';
import AboutAcademy from './AboutAcademy';
import Breadcrumb  from './Breadcrumb';

export default function CertCourse () {
    const current = "Certificate Course";
        return (
            <Certstyle>
              <section className="container-fluid cert-header paddit">
                  <div className="container pt-7 pb-3">
                    <h4 className="text-light font-weight-light mb-0 pb-1">Etoile Beauty Academy</h4>
                    <h1 className="text-contrast bold display-lg-4">Certificate in Natural Skincare Formulation</h1>
                    <p className="lead text-light pb-3 bbn">Start your journey in simple, natural and plant based skincare. Develop the knowledge you need to create your own skincare brand.</p>
                    <div className="py-3 text-contrast instructor">
                        <img id="instructor-img" src={banner} alt=""/> Esther C. Ojogwu
                        <span className="mr text-light lead"> - Instructor</span>
                    </div>
                    <a href="https://paystack.com/pay/etoilensf" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">Enroll Now</a>
                  </div>
                  
              </section>
              <Breadcrumb current={current}/><div className="col-12">
              
              <section className="mt-1">
                  <div className="container py-0">
                      
                      <div className="mt-n1">
                          <div className="row mt-0">
                              <div className="col-12 col-md-8 mt-0">
                                <div className="col-12 py-3 rounded" id="wywl">
                                    <h5 className="text-capitalize bold">what you will learn</h5>
                                    <div className="row" id="About">
                                        <div className="col-md-6 py-2"><i className="fas fa-check mr-2" />Discover how to create your own unique skin care formulas using natural ingredients that are safe and effective</div>
                                    <div className="col-md-6 py-2"><i className="fas fa-check mr-2" />Learn the basics of skin care processes and how to turn gorgeous ingredients from nature into working products</div>
                                    <div className="col-md-6 py-2"><i className="fas fa-check mr-2" />Learn how to formulate over 25 products for skin brightening, acne treatment and anti-aging that are sellable and effective</div>
                                    <div className="col-md-6 py-2"><i className="fas fa-check mr-2" />Utilise the formulation skills you have learnt in this course to create your own profitable skin care business</div> 
                                    </div>
                                    <hr/>
                                    <h5 className="text-capitalize bold">skills you will gain</h5>
                                    <div className="row">
                                        <div className="col-12 d-flex">
                                        <p className = "skills text-contrast">Soap making</p>
                                        <p className = "skills text-contrast">Lotion making</p>
                                        <p className = "skills text-contrast">Facial care</p>
                                        <p className = "skills text-contrast">Product pricing</p>                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 py-3 mt-2">
                                    <h5 className="bold">About this specialization</h5>
                                    <p>This specialization from Etoile Beauty Academy will teach you the formulation skills needed to create unique quality and effective natural skin care product that will set you apart in the natural skin care industry.</p>
                                </div>
                                <div className="col-12 py-3">
                                    <h5 className="bold">Applied Learning Results</h5>
                                    <p>By the end of the course, you will be able to create a full range of natural skin care products from scratch for face and body care.</p>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                  <div className="learner-outcome py-3 rounded">
                                      <ul>
                                        <li className="py-3 lead"><span className="bold">LEARNER CAREER OUTCOMES</span></li>
                                        <li className="py-2 text-dark">80%<span className="ml-3">of our graduates started their own skincare business after completing this specialization.</span></li>
                                        <li className="py-2 text-dark">20%<span className="ml-3">Joined our organic skin care mentorship program.</span></li>
                                      </ul>
                                  </div>
                                  <div className="pt-3 learner-outcome-2">
                                      <ul>
                                        <li className="py-3 text-dark"><i className="fas fa-clock"/><span className="ml-3">Approx. 4 weeks to complete</span></li>
                                        <li className="py-3 text-dark"><i className="fas fa-globe"/><span className="ml-3">100% Online</span></li>
                                        <li className="py-3 text-dark"><i className="fas fa-certificate"/><span className="ml-3">Certificate of Proficiency</span></li>
                                        <li className="py-3 text-dark"><i className="fas fa-copy"/><span className="ml-3">Flexible schedule</span></li>
                                        <li className="py-3 text-dark"><i className="fas fa-user-graduate"/><span className="ml-3">Simple and Detailed</span></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              
              <section className="mt-n5" id="How">
                <div className="container pb-3">
                    <div className="row mx-auto px-3">
                        <h5 className="text-title text-center pb-4">How the specialization works</h5>
                            <div className="text-dark lead"><div className="bold italic">Take Lessons</div>
                            <p className="text-small">This Course is a series of modules that helps you master the skill of natural skin care product formulation. To begin, enroll in the Specialization directly after familiarizing yourself with the course syllabus. When you pay for the Specialization, you will receive training schedule available for you and other vital information about the course.</p>
                            </div>
                            <div className="text-dark lead"><div className="bold italic">Hands-on Practicals</div>
                            <p className="text-small">Every module includes a hands-on practical. You'll need to successfully finish the practical(s) to complete the Specialization and earn your certificate.</p>
                            </div>
                            <div className="text-dark lead"><div className="bold italic">Earn a Certificate</div>
                            <p className="text-small">When you finish every module and complete the hands-on practical(s), you'll earn a Certificate of training that you can add to your portfolio.</p>
                            </div>
                    </div>
                </div>
              </section>
              <hr/>
              <section className="mt-n5">
              <div className="container">
                    <div className="row gap-y"><div className="col-12">
                        <h5 className="text-title text-center pb-4">Course Outline</h5>
                        <div className="row mx-auto">
                            <div className="col-md-2 text-title text-center">MODULE 1</div>
                            <div className="col-md-10">
                                <div className="text-dark d-flex flex-wrap">
                                <div className="round-icon bg-gradient-pink order-2 "><i className="far fa-large fa-clock"/></div><span className="lead my-auto ml-3 order-2 ">4 hours to complete</span>
                                <div className="col-12 order-1 ml-md-4 pl-md-4">
                                <p className="lead text-brand text-center text-md-left">The skin and Skin Care</p>
                            <p className="lead pb-1">In this module, you will learn how the skin works, its structure and how to efficiently care for the skin.</p>
                            </div>
                            </div>
                            <div className="course-panels">
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-play-circle"/></div><span className="mt-4 mx-3">Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <div>
                                            <p><i className="far fa-check-circle mr-3"></i><span>Basic structure of the skin. </span></p>
                                            <p><i className="far fa-check-circle mr-3"></i><span>Get acquinted with skin conditions and types.</span></p>
                                            <p><i className="far fa-check-circle mr-3"></i><span>How to care for the skin. </span></p>
                                            <p><i className="far fa-check-circle mr-3"></i><span>Skin pH and its importance</span></p></div>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title text-center">MODULE 2</div>
                            <div className="col-md-10">
                            <div className="text-dark d-flex flex-wrap">
                                <div className="round-icon bg-gradient-pink order-2 "><i className="far fa-clock"/></div><span className="lead my-auto ml-3 order-2 ">6 hours to complete</span><div className="col-12 order-1 ml-md-4 pl-md-4">
                                <p className="lead text-brand text-center text-md-left">Skincare Ingredients Study</p>
                            <p className="lead pb-1">In this module you will discover and explore the range of beautiful natural ingredients used in formulating skin care products and how they work.</p>
                            </div>
                            </div>
                            <div className="course-panels">
                                <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel2a-content" id="panel2a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3"> eBook</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                            <ul>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Ingredient classification and numenclature. </span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Ingredient usage and safety advice.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Preservatives: uses and techniques. </span></li>
                                            </ul>
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                            </div>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title text-center">MODULE 3</div>
                            <div className="col-md-10">
                                <div className="text-dark d-flex flex-wrap">
                                    <div className="round-icon bg-gradient-pink order-2 "><i className="far fa-large fa-clock"/></div><span className="lead my-auto ml-3 order-2 ">4 hours to complete</span><div className="col-12 order-1 ml-md-4 pl-md-4">
                                <p href="#" className="lead text-brand text-center text-md-left">Foundation of Skincare Formulation </p>
                            <p className="lead pb-1">In this module, you will learn about the basic and essential principles of product formulation.</p>
                            </div>
                            </div>
                            <div className="course-panels">
                                <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel3a-content" id="panel3a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">3 Videos + 1 audio + Ebook</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                            <ul>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Basic equipment for formulating. </span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Safety and good manufacturing practices.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Designing skincare formulas from scratch and conversion of formulas.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Learn about pH and pH adjustment.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Product stabilty and tests.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Formulation record keeping.</span></li></ul>
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                            </div>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title text-center">MODULE 4</div>
                            <div className="col-md-10">
                                <div className="text-dark d-flex flex-wrap">
                                    <div className="round-icon bg-gradient-pink order-2 "><i className="far fa-large fa-clock"/></div><span className="lead my-auto ml-3 order-2 ">10 hours to complete</span><div className="col-12 order-1 ml-md-4 pl-md-4">
                                <p className="lead text-brand text-center text-md-left">Lotion and Cream</p>
                            <p className="lead pb-1">In this module you will discover the right way to create and make stable lotions and creams safely from scratch.</p>
                            </div>
                            </div>
                            <div className="course-panels">
                                <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel4a-content" id="panel4a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">5 Videos + Worksheet/template + Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                            <ul>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Base cream and lotion. </span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Body lotion and Body cream.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Face lotion and cream.</span></li>
                                            </ul>
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                            </div>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title text-center">MODULE 5</div>
                            <div className="col-md-10">
                                <div className="text-dark d-flex flex-wrap">
                                    <div className="round-icon bg-gradient-pink order-2 "><i className="far fa-large fa-clock"/></div><span className="lead my-auto ml-3 order-2 ">10 hours to complete</span><div className="col-12 order-1 ml-md-4 pl-md-4">
                                <p className="lead text-brand text-center text-md-left">Soap Making</p>
                            <p className="lead pb-1">In this module you will discover how to make diferent type of soaps for different purposes using your own unique formulas. You will learn how to make your soaps from scratch using naturally sourced ingredients.</p>
                            </div>
                            </div>
                            <div className="course-panels">
                                <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel5a-content" id="panel5a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">5 Videos + Worksheet/template + Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                            <ul>
                                            <li><i className="far fa-check-circle mr-3"></i><span>African black soap variants (Purposes: Simple, Kids friendly and Luxury). </span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Cold process bar soap (Purposes: Simple, Kids friendly and Luxury).</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Cleansers for facial and sensitive skin.</span></li>
                                            </ul>
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                            </div>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title text-center">MODULE 6</div>
                            <div className="col-md-10">
                                <div className="text-dark d-flex flex-wrap">
                                    <div className="round-icon bg-gradient-pink order-2 "><i className="far fa-large fa-clock"/></div><span className="lead my-auto ml-3 order-2 ">10 hours to complete</span><div className="col-12 order-1 ml-md-4 pl-md-4">
                                <p className="lead text-brand text-center text-md-left">Anhydrous Products</p>
                            <p className="lead pb-1">In this module, create lovely oil blends, whipped body butters, scrubs and polishes that give the skin beautiful and youthful radiance.</p>
                            </div>
                            </div>
                            <div className="course-panels">
                                <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel6a-content" id="panel6a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">5 Videos + Audio + Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                            <ul>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Face and body oil blends. </span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Face masks.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Body scrubs.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Whipped body butters.</span></li>
                                            </ul>
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                            </div>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title text-center">MODULE 7</div>
                            <div className="col-md-10">
                                <div className="text-dark d-flex flex-wrap">
                                    <div className="round-icon bg-gradient-pink order-2 "><i className="far fa-large fa-clock"/></div><span className="lead my-auto ml-3 order-2 ">10 hours to complete</span><div className="col-12 order-1 ml-md-4 pl-md-4">
                                <p className="lead text-brand text-center text-md-left">Hydrous Products</p>
                            <p className="lead pb-1">In this module, we will teach you how to care for the facial skin which is quite different from the skin on the body by creating refreshing and mild water-based products using special ingredients. </p>
                            </div>
                            </div>
                            <div className="course-panels">
                                <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel7a-content" id="panel7a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">5 Videos + Worksheet/template + Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                            <ul>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Face toners. </span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Face serums.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Multipurpose face gels.</span></li>
                                            </ul>
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                            </div>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title text-center">MODULE 8</div>
                            <div className="col-md-10">
                                <div className="text-dark d-flex flex-wrap">
                                    <div className="round-icon bg-gradient-pink order-2 "><i className="far fa-large fa-clock"/></div><span className="lead my-auto ml-3 order-2 ">3 hours to complete</span><div className="col-12 order-1 ml-md-4 pl-md-4">
                                <p className="lead text-brand text-center text-md-left">Branding and Marketing</p>
                            <p className="lead pb-1">You may have the best and most effective skin care products but if you do not have the right skills needed to reach the right customers, you may not get any benefits fom your business. This course will introduce you to the importance of branding and marketing to skin care start-ups.</p>
                            </div>
                            </div>
                            <div className="course-panels">
                                <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel8a-content" id="panel8a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">Ebook + Worksheet</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                            <ul>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Creating your unique niche. </span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Product labelling and branding standards to meet.</span></li>
                                            <li><i className="far fa-check-circle mr-3"></i><span>Guide to pricing your skincare products.</span></li>
                                            </ul>
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                            </div>
                            <hr/>
                            </div>
                        </div></div>
                    </div>
                    <div className="container mt-n5 pb-0">
                    
                    <div className="row pb-0 bg-gold rounded">
                    <div className="col-md-7 py-3"><h4 className="text-center text-title">Start today!</h4>
                        <ul>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Study from anywhere in the world</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Step-by-step demonstration videos</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Directory for sourcing raw materials</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Comprehensive E-book</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Student mentorship and support</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Certificate of Proficiency</li>
                        </ul>
                        <div className="text-center"><a href="https://paystack.com/pay/etoilensf" target="_blank" rel="noopener noreferrer" className="btn btn-success enroll px-3">Enroll Now</a></div>
                    </div>
                    <div className="col-md-5 my-auto">
                        <img src={advanced} alt="" id="cert-img"/>
                    </div></div>
                </div>
                </div><hr/>
              </section>
              <AboutAcademy/>
              <FaQ/>
            </div>
            </Certstyle>
        )
}

const Certstyle = styled.div `
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
    font-size: .8rem;
    background: palevioletred;
    border-radius: .8rem;
    margin-right: .5rem;
    padding: .25rem .7rem;
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
.bg-gold {
    border: solid .5px gold;
}
`