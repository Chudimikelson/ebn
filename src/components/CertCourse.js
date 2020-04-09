import React, {Component} from 'react';
import styled from 'styled-components';
import banner from '../photos/IMG-1.jpg';
import {Link} from 'react-router-dom';
import advanced from '../photos/advanced.png';
import FaQ from './FaQ';

export default class CertCourse extends Component {
    render () {
        return (
            <Certstyle>
              <section className="container-fluid cert-header">
                  <div className="container pt-7 pb-3">
                    <h4 className="text-light font-weight-light mb-0 pb-1">Etoile Beauty Academy</h4>
                    <h1 className="text-contrast bold display-lg-4">Certificate in Natural Skincare Formulation</h1>
                    <p className="lead text-light pb-3 bbn">Start your journey in simple, natural and plant based skincare. Develop the knowledge you need to create your own skincare brand.</p>
                    <div className="py-3 text-contrast instructor">
                        <img id="instructor-img" src={banner} alt=""/> Esther C. Ojogwu
                        <span className="mr text-light lead"> - Instructor</span>
                    </div>
                    <div className="btn btn-primary mt-2">Enroll Now</div>
                  </div>
                  
              </section>
              <div className="col-12">
              <ul className="navbar-nav d-flex no-decor-links fixed-menu flex-row text-nowrap">
                          <a href="#About"><li className="nav-item nav-link">About</li></a>
                          <a href="#How"><li className="nav-item nav-link ml-3">How It Works</li></a>
                          <li className="nav-item nav-link ml-3">Courses</li>
                          <li className="nav-item nav-link ml-3">Instructor</li>
                          <li className="nav-item nav-link ml-3">Enrollment Options</li>
                          <li className="nav-item nav-link ml-3">FAQ</li>
                      </ul><hr/>
              <section className="mt-1">
                  <div className="container pt-0">
                      
                      <div className="mt-n1">
                          <div className="row mt-0">
                              <div className="col-12 col-md-8 mt-0">
                                <div className="col-12 py-3 rounded" id="wywl">
                                    <h5 className="text-capitalize">what you will learn</h5>
                                    <div className="row" id="About">
                                        <div className="col-md-6 py-2"><i className="fas fa-check mr-2" />Discover the fundamentals of Virtual Reality, the hardware and history, different applications, and the psychology and challenges of the medium.</div>
                                    <div className="col-md-6 py-2"><i className="fas fa-check mr-2" />Learn the basics of 3D graphics, how we create objects and how to lay them out to create an environment.</div>
                                    <div className="col-md-6 py-2"><i className="fas fa-check mr-2" />Explore how you interact with a VR world, including the concepts and technologies of VR interaction.</div>
                                    <div className="col-md-6 py-2"><i className="fas fa-check mr-2" />Utilise the skills you have learnt to create your own VR game or project.</div> 
                                    </div>
                                    <hr/>
                                    <h5 className="text-capitalize">skills you will gain</h5>
                                    <div className="row">
                                        <div className="col-12">
                                        <span className = "skills text-contrast">soap making</span>
                                        <span className = "skills text-contrast">soap making</span>
                                        <span className = "skills text-contrast">soap making</span>
                                        <span className = "skills text-contrast">soap making</span>                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 py-3 mt-2">
                                    <h5>About this specialization</h5>
                                    <p>This specialisation from Etoile Beauty Academy will introduce you to virtual reality.</p>
                                    <p>Virtual reality is one of the most highly requested skill sets in the jobs market, and this specialisation will give you an introduction to the subject and key skills in the field. You will hear from world-leading lecturers and industry experts, use Unity to develop your own VR environment, and end the specialisation by creating your first VR game.</p>
                                </div>
                                <div className="col-12 py-3">
                                    <h5>Applied Learning Practicals</h5>
                                    <p>By the end of the specialisation you will be able to develop your very own Virtual Reality game. You will take the skills you have developed in each of the preceding courses and, using Unity, you will put these into practice to create your first virtual reality game.</p>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                  <div className="learner-outcome py-3 rounded">
                                      <ul>
                                        <li className="py-3 lead"><i className="fas fa-check"/><span className="ml-4">LEARNER CAREER OUTCOMES</span></li>
                                        <li className="py-2 text-dark">50%<span className="ml-3">Started their own skincare business after completing this specialization.</span></li>
                                        <li className="py-2 text-dark">50%<span className="ml-3">Got a pay increase or promotion.</span></li>
                                      </ul>
                                  </div>
                                  <div className="pt-3 learner-outcome-2">
                                      <ul>
                                        <li className="py-3 text-dark"><i className="fas fa-clock"/><span className="ml-3">Approx. 4 weeks to complete</span></li>
                                        <li className="py-3 text-dark"><i className="fas fa-globe"/><span className="ml-3">100% Online</span></li>
                                        <li className="py-3 text-dark"><i className="fas fa-certificate"/><span className="ml-3">Certificate of proficiency</span></li>
                                        <li className="py-3 text-dark"><i className="fas fa-copy"/><span className="ml-3">Flexible schedule</span></li>
                                        <li className="py-3 text-dark"><i className="fas fa-user-graduate"/><span className="ml-3">Beginner level</span></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section>
                  <div className="jumbotron container-fluid" id="How"></div>
              </section>
              <section className="mt-n5">
                <div className="container">
                    <div className="row gap-y mx-auto px-3">
                        <h3 className="text-title text-center">How the specialization works</h3>
                        <div className="col-12 col-md-7">
                            <div className="text-dark lead">Take Courses
                            <p className="text-small">A Coursera Specialization is a series of courses that helps you master a skill. To begin, enroll in the Specialization directly, or review its courses and choose the one you'd like to start with. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. It’s okay to complete just one course — you can pause your learning or end your subscription at any time. Visit your learner dashboard to track your course enrollments and your progress.</p>
                            </div>
                            <div className="text-dark lead">Hands-on Project
                            <p className="text-small">Every Specialization includes a hands-on project. You'll need to successfully finish the project(s) to complete the Specialization and earn your certificate. If the Specialization includes a separate course for the hands-on project, you'll need to finish each of the other courses before you can start it.</p>
                            </div>
                            <div className="text-dark lead">Earn a Certificate
                            <p className="text-small">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                            </div>
                        </div>
                        <div className="col-md-5"></div>
                    </div>
                </div>
              </section>
              <hr/>
              <section className="mt-n5">
              <div className="container">
                    <div className="row gap-y"><div className="col-12">
                        <h3 className="text-title text-center pb-4">Courses in this specialization</h3>
                        <div className="row mx-auto">
                            <div className="col-md-2 text-title">COURSE 1</div>
                            <div className="col-md-10 text-dark">
                                <a href="#" className="lead">The skin and Skincare Products</a>
                            <p className="lead py-4">A Coursera Specialization is a series of courses that helps you master a skill. To begin, enroll in the Specialization directly, or review its courses and choose the one you'd like to start with. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. It’s okay to complete just one course — you can pause your learning or end your subscription at any time. Visit your learner dashboard to track your course enrollments and your progress.</p>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title">COURSE 2</div>
                            <div className="col-md-10 text-dark">
                                <a href="#" className="lead">Raw Materials in Skincare</a>
                            <p className="lead py-4">Every Specialization includes a hands-on project. You'll need to successfully finish the project(s) to complete the Specialization and earn your certificate. If the Specialization includes a separate course for the hands-on project, you'll need to finish each of the other courses before you can start it.</p>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title">COURSE 3</div>
                            <div className="col-md-10 text-dark">
                                <a href="#" className="lead">Preservatives, PH Stability and Temperature</a>
                            <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title">COURSE 4</div>
                            <div className="col-md-10 text-dark">
                                <a href="#" className="lead">Body Lotions, Oils and Creams</a>
                            <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title">COURSE 5</div>
                            <div className="col-md-10 text-dark">
                                <a href="#" className="lead">Soap Making</a>
                            <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title">COURSE 6</div>
                            <div className="col-md-10 text-dark">
                                <a href="#" className="lead">Face Products</a>
                            <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                            <hr/>
                            </div>
                            <div className="col-md-2 text-title">COURSE 7</div>
                            <div className="col-md-10 text-dark">
                                <a href="#" className="lead">Branding and Marketing</a>
                            <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                            <hr/>
                            </div>
                        </div></div>
                    </div>
                    <div className="container mt-n5 pb-0">
                    
                    <div className="row pb-0">
                    <div className="col-md-6 py-3"><h4 className="text-center text-title">Start today for a 20% discount</h4>
                        <ul>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Shareable Specialization and Course Certificates</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Course Videos & Readings</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Self-Paced Learning Option</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Graded Assignments and Practice Quizzes</li>
                        <li><i className="fas fa-arrow-right mr-3 py-3"></i>Mentorship and Support</li>
                        </ul>
                        <div className="text-center"><button className="btn btn-success enroll px-3">Enroll Now</button></div>
                    </div>
                    <div className="col-md-6">
                        <p>Certificate Sample</p>
                        <img src={advanced} alt="" id="cert-img"/>
                    </div></div>
                </div>
                </div><hr/>
              </section>
              <section className="mt-n5">
                <div className="container">
                    <div className="row gap-y mx-auto">
                        <h3 className="text-title">About the Instructor </h3>
                        <div className="col-12 d-md-flex">
                            <div className="col-12 col-md-5 d-flex flex-md-row">
                                <div>
                                <img id="instructor-img-2" src={banner} alt=""/>
                                </div>
                                <div className="ml-3 pl-3 my-auto">
                                    <p className="text-title mb-0">Esther C. Ojogwu</p>
                                    <p>CEO - Etoile Beauty Nigeria</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-contrast bg-brand pb-3">
                                <p className="lead pt-3">Etoile Beauty Academy</p>
                                <p>The University of London is a federal University which includes 18 world leading Colleges. Our distance learning programmes were founded in 1858 and have enriched the lives of thousands of students, delivering high quality University of London degrees wherever our students are across the globe. Our alumni include 7 Nobel Prize winners. Today, we are a global leader in distance and flexible study, offering degree programmes to over 50,000 students in over 180 countries.</p>
                            </div>
                        </div>
                    </div>
                </div>   <hr/>
              </section>
              <section className="mt-n5">
                <div className="container">
                    <div className="row gap-y">
                        <div className="col-md-7 mx-auto">
                            <h3 className="text-center pb-4">Frequently Asked Questions</h3>
                            <FaQ/>
                        </div>
                    </div>
                  </div>
              </section>
            </div>
            </Certstyle>
        )
    }
}

const Certstyle = styled.div `
.cert-header {
    background: palevioletred;
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