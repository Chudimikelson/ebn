import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid #fff',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, 0)',
    marginBottom: 1,
    minHeight: 40,
    '&$expanded': {
      minHeight: 40,
    },
  },
  content: {
    '&$expanded': {
      margin: '8px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiExpansionPanelDetails)

export default function CustomizedExpansionPanels(props) {
  const [expanded, setExpanded] = React.useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Stile>
      <ExpansionPanel
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        style={{ backgroundColor: '#fff' }}
      >
        <ExpansionPanelSummary className='m-menu-accordion'>
          <div className='nav-link text-center mx-auto'>
            <i class='fas fa-spa'></i>
            <div className='fink '>Shop by Category</div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className='bg-contrast'>
          <div className='container'>
            <ul className='d-flex menu navbar-nav text-capitalize text-center'>
              <li className='nav-item no-decor-links'>
                <Link
                  to='/face-care'
                  onClick={props.toggler}
                  className='nav-link'
                >
                  <span className=''>Face Care</span>
                </Link>
              </li>
              <li className='nav-item no-decor-links'>
                <Link
                  to='/moisturizers'
                  onClick={props.toggler}
                  className='nav-link'
                >
                  <span className=''>Moisturizers</span>
                </Link>
              </li>
              <li className='nav-item no-decor-links'>
                <Link
                  to='/soaps-&-scrub'
                  onClick={props.toggler}
                  className='nav-link'
                >
                  <span className=''>Soaps & Scrub</span>
                </Link>
              </li>
            </ul>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        rounded
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          className='m-menu-accordion'
          aria-controls='panel2d-content'
          id='panel2d-header'
        >
          <div className='nav-link text-center mx-auto'>
            <i class='fas fa-allergies'></i>
            <div className='fink '>Shop by Skin Concern</div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className='bg-contrast'>
          <div className='container'>
            <ul className='d-flex menu navbar-nav text-capitalize text-center'>
              <li className='nav-item no-decor-links'>
                <Link to='/Acne' onClick={props.toggler} className='nav-link'>
                  <span className=''>Acne</span>
                </Link>
              </li>
              <li className='nav-item no-decor-links'>
                <Link
                  to='/skin-glow'
                  onClick={props.toggler}
                  className='nav-link'
                >
                  <span className=''>Skin Glow</span>
                </Link>
              </li>
              <li className='nav-item no-decor-links'>
                <Link
                  to='/lightening-&-brightening'
                  onClick={props.toggler}
                  className='nav-link'
                >
                  <span className=''>Lightening & Brightening</span>
                </Link>
              </li>
              <li className='nav-item no-decor-links'>
                <Link
                  to='/skin-repair'
                  onClick={props.toggler}
                  className='nav-link'
                >
                  <span className=''>Skin Repair</span>
                </Link>
              </li>
            </ul>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Stile>
  )
}
const Stile = styled.div`
  .m-menu-accordion {
    background: #fff;
  }
  .fink {
    color: #f4057c;
  }
`
