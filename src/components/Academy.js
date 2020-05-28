import React, { Component } from 'react';
import advanced from '../photos/advanced.png';
import styled from 'styled-components';
import Banner from './Banner';
import FaQ from './FaQ';
import { Link } from 'react-router-dom';

export default class Academy extends Component {
  state = {
    collapseID: ""
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }
  render () {
    return (
      <>
      <Banner/>
      <Acad>
        <section className=" mt-n6">
          <div class="container bring-to-front pt-0">
            <div className="row gap-y">
              <div className="col-12">
                <div class=" cert-header p-3 rounded h-100">
                  <h3 className="bold text-contrast">Become a Professional Skincare Formulator</h3>
                  <div className="row mx-auto" id="courses">
                    <div className="col-12 col-md-4">
                      <Link className="no-decor-links" to="/Natural-Skincare-Formulation">
                      <div className="card shadow-hover">
                        <div className="card-body">
                          <div className="card-title">Natural Skincare Formulation</div>
                          <img className="image-responsive course-img" src={advanced} alt="etoile academy"/>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                          <div className="">SPECIALIZATION</div>
                          <div className="">(4 Courses)</div>
                        </div>
                      </div></Link>
                    </div>
                    <div className="col-12 col-md-4">
                      <Link className="no-decor-links" to="/Soap-Making-Course">
                      <div className="card shadow-hover">
                        <div className="card-body">
                          <div className="card-title">Soap Making</div>
                          <img className="image-responsive course-img" src={advanced} alt="etoile academy"/>
                        </div>            
                        <div className="card-footer d-flex justify-content-between">
                          <div className="">COURSE</div>
                        </div>
                      </div></Link>
                    </div>
            <div className="col-12 col-md-4"><div className="card shadow-hover">
            <div className="card-body">
              <div className="card-title">Emulsion Formulation</div>
              <img className="image-responsive course-img" src={advanced} alt="etoile academy"/>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <div className="">COURSE</div>
            </div>
          </div></div>
          <div className="col-12 col-md-4"><div className="card shadow-hover">
            <div className="card-body">
              <div className="card-title">Natural Skincare Formulation</div>
              <img className="image-responsive course-img" src={advanced} alt="etoile academy"/>
            </div>
            
            <div className="card-footer d-flex justify-content-between">
              <div>EBOOK</div>
            </div>
            
            </div></div>
                  </div>
                  <div className="bbn text-right mr-3">see more <i className="ml-2 fas fa-arrow-right" id="ar-right"/></div>
                </div>
              </div>
            </div>
          </div>
        </section> 
        <section className="bg-light mt-n5">
          <div class="container bring-to-front pt-0">
            <div className="row gap-y">
              <div className="col-12 mx-auto">
                <div class="shadow-box px-3">
                  <div className="row text-center text-md-left ">
                    <div className="col-12 col-md-6 d-md-flex bootcamp">
                      <div className="col-md-6 py-3">
                        <div className="mb-3">Etoile Skincare BootCamp</div>
                        <h5>Empower yourself with our one month hands-on training on professional skincare formulation</h5>
                        <p>Apply Now to build a career and start a business of your own. Registration closes by April 19th</p>
                      </div>
                      <div className="col-12 col-md-6 my-auto">
                        <img className="image-responsive course-img" src={advanced} alt="etoile academy"/>
                        <div><button className="btn btn-success my-3">Join Now</button></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 d-md-flex mini-course">
                      <div className="col-12 col-md-6 py-3">
                        <div className="mb-3">Audit our Courses</div>
                        <h4>Take our mini course on making skincare products</h4>
                        <p>Apply Now to learn how to make 5 simple yet effective skincare products for you and your family</p>
                      </div>
                      <div className="col-12 col-md-6 my-auto">
                        <img src={advanced} alt="etoile academy" className="image-responsive course-img d-none d-md-block"/>
                        <div><button className="btn btn-success my-3">Join Now</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-n5">
          <div className="container">
            <div className="row gap-y">
                <div className="col-12 col-md-6 mx-auto">
                <h4 className="py-3">Skills your will learn at Etoile Beauty Academy</h4>
                <ul className="list">
                  <li><i className="fas fa-arrow-right mr-3"></i>How to formulate skin care products from scratch</li>
                  <li><i className="fas fa-arrow-right mr-3"></i>Identify non-toxic and eco-friendly natural ingredients</li>
                  <li><i className="fas fa-arrow-right mr-3"></i>Launch a successful skincare brand</li>
                  <li> ... plus many more! </li>
                </ul>
             
          
                <div class="shadow rounded text-center overlay overlay-dark alpha-8 text-contrast p-5 image-background cover" style={{"background-image": "url(https://picsum.photos/350/200/?random&gravity=south)"}}>
                    <div class="content">
                        <div class="section-heading">
                            <h4 class="text-contrast">What our graduates say</h4>
                        </div>
                        <p class="handwritten highlight font-md">Play the video</p><a href="https://www.youtube.com/watch?v=MXghcI8hcWU" class="modal-popup mfp-iframe btn-circle btn-primary" data-effect="mfp-fade"><i className="play ml-1 fas fa-play"></i></a>
                    </div>
                </div>
        
              </div>
              <div className="col-12 col-md-6 p-0 m-0"><FaQ/></div>
               
            </div>
          </div>
        </section>
        
      </Acad>
      </>
    )
  }
}

const Acad = styled.div `

.cert-header {
    background-image: linear-gradient(45deg, #fb31bd, #fc9e2196);
}
.course-img {
  width:100%;
  max-width: 400px;
}
.card-title {
  font-size: 1.2rem;
}
.card-footer {
  font-size: .9rem;
}
.bootcamp {
  background: gold;
}
.mini-course {
  background: white;
}
btn {
  color: #fff;
  background: palevioletred;
}
.play {
  font-size: 1.7rem;
}
.list {
  list-style-type: none;
}
.gallery {
  min-height: 300px;
}
#ar-right{color:#fff}
`