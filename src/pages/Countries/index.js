import Grid from '@mui/material/Grid';
import {  CircularProgress, Container, Typography } from "@mui/material";
import { useCountries } from "./useCountries";
import { Box } from '@mui/system';
import logo from "../../images/logo.png";
import { CountriesTable } from './CountriesTable';
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { memo, useCallback, useState } from 'react';

export const Countries = memo((props) => { 
    const countries = useCountries();
    const [filters, setFilters] = useState({
      country: ''
    });

    const changeFilter = useCallback((e) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        country: e.target.value
      }));
    },[]);
    
 
const filteredData = countries.data.filter( item => item.Country.toLowerCase().includes(filters.country.toLowerCase()));

return (
     <Container 
        maxWidth={false}
        sx={{maxWidth: '1800px'}}
      >
        <Grid container >
          <Grid item xs={12}  >
            <Box sx={{ display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between', 
                paddingTop: '1rem'}}
            >
              <img 
                src={logo} 
                alt="covid-logo" 
                sx={{
                  maxWidth: '200px',
                  maxHeight: '200px',
                }}
              />
              <Typography 
                // variant="h2" 
                component="h1"
                sx={{ 
                  fontSize: '72px',
                  fontWeight: '700',
                  paddingTop: '3rem',
                  width: '100%'
                }}
              >
                  STATISTIC:
              </Typography>
              <TextField
                label="Search..."
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
                data-testid='search-window'
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            {(() => {
                if(countries.isLoading){
                  return <CircularProgress 
                            data-testid='country-loader'
                            // size='40'
                            sx={{marginLeft: '50%'}} 
                          />
                }
                if(countries.isError){
                  return <div data-testid='country-error'> ...isError</div>
                }
                  return <CountriesTable data={filteredData}/>
            })()}
            </Grid>
        </Grid>
    </Container>
)
})