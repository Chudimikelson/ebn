import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import styled from 'styled-components';
import brand from '../logo.jpg';

export default class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal:false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <button id="menuBar" onClick={this.toggle} >
        <span id='menubaricon' ><i className="fas fa-bars"></i></span>
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
          <div className="col-6 mx-auto"><img className="img-responsive" alt="Etoile Beauty Nig" src={brand} /></div>
          </ModalHeader>
          <ModalBody>
          <NavWrapper>
          <div className="flex-container">
        <ul className="d-flex menu pr-2 navbar-nav mx-auto text-capitalize">
       
          <li className="nav-item">
          <Link to="/shop" onClick={this.toggle} className="nav-link"><i class="fas fa-hand-holding-usd"></i><span className="ml-3">Shop Products</span></Link>
          </li>
          <li className="nav-item">
          <Link to="/Academy" onClick={this.toggle}className="nav-link"><i class="fas fa-chalkboard-teacher"></i><span className="ml-3">Skincare Training</span></Link>
          </li>
          <li className="nav-item">
          <Link to="/Diy" onClick={this.toggle}className="nav-link"><i class="fas fa-envelope"></i><span className="ml-3">Contact us</span></Link>
          </li>
        </ul>
        </div>
        </NavWrapper>
          </ModalBody>
        </Modal>
        
      </div>
    )
  }
}
 
const NavWrapper = styled.nav`
background: #fff;
.nav-link {
    color: palevioletred!important;
    font-size: 1rem;
    text-transform: capitalize;
}
.mylogo  {
  height: 2rem;
  width: 9rem;
}

`