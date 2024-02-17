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

const KTNBIENPhaiCoGiayPhep = () => {
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
      label: 'Tên công trình',
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
      id: 'tenTram',
      label: (<> Tên tổ chức <br/> cá nhân <br/> chủ công trình </>)  ,
      align: 'left',
      rowspan: 2,
      minWidth: 160,
      children: [
        {
          id: '#1',
          children: [{ id: '#1.1', label: '(2)', align: 'left' }]
        }
      ]
    },



    {
      id: 'ngayKetThuc',
      label: 'Năm vận hành',
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
      label: 'Địa chỉ',
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
      id: '#',
      label: 'Vị trí tọa độ',
      align: 'left',
      children: [
        {
          id: '#4',
          label: 'X',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.xa?.tenXa}</Typography>,
          children: [{ id: '#4.1', label: '(6)', align: 'left' }]
        },
        {
          id: '#5',
          label: 'Y',
          align: 'left',
          minWidth: 150,
          elm: (row: any) => <Typography className='f_14'>{row.huyen?.tenHuyen}</Typography>,
          children: [{ id: '#5.1', label: '(7)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: 'Tên vùng biển',
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
      label: 'Chế độ lấy nước',
      align: 'left',
      minWidth: 150,
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
      label: (<> Điểm <br/> lấy nước <br/> (xa bờ, ven bờ) </>)  ,
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
      label: (<> Công suất <br/> thô <br/> (MW) </>)  ,
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
      label: (<> Công suất <br/> tinh <br/> (MW) </>)  ,
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
      label: (<> Số tổ máy </>)  ,
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
      label: (<> Lưu lượng <br/> khai thác <br/> lớn nhất <br/> (m3/ngày đêm) </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(14)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Số <br/> máy bơm </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(15)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Điểm xả nước <br/> làm mát (xa bờ, ven bờ) </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(16)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Lưu lượng xả <br/> lớn nhất <br/> (m3/ngày đêm) </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(17)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Công suất <br/> thiết kế <br/> (m3/s) </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(18)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Phương thức <br/> khai thác </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(19)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Năm <br/> vận hành </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(20)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Mục đích <br/> khai thác </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(21)', align: 'left' }]
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
          children: [{ id: '#3.1', label: '(22)', align: 'left' }]
        }
      ]
    },

    
    {
      id: 'ngayKetThuc',
      label: (<> Số <br/> giấy phép </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(23)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> Ngày <br/> quyết định </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(24)', align: 'left' }]
        }
      ]
    },


    {
      id: 'ngayKetThuc',
      label: (<> Thời gian <br/> hiệu lực </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(25)', align: 'left' }]
        }
      ]
    },

    {
      id: 'ngayKetThuc',
      label: (<> ID <br/> CT trên <br/> hệ thống </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(26)', align: 'left' }]
        }
      ]
    },


    {
      id: 'ngayKetThuc',
      label: (<> Thời gian <br/> bắt đầu <br/> kết nối </>)  ,
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(27)', align: 'left' }]
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
          children: [{ id: '#3.1', label: '(28)', align: 'left' }]
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
          children: [{ id: '#3.1', label: '(29)', align: 'left' }]
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
          children: [{ id: '#3.1', label: '(30)', align: 'left' }]
        }
      ]
    }, 



   
  ]

  return (
    <Paper sx={{ p: 1 }}>
      <Header />

      <Grid className='_text_center'>
        <Typography className='font-weight-bold ' variant='h6'>
          BÁO CÁO
        </Typography>
        <Typography className='font-weight-bold ' variant='h6'>
          CÔNG TRÌNH KHAI THÁC NƯỚC BIỂN THUỘC TRƯỜNG HỢP PHẢI CÓ GIẤY PHÉP
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

export default KTNBIENPhaiCoGiayPhep
