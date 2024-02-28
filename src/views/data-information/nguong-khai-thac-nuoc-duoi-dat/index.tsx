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
import CreateNN_NguongKhaiThacNDD from '../create-form/CreateNN_NguongKhaiThacNDD'
import DeleteData from 'src/@core/components/delete-data'
import ToolBar from './toolbar'

const NN_NguongKhaiThacNDD = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataNN_NguongKhaiThacNDD() {
      setLoading(true)
      await getData('NN_NguongKhaiThacNDD/danh-sach')
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

    getDataNN_NguongKhaiThacNDD()
  }, [postSuccess])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 3
    },
    {
      id: 'tenTCN',
      label: 'Tên tầng chứa nước',
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
      id: 'loaiChuaNuoc',
      label: 'Loại chứa nước (lỗ hổng, khe nứt)',
      align: 'left',
      rowspan: 2,
      minWidth: 300,
      children: [
        {
          id: '#2',
          children: [{ id: '#2.1', label: '(2)', align: 'left' }]
        }
      ]
    },
    {
      id: 'xa',
      label: 'Xã',
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
      id: 'huyen',
      label: 'Huyện',
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
      id: 'tinhTP',
      label: 'Tỉnh/Thành phố',
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
      id: 'dienTichPhanBo',
      label: 'Diện tích phân bố (km2)',
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
      id: 'khoangChieuSauPhanBo',
      label: 'Khoảng chiều sâu phân bố (m)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#7',
          children: [{ id: '#7.1', label: '(7)', align: 'left' }]
        }
      ]
    },
    {
      id: 'nguongGHKTLuuLuong',
      label: 'Ngưỡng GHKT về mực nước (m)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#8',
          children: [{ id: '#8.1', label: '(8)', align: 'left' }]
        }
      ]
    },
    {
      id: 'nguongGHKTMucNuoc',
      label: 'Ngưỡng GHKT về mực nước (m)',
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
      id: 'qdPheDuyetNguongGioiHanKT',
      label: 'QĐ phê duyệt ngưỡng giới hạn KT',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#10',
          children: [{ id: '#10.1', label: '(10)', align: 'left' }]
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
          id: '#11',
          children: [{ id: '#11.1', label: '(11)', align: 'left' }]
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
        THÔNG TIN DỮ LIỆU VỀ NGƯỠNG KHAI THÁC NƯỚC DƯỚI ĐẤT TỈNH QUẢNG NGÃI
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
                <CreateNN_NguongKhaiThacNDD isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'NN_NguongKhaiThacNDD'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default NN_NguongKhaiThacNDD
