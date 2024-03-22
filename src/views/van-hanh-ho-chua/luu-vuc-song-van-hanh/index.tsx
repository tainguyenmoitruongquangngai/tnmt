import Paper from '@mui/material/Paper'
import { Grid, Typography, Box, } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import dayjs from 'dayjs'
import TableComponent, { TableColumn } from 'src/@core/components/table'

import DeleteData from 'src/@core/components/delete-data'
import ToolBar from './toolbar'

const VanHanhHoChuaLuuVucSong = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataVHHC_LuuVucSong() {
      setLoading(true)

      //API de lay du lieu tu sql: 'VHHC_LuuVucSong/danh-sach'
      await getData('VHHC_LuuVucSong/danh-sach')
        .then(data => {
          setData(data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    getDataVHHC_LuuVucSong()
  }, [postSuccess])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
    },
    {
      //Id là trường dữ liệu lưu trong csdl
      id: 'luuVucSong',
      label: 'Lưu vực sông',
      align: 'left',
      children: [{ id: '#', label: '(1)', align: 'left' }]
    },
    {
      //Id là trường dữ liệu lưu trong csdl
      id: 'dienTichLuuVuc',
      label: 'Diện tích lưu vực (km2)',
      align: 'left',
      children: [{ id: '#', label: '(2)', align: 'left' }]
    },
    {
      id: 'chieuDaiSongChinh',
      label: 'Chiều dài sông chính (km)',
      align: 'left',
      children: [{ id: '#', label: '(3)', align: 'left' }]
    },
    {
      id: 'banDo',
      label: 'Bản đồ',
      align: 'left',
      children: [{ id: '#', label: '(4)', align: 'left' }]
    },
    {
      id: 'soDoCacCT',
      label: 'Sơ đồ các công trình trên lưu vực',
      align: 'left',
      children: [{ id: '#', label: '(5)', align: 'left' }]
    },
    {
      id: 'soQuyTrinh',
      label: 'Số quy trình',
      align: 'left',
      children: [{ id: '#', label: '(6)', align: 'left' }]
    },
    {
      id: 'tepDinhKem',
      label: 'Tệp đính kèm',
      align: 'left',
      children: [{ id: '#', label: '(7)', align: 'left' }]
    },


    {
      id: 'ghiChu',
      label: 'Ghi chú',
      align: 'left',
      children: [{ id: '#', label: '(8)', align: 'left' }]
    },
    { align: 'center', id: 'actions', label: 'Thao tác', minWidth: 150, rowspan: 3 }
  ]

  return (
    <Paper sx={{ p: 8 }}>


      <Grid className='_text_center'>
        <Typography className='font-weight-bold ' variant='h6'>
          THÔNG TIN DỮ LIỆU VỀ LƯU VỰC SÔNG TỈNH QUẢNG NGÃI
        </Typography>
        <Typography className='font-weight-bold ' variant='h6'>
          (Kỳ báo cáo:{' '}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              views={['year']}
              value={dayjs(new Date(selectedYear, 1, 1))}
              onChange={(newVal: any) => setSelectedYear(newVal.year())}
              slotProps={{ textField: { size: 'small', fullWidth: true, required: true } }}
              sx={{ width: '100px' }}
            />
          </LocalizationProvider>
          )
        </Typography>
      </Grid>
      {/* <CreateReport2 isEdit={false} setPostSuccess={handlePostSuccess}/> */}
      {loading ? (
        <BoxLoading />
      ) : (
        <Grid className='_text_center' sx={{ mt: 3 }}>
          <ToolBar onExport={{ data: data, column: columnsTable }} />
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
            actions={(row: any) => (
              <Box >

                <DeleteData url={'VHHC_LuuVucSong'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}


    </Paper>
  )
}

export default VanHanhHoChuaLuuVucSong
