import React from 'react'

import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MonthlyResultsComponent from './MonthlyResultsComponent/MonthlyResultsComponent'

function ResultsTabsComponent(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { tradeParameters, classes } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Box mb={5}>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Inputs"
        >
          <Tab label="Monthly Returns" id="monthly-returns" aria-controls="monthly-returns-panel" />
          <Tab label="Table of Results" id="table-results" aria-controls="table-results-panel" />
          <Tab label="Graph" id="graph" aria-controls="graph-panel" />
        </Tabs>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <MonthlyResultsComponent 
            value={value} 
            index={0} 
            dir={theme.direction}
            portfolio={tradeParameters.portfolioResults.monthlyPortfolio} 
          />
        </SwipeableViews>
    </Box>
  )
}

export default ResultsTabsComponent