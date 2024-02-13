import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import loading from 'src/@core/components/loading'
import { getData } from 'src/api/axios'
import CreateReport4 from 'src/views/report-form/Bieumau4/CreateForm4'
import { Report4State } from 'src/views/report-form/Bieumau4/Report4Interface'
import Report4Table from 'src/views/report-form/Bieumau4/Report4Table'

const LuuVucSongPage = () => {
   
        return (
          <Grid>
            <Grid className='_text_center'>
              <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
             THÔNG TIN DỮ LIỆU VỀ LƯU VỰC SÔNG TỈNH QUẢNG NGÃI
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
                      Mã sông
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Cấp sông
                    </TableCell>
                    <TableCell size='small' align='center' >
                      Tên sông, suối
                    </TableCell>
                    <TableCell size='small' align='center' >
                    Chảy ra
                    </TableCell>
                    <TableCell size='small' align='center' >
                   Chiều dài (km)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Diện tích lưu vực (km2)
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Tỉnh / Thành phố
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Thuộc hệ lưu vực sông
                    </TableCell>
                    <TableCell size='small' align='center'>
                    Loại sông, suối 
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

export default LuuVucSongPage
