import {
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

const QualitySuface = () => {
  return (
    <Grid className='_text_center'>
      <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>TỔNG HỢP CÁC ĐẶC TRƯNG CỦA CÁC CHỈ TIÊU CƠ BẢN VỀ CHẤT LƯỢNG NƯỚC MẶT </Typography>
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead className='tableHead'>
            <TableRow>
              <TableCell size='small' align='center' rowSpan={3}>
                STT
              </TableCell>
              <TableCell size='small' align='center' rowSpan={3}>
                Lưu vực sông/ <br /> Vùng/Tỉnh
              </TableCell>
              <TableCell size='small' align='center' rowSpan={3}>
                Sông,suối,hồ chứa
              </TableCell>
              <TableCell size='small' align='center' rowSpan={3}>
                Vị trí <br /> quan trắc
              </TableCell>
              <TableCell size='small' align='center' colSpan={3} rowSpan={2} >
                Kết quả phân tích <br /> chỉ tiêu Ph [-]
              </TableCell>
              <TableCell size='small' align='center' colSpan={3} rowSpan={2}>
                Kết quả phân tích <br /> chỉ tiêu BOD5 [mg/l]
              </TableCell>
              <TableCell size='small' align='center' colSpan={3} rowSpan={2} >
                Kết quả phân tích <br /> chỉ tiêu COD [mg/l]
              </TableCell>
              <TableCell size='small' align='center' colSpan={3} rowSpan={2}>
                Kết quả phân tích <br /> chỉ tiêu TSS [mg/l]
              </TableCell>
              <TableCell size='small' align='center' colSpan={3} rowSpan={2}>
                Kết quả phân tích <br /> chỉ tiêu DO [mg/l]
              </TableCell>
              <TableCell size='small' align='center' colSpan={3} rowSpan={2}>
                Kết quả phân tích <br /> chỉ tiêu Tổng Phosphor TP [mg/l]
              </TableCell>
              <TableCell size='small' align='center' colSpan={3} rowSpan={2}>
                Kết quả phân tích <br /> chỉ tiêu Tổng Nito TN [mg/l]
              </TableCell>
              <TableCell size='small' align='center' rowSpan={3}>
                Ghi chú
              </TableCell>
            </TableRow>
            
            <TableRow>
             
            </TableRow>
            
            <TableRow>
              <TableCell size='small' align='center'>
                Lớn nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Nhỏ nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Trung bình
              </TableCell>
          
              <TableCell size='small' align='center'>
                Lớn nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Nhỏ nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Trung bình
              </TableCell>
              <TableCell size='small' align='center'>
                Lớn nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Nhỏ nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Trung bình
              </TableCell>
              <TableCell size='small' align='center'>
                Lớn nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Nhỏ nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Trung bình
              </TableCell>
              <TableCell size='small' align='center'>
                Lớn nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Nhỏ nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Trung bình
              </TableCell>
              <TableCell size='small' align='center'>
                Lớn nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Nhỏ nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Trung bình
              </TableCell>
              <TableCell size='small' align='center'>
                Lớn nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Nhỏ nhất
              </TableCell>
              <TableCell size='small' align='center'>
                Trung bình
              </TableCell>
            </TableRow>
          

            <TableRow>
              <TableCell size='small' align='center'>
                (1)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (2)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (3)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (4)
              </TableCell>
              <TableCell size='small' align='center'>
                (5)
              </TableCell>
              <TableCell size='small' align='center'>
                (6)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (7)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (8)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (9)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (10)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (11)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (12)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (13)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (14)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (15)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (16)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (17)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (18)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (19)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (20)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (21)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (22)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (23)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (24)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (25)&nbsp;
              </TableCell>
              <TableCell size='small' align='center'>
                (26)&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className='tableBody'>
            <TableRow>
              <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
              <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
              <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
              <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
              <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
              <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
              <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
              <TableCell className="text-center  size='small' align-middle font-13">1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}

export default QualitySuface
