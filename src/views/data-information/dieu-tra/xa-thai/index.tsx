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

const DieuTraXaThai = () => {
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
      label: 'Tên chủ hộ/ công trình',
      align: 'left',
      rowspan: 2,
      minWidth: 160,
      children: [
        {
          id: '#1',
          children: [{ id: '#1.1', label: '(1)', align: 'left' }]
        }
      ]
    },
   
    {
      id: 'ngayKetThuc',
      label: 'Loại hình nước thải',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(2)', align: 'left' }]
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
          children: [{ id: '#4.1', label: '(3)', align: 'left' }]
        },
        {
          id: '#5',
          label: 'Huyện',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.huyen?.tenHuyen}</Typography>,
          children: [{ id: '#5.1', label: '(4)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: 'Tên nguồn nước khai thác',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(5)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: 'Mục đích sử dụng',
      align: 'left',
      minWidth: 250,
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(6)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Ước tính <br/> lượng nước <br/>khai thác <br/> (m3/ngày) </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(7)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Diện tích <br/> tưới <br/> (ha) </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(8)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Diện tích <br/> nuôi trồng <br/> thủy sản <br/> (ha) </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(9)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Công suất <br/> phát điện <br/> (kW) </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(10)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Số hộ dân <br/> được cấp <br/> nước </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(11)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Chế độ <br/> khai thác </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(12)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: 'File phiếu điều tra (pdf) ',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(13)', align: 'left' }]
        }
      ]
    }, 

    {
      id: 'ngayKetThuc',
      label: 'Thao tác ',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(13)', align: 'left' }]
        }
      ]
    }, 

    {
      id: 'ngayKetThuc',
      label: 'Ghi chú ',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(14)', align: 'left' }]
        }
      ]
    }, 



   
  ]

  return (
    <Paper sx={{ p: 8 }}>
      <Header />

      <Grid className='_text_center'>
        <Typography className='font-weight-bold ' variant='h6'>
          BÁO CÁO
        </Typography>
        <Typography className='font-weight-bold ' variant='h6'>
          PHIẾU ĐIỀU TRA TỔNG HỢP HIỆN TRẠNG XẢ NƯỚC THẢI VÀO NGUỒN NƯỚC
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

export default DieuTraXaThai
