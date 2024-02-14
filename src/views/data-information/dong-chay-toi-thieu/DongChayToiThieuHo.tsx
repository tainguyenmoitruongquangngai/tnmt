import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

const DongChayToiThieuHo = () => {
  return (
    <Grid>
      <Grid className='_text_center'>
        <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
        Thống kê giá trị dòng chảy tối thiểu ở hạ du các hồ chứa, đập dâng tỉnh Quảng Ngãi
        </Typography>
      </Grid>
      <Button variant='outlined'>Thêm mới</Button>
      <Grid className='_text_center' sx={{ mt: 3 }}>
        <TableContainer component={Paper} sx={{ mt: 5 }}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead className='tableHead'>
              <TableRow>
                <TableCell size='small' align='center'>
                  STT
                </TableCell>
                <TableCell size='small' align='center'>
                  Tên công trình
                </TableCell>
                <TableCell size='small' align='center'>
                  Thuộc lưu vực sông
                </TableCell>
                <TableCell size='small' align='center'>
                  Xã/ Phường/ Thị trấn
                </TableCell>
                <TableCell size='small' align='center'>
                  Huyện/ Thành phố
                </TableCell>
                <TableCell size='small' align='center'>
                Nguồn nước khai thác
                </TableCell>
                <TableCell size='small' align='center'>
                  Qtt sau đập (m3/s)
                </TableCell>
                <TableCell size='small' align='center'>
                Qtt sau công trình (m3/s)
                </TableCell>
                <TableCell size='small' align='center'>
                Qtt quy định khác (m3/s)
                </TableCell>
                <TableCell size='small' align='center'>
                Loại hình công trình
                </TableCell>
                
                <TableCell size='small' align='center'>
                  Thao tác
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody className='tableBody'>
              <TableRow>
                <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
                <TableCell className="text-center  size='small' align-middle font-13">-</TableCell>
                <TableCell className="text-center  size='small' align-middle font-13">-</TableCell>
                <TableCell className="text-center  size='small' align-middle font-13">-</TableCell>
                <TableCell className="text-center  size='small' align-middle font-13">-</TableCell>
                <TableCell className="text-center  size='small' align-middle font-13">-</TableCell>
                <TableCell className="text-center  size='small' align-middle font-13">-</TableCell>
                <TableCell className="text-center  size='small' align-middle font-13">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default DongChayToiThieuHo
