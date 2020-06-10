import React from 'react';
import styled from 'styled-components';
import catPic1 from '../photos/fresh glow set.jpg';
import catPic2 from '../photos/newbanner.jpg';
import {Link} from 'react-router-dom';
export default function ShopByCategories() {
  return (
    <Sbc>
      <div className="shadow-box container row mx-auto">
        <div class="col-12 p-2"><span class="text-brand bold">Discover</span>
          <h3>Etoile Beauty Trends</h3>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6">
          <img className="shadow-hover img-responsive" style={{height:400}} src={catPic2}  alt="Etoile Beauty Nig skin lightening black soap brightening body lotion"/><Link to="/shop">
          <div className="finess mx-auto">
            
              <button className="py-1 text-capitalize text-light">Shop All</button>
            
          </div> </Link> 
        </div>
        <div className=" col-md-6 col-sm-6 col-lg-6"><img className="shadow-hover img-responsive" alt="Natural Lightening and skin brightening lotions and creams" style={{height:400}}  src={catPic1} /><Link to="/collections">
          <div className="finess mx-auto"><button className="py-1 text-capitalize text-light">Collections</button>
          </div></Link>
        </div>
      </div>
    </Sbc>
  )
}

const Sbc = styled.div `

.flex-container {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  justify-content: center;
}

.finess {
  font-size: 1.5rem;
  background-image: linear-gradient(45deg,#fc9e2196, #fb31bd );
  position: relative;
  bottom: 10rem;
  text-align: center;
  border-radius: 3%;
}

.btn:hover {
  background: #28a745;
}
.card {
  border: none;
}
img {
  width:100%;
  border-radius: .5rem;
}

`