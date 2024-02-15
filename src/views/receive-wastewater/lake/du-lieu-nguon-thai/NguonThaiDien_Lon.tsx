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

const NguonThaiDien_Lon = () => {
  return (
    <Grid>
    <Grid className='_text_center'>
      <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
      THỐNG KÊ TẢI LƯỢNG CHẤT Ô NHIỄM TỪ NGUỒN THẢI CHĂN NUÔI GIA SÚC (LỢN, DÊ, GIA SÚC KHÁC... ) XẢ VÀO ĐOẠN SÔNG SUỐI TỈNH QUẢNG NGÃI
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
              Sông
            </TableCell>
            <TableCell size='small' align='center' rowSpan={2}>
              Tên đoạn <br />
              sông
            </TableCell>
            <TableCell size='small' align='center' rowSpan={2}>
              Chiều dài 
              <br />
              đoạn sông
              <br />
              (km)
            </TableCell>
            <TableCell size='small' align='center' rowSpan={2}>
              Số con lợn, dê, gia súc khác... <br /> (con) 
            </TableCell>
            <TableCell size='small' align='center' rowSpan={2}>
            Hệ số suy giảm dọc đường <br /> hay hệ số dòng chảy
            </TableCell>
            <TableCell size='small' align='center' colSpan={7}>
            TẢI LƯỢNG Ô NHIỄM (PLU) NGUỒN THẢI DIỆN (LỢN, DÊ...) <br /> (g/con/ngày)
              </TableCell>
              <TableCell size='small' align='center' colSpan={7}>
              TẢI LƯỢNG THÔNG SỐ CHẤT LƯỢNG NƯỚC CÓ TRONG NGUỒN THẢI DIỆN (CHĂN NUÔI GIA SÚC) <br /> Lt_dien_gia_suc_lon (kg/ngày) 
              </TableCell>
                                  
            <TableCell size='small' align='center' rowSpan={2} >
              Ghi chú
            </TableCell>
            <TableCell size='small' align='center' rowSpan={2} >
              Thao tác
            </TableCell>
          </TableRow>

          <TableRow>
         


                <TableCell size='small' align='center'>
                  BOD5 <br /> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              COD <br /> (mg/l)
              </TableCell>
             
              <TableCell size='small' align='center'>
              Amoni <br /> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng N <br /> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng P <br /> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng <br /> chất rắn <br/> lơ lửng <br/> TSS <br/> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng <br /> coliform <br/> (MPN/100ml)
              </TableCell>
        
                  <TableCell size='small' align='center'>
                  BOD5 <br /> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              COD <br /> (mg/l)
              </TableCell>
             
              <TableCell size='small' align='center'>
              Amoni <br /> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng N <br /> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng P <br /> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng <br /> chất rắn <br/> lơ lửng <br/> TSS <br/> (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng <br /> coliform <br/> (MPN/100ml)
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

export default NguonThaiDien_Lon
