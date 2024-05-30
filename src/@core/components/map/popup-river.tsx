import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import FormatCellValue from '../calculate-data-river'

const DoanSongPopup = ({ popupData }: any) => {
  return (
    <>
    <Typography className='text-table'>
    {popupData.tenDoanSong}
    </Typography>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>KNTN BoD</TableCell>
            <TableCell align='center'>KNTN COD</TableCell>
            <TableCell align='center'>KNTN Amoni</TableCell>
            <TableCell align='center'>KNTN Tổng N</TableCell>
            <TableCell align='center'>KNTN Tổng P</TableCell>
            <TableCell align='center'>KNTN TSS </TableCell>
            <TableCell align='center'>KNTN Coliform </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='right'>{FormatCellValue(popupData.ltnBod)}</TableCell>
            <TableCell align='right'>{FormatCellValue(popupData.ltnCod)}</TableCell>
            <TableCell align='right'>{FormatCellValue(popupData.ltnAmoni)}</TableCell>
            <TableCell align='right'>{FormatCellValue(popupData.ltnTongN)}</TableCell>
            <TableCell align='right'>{FormatCellValue(popupData.ltnTongP)}</TableCell>
            <TableCell align='right'>{FormatCellValue(popupData.ltnTSS)}</TableCell>
            <TableCell align='right'>{FormatCellValue(popupData.ltnColiform)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
   
  )
}

export default DoanSongPopup
