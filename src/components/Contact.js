import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function Contact() {
    const classes = useStyles();
  return (
    <Sbc>
        <section className="container-fluid cert-header paddit">
            <div className="container pt-md-7 pb-3 px-md-5">
            <h1 className="text-contrast bold display-lg-4 mb-0">Etoile Beauty Nigeria</h1>
            <h3 className="mt-0 pt-0 font-l text-light tenali">[ pronounced : ey-twal. (French) ]</h3>
            <h4 className="text-light font-weight-light mb-0 pb-1 pt-3">About our Brand</h4>
            <div className="lead text-light text-justify tenali font-md">
            <p className="mb-0"> Etoile Beauty Nigeria is a 100% natural skincare brand, born out of passion for safe and effective skincare.</p> 
            <p className="mb-0">We are committed to dedicating our skills and expertise in providing safe, natural and plant based skincare for one purpose only "RADIANT AND HEALTHY SKIN".</p> 
            <p className="mb-0">All our products are made in small batches and we use mostly fairtrade ingredients from here in Africa and sometimes from Asia and Europe where needed.</p> 
            <p className="mt-2">The training courses offered by our academy help you develop the knowledge and skills you need to create your own skincare for personal use or brand development.</p>
            </div>
            </div>
        </section>
    <div className="paddit">
    <section class="section">
    <div class="container bring-to-front pt-0">
        <div class="row gap-y">
            <div class="col-md-4">
                    <h3 className="light text-brand">Contact Us</h3><hr class="mb-4"/>
                <div class="media"><i class="fas fa-map-marker text-brand mr-3"></i>
                    <div class="media-body text-brand">District Center Estate Kubwa,<span class="d-block">Abuja, Nigeria.</span></div>
                </div>
                <div class="media my-4"><i class="fas fa-phone-square text-brand mr-3"></i>
                    <div class="media-body no-decor-links"><span class="d-block"><a href="tel:+2348142195884" target="_blank" rel="noopener noreferrer">(234) 814-219-5884</a></span> <span class="d-block"><a href="tel:+2348142195884" target="_blank" rel="noopener noreferrer">(234) 902-485-9316</a></span></div>
                </div>
                
                <div className="col-md-8">
                            <nav className="d-flex  justify-content-around">
                                <a className="btn btn-light" href="https://wa.me/+2348142195884" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i>
                                </a>
                                <a className="btn btn-light" href="https://facebook.com/etoileskincareng/posts" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i>
                                </a>
                                <a className="btn btn-light" href="https://instagram.com/etoile_skincare" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-sm btn-light" href="mailto:etoilebeautynig@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i>
                                </a>
                            </nav>
                        </div>
            </div>
            <div class="col-lg-8 b-md-l">
              <h3 class="light text-brand">FAQs</h3>
              <hr class="mb-4"/>
              <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-contrast bold">Are all your products 100% natural?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yes, all our products are 100% natural.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-contrast bold">Are all your products plant based?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Most of our products are plant based, however where needed, we may use honey or any honey identical material. We will inform you either on the label or our description.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="text-contrast bold">To where do you deliver?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            We deliver to major cities in all states in Nigeria. We also deliver internationally to other african countries, europe, usa and canada
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className="text-contrast bold">I am not based in Nigeria, how can i make payments for products?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            We accept online direct transfer payments via western union or world remit. Contact us on whatsapp to get our direct transfer details. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className="text-contrast bold">Do you teach skin care online or in person?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yes, we have courses for both beginners and intermediate level. Our course are offered online and in person. If you are interested in taking a one on one course with us, please contact us on WhatsApp.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className="text-contrast bold">Are payments made for products refundable?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yes, payments made for products are refundable, if you cancel your order within 5 hours of making payment. To cancel your order, please send us proof of payment and the account number payable to on WhatsApp or via email. Please note that we will deduct transfer and tax fees from your payment.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
            </div>
        </div>
    </div>
</section>
</div>
    </Sbc>
  )
}

const Sbc = styled.div `

.cert-header {
    background-image: linear-gradient(45deg, #fb31bd, #fc9e2196);
}

`