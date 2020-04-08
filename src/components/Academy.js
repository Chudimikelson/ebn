import React, { Component } from 'react';
import advanced from '../photos/advanced.png';
import styled from 'styled-components';
import { MDBCollapse } from 'mdbreact';
import Banner from './Banner';
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
        <section className="bg-light mt-n6">
          <div class="container bring-to-front pt-0">
            <div className="row gap-y">
              <div className="col-12">
                <div class="shadow-box bg-contrast p-3 rounded h-100">
                  <h3 className="bold ">Become a Professional Skincare Formulator</h3>
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
                      <div className="card shadow-hover">
                        <div className="card-body">
                          <div className="card-title" onClick={this.toggleCollapse("basicCollapse")}>Soap Making</div>
                          <img className="image-responsive course-img" src={advanced} alt="etoile academy"/>
                        </div>            
                        <div className="card-footer d-flex justify-content-between">
                          <div className="">COURSE</div>
                        </div>
                      </div>
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
                  <div className="bbn text-right mr-3">see more <i className="ml-2 fas fa-arrow-right"/></div>
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
              <div className="col-12 col-md-7">
                <div className="col-12 mx-auto">
                <h4 className="py-3">Skills your will learn at Etoile Beauty Academy</h4>
                <ul className="list">
                  <li><i className="fas fa-arrow-right mr-3"></i>Amazing</li>
                  <li><i className="fas fa-arrow-right mr-3"></i></li>
                  <li><i className="fas fa-arrow-right mr-3"></i></li>
                  <li><i className="fas fa-arrow-right mr-3"></i></li>
                  <li><i className="fas fa-arrow-right mr-3"></i></li>
                  <li> ... plus many more! </li>
                </ul>
              </div>
              <div className="col-12 mx-auto">
                <h4>Frequently Asked Questions About Skincare Formulation</h4>
              </div>
              </div>
              <div className="col-12 col-md-5">
              <div className="col-12 col-md-10 mx-auto bg-dark gallery">
                <h5 className="text-contrast">Photo Gallery / Reviews</h5>
              </div>
              </div>
              
            </div>
          </div>
        </section>
        
      </Acad>
      </>
    )
  }
}

const Acad = styled.div `
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
.list {
  list-style-type: none;
}
.gallery {
  min-height: 500px;
}
`