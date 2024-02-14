import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const AoKhongSanLap = () => {
   
        return (
          <Grid>
            <Grid className='_text_center'>
              <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
             THÔNG TIN DỮ LIỆU VỀ HỒ, AO, ĐẦM, PHÁ KHÔNG ĐƯỢC SAN LẤP TỈNH QUẢNG NGÃI
              </Typography>
            </Grid>
      
            <Grid className='_text_center' sx={{ mt: 3 }}>
            <TableContainer component={Paper} sx={{ mt: 5 }}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead className='tableHead'>
                  <TableRow>
                    <TableCell size='small' align='center' >
                      STT
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Tên hồ chứa
                    </TableCell>
                    <TableCell size='small' align='center' >
                   Xã
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Huyện
                    </TableCell>
                    
                    <TableCell size='small' align='center' >
                      Nguồn nước
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Thuộc lưu vực sông 
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Loại hình chức năng 
                    </TableCell>
                    <TableCell size='small' align='center' >
                    Diện tích mặt nước (km2)
                    </TableCell>
                    
                    <TableCell size='small' align='center'>
                    Dung tích toàn bộ (triệu m3)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Dung tích hữu ích (triệu m3)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Dung tích phòng lũ (triệu m3)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Mực nước dâng bình thường (m)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Mực nước chết (m)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Năm hoàn thành
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Đơn vị quản lý vận hành
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Thuộc danh mục không san lấp
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Quyết định
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

export default AoKhongSanLap
