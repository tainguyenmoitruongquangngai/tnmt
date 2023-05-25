// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, IconButton, Tooltip } from '@mui/material'

const TableList = ({ data }:any) => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper>
      <TableContainer>
        <Table aria-label='sticky table' className='mainTable'>
          <TableHead className='tableHead'>
            <TableRow>
              <TableCell size='small' align="center" rowSpan={2} className='sticky-col start-col'>STT</TableCell>
              <TableCell size='small' align="center" rowSpan={2} className=' sticky-col start-col'>Tên công trình</TableCell>
              <TableCell size='small' align="center" rowSpan={2}>Địa điểm</TableCell>
              <TableCell size='small' align="center" colSpan={2}>Tọa độ đập chính</TableCell>
              <TableCell size='small' align="center" rowSpan={2}>Nguồn nước khai thác</TableCell>
              <TableCell size='small' align="center" rowSpan={2}>Phương thưc khai thác</TableCell>
              <TableCell size='small' align="center" rowSpan={2}>Chế độ KT</TableCell>
              <TableCell size='small' align="center" rowSpan={2}>Mục đích KT</TableCell>
              <TableCell size='small' align="center" rowSpan={2}>Tiểu vùng quy hoạch</TableCell>
              <TableCell size='small' align="center" rowSpan={2}>Năm xây dựng</TableCell>
              <TableCell size='small' align="center" rowSpan={2}>Năm vận hành</TableCell>
              <TableCell size='small' align="center" colSpan={30}>Tọa độ đập chính</TableCell>
              <TableCell size='small' align="center" colSpan={3}>Thông tin giấy phép</TableCell>
              <TableCell size='small' align="center" colSpan={2}>Tiền cấp quyền</TableCell>
              <TableCell size='small' align="center" rowSpan={2} className='sticky-col end-col'>Thao tác</TableCell>
            </TableRow>
            <TableRow>
              {/* lat,long */}
              <TableCell size='small' align="center">X (m)</TableCell>
              <TableCell size='small' align="center">Y (m)</TableCell>
              {/* contruction specifications */}
              <TableCell size='small' align="center">Cấp CT</TableCell> 
              <TableCell size='small' align="center">F lưu vực <br />(km2) </TableCell>
              <TableCell size='small' align="center">X <sub>TB năm</sub> <br />(m)</TableCell>
              <TableCell size='small' align="center">Q <sub>TB năm</sub><br />(m3/s)</TableCell>
              <TableCell size='small' align="center">CS lắp máy (MW)</TableCell>
              <TableCell size='small' align="center">CS <br /> đảm bảo(MW)</TableCell>
              <TableCell size='small' align="center">Chiều cao <br /> đập (m)</TableCell>
              <TableCell size='small' align="center">YChiều dài <br />đập (m)</TableCell>
              <TableCell size='small' align="center">Cao trình <br />đập (m)</TableCell>
              <TableCell size='small' align="center">Q<sub>max</sub>(m<sup>3</sup>/s)</TableCell>
              <TableCell size='small' align="center">Q<sub>TT</sub>(m<sup>3</sup>/s)</TableCell>
              <TableCell size='small' align="center">Q<sub>đảm bảo</sub>(m<sup>3</sup>/s)</TableCell>
              <TableCell size='small' align="center">H<sub>max</sub> (m) </TableCell>
              <TableCell size='small' align="center">H<sub>min</sub> (m) </TableCell>
              <TableCell size='small' align="center">H<sub>TT</sub></TableCell>
              <TableCell size='small' align="center">MNC(m)</TableCell>
              <TableCell size='small' align="center">MNDBT(m)</TableCell>
              <TableCell size='small' align="center">MNLTK(m)</TableCell>
              <TableCell size='small' align="center">MNLKT(m)</TableCell>
              <TableCell size='small' align="center">W<sub>toàn bộ</sub>(triệu m<sup>3</sup>)</TableCell>
              <TableCell size='small' align="center">W<sub> chết </sub>(triệu m<sup>3</sup>)</TableCell>
              <TableCell size='small' align="center">W<sub>hữu ích</sub>(triệu m<sup>3</sup>)</TableCell>
              <TableCell size='small' align="center">Số máy bơm</TableCell>
              <TableCell size='small' align="center">Q<sub>TK</sub> (m<sup>3</sup>/h)</TableCell>
              <TableCell size='small' align="center">Q<sub>TT</sub> (m<sup>3</sup>/h)</TableCell>
              <TableCell size='small' align="center">F<sub>tưới TK</sub> (ha)</TableCell>
              <TableCell size='small' align="center">F<sub>tưới TT</sub> (ha)</TableCell>
              <TableCell size='small' align="center">T<sub>bơm TB</sub>(h)</TableCell>
              <TableCell size='small' align="center">T<sub>bơm min</sub>(h)</TableCell>
              <TableCell size='small' align="center">T<sub>bơm max</sub></TableCell>
              {/* license */}
              <TableCell size='small' align="center">Số GP</TableCell>
              <TableCell size='small' align="center">Ngày cấp</TableCell>
              <TableCell size='small' align="center">Thời hạn</TableCell>
              {/* license fee */}
              <TableCell size='small' align="center">Số QĐ</TableCell>
              <TableCell size='small' align="center">Tổng tiền (đồng)</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody className='tableBody'>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data:any,index:any) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={data.stt}>
                    <TableCell align="center" className='sticky-col start-col'>{index+1}</TableCell>
                    <TableCell align="center" className='sticky-col start-col'>{data.ConstructionName}</TableCell>
                    <TableCell align="center">{data.ConstructionLocation}</TableCell>
                    <TableCell align="center">{data.x}</TableCell>
                    <TableCell align="center">{data.y}</TableCell>
                    <TableCell align="center">{data.nguonnuoc}</TableCell>
                    <TableCell align="center">{data.phuongthuc}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>
                    <TableCell align="center">{data.chedo}</TableCell>                                    
                    <TableCell align="center" className='sticky-col end-col'>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Tooltip title="Chỉnh sửa công trình">
                          <IconButton>
                            <ModeIcon/>
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={6}>
                        <Tooltip title="Xóa công trình">
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                     
                    </Grid>
                    </TableCell>
                   
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableList
