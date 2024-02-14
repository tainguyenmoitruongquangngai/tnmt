import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const CorridorRiver = () => {
  return (
    <Grid>
      <Grid className='_text_center'>
        <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
        Thống kê danh mục nguồn nước thuộc các sông suối tỉnh Quảng Ngãi
        </Typography>
      </Grid>
    <Button variant='outlined'>Thêm mới</Button>
      <Grid className='_text_center' sx={{ mt: 3 }}>
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead className='tableHead'>
            <TableRow>
              <TableCell size='small' align='center' rowSpan={2}>
                STT
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
                Mã sông
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
                Tên sông, suối
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
                Chảy ra
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
                Chiều dài (km)
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
               Địa phận hành chính
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
                Huyện
              </TableCell>
              <TableCell size='small' align='center'colSpan={2}>
                Tọa độ điểm đầu
              </TableCell>
              <TableCell size='small' align='center'colSpan={2}>
               Tọa độ điểm cuối
              </TableCell>
              
              <TableCell size='small' align='center' rowSpan={2}>
               Chức năng
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
               Phạm vi hành lang bảo vệ
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
              Thời gian thực hiện
              </TableCell>
              <TableCell size='small' align='center' rowSpan={2}>
                Thao tác
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell size='small' align='center'>
                Tọa độ X
              </TableCell>
              <TableCell size='small' align='center'>
                Tọa độ Y
              </TableCell>
             
              <TableCell size='small' align='center'>
                Tọa độ X
              </TableCell>
              <TableCell size='small' align='center'>
                Tọa độ Y
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

export default CorridorRiver
