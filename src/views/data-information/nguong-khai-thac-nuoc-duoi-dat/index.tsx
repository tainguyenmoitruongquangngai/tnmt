
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const NguongKTNuocDuoiDat = () => {
   
        return (
          <Grid>
           
            <Grid className='_text_center'>
            <Typography className='font-weight-bold ' variant='h6'>
          BÁO CÁO
        </Typography>

              <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
             THÔNG TIN DỮ LIỆU VỀ NGƯỠNG KHAI THÁC NƯỚC DƯỚI ĐẤT TỈNH QUẢNG NGÃI
              </Typography>
            </Grid>
            <Typography className='font-weight-bold ' variant='h6'>
     
        </Typography>
            <Grid className='_text_center' sx={{ mt: 3 }}>
            <TableContainer component={Paper} sx={{ mt: 5 }}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead className='tableHead'>
                  <TableRow>
                    <TableCell size='small' align='center' >
                      STT
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Tên tầng chứa nước
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Loại chứa nước (lỗ hổng, khe nứt)
                    </TableCell>
                    <TableCell size='small' align='center' >
                     Xã
                    </TableCell>
                    <TableCell size='small' align='center' >
                    Huyện
                    </TableCell>
                    <TableCell size='small' align='center' >
                   Tỉnh/ Thành phố
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Diện tích phân bố (km2)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Khoảng chiều sâu phân bố (m)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Ngưỡng GHKT về lưu lượng (m3/ngày đêm)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Ngưỡng GHKT về mực nước (m)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    QĐ phê duyệt ngưỡng giới hạn KT
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Ghi chú
                    </TableCell>
                    <TableCell size='small' align='center' >
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

export default NguongKTNuocDuoiDat
