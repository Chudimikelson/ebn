import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import styled from 'styled-components'
import brand from '../ebn-logo.jpg'
import SidebarMenu from './SidebarMenu'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }))
  }
  render() {
    return (
      <div>
        <button id='menuBar' onClick={this.toggle}>
          <span id='menubaricon'>
            <i className='fas fa-bars'></i>
          </span>
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader
            toggle={this.toggle}
            style={{ borderBottom: '1px solid #f4057c ' }}
          >
            <div className='d-flex align-items-center'>
              <img
                className='img-responsive modal-logo mr-3'
                alt='Etoile Beauty Nig'
                src={brand}
              />
              <span className='lead text-brand bold'>Good Skin Fairy</span>
            </div>
          </ModalHeader>
          <ModalBody className='p-0'>
            <SidebarMenu toggler={this.toggle} />
            <NavWrapper>
              <div className='container mt-4'>
                <ul className='d-flex menu navbar-nav text-capitalize'>
                  <li className='nav-item no-decor-links'>
                    <Link
                      to='/Academy'
                      onClick={this.toggle}
                      className='nav-link text-center'
                    >
                      <i class='mr-3 fas fa-chalkboard-teacher'></i>
                      <div className=''>Skincare Training</div>
                    </Link>
                  </li>
                  <li className='nav-item no-decor-links'>
                    <Link
                      to='/Contact'
                      onClick={this.toggle}
                      className='nav-link text-center'
                    >
                      <i class='mr-3 fas fa-info-circle'></i>
                      <div className=''>FAQs</div>
                    </Link>
                  </li>
                  <li className='nav-item no-decor-links'>
                    <Link
                      to='/Contact'
                      onClick={this.toggle}
                      className='nav-link text-center'
                    >
                      <i class='mr-3 fas fa-headset'></i>
                      <div className=''>Contact Us</div>
                    </Link>
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
