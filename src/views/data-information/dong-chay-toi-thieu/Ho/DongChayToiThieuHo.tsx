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
import ToolBar from '../../dong-chay-toi-thieu/Ho/toolbar'
import CreateNN_DCTT_HaDuHoChua from '../../create-form/CreateNN_DCTT_HaDuHoChua'

const NN_DCTT_HaDuHoChua = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataNN_DCTT_HaDuHoChua() {
      setLoading(true)
      await getData('NN_DCTT_HaDuHoChua/danh-sach')
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

    getDataNN_DCTT_HaDuHoChua()
  }, [postSuccess])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 3
    },
    {
      id: 'tenCT',
      label: 'Tên công trình',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#1',
          children: [{ id: '#1.1', label: '(1)', align: 'left' }]
        }
      ]
    },
    {
      id: 'thuocLVS',
      label: 'Thuộc lưu vực sông',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#2',
          children: [{ id: '#2.1', label: '(2)', align: 'left' }]
        }
      ]
    },
    {
      id: 'xaPhuongTT',
      label: 'Xã/Phường/Thị trấn',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(3)', align: 'left' }]
        }
      ]
    },
    {
      id: 'huyenTP',
      label: 'Huyện/ Thành phố',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#4',
          children: [{ id: '#4.1', label: '(4)', align: 'left' }]
        }
      ]
    },
    {
      id: 'nguonNuocKhaiThac',
      label: 'Nguồn nước khai thác',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#5',
          children: [{ id: '#5.1', label: '(5)', align: 'left' }]
        }
      ]
    },
    
    {
      id: 'qttSauDap',
      label: 'Qtt sau đập (m3/s)',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#6',
          children: [{ id: '#6.1', label: '(6)', align: 'left' }]
        }
      ]
    },
    {
      id: 'qttSauCT',
      label: 'Qtt sau công trình (m3/s)',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#7',
          children: [{ id: '#7.1', label: '(7)', align: 'left' }]
        }
      ]
    },
    {
      id: 'qttQuyDinhKhac',
      label: 'Qtt quy định khác (m3/s)',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#8',
          children: [{ id: '#8.1', label: '(8)', align: 'left' }]
        }
      ]
    },
    {
      id: 'loaiHinhCT',
      label: 'Loại hình công trình',
      align: 'left',
      rowspan: 2,
      minWidth: 200,
      children: [
        {
          id: '#9',
          children: [{ id: '#9.1', label: '(9)', align: 'left' }]
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
        Thống kê giá trị dòng chảy tối thiểu ở hạ du các hồ chứa, đập dâng tỉnh Quảng Ngãi
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
                <CreateNN_DCTT_HaDuHoChua isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'NN_DCTT_HaDuHoChua'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default NN_DCTT_HaDuHoChua
