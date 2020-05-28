import React from 'react';
import styled from 'styled-components';
import banner from '../photos/IMG-1.jpg';
import {Link} from 'react-router-dom';
import advanced from '../photos/advanced.png';
import FaQ from './FaQ';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import AboutAcademy from './AboutAcademy';

const useStyles = makeStyles((theme) => ({
    expand: {
      transform: 'rotate(0deg)',
      marginRight: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

export default function SoapCourse () {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    return (
        <Soapstyle>
            <section className="container-fluid cert-header">
                <div className="container pt-7 pb-3">
                <h4 className="text-light font-weight-light mb-0 pb-1">Etoile Beauty Academy</h4>
                <h1 className="text-contrast bold display-lg-4">Soap Making Course</h1>
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
                        <a href="#How"><li className="nav-item nav-link ml-3">Syllabus</li></a>
                        <li className="nav-item nav-link ml-3">Instructor</li>
                        <li className="nav-item nav-link ml-3">Enrollment Options</li>
                        <li className="nav-item nav-link ml-3">FAQ</li>
                    </ul><hr/>
            <section className="mt-1">
                <div className="container pt-0">
                    <div className="mt-n1">
                        <div className="row mt-0">
                            <div className="col-12 col-md-8 mt-0">
                            <div className="col-12 py-3 mt-2">
                                <h5>About this Course</h5>
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
                <div className="jumbotron container-fluid" id="How">

                </div>
            </section>
            <section className="mt-n5">
                <div className="container">
                    <div className="row gap-y">
                        <div className="col-12">
                            <h3 className="text-title text-center pb-4">Syllabus - What you will learn from this Course</h3>
                            <div className="row mx-auto">
                                <div className="col-12 col-md-2 text-title">MODULE 1</div>
                                <div className="col-md-10 ">
                                    <div className="text-dark d-flex flex-wrap">
                                        <div className="round-icon bg-gradient-pink order-2 order-md-1"><i className="far fa-large fa-clock"/></div><span className="lead my-auto ml-3 order-2 order-md-1">3 hours to complete</span>
                                        <div className="col-12 order-1 order-md-2 mt-md-3">
                                            <a href="#" className="lead">The skin and Skincare Products</a>
                                            <p className="lead py-4">A Coursera Specialization is a series of courses that helps you master a skill. To begin, enroll in the Specialization directly, or review its courses and choose the one you'd like to start with. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. It’s okay to complete just one course — you can pause your learning or end your subscription at any time. Visit your learner dashboard to track your course enrollments and your progress.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="course-panels">
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">10 Videos + Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="col-md-2 text-title">MODULE 2</div>
                                <div className="col-md-10">
                                    <div className="text-dark d-flex flex-wrap">
                                    <div className="round-icon bg-gradient-pink order-2 order-md-1"><i className="far fa-large fa-clock"/>
                                    </div><span className="lead my-auto ml-3 order-2 order-md-1">3 hours to complete</span>
                                    <div className="col-12 order-1 order-md-2 mt-md-3">
                                        <a href="#" className="lead">Raw Materials in Skincare</a>
                                        <p className="lead py-4">A Coursera Specialization is a series of courses that helps you master a skill. To begin, enroll in the Specialization directly, or review its courses and choose the one you'd like to start with. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. It’s okay to complete just one course — you can pause your learning or end your subscription at any time. Visit your learner dashboard to track your course enrollments and your progress.</p>
                                    </div>
                                    </div>
                                    <div className="course-panels">
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel2a-content" id="panel2a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">10 Videos + Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="col-md-2 text-title">MODULE 3</div>
                                <div className="col-md-10">
                                    <div className="text-dark d-flex flex-wrap">
                                    <div className="round-icon bg-gradient-pink order-2 order-md-1"><i className="far fa-large fa-clock"/>
                                    </div><span className="lead my-auto ml-3 order-2 order-md-1">3 hours to complete</span>
                                    
                                    <div className="col-12 order-1 order-md-2 mt-md-3">
                                        <a href="#" className="lead">Preservatives, PH Stability and Temperature</a>
                                        <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                                    </div>
                                    </div>
                                    <div className="course-panels">
                                    <ExpansionPanel>
                                    <ExpansionPanelSummary aria-controls="panel3a-content" id="panel2a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">10 Videos + Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                            </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    </div> 
                                    <hr/>
                                </div>
                                <div className="col-md-2 text-title">MODULE 4</div>
                                <div className="col-md-10">
                                <div className="text-dark d-flex flex-wrap">
                                <div className="round-icon bg-gradient-pink order-2 order-md-1"><i className="far fa-large fa-clock"/>
                                    </div><span className="lead my-auto ml-3 order-2 order-md-1">3 hours to complete</span>
                                    <div className="col-12 order-1 order-md-2 mt-md-3">
                                    <a href="#" className="lead">Body Lotions, Oils and Creams</a>
                                    <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                                    </div>
                                    </div>
                                    <div className="course-panels">
                                    <ExpansionPanel>
                                            <ExpansionPanelSummary aria-controls="panel2a-content" id="panel2a-header">
                                            <div className="d-flex w-100">
                                            <div className="mt-3 round-icon bg-gradient-purple"><i className="far fa-large fa-play-circle"/></div><span className="mt-4 mx-3">10 Videos + Ebooks</span>
                                            <span className="mt-4 ml-auto">See All<i className="ml-1 fas fa-angle-down"/></span>
                                            </div>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    
                                    </div>
                                   
                                    <hr/>
                                </div>
                                <div className="col-md-2 text-title">MODULE 5</div>
                                <div className="col-md-10 text-dark">
                                    <div className="round-icon bg-gradient"><i className="far fa-large fa-clock"/></div>
                                    <a href="#" className="lead">Soap Making</a>
                                    <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                                    <hr/>
                                </div>
                                <div className="col-md-2 text-title">MODULE 6</div>
                                <div className="col-md-10 text-dark">
                                    <a href="#" className="lead">Face Products</a>
                                    <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                                    <hr/>
                                </div>
                                <div className="col-md-2 text-title">BONUS </div>
                                <div className="col-md-10 text-dark">
                                    <a href="#" className="lead">Branding and Marketing</a>
                                    <p className="lead py-4">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                                    <hr/>
                                </div>
                            </div>
                        </div>
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
                                </div>
                            </div>
                        </div>
                </div><hr/>
            </section>
            <AboutAcademy/><FaQ/>
        </div>
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