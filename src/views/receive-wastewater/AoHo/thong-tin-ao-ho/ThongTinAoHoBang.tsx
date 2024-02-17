import Paper from '@mui/material/Paper'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'



  


const ThongTinAoHoBang = () => {
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead className='tableHead'>
          <TableRow>
            <TableCell size='small' align='center' rowSpan={2}>
              STT
            </TableCell>
            <TableCell size='small' align='center' rowSpan={2}>
              Tên hồ chứa
            </TableCell>
            <TableCell size='small' align='center' rowSpan={2}>
             Vị trí
            </TableCell>
            <TableCell size='small' align='center' colSpan={2} rowSpan={1}>
              Tọa độ 
            </TableCell>
            <TableCell size='small' align='center' colSpan={2} rowSpan={1}>
            Thông số công trình
            </TableCell>
            <TableCell size='small' align='center' colSpan={7} rowSpan={1}>
            GIÁ TRỊ GIỚI HẠN THÔNG SỐ CHẤT LƯỢNG NƯỚC MẶT HỒ CHỨA THEO QCVN08/2034 Cqc (mg/l)
            </TableCell>
           
            <TableCell size='small' align='center' colSpan={7} rowSpan={1}>
            KẾT QUẢ PHÂN TÍCH THÔNG SỐ CHẤT LƯỢNG NƯỚC HỒ CHỨA Cnn (mg/l)
            </TableCell>
            <TableCell size='small' align='center' rowSpan={2} >
              Hệ số an toàn Fs [-]
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
                  X
              </TableCell>
              <TableCell size='small' align='center'>
             Y 
              </TableCell>
             
              <TableCell size='small' align='center'>
             Diện tích lưu vực (km2)
              </TableCell>
              <TableCell size='small' align='center'>
            Dung tích toàn bộ (triệu m3)
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
  )
}

export default ThongTinAoHoBang
