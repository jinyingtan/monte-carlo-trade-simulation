import React from 'react'

import SwipeableViews from 'react-swipeable-views';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ResultsOverviewComponent from './ResultsOverviewComponent'
import ResultsTabsComponent from './ResultsTabsComponent'

const styles = theme => ({
  resultsText: {
    width: '35%',
    display: 'inline-block',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '20%'
    }
  }, 
  outline: {
    display: 'inline-block',
    outline: '1px solid #FF6F46',
    width: '32.5%',
    position: 'relative',
    top: -8,
    [theme.breakpoints.up('sm')]: {
      width: '40%'
    }
  }
})

function ResultsComponent(props) {
  const { tradeParameters, classes } = props

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg" disableGutters>
        <Box>
          <span className={classes.outline}></span>
          <Typography variant="h5" className={classes.resultsText}>
            Results
          </Typography>
          <span className={classes.outline}></span>
        </Box>

        <ResultsOverviewComponent tradeParameters={tradeParameters} />
        <ResultsTabsComponent tradeParameters={tradeParameters} />
      </Container>
    </React.Fragment>
  )
}

export default withStyles(styles)(ResultsComponent)