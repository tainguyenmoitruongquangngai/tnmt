import Paper from '@mui/material/Paper'
import { Grid, Typography, Box, Radio, FormControlLabel, } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import dayjs from 'dayjs'
import TableComponent, { TableColumn } from 'src/@core/components/table'

import DeleteData from 'src/@core/components/delete-data'
import ToolBar from './toolbar'
import { red } from '@mui/material/colors'

const HinhTheThoiTietGayMua = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataVHHC_LuuVucSong() {
      setLoading(true)
      
      //API de lay du lieu tu sql: 'VHHC_LuuVucSong/danh-sach'
      await getData('VHHC_LuuVucSong/danh-sach')
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

    getDataVHHC_LuuVucSong()
  }, [postSuccess])

 

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 3
    },
    {
      //Id là trường dữ liệu lưu trong csdl
      id: 'luuVucSong',
      label: 'Năm',
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
      //Id là trường dữ liệu lưu trong csdl
      id: 'dienTichLuuVuc',
      label: 'Trận lũ',
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
      id: 'chieuDaiSongChinh',
     label: (<span> Số thứ tự <br/>  trận lũ <br/>  trong năm</span> ),
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
      id: 'NhanDangLu',
      label: 'Nhận dạng lũ',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3',
          children: [{ id: '#3.1', label: '(4)', align: 'left' }]
        }
      ]
    },


    {
      id: 'HinhTheThoiTiet',
      label: 'Hình thế thời tiết',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#4',
          children: [{ id: '#4.1', label: '(5)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soDoCacCT',
      label: 'Ngày hình thành',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#5',
          children: [{ id: '#5.1', label: '(6)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soQuyTrinh',
      label: (<span>Tâm bão <br/>  vùng ảnh hưởng mạnh <br/> </span>),
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#6',
          children: [{ id: '#6.1', label: '(7)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soQuyTrinh',
      label: (<span>Ngày đổ bộ <br/>  / tác động trực tiếp <br/> </span>),
      
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#6',
          children: [{ id: '#6.1', label: '(8)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soQuyTrinh',
      label: (<span>Vị trí đổ bộ <br/>  / tác động trực tiếp <br/> </span>),
      
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#6',
          children: [{ id: '#6.1', label: '(9)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soQuyTrinh',
      label: (<span>Cấp độ bão<br/>  /  độ mạnh <br/> </span>),
      
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#6',
          children: [{ id: '#6.1', label: '(10)', align: 'left' }]
        }
      ]
    },
    {
      id: 'soQuyTrinh',
      label: (<span>Tổng <br/>lượng mưa <br/> (mm) </span>),
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#6',
          children: [{ id: '#6.1', label: '(11)', align: 'left' }]
        }
      ]
    },
    {
      id: 'tepDinhKem',
      label: 'Xem chi tiết',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#7',
          children: [{ id: '#7.1', label: '(12)', align: 'left' }]
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
          id: '#8',
          children: [{ id: '#8.1', label: '(13)', align: 'left' }]
        }
      ]
    },
    {align: 'center', id: 'actions', label: 'Thao tác', minWidth: 150, rowspan: 3 }
  ]

  return (
    <Paper sx={{ p: 8 }}>
      

      <Grid className='_text_center' color={red}>
        <Typography className='font-weight-bold ' variant='h6'>
          CÁC ĐẶC TRƯNG HÌNH THẾ THỜI TIẾT GÂY MƯA LỚN TRÊN CÁC LƯU VỰC SÔNG TỈNH QUẢNG NGÃI
        </Typography>
       
        

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
         

      </Grid>
      <Grid className='_text_left'>
      <FormControlLabel value="female" control={<Radio />} label="(A) Bão hoặc ATNĐ" />  
       
      <FormControlLabel value="female" control={<Radio />} label="(B) Bão, ATNĐ + Không khí lạnh" />  
      <FormControlLabel value="female" control={<Radio />} label="(C) Hội tụ nhiệt đới hoặc rãnh áp thấp + Không khí lạnh" />  
       
        <FormControlLabel value="female" control={<Radio />} label="(D) Hội tụ nhiệt đới hoặc rãnh áp thấp + Không khí lạnh" />  
    
       
        <FormControlLabel value="female" control={<Radio />} label="(E) Hội tụ nhiệt đới hoặc rãnh áp thấp + Không khí lạnh" />  
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
             
                <DeleteData url={'VHHC_LuuVucSong'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

   
    </Paper>
  )
}

export default HinhTheThoiTietGayMua
