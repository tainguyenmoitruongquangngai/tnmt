import Paper from '@mui/material/Paper'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const KhaNangTiepNhanNuocThaiSong1 = () => {
  return (
    <Box>
      
    <Typography align='center' className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
    THỐNG KÊ TẢI LƯỢNG CHẤT Ô NHIỄM CỦA CÁC NGUỒN THẢI ĐIỂM XẢ VÀO ĐOẠN SÔNG SUỐI TỈNH QUẢNG NGÃI
    </Typography>
  
       
    <TableContainer component={Paper}>
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
                    Lưu lượng <br/> dòng chảy (m3/s)
                    </TableCell>
                    <TableCell size='small' align='center' rowSpan={1} colSpan={4}>
                    Tọa độ (VN2000, múi chiếu 30, kinh tuyến trục 107045)
                    </TableCell>


            <TableCell size='small' align='center' rowSpan={2} colSpan={7}>
             KHẢ NĂNG TIẾP NHẬN NƯỚC THẢI, SỨC CHỊU TẢI <br /> Ltd (kg/ngày)
              </TableCell>

              <TableCell size='small' align='center' rowSpan={3}>
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
              Tổng <br /> chất rắn <br/> lơ lửng TSS (mg/l)
              </TableCell>
              <TableCell size='small' align='center'>
              Tổng <br /> coliform <br/> (MPN/100ml)
              </TableCell>

          </TableRow>
        </TableHead>

        <TableBody className='tableBody'>
          <TableRow>
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
    </Box>
  )
}

export default KhaNangTiepNhanNuocThaiSong1
