import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  table: {
    minWidth: 650,
  }
})

function MonthlyResultsComponent(props) {
  const { portfolio, classes } = props

  const calculatePercentageChange = (value, index, array) => {
    if (index == 0) {
      return 0
    }

    let prevValue = array[index - 1]
    return ((value / prevValue - 1) * 100).toFixed(2)
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="monthly-results-table">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Portfolio Value</TableCell>
            <TableCell>Percentage Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {portfolio.map((value, index, array) => (
            <TableRow key={index}>
              <TableCell>Month {index}</TableCell>
              <TableCell>${value}</TableCell>
              <TableCell>{calculatePercentageChange(value, index, array)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default withStyles(styles)(MonthlyResultsComponent)