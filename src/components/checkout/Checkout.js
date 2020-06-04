import React, { Component } from 'react';
import styled from 'styled-components';
import CartList from '../Cart/CartList';
import {ProductConsumer} from '../../Context';
import EmptyCart from '../Cart/EmptyCart';
import CartTotals from '../Cart/CartTotals';
import PaystackPay from '../Cart/PaystackPay';



export default class Checkout extends Component {
  
  
  constructor(props) {
    super(props)
    this.superheroElement = React.createRef();
    this.customerAddress = React.createRef();
    this.customerEmail = React.createRef();
    this.customerPhone = React.createRef();

    this.state ={
      fullname:'',
      emaill:'',
      phone:'',
      address:''
    }
  }
  getAddress = (e) => {
    e.preventDefault();
    this.setState ({address: this.customerAddress.current.value})
  };
  getEmail = (e) => {
    e.preventDefault();
    this.setState ({emaill: this.customerEmail.current.value})
  };
  getPhone = (e) => {
    e.preventDefault();
    this.setState ({phone: this.customerPhone.current.value})
    
  };
  // handleHero = () => {
  //   this.superheroElement.current.handleEmail();
  //   // this.superheroElement.current.handlePhone();
  // };
  render() {
    
    return (
      
      <ProductConsumer>
          {value =>{
            
            const {cart,cartTotal,clearCart} = value;
            const cartItems = cart.map(cartItem => cartItem.count + " " + cartItem.title);
            const maill = this.state.emaill;
            const phone = this.state.phone;
            const customerAddress = this.state.address;
            if(cart.length>0){
              
              return(
                
     <React.Fragment>
       <Spaces>
         <section className="cert-header">
                  <div className="container ">
                    <div className="container row gap-y">
                      <div className="col-md-10">
                        <h1 className="text-contrast regular">Your Cart</h1>
                        <p className="mb-0 text-light">Please fill your payment and shipping details</p>
                      </div>
                      <div className="col-md-2">
                        <h2 className="h1 text-contrast">$654.</h2>
                        <p className="mb-0 text-light">8 items</p>
                    </div>
                    </div>
                  </div>
                  <div className="bg-light shadow-box">
                <div className="container bring-to-front py-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb small">
                            <li className="breadcrumb-item"><a href="../">Home</a></li>
                            <li className="breadcrumb-item"><a href="home.html">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                </div>
            </div>
                  
              </section>
      <div className="container">
      
       
        <div className="col-12">
          <h4 className="col-10 mx-auto text-title  text-center text-capitalize">
            Checkout
          </h4>
          <form onSubmit={this.getEmail} onBlur={this.handleHero}  >
          <div className="row">
              <div className="col-12 col-md-4">
                <div className="row steps-text">
                  <div className="badge pt-2">1</div>
                  <div className="align-self-center">Order Summary</div>
                </div>
              <div className="row mr-2">
                <CartList value={value}/>
                <CartTotals value={value} history={this.props.history} />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="row">
              <div className="col-md-6">
                <div className="row steps-text mb-2">
                  <div className="badge pt-2" >2</div>
                  <div className="align-self-center">Delivery Information</div>
                </div>
                <div className="row">
                  <div className="paddin" style={{width:'100%'}}  >
                    <input onBlur={this.getFullname} ref={this.customerName} type="text" name="" placeholder="Receiver's Name"/>                
                      <input onBlur={this.getEmail} ref={this.customerEmail} className = "email" type="text" placeholder="Please enter e-mail"/>
                    <input onBlur={this.getPhone} ref = {this.customerPhone} type="text" name="" placeholder="your phone number"/>
                    <input onBlur={this.getAddress} ref={this.customerAddress} className="addressfield" type="text" placeholder="Your full address." name=""/>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row steps-text">
                  <div className="badge pt-2">3</div>
                  <div className="">Pay via Paystack</div>
                </div>
                <div className="row"><div className="col-12 text-center">
                  <PaystackPay 
                  key={cartItems}
                  customerphone = {phone}
                  customermail = {maill}
                  customeraddress = {customerAddress}
                  ref = {this.superheroElement}
                  clearCart={clearCart}
                  history={this.props.history} 
                  total={cartTotal} 
                  cartItems = {cartItems}/>
                  <p>All transactions are secure and encrypted.</p>
                  <div id="paystack-footer" className="paystack-footer text-center py-2 animated fadeIn">
                    <a target="_blank" rel="noopener noreferrer" href="https://paystack.com/what-is-paystack">
                    <img alt="Paystack secured badge" src="https://paystack.com/assets/payment/img/paystack-badge-cards.png"/>
                    </a>
                  </div>
                  <div className="payment-options">
                    
                    {/* <div className="p-type "><input type="radio" name="paymentmethod" value="wu"/>Western Union
                      <p className="wu">(For Customers Outside Nigeria Only. Please Contact Customer Care for Payment Procedure)</p>
                    </div> */}
                  </div></div>
                </div>
              </div>
              </div>
            </div>
          </div>
          </form>
        </div>
       
        
      </div> </Spaces>
     </React.Fragment>
     );
    } else {
      return <EmptyCart />;
    }
  }}
</ProductConsumer>
    )
  }
}
const Spaces = styled.div `
.cert-header {
    background-image: linear-gradient(45deg, #fb31bd, #fc9e2196);
}
.steps-text {
  font-size: 1.7rem;
}
.flex-container.main {
	display: flex;
	flex-direction: column;
	
}

.addressfield {
  min-height: 100px
}
.badge {
	background-color: palevioletred;
  margin-right: .9rem;
  min-width: 3rem;
}
.paddin input {
  padding: 5px;
  margin-top: 1px;
  margin-bottom: 1px; 
	width: 100%;
	// max-width: 80%;
	border: 0.5px lightgrey solid;
	border-radius: 3px;
}
.paddin h5 {
	margin-bottom: 2px; 
	margin-top: 10px;
}
.paystack-footer img {
  width: 200px;
}
.p-type input {
  padding: 1px;
}
`