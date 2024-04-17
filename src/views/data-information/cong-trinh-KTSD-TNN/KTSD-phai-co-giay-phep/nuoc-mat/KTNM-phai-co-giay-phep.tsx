import Paper from '@mui/material/Paper'
import { Grid, Typography, Box, } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Header from '../../../header'
import Footer from '../../../footer'
import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import dayjs from 'dayjs'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import DeleteData from 'src/@core/components/delete-data'
import ToolBar from '../../../cong-trinh-KTSD-TNN/KTSD-phai-co-giay-phep/nuoc-mat/toolbar'
import CreateCTKTSDN_PCGP_NuocMat from '../../../create-form/CreateCTKTSDN_PCGP_NuocMat'

const CTKTSDN_PCGP_NuocMat = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataCTKTSDN_PCGP_NuocMat() {
      setLoading(true)
      await getData('CTKTSDN_PCGP_NuocMat/danh-sach')
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

    getDataCTKTSDN_PCGP_NuocMat()
  }, [postSuccess])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
    },
    {
      id: 'tenCongTrinh',
      label: 'Tên công trình',
      align: 'left',
      children: [
        {
          id: '#1',
          children: [{ id: '#1.1', label: '(1)', align: 'left' }]
        }
      ]
    },
    {
      id: 'tenTCN',
      label: 'Tên tổ chức cá nhân',
      align: 'left',
      children: [
        {
          id: '#2',
          children: [{ id: '#2.1', label: '(2)', align: 'left' }]
        }
      ]
    },
    {
      id: 'namVanHanh',
      label: 'Năm vận hành',
      align: 'left',
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
      id: '#',
      label: 'Toạ độ',
      align: 'left',
      children: [
        {
          id: 'x',
          label: 'X',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.x == null ? "-" : row.x}</Typography>,
          children: [{ id: '#6.1', label: '(6)', align: 'left' }]
        },
        {
          id: 'y',
          label: 'Y',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.y == null ? "-" : row.y}</Typography>,
          children: [{ id: '#7.1', label: '(7)', align: 'left' }]
        }
      ]
    },
    {
      id: 'tenSong',
      label: 'Tên sông',
      align: 'left',
      children: [
        {
          id: '#8',
          children: [{ id: '#8.1', label: '(8)', align: 'left' }]
        }
      ]
    },
    {
      id: 'luuVucSong',
      label: 'Lưu vực sông',
      align: 'left',
      children: [
        {
          id: '#9',
          children: [{ id: '#9.1', label: '(9)', align: 'left' }]
        }
      ]
    },
    {
      id: 'caoTrinhDap',
      label: 'Cao trình đập (m)',
      align: 'left',
      children: [
        {
          id: '#10',
          children: [{ id: '#10.1', label: '(10)', align: 'left' }]
        }
      ]
    },
    {
      id: 'caoTrinhNguongTran',
      label: 'Cao trình ngưỡng tràn (m)',
      align: 'left',
      children: [
        {
          id: '#11',
          children: [{ id: '#11.1', label: '(11)', align: 'left' }]
        }
      ]
    },
    {
      id: 'luuLuongXaLuTK',
      label: 'Lưu lượng xả lũ thiết kế (m3/s)',
      align: 'left',
      children: [
        {
          id: '#12',
          children: [{ id: '#12.1', label: '(12)', align: 'left' }]
        }
      ]
    },
    {
      id: 'luuLuongXaLuKT',
      label: 'Lưu lượng xả lũ khai thác (m3/s)',
      align: 'left',
      children: [
        {
          id: '#13',
          children: [{ id: '#13.1', label: '(13)', align: 'left' }]
        }
      ]
    },
    {
      id: 'dungTichChet',
      label: 'Dung tích chết (triệu m3)',
      align: 'left',
      children: [
        {
          id: '#14',
          children: [{ id: '#14.1', label: '(14)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soToMay',
      label: 'Số tổ máy',
      align: 'left',
      children: [
        {
          id: '#15',
          children: [{ id: '#15.1', label: '(15)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soGP',
      label: 'Số giấy phép',
      align: 'left',
      children: [
        {
          id: '#16',
          children: [{ id: '#16.1', label: '(16)', align: 'left' }]
        }
      ]
    },
    {
      id: 'ngayQuyetDinh',
      label: 'Ngày quyết định',
      align: 'left',
      children: [
        {
          id: '#17',
          children: [{ id: '#17.1', label: '(17)', align: 'left' }]
        }
      ]
    },
    {
      id: 'thoiGianHieuLuc',
      label: 'Thời gian hiệu lực',
      align: 'left',
      children: [
        {
          id: '#18',
          children: [{ id: '#18.1', label: '(18)', align: 'left' }]
        }
      ]
    },
    {
      id: 'idCongTrinh',
      label: 'ID CT trên hệ thống',
      align: 'left',
      children: [
        {
          id: '#19',
          children: [{ id: '#19.1', label: '(19)', align: 'left' }]
        }
      ]
    },
    {
      id: 'thoiGianBatDauKetNoi',
      label: 'Thời gian bắt đầu kết nối',
      align: 'left',
      children: [
        {
          id: '#20',
          children: [{ id: '#20.1', label: '(20)', align: 'left' }]
        }
      ]
    },
    {
      id: 'cheDoKT',
      label: 'Chế độ khai thác',
      align: 'left',
      children: [
        {
          id: '#21',
          children: [{ id: '#21.1', label: '(21)', align: 'left' }]
        }
      ]
    },
    {
      id: 'ghiChu',
      label: 'Ghi chú',
      align: 'left',
      children: [
        {
          id: '#22',
          children: [{ id: '#22.1', label: '(22)', align: 'left' }]
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
        CÔNG TRÌNH KHAI THÁC NƯỚC MẶT THUỘC TRƯỜNG HỢP PHẢI CÓ GIẤY PHÉP
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
                <CreateCTKTSDN_PCGP_NuocMat isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'CTKTSDN_PCGP_NuocMat'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default CTKTSDN_PCGP_NuocMat
