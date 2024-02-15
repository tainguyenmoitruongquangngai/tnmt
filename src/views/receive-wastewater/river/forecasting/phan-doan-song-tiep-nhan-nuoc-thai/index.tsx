import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const PhanDoanSongTiepNhanNuocThai = () => {
   
        return (
          <Grid>
            <Grid className='_text_center'>
            <Typography className='font-weight-bold ' variant='h6'>
          KẾT QUẢ
        </Typography>
              <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
             PHÂN ĐOẠN SÔNG ĐỂ ĐÁNH GIÁ KHẢ NĂNG TIẾP NHẬN NƯỚC THẢI, SỨC CHỊU TẢI CỦA SÔNG TỈNH QUẢNG NGÃI
              </Typography>
            </Grid>
      
            <Grid className='_text_center' sx={{ mt: 3 }}>
            <TableContainer component={Paper} sx={{ mt: 5 }}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead className='tableHead'>
                  <TableRow>
                    <TableCell size='small' align='center' rowSpan={3} >
                      STT
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3} >
                      Lưu vực sông
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3} >
                      Sông
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3} >
                      Tên đoạn sông
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3} >
                    Phân đoạn sông
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3} >
                    Chiều dài <br/> đoạn sông (km)
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3} >
                    Diện tích lưu vực (km2)
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={1} colSpan={4}>
                    Tọa độ (VN2000, múi chiếu 30, kinh tuyến trục 107045)
                    </TableCell>
                    
                    <TableCell size='small' align='center' rowSpan={3}>
                    Địa giới hành chính
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3}>
                    Mục đích SDN <br/> theo QCVN 08: 2023/ BTNMT
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3}>
                    CLN theo QC08/2023 <br/> ứng với mục đích SDN
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3} >
                      Ghi chú
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={3}>
                      Thao tác
                    </TableCell> 
                  </TableRow>

                  <TableRow>
                  <TableCell size='small' align='center' rowSpan={1} colSpan={2}>
                    Điểm đầu
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={1} colSpan={2}>
                    Điểm cuối
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

export default PhanDoanSongTiepNhanNuocThai
