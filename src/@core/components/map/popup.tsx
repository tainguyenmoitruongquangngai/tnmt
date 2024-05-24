import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const DoanSongPopup = ({ popupData }: any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'>KNTN BoD</TableCell>
            <TableCell align='right'>KNTN COD</TableCell>
            <TableCell align='right'>KNTN Amoni</TableCell>
            <TableCell align='right'>KNTN Tổng N</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='right'>{popupData.ltnBod}</TableCell>
            <TableCell align='right'>{popupData.ltnCod}</TableCell>
            <TableCell align='right'>{popupData.ltnAmoni}</TableCell>
            <TableCell align='right'>{popupData.ltnTongN}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DoanSongPopup
