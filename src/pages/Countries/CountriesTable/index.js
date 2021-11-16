import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ModalData } from '../ModalData';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTable: {
            styleOverrides: {
                root: {
                    borderCollapse: 'separate',
                    borderSpacing: '0 11px'
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    borderCollapse: 'separate',
                    borderSpacing: '7px 11px'
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                   border: '1px solid rgba(224, 224, 224, 1)',
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

const modalWindowBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const SortingDefaultValue = {
    country: null,
    total: null
};

export const CountriesTable = ({data}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalData, setModalData] = useState({});

    const pushDatatoModalOnClick = (country) => {
        handleOpen();
        setModalData(country);
    }

    const [isSorting, setSorting] = useState(SortingDefaultValue);

    const getSorting = isSorting => isSorting  ? !isSorting : true;

    const onClickSorting = (type) => {
        setSorting((prevSorting) => ({
            ...prevSorting,
            Country: type === 'Country' ? getSorting(prevSorting.Country) : null,
            TotalConfirmed: type === 'TotalConfirmed' ? getSorting(prevSorting.TotalConfirmed) : null
        }));

        data.sort(sortByField(type, isSorting[type]));
    };

    const sortByField = (field, type) => {
        const reverse = type ? 1 : -1 ;
        return (a, b) => a[field] > b[field] ? 1 * reverse : -1 * reverse;
    };
 
    const getSortingIcon = (type) => {
         if (type !== null && type !== undefined){
            return type ? <ArrowUpwardIcon sx={{fontSize: 'small'}}/> : <ArrowDownwardIcon sx={{fontSize: 'small'}}/>
        }
        return null
    }

return (
    <ThemeProvider theme={theme}>
        <TableContainer  data-testid='contacts-table-container'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell 
                        align="left"
                        sx={{ 
                            width: '1.5rem', 
                            borderRadius: '20px 0 0 20px'
                        }}
                    >№</TableCell>
                    <TableCell 
                        align="left"
                        onClick={() => onClickSorting('Country')} 
                    >Country {getSortingIcon(isSorting.Country)}
                    </TableCell>
                    <TableCell 
                        align="left"
                        onClick={() => onClickSorting('TotalConfirmed')} 
                        sx={{ width: 250,
                            borderRadius: '0 20px 20px 0'
                        }}
                    >
                        Total Confirmed {getSortingIcon(isSorting.TotalConfirmed)}
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((country, index) => ( 
                    <TableRow
                        key={country.ID}
                        onClick={() => pushDatatoModalOnClick(country)}   
                    >
                        <TableCell 
                            align="left" 
                            sx={{borderRadius: '20px 0 0 20px'}}    
                        >
                            {index}
                        </TableCell>
                        <TableCell align="left">
                            {country.Country}
                        </TableCell>
                        <TableCell 
                            align="left"
                            sx={{borderRadius: '0 20px 20px 0'}}     
                        >
                            {country.TotalConfirmed}
                        </TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
            </Table>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalWindowBox}>
                    <ModalData modalData={modalData} handleClose={handleClose}/>
                </Box>
            </Modal>
        </TableContainer>
    </ThemeProvider>
    );
}