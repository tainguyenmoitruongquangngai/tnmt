import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const MatCatSongSuoi = () => {
   
        return (
          <Grid>
           
            <Grid className='_text_center'>
            <Typography className='font-weight-bold ' variant='h6'>
          BÁO CÁO
        </Typography>

              <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
             THÔNG TIN DỮ LIỆU VỀ MẶT CẮT SÔNG SUỐI TỈNH QUẢNG NGÃI
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
                      Số hiệu mặt cắt 
                    </TableCell>
                    <TableCell size='small' align='center' >
                     Tên sông suối
                    </TableCell>
                    <TableCell size='small' align='center' >
                     Thuộc lưu vực sông
                    </TableCell>
                    <TableCell size='small' align='center' >
                     Tọa độ X bờ trái
                    </TableCell>
                    <TableCell size='small' align='center' >
                     Tọa độ Y bờ trái
                    </TableCell>
                    <TableCell size='small' align='center' >
                     Tọa độ X bờ phải
                    </TableCell>
                    <TableCell size='small' align='center' >
                     Tọa độ Y bờ phải
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
                   Số hiệu điểm
                    </TableCell>
                    <TableCell size='small' align='center'>
                   Khoảng cách (m)
                    </TableCell>
                    <TableCell size='small' align='center'>
                   Cao độ đáy sông (m)
                    </TableCell>
                    <TableCell size='small' align='center'>
                  Thời gian đo 
                    </TableCell>
                    <TableCell size='small' align='center'>
                  Mực nước sông (m)
                    </TableCell>
                    <TableCell size='small' align='center'>
                  Đơn vị đo đạc khảo sát
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

export default MatCatSongSuoi
