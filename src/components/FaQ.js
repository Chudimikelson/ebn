import React from 'react';
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

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <>
    <section className="mt-n5">
                <div className="container">
                    <div className="row gap-y">
                        <div className="col-md-10 mx-auto">
                            <h3 className="text-center pb-4">Frequently Asked Questions</h3>
                            
                        
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-contrast lead tenali bold">Will I get a certificate at the end of this course?</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p className="tenali lead">
            Yes you will receive a certificate of profiency when you have successfully completed all modules and practicals.
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-contrast bold">Can I start my own skin care business with this course?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yes, you can start your own natural skin care business with this course. It is detailed and comprehensive.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="text-contrast bold">Do I need any pre-requisite knowledge/skill in skincare?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            No, you do not need any pre-requisite knowledge/skill for this training. This course is designed to cater for absolute beginners as well as seasoned formulator who wish to expand on their knowledge/skills in skincare products formulation.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className="text-contrast bold">I am not based in Nigeria, can enroll for this course?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yes, you can. This course is designed to be taken online from anywhere in the world. The materials and video tutorials are downloadable.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className="text-contrast bold">Is this a pro-mixing course?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            No, this is not a pro-mixing course. We strickly teach you how to formulate natural skincare products from scratch using safe natural ingredients.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel5a-content"
          id="panel6a-header"
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
          id="panel7a-header"
        >
          <Typography className="text-contrast bold">Are fees refundable?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            No, fees are not refundable after payment.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </div>
                    </div>
                  </div>
              </section>
    </>
  );
}
