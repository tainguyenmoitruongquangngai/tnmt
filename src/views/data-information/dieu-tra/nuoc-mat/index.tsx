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
import CreateSLDTKTSDN_NuocMat from '../../create-form/CreateSLDTKTSDN_NuocMat'
import ToolBar from '../nuoc-mat/toolbar'
import DeleteData from 'src/@core/components/delete-data'

const SLDTKTSDN_NuocMat = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataSLDTKTSDN_NuocMat() {
      setLoading(true)
      await getData('SLDTKTSDN_NuocMat/danh-sach')
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

    getDataSLDTKTSDN_NuocMat()
  }, [postSuccess])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 3
    },
    {
      id: 'tenChuHoCT',
      label: 'Tên chủ hộ/Công trình',
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
      id: 'loaiCongTrinh',
      label: 'Loại công trình',
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
      id: 'thuocLVS',
      label: 'Thuộc lưu vực sông',
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
          elm: (row: any) => <Typography className='f_14'>{row.xa == null ? "-" : row.xa}</Typography>,
          children: [{ id: '#4.1', label: '(4)', align: 'left' }]
        },
        {
          id: 'huyen',
          label: 'Huyện',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.huyen == null ? "-" : row.huyen}</Typography>,
          children: [{ id: '#5.1', label: '(5)', align: 'left' }]
        }
      ]
    },
    {
      id: 'tenNguonNuocKhaiThac',
      label: 'Tên nguồn nước khai thác',
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
      id: 'mucDichSD',
      label: 'Mục đích sử dụng',
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
      id: 'uocTinhLuongNuocKT',
      label: 'Ước tính lượng nước khai thác (m3/ngày)',
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
      id: 'dienTichTuoi',
      label: 'Diện tích tưới (ha)',
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
      id: 'dienTichNuoiTrongThuySan',
      label: 'Diện tích nuôi trồng thủy sản (ha)',
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
      id: 'congSuatPhatDien',
      label: 'Công suất phát điện (kW)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#11',
          children: [{ id: '#11.1', label: '(11)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soHoDanDuocCapNuoc',
      label: 'Số hộ dân được cấp nước',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#12',
          children: [{ id: '#12.1', label: '(12)', align: 'left' }]
        }
      ]
    },
    {
      id: 'cheDoKT',
      label: 'Chế độ khai thác',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#13',
          children: [{ id: '#13.1', label: '(13)', align: 'left' }]
        }
      ]
    },
    {
      id: 'filePDF',
      label: 'File phiếu điều tra (pdf)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#14',
          children: [{ id: '#14.1', label: '(14)', align: 'left' }]
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
          id: '#15',
          children: [{ id: '#15.1', label: '(15)', align: 'left' }]
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
        PHIẾU ĐIỀU TRA TỔNG HỢP HIỆN TRẠNG KHAI THÁC, SỬ DỤNG NƯỚC MẶT
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
                <CreateSLDTKTSDN_NuocMat isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'SLDTKTSDN_NuocMat'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default SLDTKTSDN_NuocMat
