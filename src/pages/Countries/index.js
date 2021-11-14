import Grid from '@mui/material/Grid';
import {  Container, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useCountries } from "./useCountries";
import { Box } from '@mui/system';
import logo from "../../images/logo.png";
import { CountriesTable } from './CountriesTable';
import BasicModal from './Modal';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4)
    },
    headContainer: {
      marginBottom: theme.spacing(4)
    },
    filterContainer: {
      marginBottom: theme.spacing(3)
    },
    title: {
        paddingTop: '98px',
        textAlign: "center",
        fontSize: "72px"
      },
    logo: {
        maxWidth: '200px',
        maxHeight: '200px',
        marginTop: '40px',
        marginLeft: '60px'
      }
  })
);

export const Countries = (props) => { 
    const classes = useStyles();
    const countries = useCountries();


    return <>
    <Container className={classes.root}>
        <Grid container >
          <Grid item xs={12} className={classes.headContainer} >
            <Box sx={{ display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between' }}>
            <img src={logo} alt="Kitty Katty!" className={classes.logo} />
              <Typography variant="h3" component="h1">
                  STATISTIC:
              </Typography>
             <div> ..Search</div>
            </Box>
          </Grid>
          <BasicModal/>
          <Grid item xs={12}>
            {(() => {
                if(countries.isLoading){
                    return <div> ...IsLoading</div>
                }
                if(countries.isError){
                    return <div> ...isError</div>
                }
                    // return <div>Countries {countries.data[1].Country}</div>
                    return <CountriesTable data={countries.data}/>
            })()}
            </Grid>
        </Grid>
    </Container>
   
    </>
}