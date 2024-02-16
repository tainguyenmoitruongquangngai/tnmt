import Paper from '@mui/material/Paper'
import { Grid,  Box, Typography, IconButton, } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import dayjs from 'dayjs'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import Header from '../../../water-reserve/header'
import Footer from 'src/views/water-reserve/footer'
import { Delete, Edit } from '@mui/icons-material'

const DieuTraNuocMat = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  useEffect(() => {
    async function getDataRainWater() {
      setLoading(true)
      await getData(`NMua_TongLuong/danh-sach/${selectedYear}`)
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

    getDataRainWater()
  }, [selectedYear])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 3
    },
    {
      id: 'tenTram',
      label: 'Tên trạm',
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
      id: 'ngayBatDau',
      label: (<>Năm bắt đầu <br /> quan trắc</>),
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
      id: 'ngayKetThuc',
      label: 'Năm kết thúc quan trắc',
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
      label: 'Vị trí',
      align: 'left',
      children: [
        {
          id: '#4',
          label: 'Xã',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.xa?.tenXa}</Typography>,
          children: [{ id: '#4.1', label: '(4)', align: 'left' }]
        },
        {
          id: '#5',
          label: 'Huyện',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.huyen?.tenHuyen}</Typography>,
          children: [{ id: '#5.1', label: '(5)', align: 'left' }]
        }
      ]
    },
    {
      id: 'tongluong_nuocmua',
      label: 'Tháng',
      align: 'left',
      children: [
        {
          id: '#6',
          label: 'Tháng 1',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang1}</Typography>,
          children: [{ id: '#6.1', label: '(6)', align: 'left' }]
        },
        {
          id: '#7',
          label: 'Tháng 2',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang2}</Typography>,
          children: [{ id: '#7.1', label: '(7)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 3',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang3}</Typography>,
          children: [{ id: '#8.1', label: '(8)', align: 'left' }]
        },
        {
          id: '#9',
          label: 'Tháng 4',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang4}</Typography>,
          children: [{ id: '#9.1', label: '(9)', align: 'left' }]
        },
        {
          id: '#10',
          label: 'Tháng 5',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang5}</Typography>,
          children: [{ id: '#10.1', label: '(10)', align: 'left' }]
        },
        {
          id: '#11',
          label: 'Tháng 6',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang6}</Typography>,
          children: [{ id: '#11.1', label: '(11)', align: 'left' }]
        },
        {
          id: '#12',
          label: 'Tháng 7',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang7}</Typography>,
          children: [{ id: '#12.1', label: '(12)', align: 'left' }]
        },
        {
          id: '#13',
          label: 'Tháng 8',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang8}</Typography>,
          children: [{ id: '#13.1', label: '(13)', align: 'left' }]
        },
        {
          id: '#14',
          label: 'Tháng 9',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang9}</Typography>,
          children: [{ id: '#14.1', label: '(14)', align: 'left' }]
        },
        {
          id: '#15',
          label: 'Tháng 10',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang10}</Typography>,
          children: [{ id: '#15.1', label: '(15)', align: 'left' }]
        },
        {
          id: '#15',
          label: 'Tháng 11',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang11}</Typography>,
          children: [{ id: '#16.1', label: '(16)', align: 'left' }]
        },
        {
          id: '#17',
          label: 'Tháng 12',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.thang12}</Typography>,
          children: [{ id: '#17.1', label: '(17)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Mùa mưa',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#18',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.muamua}</Typography>,
          children: [{ id: '#18.1', label: '(18)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Mùa khô',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#19',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.muakho}</Typography>,
          children: [{ id: '#19.1', label: '(19)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Cả năm',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#20',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.canam}</Typography>,
          children: [{ id: '#20.1', label: '(20)', align: 'left' }]
        }
      ]
    },
    { id: 'actions', label: 'Thao tác', minWidth: 150, rowspan: 3 }
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
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
            actions={() => (
              <Box >
                <IconButton><Edit /></IconButton>
                <IconButton><Delete /></IconButton>
              </Box>
            )}
          />
        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default DieuTraNuocMat
