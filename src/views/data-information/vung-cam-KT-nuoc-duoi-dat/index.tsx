import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const VungCamKTNuocDuoiDat = () => {
   
        return (
          <Grid>
           
            <Grid className='_text_center'>
            <Typography className='font-weight-bold ' variant='h6'>
          BÁO CÁO
        </Typography>

              <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
             THÔNG TIN DỮ LIỆU VỀ VÙNG CẤM, VÙNG HẠN CHẾ KHAI THÁC NƯỚC DƯỚI ĐẤT TỈNH QUẢNG NGÃI
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
                      Tên vùng cấm/ vùng hạn chế
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Diện tích vùng cấm/ vùng hạn chế (km2)
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
                   Phạm vi chiều sâu hoặc tầng chứa nước hạn chế KT (m)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Các biện pháp hạn chế khai thác
                    </TableCell>
                   <TableCell size='small' align='center'>
                    QĐ phê duyệt vùng cấm khai thác
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
                   
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </Grid>
          </Grid>
        )
      }

export default VungCamKTNuocDuoiDat
