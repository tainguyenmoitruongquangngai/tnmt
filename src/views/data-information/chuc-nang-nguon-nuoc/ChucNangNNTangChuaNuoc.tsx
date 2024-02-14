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

const ChucNangNguonNuocTangCN  = () => {
  return (
    <Grid>
      <Grid className='_text_center'>
        <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
        Thống kê chức năng nguồn nước là các tầng chứa nước tỉnh Quảng Ngãi
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
                  Vị trí, phạm vi quy định chức năng nguồn nước
                </TableCell>
                <TableCell size='small' align='center'>
                  Xã/ Phường/ Thị trấn
                </TableCell>
                <TableCell size='small' align='center'>
                  Huyện/ Thành phố
                </TableCell>
                <TableCell size='small' align='center'>
                 Tên tầng chứa nước
                </TableCell>
                <TableCell size='small' align='center'>
                  Loại chứa nước (lỗ hổng, khe nứt)
                </TableCell>
                <TableCell size='small' align='center'>
                  Chiều sâu phân bố (m)
                </TableCell>
                <TableCell size='small' align='center'>
                  Chức năng nguồn nước
                </TableCell>
                <TableCell size='small' align='center'>
                  Mục tiêu chất lượng nước
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

export default ChucNangNguonNuocTangCN  
