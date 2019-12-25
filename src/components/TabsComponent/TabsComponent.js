import React from 'react'

import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import VariableRiskContainerComponent from './VariableRiskContainerComponent';
import FixedRiskContainerCompnent from './FixedRiskContainerComponent';

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabsComponent() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleChangeIndex = index => {
        setValue(index);
      };
    
    return (
        <React.Fragment>
            <CssBaseline />

            <Container maxWidth="lg" disableGutters>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Variable Risk" {...a11yProps(0)} />
                    <Tab label="Fixed Risk" {...a11yProps(1)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <VariableRiskContainerComponent value={value} index={0} dir={theme.direction} />
                    <FixedRiskContainerCompnent value={value} index={1} dir={theme.direction} />
                </SwipeableViews>
            </Container>
        </React.Fragment>
    )
}


export default TabsComponent