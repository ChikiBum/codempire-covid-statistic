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
              <TextField
                label="Search..."
                // size='small'
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
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