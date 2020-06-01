import React from 'react';
import styled from 'styled-components';
import catPic1 from '../photos/fresh glow set.jpg';
import catPic2 from '../photos/allproducts.jpg';
import {Link} from 'react-router-dom';
export default function ShopByCategories() {
  return (
    <Sbc>
      <div className="container pt-3 pb-0">
        <div class="p-2"><span class="text-brand bold">Discover</span>
          <h3>Etoile Beauty Trends</h3>
        </div>
      </div>
      <div className="container mx-auto flex-container row">
        <div className="col-md-6 col-sm-6 col-lg-6">
          <img className="img-fluid" style={{height:350}}  src={catPic2}  alt="Etoile Beauty Nig skin lightening black soap brightening body lotion"/><Link to="/shop">
          <div className="finess mx-auto">
            
              <button className="py-1 text-capitalize">Shop All</button>
            
          </div> </Link> 
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6"><img className="img-fluid" alt="Natural Lightening and skin brightening lotions and creams" style={{height:350}}  src={catPic1} /><Link to="/collections">
          <div className="finess mx-auto"><button className="py-1 text-capitalize">Collections</button>
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
  width:50%;
  font-size: 1.5rem;
  background: rgba(250,248,250, 0.5);
  position: relative;
  bottom: 10rem;
  text-align: center;
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