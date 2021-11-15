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
import Button from '@mui/material/Button';
import { ModalData } from '../ModalData';


const style = {
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

export const CountriesTable = ({data}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalData, setModalData] = useState({});

    const [isSorting, setIsSorting] = useState({});

    const pushDatatoModalOnClick = (country) => {
        handleOpen();
        setModalData(country);
    }

return (
    <TableContainer component={Paper} data-testid='contacts-table-container'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="left">№</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">Total Confirmed</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((country, index) => (
            <TableRow
                key={country.ID}
                onClick={() => pushDatatoModalOnClick(country)}   
            >
                <TableCell align="left" >
                    {index}
                </TableCell>
                <TableCell align="left">
                    {country.Country}
                </TableCell>
                <TableCell align="left">
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
            <Box sx={style}>
                <ModalData modalData={modalData} handleClose={handleClose}/>
            {/* <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">{modalData.Country}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={modalData.ID}>
                        <TableCell align="left" >
                            icon Confirmed
                        </TableCell>
                        <TableCell align="left">
                            'Total Confirmed'
                        </TableCell>
                        <TableCell align="left">
                            {modalData.TotalConfirmed}
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left" >
                            icon TotalDeaths
                        </TableCell>
                        <TableCell align="left">
                            'Total Deaths'
                        </TableCell>
                        <TableCell align="left">
                            {modalData.TotalDeaths}
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="left" >
                            icon
                        </TableCell>
                        <TableCell align="left">
                            'Total Recovered'
                        </TableCell>
                        <TableCell align="left">
                            {modalData.TotalRecovered}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table> */}

            </Box>

        </Modal>
    </TableContainer>
    );
}