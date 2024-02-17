import Paper from '@mui/material/Paper'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const PhanDoanSongTiepNhanNuocThai = () => {
  return (

     
   
   

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
                    Diện tích <br/> lưu vực (km2)
                    </TableCell>

            <TableCell size='small' align='center' colSpan={4}>
            Tọa độ (VN2000, múi chiếu 30, kinh tuyến trục 107045’)
              </TableCell>
             

              <TableCell size='small' align='center' rowSpan={3} colSpan={1}>
            Địa giới hành chính
              </TableCell>

              <TableCell size='small' align='center' rowSpan={3} colSpan={1}>
              Mục đích sử dụng nước <br/> theo QCVN 08: 2023/ BTNMT
              </TableCell>
              <TableCell size='small' align='center' rowSpan={3}>
              Chất lượng nước <br/> theo QC 08/2023 ứng với <br/> mục đích sử dụng nước
              </TableCell>

              <TableCell size='small' align='center' rowSpan={3}>
             Ghi chú
              </TableCell>

              <TableCell size='small' align='center' rowSpan={3}>
             Thao tác
              </TableCell>

          </TableRow>

          <TableRow>
          <TableCell size='small' align='center' colSpan={2}>
           Điểm đầu
              </TableCell>
              <TableCell size='small' align='center' colSpan={2}>
           Điểm cuối
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
                  X 
              </TableCell>
              <TableCell size='small' align='center'>
              Y
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
         
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PhanDoanSongTiepNhanNuocThai
