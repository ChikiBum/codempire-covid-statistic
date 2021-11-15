import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';



export const ModalData = (props) => {

    // debugger;

    console.log(props.modalData)
  return (
    <>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">{props.modalData.Country}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={props.modalData.ID}>
                    <TableCell align="left" >
                        icon Confirmed
                    </TableCell>
                    <TableCell align="left">
                        'Total Confirmed'
                    </TableCell>
                    <TableCell align="left">
                        {props.modalData.TotalConfirmed}
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
                        {props.modalData.TotalDeaths}
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
                        {props.modalData.TotalRecovered}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    <Button onClick={props.handleClose}>OK</Button>

    </>
  )
}