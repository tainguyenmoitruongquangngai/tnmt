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

const CorridorLake = () => {
  return (
    <Grid>
      <Grid className='_text_center'>
        <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
          Thống kê danh mục các hồ, ao nội tỉnh Quảng Ngãi
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
                  Nguồn nước
                </TableCell>
                <TableCell size='small' align='center'>
                  Thuộc lưu vực sông
                </TableCell>
                <TableCell size='small' align='center'>
                  Diện tích <br/> mặt nước (km2)
                </TableCell>
                <TableCell size='small' align='center'>
                  Xã/ Phường/ Thị trấn
                </TableCell>
                <TableCell size='small' align='center'>
                  Huyện/ Thành phố
                </TableCell>
                <TableCell size='small' align='center'>
                  Dung tích <br/> toàn bộ (triệu m3)
                </TableCell>
                <TableCell size='small' align='center'>
                Dung tích <br/> hữu ích (triệu m3)
                </TableCell>
                <TableCell size='small' align='center'>
                Dung tích <br/> phòng lũ (triệu m3)
                </TableCell>
                <TableCell size='small' align='center'>
                MNDBT (m)
                </TableCell>
                <TableCell size='small' align='center'>
                MNC (m)
                </TableCell>
                <TableCell size='small' align='center'>
                Năm xây dựng
                </TableCell>
                <TableCell size='small' align='center'>
                Đơn vị quản lý vận hành
                </TableCell>
                <TableCell size='small' align='center'>
                  Phạm vi hành lang
                </TableCell>
                <TableCell size='small' align='center'>
                  Thuộc diện cắm mốc hành lang
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

export default CorridorLake
