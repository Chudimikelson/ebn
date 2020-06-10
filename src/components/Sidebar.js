import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import styled from 'styled-components';
import brand from '../ebn-logo.jpg';

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
            <div  className="row align-items-center justify-content-around mb-0 pb-0">
            <img className="img-responsive modal-logo" alt="Etoile Beauty Nig" src={brand} />
            <span className="lead text-brand bold">Good Skin Fairy</span>
            </div>
          </ModalHeader>
          <ModalBody>
          <NavWrapper>
          <div className="container">
        <ul className="d-flex menu navbar-nav text-capitalize">
          <li className="nav-item no-decor-links">
          <Link to="/Academy" onClick={this.toggle}className="nav-link text-center"><i class="mr-3 fas fa-chalkboard-teacher"></i><span className="">Skincare Training</span></Link>
          </li>
          <li className="nav-item no-decor-links">
          <Link to="/shop" onClick={this.toggle} className="nav-link text-center"><i class="mr-3 fas fa-hand-holding-usd"></i><span className="">Shop Products</span></Link>
          </li>
          <li className="nav-item no-decor-links">
          <Link to="/Contact" onClick={this.toggle}className="nav-link text-center"><i class="mr-3 fas fa-envelope"></i><span className="">Contact us</span></Link>
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
    font-size: 1.2rem;
}
`