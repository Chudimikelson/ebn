import React, { Component } from 'react';
import advanced from '../photos/advanced.png';
import nsf from '../photos/nsf.jpg';
import making from '../photos/making.jpg';
import guide from '../photos/guide.jpg';
import styled from 'styled-components';
import banner from '../photos/acadbanner.jpg';
import cover from '../photos/minicourse.jpg';
import minicourse from '../photos/minicourse2.jpg';
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
       <Bannerstyle>
    <section className="section">
      <div className="swiper-container shop-home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container-fluid pt-6 cert-header">
              <div className="row justify-content-between">
                <div className="col-6 col-md-4 px-0 order-2 d-flex">
                  
                <img id="cover2" className="img-responsive" alt="Etoile Beauty Nig" src={banner} /></div>
                <div className="col-6 col-md-8 ml-auto my-auto">
                  <div className="text-center text-left text-nowrap">
                    <h4 className="text-contrast text-gold font-weight-bold mb-0 pb-1">The Good Skin Fairy</h4>
                    <h4 className="text-contrast bold display-lg-4">Etoile Beauty</h4>
                    <p className="lead text-light pb-3 bbn bold">Skincare Training Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section>
    </Bannerstyle>
      <Acad>
        <section className=" mt-n6">
          <div class="container bring-to-front pt-0">
            <div className="row gap-y">
              <div className="col-12">
                <div class=" cert-header p-3 rounded h-100">
                  <h5 className="bold text-contrast">Become a Professional Skincare Formulator</h5>
                  <div className="row mx-auto" id="courses">
                    <div className="col-12 col-md-4">
                      <Link className="no-decor-links" to="/Natural-Skincare-Formulation">
                      <div className="card shadow-hover">
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
                      <Link className="no-decor-links" to="/Soap-Making-Course">
                      <div className="card shadow-hover">
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
          <div className="col-12 col-md-4"><div className="card shadow-hover">
            <div className="card-body">
              <div className="card-title">Guide to Natural Skincare Formulation </div>
              <img className="image-responsive course-img" src={guide} alt="etoile academy"/>
            </div>
            
            <div className="card-footer d-flex justify-content-between">
              <div>EBOOK</div>
            </div>
            
            </div></div>
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
                        <div className="mb-3">Etoile Skincare BootCamp</div>
                        <h5>Empower yourself with our one month hands-on training on professional skincare formulation</h5>
                        <p>Apply Now to build a career and start a business of your own. Registration closes by April 19th</p>
                      </div>
                      <div className="col-12 col-md-6 my-auto">
                        <img className="image-responsive course-img" src={cover} alt="etoile academy"/>
                        <div><button className="btn btn-success my-3">Register</button></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 d-md-flex mini-course">
                      <div className="col-12 col-md-6 py-3">
                        <div className="mb-3">Audit our Courses</div>
                        <h4>Take our mini course on making skincare products</h4>
                        <p>Apply Now to learn how to make 6 simple yet effective skincare products for you and your family</p>
                      </div>
                      <div className="col-12 col-md-6 my-auto">
                        <img src={minicourse} alt="etoile academy" className="image-responsive course-img"/>
                        <div><button className="btn btn-success my-3">Register</button></div>
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
                  <li> ... plus many more! </li>
                </ul>
                <div  class="shadow rounded text-center overlay overlay-dark alpha-8 text-contrast image-background cover" style={{"background-image": "url(https://picsum.photos/350/200/?random&gravity=south)"}}><div class="content py-2"><div class="section-heading mb-1">
                            <h4 class="text-contrast">What our graduates say</h4>
                        </div>
                        <p class="handwritten highlight font-md">Play the video</p>
                  <iframe className="mx-auto" width="auto"   src="https://www.youtube.com/embed/qJWABTamK6c?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    
                        <a href="https://www.youtube.com/embed/qJWABTamK6c" class="modal-popup mfp-iframe btn-circle btn-primary" data-effect="mfp-fade"><i className="play ml-1 fas fa-play"></i></a>
                    </iframe></div>
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
}
#cover2, #cover1 {
  height: 10rem;
  width: auto;
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