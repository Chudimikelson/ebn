import React from 'react';

export default function CartTotals({value}) {
  const {cartSubTotal,cartTotal,location,shipping,method} = value;
  
  return (
        <div className="row">
          <div className="col-12 my-2 text-capitalize">
            <span className="text-capitalize">sub total :</span>
            <strong><span className="mx-1">&#8358;</span> {cartSubTotal} </strong>
          </div>
          <div className="d-flex">
          <div className="col-6 mb-2 text-capitalize">
            <span className="text-capitalize mr-2">Shipping: </span>
            <strong><span className="mx-1">&#8358;</span>{shipping} </strong>
          </div>
          <div className="col-6 mb-2 d-flex">
          <select value={method} onChange={(e)=>value.getMethod(e)}> 
            <option value="regular">Regular</option>
            <option value="doorstep">Doorstep</option>
          </select>
          <select value={location} onChange={(e)=> value.getLocation(e)}>
            <option value="Abuja">Abuja</option>
						<option value="Lagos">Lagos</option>
						<option value="Portharcourt">Portharcourt</option>
						<option value="Aba">Aba</option>
						<option value="Akure">Akure</option>
						<option value="Asaba">Asaba</option>
						<option value="Auchi">Auchi</option>
						<option value="Benin">Benin</option>
						<option value="Calabar">Calabar</option>
						<option value="Enugu">Enugu</option>
						<option value="Ibadan">Ibadan</option>
						<option value="Ikot">Ikot Ekpene</option>
						<option value="Jos">Jos</option>
						<option value="Kaduna">Kaduna</option>
						<option value="Kano">Kano</option>
						<option value="Mararaba">Mararaba</option>
						<option value="Makurdi">Makurdi</option>
						<option value="MInna">Minna</option>
						<option value="Onitcha">Onitsha</option>
						<option value="Owerri">Owerri</option>
						<option value="Uyo">Uyo</option>
						<option value="Warri">Warri</option>
						</select>
             </div>
            </div>
          <div className="col-12 text-capitalize">
              <span className="text-capitalize">Total :</span>
              <strong><span className="mr-1">&#8358;</span> {cartTotal} </strong>
          </div>

        </div>
  );
}

