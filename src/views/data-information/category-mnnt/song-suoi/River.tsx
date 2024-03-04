import Paper from '@mui/material/Paper'
import { Grid, Typography, Box, } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Header from '../../header'
import Footer from '../../footer'
import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import dayjs from 'dayjs'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import DeleteData from 'src/@core/components/delete-data'
import ToolBar from '../../category-mnnt/song-suoi/toolbar'
import CreateDanhMucNN_NoiTinh_SongSuoi from '../../create-form/CreateDanhMucNN_NoiTinh_SongSuoi'

const DanhMucNN_NoiTinh_SongSuoi = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataDanhMucNN_NoiTinh_SongSuoi() {
      setLoading(true)
      await getData('DanhMucNN_NoiTinh_SongSuoi/danh-sach')
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

    getDataDanhMucNN_NoiTinh_SongSuoi()
  }, [postSuccess])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 3
    },
    {
      id: 'maSong',
      label: 'Mã sông',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#1',
          children: [{ id: '#1.1', label: '(1)', align: 'left' }]
        }
      ]
    },
    {
      id: 'tenSongSuoi',
      label: 'Tên sông,suối',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#2',
          children: [{ id: '#2.1', label: '(2)', align: 'left' }]
        }
      ]
    },
    {
      id: 'chayRa',
      label: 'Chảy ra',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(3)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Vị trí điểm đầu',
      align: 'left',
      children: [
        {
          id: 'xDiemDau',
          label: 'X điểm đầu',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.xDiemDau == null ? "-" : row.xDiemDau}</Typography>,
          children: [{ id: '#4.1', label: '(4)', align: 'left' }]
        },
        {
          id: 'yDiemDau',
          label: 'Y điểm đầu',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.yDiemDau == null ? "-" : row.yDiemDau}</Typography>,
          children: [{ id: '#5.1', label: '(5)', align: 'left' }]
        },
        {
          id: 'thonDiemDau',
          label: 'Thôn điểm đầu',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.thonDiemDau == null ? "-" : row.thonDiemDau}</Typography>,
          children: [{ id: '#6.1', label: '(6)', align: 'left' }]
        },
        {
          id: 'xaPhuongTTDiemDau',
          label: 'Xã/Phường/Thị trấn điểm đầu',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.xaPhuongTTDiemDau == null ? "-" : row.xaPhuongTTDiemDau}</Typography>,
          children: [{ id: '#7.1', label: '(7)', align: 'left' }]
        },
        {
          id: 'huyenTPDiemDau',
          label: 'Huyện/Thành phố điểm đầu',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.huyenTPDiemDau == null ? "-" : row.huyenTPDiemDau}</Typography>,
          children: [{ id: '#8.1', label: '(8)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Vị trí điểm cuối',
      align: 'left',
      children: [
        {
          id: 'xDiemCuoi',
          label: 'X điểm cuối',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.xDiemCuoi == null ? "-" : row.xDiemCuoi}</Typography>,
          children: [{ id: '#9.1', label: '(9)', align: 'left' }]
        },
        {
          id: 'yDiemCuoi',
          label: 'Y điểm cuối',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.yDiemCuoi == null ? "-" : row.yDiemCuoi}</Typography>,
          children: [{ id: '#10.1', label: '(10)', align: 'left' }]
        },
        {
          id: 'thonDiemCuoi',
          label: 'Thôn điểm cuối',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.thonDiemCuoi == null ? "-" : row.thonDiemCuoi}</Typography>,
          children: [{ id: '#11.1', label: '(11)', align: 'left' }]
        },
        {
          id: 'xaPhuongTTDiemCuoi',
          label: 'Xã/Phường/Thị trấn điểm cuối',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.xaPhuongTTDiemCuoi == null ? "-" : row.xaPhuongTTDiemCuoi}</Typography>,
          children: [{ id: '#12.1', label: '(12)', align: 'left' }]
        },
        {
          id: 'huyenTPDiemCuoi',
          label: 'Huyện/Thành phố điểm cuối',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.huyenTPDiemCuoi == null ? "-" : row.huyenTPDiemCuoi}</Typography>,
          children: [{ id: '#13.1', label: '(13)', align: 'left' }]
        }
      ]
    },
    {
      id: 'ghiChu',
      label: 'Ghi chú',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#14',
          children: [{ id: '#14.1', label: '(14)', align: 'left' }]
        }
      ]
    },
    {align: 'center', id: 'actions', label: 'Thao tác', minWidth: 150, rowspan: 3 }
  ]

  return (
    <Paper sx={{ p: 8 }}>
      <Header />

      <Grid className='_text_center'>
        <Typography className='font-weight-bold ' variant='h6'>
        THỐNG KÊ NGUỒN NƯỚC MẶT NỘI TỈNH THUỘC CÁC SÔNG SUỐI TỈNH QUẢNG NGÃI
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
                <CreateDanhMucNN_NoiTinh_SongSuoi isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'DanhMucNN_NoiTinh_SongSuoi'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default DanhMucNN_NoiTinh_SongSuoi
