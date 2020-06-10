import React, { Component } from 'react'

export default class DeliveryFee extends Component {

	constructor(props){
		super(props);
		this.state = {
			residence: "Abuja",
			method: 'regular',
			fee: 0
		};
	};

		
	getResidence = (e) => {
		let val = e.target.value;
		this.setState(()=>{
			return {residence: val};
		}, () => {
			this.getDeliveryMethod();
		});
		
	};

	getMethod = (e) => {
		let val = e.target.value;
		this.setState(()=>{
			return {method: val};
		}, ()=> {
			this.getDeliveryMethod();
		});
		
	};

	deliverFee=(location)=> {
		var result = "";
	
		var lookup = {
			"Abuja": 1000,
			"abia": 2500,
			"adamawa": 2500,
			"uyo": 2500,
			"onitsha": 2500,
			"bayelsa": 2500,
			"makurdi": 2500,
			"calabar": 2500,
			"asaba": 2500,
			"warri": 2500,
			"abakiliki": 2500,
			"benin": 2200,
			"enugu": 2200,
			"owerri": 2200,
			"kaduna": 1800,
			"kano": 2500,
			"lokoja": 1800,
			"ilorin": 2500,
			"Lagos": 2500,
			"nassarawa": 1800,
			"minna": 2000,
			"abeokuta": 2500,
			"oshogbo": 2500,
			"ile-ife": 2500,
			"ibadan": 2500,
			"akure": 2500,
			"jos": 2500,
			"portharcourt": 2500,
			"ekiti": 2500
		};
		result = lookup[location];
		return result;
	}

	getDeliveryMethod=()=>{
		let residence = this.state.residence;
		let deliveryfee = this.deliverFee(residence);
		this.setState(()=>{
			return {fee: deliveryfee};
		});
	};
	

	render() {
		
		return (
			<>
				<div className="text-right text-capitalize col-12">shipping:
					<strong><span id="deliveryFee">{this.state.fee}</span></strong>
				</div>
					<div className="d-flex">

						  <select onChange={this.getMethod} >
								<option value="regular">Regular</option>
								<option value="doorstep">Doorstep</option>
							</select>
	
	 
	
						<select name="location" 
						value={this.state.residence} onChange={this.getResidence}>
						<option value="">Select State</option>
						<option value="Lagos">Lagos</option>
						<option value="Abuja">Abuja</option>
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
			</>
		);
	}
}