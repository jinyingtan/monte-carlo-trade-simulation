import React, { useState, useEffect } from 'react'

import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: '1rem 0 2rem 0'
  }, 
  gridContainer: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'center'
    }
  }
})

function ResultsOverviewComponent(props) {
  const { tradeParameters, classes } = props;
  const [percentageChange, setPercentageChange] = useState(0);

  useEffect(() => {
    let finalValue = tradeParameters.portfolioResults.monthlyPortfolio["12"]
    let initialValue = tradeParameters.portfolioResults.monthlyPortfolio["0"]
    let percentageDiff = (((finalValue / initialValue) - 1) * 100).toFixed(2)
    setPercentageChange(percentageDiff)
  });

  return (
    <Box className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid item sm={12} md={4}>
          <Typography>
            Initial Portfolio Value: ${tradeParameters.portfolioResults.monthlyPortfolio["0"]}
          </Typography>
        </Grid>

        <Grid item sm={12} md={4}>
          <Typography>
            Final Portfolio Value: ${tradeParameters.portfolioResults.monthlyPortfolio["12"]}
          </Typography>
        </Grid>

        <Grid item sm={12} md={4}>
        <Typography>
            Percentage Change: {percentageChange}%
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default withStyles(styles)(ResultsOverviewComponent)