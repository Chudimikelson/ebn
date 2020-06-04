import React from "react";
import styled from 'styled-components';
import banner from '../photos/IMG-1.jpg';
import {Link} from 'react-router-dom';

const Banner = () => {
  return (
    <Bannerstyle>
    <section className="paddit">
            <div className="container-fluid d-flex justify-content-between" style={{"background-color": "rgb(0, 145, 175)"}}>
                <div className="col-5 col-md-5 order-2"><img className="img-responsive" alt="Etoile Beauty Nig" src={banner} /></div>
                <div className="col-7 col-md-7 ml-auto my-auto">
                  <div className="text-center text-nowrap">
                    <h4 className="text-light font-weight-light mb-0 pb-1">The Good Skin Fairy</h4>
                    <h1 className="text-contrast bold display-lg-2">Etoile Beauty </h1>
                    <p className="lead text-light pb-3 bbn">Simple, Natural and Plant Based Skincare</p>
                    <Link to="/shop"><button className="mybtn btn btn-primary mt-3 text-light bold">Shop Now</button></Link>
                  </div>
                </div>
            </div>
    </section>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `

img {
  min-height: 200px;
  width: auto;
  border-radius: 50%;
}
.btn {
  background-image: linear-gradient(45deg, #fc9e2196, #fb31bd);
  border: none;
}

`

export default Banner;