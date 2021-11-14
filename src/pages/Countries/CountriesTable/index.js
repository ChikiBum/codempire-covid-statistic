import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const CountriesTable = ({data}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                onClick={handleOpen}
            >
                <TableCell align="left">
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button onClick={handleClose}>OK</Button>
        </Box>
        
        </Modal>
    </TableContainer>
    );
}