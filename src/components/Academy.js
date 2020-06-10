import React, { Component } from 'react';
import nsf from '../photos/nsf.jpg';
import making from '../photos/making.jpg';
import guide from '../photos/guide.jpg';
import styled from 'styled-components';
import banner from '../photos/acadbanner.jpg';
import cover from '../photos/minicourse.jpg';
import minicourse from '../photos/minicourse2.jpg';
import FaQ from './FaQ';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

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
       <Bannerstyle>
    <section className="paddit">      
            <div className="container-fluid d-flex justify-content-between cert-header mb-4">
                <div className="col-7 col-md-8 ml-auto my-auto">
                  <div className="text-center  text-nowrap">
                    <p className="text-gold text-light mb-0 pb-1 tenali">The Good Skin Fairy</p>
                    <h2 className="text-contrast caveat bold display-lg-2">Etoile Beauty</h2>
                    <h3 className=" text-light text-gold tenali font-weight-bold">Skincare Training Academy</h3>
                  </div>
                </div>
                <div className="col-5 col-md-4">
                  
                <img id="cover2" className="img-responsive p-2" alt="Etoile Beauty Nig" src={banner} /></div>
            </div>
    </section>
    </Bannerstyle>
      <Acad>
        <section className=" mt-n6">
          <div class="container bring-to-front pt-0">
            <div className="row gap-y">
              <div className="col-12">
                <div class="cert-header p-3 rounded h-100">
                  <h5 className="bold tenali font-md bbn text-contrast">Professional Skincare Formulation Training</h5>
                  <h5 className="bold tenali d-md-none text-contrast">Professional Skincare Formulation Training</h5>
                  <div className="row mx-auto" id="courses">
                    <div className="col-12 col-md-4">
                      <Link className="no-decor-links" to="/Natural-Skincare-Formulation">
                      <div className="card shadow-hover text-brand">
                        <div className="card-body">
                          <div className="card-title">Certificate in Natural Skincare Formulation</div>
                          <img className="image-responsive course-img" src={nsf} alt="etoile academy"/>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                          <div className="">COURSE</div>
                          <div className="">(8 Modules)</div>
                        </div>
                      </div></Link>
                    </div>
                    <div className="col-12 col-md-4">
                      <Link className="no-decor-links" to="/Mini-Course">
                      <div className="card shadow-hover text-brand">
                        <div className="card-body">
                          <div className="card-title">Making Natural Skincare Products</div>
                          <img className="image-responsive course-img" src={making} alt="etoile academy"/>
                        </div>            
                        <div className="card-footer d-flex justify-content-between">
                          <div className="">COURSE</div>
                          <div className="">(5 Modules)</div>
                        </div>
                      </div></Link>
                    </div>
          <div className="col-12 col-md-4">
          <Link className="no-decor-links" to="/NSF-Ebook">
            <div className="card shadow-hover text-brand">
            <div className="card-body">
              <div className="card-title">Guide to Natural Skincare Formulation </div>
              <img className="image-responsive course-img" src={guide} alt="etoile academy"/>
            </div>
            
            <div className="card-footer d-flex justify-content-between">
              <div>EBOOK</div>
            </div>
            
            </div>
            </Link>
            </div>
                  </div>
                  
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
                        <div className="mb-3 text-brand lead bold">Etoile Skincare BootCamp</div>
                        <h5 className="text-body">Empower yourself with our one month hands-on training on professional skincare formulation</h5>
                        <p className="text-body">Apply Now to build a career and start a business of your own. Registration closes by July 2, 2020</p>
                      </div>
                      <div className="col-12 col-md-6 my-auto">
                        <img className="image-responsive course-img" src={cover} alt="etoile academy"/>
                        <div><Link to="/Natural-Skincare-Formulation"><button className="btn btn-success my-3">Register</button></Link></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 d-md-flex mini-course">
                      <div className="col-12 col-md-6 py-3">
                        <div className="mb-3 text-brand tenali font-md">Audit our Courses</div>
                        <h4 className="text-body">Take our mini course on making skincare products</h4>
                        <p className="text-body">Apply Now to learn how to make 6 simple yet effective skincare products for you and your family</p>
                      </div>
                      <div className="col-12 col-md-6 my-auto">
                        <img src={minicourse} alt="etoile academy" className="image-responsive course-img"/>
                        <div><Link to="/Mini-Course"><button className="btn btn-success my-3">Register</button></Link></div>
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
                <h4 className="py-4">Skills your will learn at Etoile Beauty Academy</h4>
                <ul className="list">
                  <li><i className="fas fa-arrow-right mr-3"></i>How to formulate skin care products from scratch</li>
                  <li><i className="fas fa-arrow-right mr-3"></i>Identify non-toxic and eco-friendly natural ingredients</li>
                  <li><i className="fas fa-arrow-right mr-3"></i>Launch a successful skincare brand</li>
                </ul>
                <div  className="text-center rounded cert-header">
                  <div class="py-2">
                    <p class="handwritten highlight font-md text-contrast">... plus many more!</p>
                  </div>
                  <Iframe url="https://www.youtube.com/embed/-4znPsQWMSs?rel=0"
                    width="100%"
                    height="315px" 
                    className="rounded"
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                </div>
                
        
              </div><div className="col-12 col-md-6 mx-auto"><FaQ/></div>
              
               
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
  height: 16rem;
  border-radius: 2%;
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

`
const Bannerstyle = styled.div `
.cert-header {
  background-image: linear-gradient(45deg,#fc9e2196, #fb31bd ) ;
}
#cover1, #cover2 {
  border-radius: 50%;
  border: solid 5px gold;
  max-width: 19rem;
}
.finess {
  position: relative;
  bottom: 3rem;
  left: 0;
}
.fines {
  position: relative;
  top: 6rem;
  color: #fff;
}
.btn {
  background: palevioletred;
}
`