import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const ExpansionPanel = withStyles({
  root: {
    border: 'none',
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
})(MuiExpansionPanel);

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
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Learn Skincare</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="pt-2 ">
              <p className="text-left"><i className="fas fa-microscope text-contrast px-3"></i><Link to="/Natural-Skincare-Formulation" className="no-decor-links text-contrast">Natural Skincare Formulation</Link></p>
              <p className="text-left"><i className="fas text-contrast px-3">&#xf96b;</i><Link to="/Mini-course" className="no-decor-links text-contrast">Making Skincare Products</Link></p>
              <p className="text-left"><i className="fas fa-book-reader text-contrast px-3"></i><Link to="/NSF-Ebook" className="no-decor-links text-contrast">Natural Skincare Guide</Link></p>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            Our Products Shop
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="pt-2">
              <p className="text-left"><i className="fas fa-store-alt text-contrast px-3"></i><Link to="/Shop" className="no-decor-links text-contrast">All our Products</Link></p>
              <p className="text-left"><i className="fas fa-flask text-contrast px-3"></i><Link to="https://wa.me/2348142195884" className="no-decor-links text-contrast">Create Your Own</Link>
              </p>
              <p className="text-left"><i className="fas fa-id-card-alt text-contrast px-3"></i><Link to="/collections" className="no-decor-links text-contrast">Explore our Collections</Link></p>
              <p className="text-left"><i className="fas fa-magic text-contrast px-3"></i><Link to="https://wa.me/2348142195884" className="no-decor-links text-contrast">Customize your Collection</Link>
              </p>
              <p className="text-left"><i className="fas fa-truck-loading text-contrast px-3"></i><Link to="https://wa.me/2348142195884" className="no-decor-links text-contrast">Bulk Order</Link>
              </p>
              <p className="text-left"><i className="fas fa-people-carry text-contrast px-3"></i><Link to="https://wa.me/2348142195884" className="no-decor-links text-contrast">Be a Stockist</Link>
              </p>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel3d-content" id="panel3d-header">
          <Typography>The Brand</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="pt-2">
              <p className="text-left"><i className="fas fa-id-card-alt text-contrast px-3"></i><Link to="/Contact" className="no-decor-links text-contrast">About Us</Link></p>
              <p className="text-left"><i className="fas fa-flask text-contrast px-3"></i><Link to="/Contact" className="no-decor-links text-contrast">Contact Us</Link>
              </p>
              <p className="text-left"><i className="fas fa-id-card-alt text-contrast px-3"></i><Link to="/Contact" className="no-decor-links text-contrast">FAQs</Link></p>
              <p className="text-left"><i className="fas fa-credit-card text-contrast px-3"></i><Link to="https://wa.me/2348142195884" className="no-decor-links text-contrast">About Paystack Payment Option</Link>
              </p>
              <p className="text-left"><i className="fas fa-truck-loading text-contrast px-3"></i><Link to="https://wa.me/2348142195884" className="no-decor-links text-contrast">Shipping Information</Link>
              </p>
            </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
