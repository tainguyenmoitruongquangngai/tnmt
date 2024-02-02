import Paper from '@mui/material/Paper'
import { Grid, Typography, Box, } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Header from '../header'
import Footer from '../footer'
import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import dayjs from 'dayjs'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import RainWaterToolBar from './toolbar'
import CreateRainWater from './form'
import DeleteData from 'src/@core/components/delete-data'

const RainWater = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
    const handlePostSuccess = () => {
        setPostSuccess(prevState => !prevState);
    };
  useEffect(() => {
    async function getDataRainWater() {
      setLoading(true)
      await getData(`NMua_TongLuong/danh-sach/${selectedYear}`)
        .then(data => {
          setData(data)
          console.log(data);
          
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    getDataRainWater()
  }, [postSuccess,selectedYear])

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
      label: 'Năm bắt đầu quan trắc',
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
          id: 'xa',
          label: 'Xã',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.xa?.tenXa}</Typography>,
          children: [{ id: '#7.1', label: '(4)', align: 'left' }]
        },
        {
          id: 'huyen',
          label: 'Huyện',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.huyen?.tenHuyen}</Typography>,
          children: [{ id: '8.1', label: '(5)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Tháng',
      align: 'left',
      children: [
        {
          id: '#',
          label: 'Tháng 1',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang1}</Typography>,
          children: [{ id: '#7.1', label: '(6)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 2',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang2}</Typography>,
          children: [{ id: '8.1', label: '(7)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 3',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang3}</Typography>,
          children: [{ id: '8.1', label: '(8)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 4',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang4}</Typography>,
          children: [{ id: '8.1', label: '(9)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 5',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang5}</Typography>,
          children: [{ id: '8.1', label: '(10)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 6',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang6}</Typography>,
          children: [{ id: '8.1', label: '(11)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 7',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang7}</Typography>,
          children: [{ id: '8.1', label: '(12)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 8',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang8}</Typography>,
          children: [{ id: '8.1', label: '(13)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 9',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang9}</Typography>,
          children: [{ id: '8.1', label: '(14)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 10',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang10}</Typography>,
          children: [{ id: '8.1', label: '(15)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 11',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang11}</Typography>,
          children: [{ id: '8.1', label: '(16)', align: 'left' }]
        },
        {
          id: '#8',
          label: 'Tháng 12',
          align: 'left',
          elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.thang12}</Typography>,
          children: [{ id: '8.1', label: '(17)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Mùa mưa',
      align: 'left',
      rowspan: 2,
      elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.muamua}</Typography>,
      children: [
        {
          id: '#10',
          children: [{ id: '#10.1', label: '(18)', align: 'left' }]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Mùa khô',
      align: 'left',
      rowspan: 2,
      elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.muakho}</Typography>,
      children: [
        {
          id: '#10',
          children: [{ id: '#10.1', label: '(19)', align: 'left' }]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Cả năm',
      align: 'left',
      rowspan: 2,
      elm: (row: any) => <Typography className='f_14'>{row.tongluong_nuocmua?.[0]?.canam}</Typography>,
      children: [
        {
          id: '#10',
          children: [{ id: '#10.1', label: '(20)', align: 'left' }]
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
           <RainWaterToolBar onExport={{ data: data, column: columnsTable }}/>
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
            actions={(row: any) => (
              <Box >
                <CreateRainWater isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
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

export default RainWater
