import Paper from '@mui/material/Paper'
import { Grid, Typography, Box, } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import dayjs from 'dayjs'
import TableComponent, { TableColumn } from 'src/@core/components/table'

import DeleteData from 'src/@core/components/delete-data'
import ToolBar from './toolbar'

const HoChuaVanHanh = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataNN_LuuVucSong() {
      setLoading(true)
      await getData('NN_LuuVucSong/danh-sach')
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

    getDataNN_LuuVucSong()
  }, [postSuccess])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 2
    },
    {
      id: 'TenHoChua',
      label: 'Tên hồ chứa',
      align: 'left',
      rowspan: 2,
      minWidth: 120,
      
    },

    {
      id: 'dien_tich_luu_vuc',
      label: 'Các đặc trưng lưu vực',
      align: 'left',
     
      children: [
        { id: '#2.1', label: 'Thuộc LVS', align: 'left',   },
        { id: '#2.2', label: 'F_lv (km2)', align: 'left',   },
        { id: '#2.3', label: 'X tbnăm (mm)', align: 'left',    },
        { id: '#2.4', label: 'Qo tbnăm (m3/s)', align: 'left', rowspan: 1,   }  
      ]
    },

    {
      id: 'luu-luong-ung-tan-suat',
      label: 'Lưu lượng đỉnh lũ ứng với tần suất:P=%',
      align: 'left',
      children: [
        { id: '#3.1', label: 'P=0,02%', align: 'left',   rowspan: 2,},
        { id: '#3.2', label: 'P=0,1%', align: 'left',   rowspan: 2,},
        { id: '#3.3', label: 'P=0,2%', align: 'left',   rowspan: 2, },
        { id: '#3.4', label: 'P=0,5%', align: 'left',   rowspan: 2, }  
      ]
    },

    {
      id: 'ho-chua',
      label: 'Hồ chứa',
      align: 'left',
      children: [
        { id: '#4.1', label: 'MNDBT (m)', align: 'left',   rowspan: 2,},
        { id: '#4.2', label: 'MNC (m)', align: 'left',   rowspan: 2,},
        { id: '#4.3', label: 'MN Max (P=0,02%)', align: 'left',   rowspan: 2, },
        { id: '#4.3', label: 'MN Max (P=0,1%)', align: 'left',   rowspan: 2, },
        { id: '#4.3', label: 'MN Max (P=0,2%)', align: 'left',   rowspan: 2, },
        { id: '#4.3', label: 'MN Max (P=0,5%)', align: 'left',   rowspan: 2, },
        { id: '#4.3', label: 'W toàn bộ (Wtb)', align: 'left',   rowspan: 2, },
        { id: '#4.3', label: 'W hữu ích (Whi)', align: 'left',   rowspan: 2, },
        { id: '#4.3', label: 'W năm (Wni)', align: 'left',   rowspan: 2, },
        { id: '#4.3', label: 'W nhiều năm (Wnni)', align: 'left',   rowspan: 2, },
        { id: '#4.4', label: 'W chết (Wc)', align: 'left',   rowspan: 2, }  
      ]
    },
  
    {
      id: 'luu-luong-qua-nha-may',
      label: 'Lưu lượng qua nhà máy',
      align: 'left',
      children: [
        { id: '#5.1', label: 'Q đảm bảo (Qđb)', align: 'left',   rowspan: 2,},
        { id: '#5.2', label: 'Q nhỏ nhất (Qmin)', align: 'left',   rowspan: 2,},
        { id: '#5.3', label: 'Q lớn nhất (Qmax)', align: 'left',   rowspan: 2, }
     ]
    },
  

   
    {
      id: 'ghiChu',
      label: 'Ghi chú',
      align: 'left',
      rowspan: 2,
      
    },
    {align: 'center', id: 'actions', label: 'Thao tác', minWidth: 150, rowspan: 3 }
  ]

  return (
    <Paper sx={{ p: 8 }}>
      

      <Grid className='_text_center'>
        <Typography className='font-weight-bold ' variant='h6'>
          BẢNG THÔNG SỐ KỸ THUẬT CỦA CÁC HỒ CHỨA      
        </Typography>
        <Typography className='font-weight-bold ' variant='h6'>
                    
          (Ban hành kèm theo Quyết định số 911/QĐ-TTg, ngày 25 tháng 7 năm 2018 của Thủ tướng Chính phủ)
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
             
                <DeleteData url={'NN_LuuVucSong'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

   
    </Paper>
  )
}

export default HoChuaVanHanh
