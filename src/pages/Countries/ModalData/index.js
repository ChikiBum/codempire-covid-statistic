import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell  from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Confirmed from '../../../images/Confirmed_icon.png'
import TotalDeath from '../../../images/Deaths_icon.png'
import Recovered from '../../../images/Recovered_icon.png'
import { Box } from '@mui/system';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import {  Container } from "@mui/material";


import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: 'none',
                    fontSize: '1.5rem',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    width: '171px',
                    height : '49px',
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    marginBottom: '2.5rem',
                },
            },
        },
        
    },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    headContainer: {
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '700'
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '30px',
    },
  })
);

export const ModalData = (props) => {
   const classes = useStyles();

   return (
    <>
    <ThemeProvider theme={theme}>
        <Container>
            <Grid  >
                <Grid item xs={12} className={classes.headContainer} >
                    {props.modalData.Country}
                </Grid>
            </Grid>
        </Container>
        <Table aria-label="country table">
            <TableBody >
                <TableRow key={props.modalData.ID} >
                    <TableCell align="left">
                        <img src={Confirmed} alt="Confirmed"  />
                    </TableCell>
                    <TableCell align="left" >
                        Total Confirmed
                    </TableCell>
                    <TableCell align="right">
                        {props.modalData.TotalConfirmed}
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell align="left" >
                        <img src={TotalDeath} alt="Total Death"  />
                    </TableCell>
                    <TableCell align="left">
                        Total Deaths
                    </TableCell>
                    <TableCell align="right">
                        {props.modalData.TotalDeaths}
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell align="left" >
                        <img src={Recovered} alt="Recovered"  />
                    </TableCell>
                    <TableCell align="left">
                        Total Recovered
                    </TableCell>
                    <TableCell align="right">
                        {props.modalData.TotalRecovered}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Box className={classes.box}>
            <Button 
                className={classes.closeButton}
                variant='contained'
                onClick={props.handleClose}
            >OK</Button>
        </Box>
    </ThemeProvider>
    </>
  )
}