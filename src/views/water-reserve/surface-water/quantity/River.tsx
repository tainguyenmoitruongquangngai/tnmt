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
import RiverToolBar from './toolbar'
import CreateRiver from './CreateRiver'
import DeleteData from 'src/@core/components/delete-data'

const River = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataRiver() {
      setLoading(true)
      await getData('NM_SoLuong/danh-sach/song-suoi')
        .then(data => {
          setData(data)
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    getDataRiver()
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
      minWidth: 100,
      children: [
        {
          id: '#1',
          children: [{ id: '#1.1', label: '(1)', align: 'left' }]
        }
      ]
    },
    {
      id: 'tenSong',
      label: 'Tên sông',
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
      id: 'chieuDai',
      label: 'Chiều dài(km)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#4',
          children: [{ id: '#4.1', label: '(4)', align: 'left' }]
        }
      ]
    },
    {
      id: 'chieuDaiThuocTinh_ThanhPho',
      label: 'Chiều dài thuộc tỉnh, thành phố (km)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#5',
          children: [{ id: '#5.1', label: '(5)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Vị trí đầu sông',
      align: 'left',
      children: [
        {
          id: 'dauSongX',
          label: 'X',
          align: 'left',
          minWidth: 150,
          children: [{ id: '#8.1', label: '(7)', align: 'left' }]
        },
        {
          id: 'dauSongY',
          label: 'Y',
          align: 'left',
          minWidth: 150,
          children: [{ id: '#9.1', label: '(8)', align: 'left' }]
        },
        {
          id: 'dauSongXaHuyenTinh',
          label: 'Xã',
          align: 'left',
          minWidth: 150,
          children: [{ id: '#8.1', label: '(7)', align: 'left' }]
        },
      ]
    },
    {
      id: '#',
      label: 'Vị trí cuối sông',
      align: 'left',
      children: [
        {
          id: 'cuoiSongX',
          label: 'X',
          align: 'left',
          minWidth: 150,
          children: [{ id: '#8.1', label: '(7)', align: 'left' }]
        },
        {
          id: 'cuoiSongY',
          label: 'Y',
          align: 'left',
          minWidth: 150,
          children: [{ id: '#9.1', label: '(8)', align: 'left' }]
        },
        {
          id: 'cuoiSongXaHuyenTinh',
          label: 'Xã',
          align: 'left',
          minWidth: 150,
          children: [{ id: '#8.1', label: '(7)', align: 'left' }]
        },
      ]
    },
    {
      id: 'ghiChu',
      label: 'Ghi chú',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#10',
          children: [{ id: '#10.1', label: '(10)', align: 'left' }]
        }
      ]
    },
    { id: 'actions', label: 'Thao tác', minWidth: 150, rowspan: 3 }
  ]

  return (
    <Paper sx={{ p: 8 }}>
      <Header />

      <Grid className='_text_center'>
        <Typography className='font-weight-bold ' variant='h6'>
          BÁO CÁO
        </Typography>
        <Typography className='font-weight-bold ' variant='h6'>
          KIỂM KÊ SỐ LƯỢNG NGUỒN NƯỚC MẶT LÀ CÁC SÔNG, SUỐI, KÊNH, RẠCH TỈNH QUẢNG NGÃI
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
          <RiverToolBar onExport={{ data: data, column: columnsTable }} />
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
            actions={(row: any) => (
              <Box >
                <CreateRiver isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'NM_SoLuong/song-suoi'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default River
