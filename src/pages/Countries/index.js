import Grid from '@mui/material/Grid';
import {  Container, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useCountries } from "./useCountries";
import { Box } from '@mui/system';
import logo from "../../images/logo.png";
import { CountriesTable } from './CountriesTable';
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    headContainer: {
      marginBottom: theme.spacing(4)
    },
    filterContainer: {
      marginBottom: theme.spacing(3)
    },
    title: {
        paddingTop: '68px',
        width: '100%'
      },
    logo: {
        maxWidth: '200px',
        maxHeight: '200px',
      },
    seacrh: {
      marginTop: '68px',
      }
  })
);

const FilterDefaultValue = {
  country: ''
};

export const Countries = (props) => { 
    const classes = useStyles();
    const countries = useCountries();
    const [filters, setFilters] = useState(FilterDefaultValue);
    const changeFilter = (e) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        country: e.target.value
      }))
    }

    const filteredData = countries.data.filter( item => item.Country.toLowerCase().includes(filters.country.toLowerCase()));

return <>
  
     <Container sx={{ maxWidth: '1800px !important'}}>
        <Grid container >
          <Grid item xs={12} className={classes.headContainer} >
            <Box sx={{ display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between', 
                      paddingTop: '1rem'}}>
              <img 
                src={logo} 
                alt="covid-logo" 
                className={classes.logo} 
              />
              <Typography 
                variant="h2" 
                component="h1"
                className={classes.title} >
                  STATISTIC:
              </Typography>
              <TextField
                label="Search..."
                className={classes.seacrh} 
                sx={{
                  marginTop: '75px',
                  width: '600px'
                }}
                // size='small'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                value={filters.country}
                onChange={changeFilter}
                autoFocus={true}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            {(() => {
                if(countries.isLoading){
                    return <div> ...IsLoading</div>
                }
                if(countries.isError){
                    return <div> ...isError</div>
                }
                    // return <div>Countries {countries.data[1].Country}</div>
                    return <CountriesTable data={filteredData}/>
            })()}
            </Grid>
        </Grid>
    </Container>
 </>
}