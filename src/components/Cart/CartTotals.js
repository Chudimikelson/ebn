import React from 'react';

export default function CartTotals({value}) {
  const {location, method} = value;
  
  return (
    <>
                                    {/**  Shipping Options */}
                                    <div class="card">
                                        <div class="card-header"><a href="#" class="card-title btn bold" data-toggle="collapse" data-target="#clp-shipping"><i class="fas fa-angle-down angle"></i>Shipping Options</a></div>
                                        <div id="clp-shipping" class="collapse show" data-parent="#cart-options">
                                            <div class="card-body">
                                              <div className="form-group shadow-box p-3">
                                                <label className="control-label font-sm text-dark">
                                                  Delivery Location
                                                </label>
                                                <select className="form-control" value={location} onChange={(e)=> value.getLocation(e)}>
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
                                            <div className="form-group shadow-box p-3">
                                            <label class="control-label font-sm text-dark">Shipping Method</label>
                                            <select class="form-control"  value={method} onChange={(e)=>value.getMethod(e)}> 
            <option value="regular">Regular</option>
            <option value="doorstep">Doorstep</option>
          </select>
          <p class="small text-muted my-0">1 month - Tuesday, Dec 3rd 2019</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
  </>
  );
}

