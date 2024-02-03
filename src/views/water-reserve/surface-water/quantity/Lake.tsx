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
import LakeToolBar from './toolbar'
import CreateLake from './CreateLake'
import DeleteData from 'src/@core/components/delete-data'

const Lake = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
    const handlePostSuccess = () => {
        setPostSuccess(prevState => !prevState);
    };
  useEffect(() => {
    async function getDataLake() {
      setLoading(true)
      await getData(`NMua_SoLuong/danh-sach/${selectedYear}`)
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

    getDataLake()
  }, [postSuccess,selectedYear])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 3
    },
    {
      id: 'ten',
      label: 'Tên',
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
      id: 'nguonNuocKhaiThac',
      label: 'Nguồn nước khai thác',
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
      id: 'thuocHeThongSong',
      label: 'Thuộc hệ thống sông ',
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
      id: 'dienTichMatNuoc',
      label: 'Diện tích mặt nước(m2)',
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
      id: 'dungTichToanBo',
      label: 'Dung tích toàn bộ(triệu/m3)',
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
      id: 'dungTichHuuIch',
      label: 'Dung tích hữu ích(triệu/m3)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#6',
          children: [{ id: '#6.1', label: '(6)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Vị trí hành chính',
      align: 'left',
      children: [
        {
          id: 'xa',
          label: 'Xã',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.xa?.tenXa}</Typography>,
          children: [{ id: '#8.1', label: '(7)', align: 'left' }]
        },
        {
          id: 'huyen',
          label: 'Huyện',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.huyen?.tenHuyen}</Typography>,
          children: [{ id: '#9.1', label: '(8)', align: 'left' }]
        }
      ]
    },
    {
      id: 'mucDichSuDung',
      label: 'Mục đích sử dụng',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#9',
          children: [{ id: '#9.1', label: '(9)', align: 'left' }]
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
          id: '#10',
          children: [{ id: '#10.1', label: '(10)', align: 'left' }]
        }
      ]
    },
    { id: 'actions', label: 'Thao tác', minWidth: 150,rowspan: 3 }
  ]

  return (
    <Paper sx={{ p: 8 }}>
      <Header />

      <Grid className='_text_center'>
        <Typography className='font-weight-bold ' variant='h4'>
          BÁO CÁO
        </Typography>
        <Typography className='font-weight-bold ' variant='h6'>
          Tổng lượng mưa, phân phối lượng mưa trong năm
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
           <LakeToolBar onExport={{ data: data, column: columnsTable }}/>
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
            actions={(row: any) => (
              <Box >
                <CreateLake isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'licensefee'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default Lake
