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

const ChucNangNguonNuocHo = () => {
  return (
    <Grid>
      <Grid className='_text_center'>
        <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
        Thống kê chức năng nguồn nước hồ, ao, đầm, phá tỉnh Quảng Ngãi
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
                  Tên hồ chứa
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
                Diện tích mặt nước (km2)
                </TableCell>
                <TableCell size='small' align='center'>
                  Dung tích toàn bộ (triệu m3)
                </TableCell>
                <TableCell size='small' align='center'>
                Dung tích hữu ích (triệu m3)
                </TableCell>
                <TableCell size='small' align='center'>
                Năm hoàn thành
                </TableCell>
                <TableCell size='small' align='center'>
                Đơn vị quản lý vận hành
                </TableCell>
                <TableCell size='small' align='center'>
                Chức năng nguồn nước
                </TableCell>
                <TableCell size='small' align='center'>
               Mục tiêu chất lượng
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

export default ChucNangNguonNuocHo