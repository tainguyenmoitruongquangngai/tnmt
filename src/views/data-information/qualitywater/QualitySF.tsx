import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material'
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import { getData } from 'src/api/axios'

import dynamic from 'next/dynamic'
import BoxLoading from 'src/@core/components/box-loading'
import ToolBar from '../ao-khong-san-lap/toolbar'
import DeleteData from 'src/@core/components/delete-data'

//khai bao map
const Map = dynamic(() => import("src/@core/components/map"), { ssr: false });

const QualitySuface = () => {
// Gọi dữ liệu lên bảng gọi API về
const [data, setData] = useState<any[]>([])

const [loading, setLoading] = useState(false)


const [mapCenter] = useState([15.012172, 108.676488])
const [mapZoom] = useState(9)
const [selected, setSelected] = React.useState(true)


const [postSuccess, setPostSuccess] = useState(false);
const handlePostSuccess = () => {
  setPostSuccess(prevState => !prevState);
};
useEffect(() => {
  async function getDataNN_LuuVucSong() {
    setLoading(true)
    await getData('CLN_NuocMat/danh-sach')

    // await getData('MuaHienTai/danh-sach') ==> thay cụm từ trước danh sách bằng tên file controller trong tím, bỏ chữ controller

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

//
console.log(data);

// hết gọi dữ liệu lên bảng gọi API về

// khai báo bảng
const columnsTable: TableColumn[] = [
  {
    id: 'stt',
    label: 'STT',
    rowspan: 2,
      children: [
        {
          id: '#1',
          children: [{ id: '#1.1', label: '(1)', align: 'left' }]
        }
      ]
   
  },

  {
    id: 'thoiGianQuanTrac',
    label: 'Thời gian quan trắc',
    rowspan: 2,
      children: [
        {
          id: '#1',
          children: [{ id: '#1.1', label: '(2)', align: 'left' }]
        }
      ]
   
  },
  {
    id: 'luuVucSong',
    label: <>Lưu vực sông <br/> Vùng/Tỉnh</>,
    align: 'left',
    rowspan: 2,
    minWidth: 120,
    children: [
      {
        id: '#2',
        children: [{ id: '#1.1', label: '(3)', align: 'left' }]
      }
    ]
    
  },
  {
    id: 'songSuoiHoChua',
    label: <>Sông, suối <br/> hồ chứa</>,
    align: 'left',
    rowspan: 2,
    minWidth: 120,
      children: [
        {
          id: '#3',
          children: [{ id: '#1.1', label: '(4)', align: 'left' }]
        }
      ]
    
  },

  {
    id: 'viTriQuanTrac',
    label: <>Vị trí <br/> quan trắc</>,
    align: 'left',
    rowspan: 2,
    minWidth: 120,
    children: [
      {
        id: '#4',
        children: [{ id: '#1.1', label: '(5)', align: 'left' }]
      }
    ]
    
  },
 
  {
    id: '#',
    label: <>Kết quả phân tích <br/> chỉ tiêu pH [-]</>,
    align: 'left',
    children: [
      {
        id: 'phMax',
        label: 'Lớn nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.phMax}</Typography>,
        children: [{ id: '#6.1', label: '(6)', align: 'left' }]
      },
      {
        id: 'phMin',
        label: 'Nhỏ nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.phMin}</Typography>,
        children: [{ id: '#7.1', label: '(7)', align: 'left' }]
      },
      {
        id: '#8',
        label: 'Trung bình',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{(row.phMax+row.phMin)/2}</Typography>,
        children: [{ id: '#8.1', label: '(8)', align: 'left' }]
      },
    ]
  },
  {
    id: '#',
    label: <>Kết quả phân tích <br/> chỉ tiêu BOD5 [mg/l]</>,
    align: 'left',
    children: [
      {
        id: 'boD5Max',
        label: 'Lớn nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.boD5Max}</Typography>,
        children: [{ id: '#6.1', label: '(9)', align: 'left' }]
      },
      {
        id: 'boD5Min',
        label: 'Nhỏ nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.boD5Min}</Typography>,
        children: [{ id: '#7.1', label: '(10)', align: 'left' }]
      },
      {
        id: '#8',
        label: 'Trung bình',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{(row.boD5Max+row.boD5Min)/2}</Typography>,
        children: [{ id: '#8.1', label: '(11)', align: 'left' }]
      },
    ]
  },
  {
    id: '#',
    label: <>Kết quả phân tích <br/> chỉ tiêu COD [mg/l]</>,
    align: 'left',
    children: [
      {
        id: 'codMax',
        label: 'Lớn nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.codMax}</Typography>,
        children: [{ id: '#6.1', label: '(12)', align: 'left' }]
      },
      {
        id: 'codMin',
        label: 'Nhỏ nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.codMin}</Typography>,
        children: [{ id: '#7.1', label: '(13)', align: 'left' }]
      },
      {
        id: '#',
        label: 'Trung bình',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{(row.codMax+row.codMin)/2}</Typography>,
        children: [{ id: '#8.1', label: '(14)', align: 'left' }]
      },
    ]
  },

  {
    id: '#',
    label: <>Kết quả phân tích <br/> chỉ tiêu DO [mg/l]</>,
    align: 'left',
    children: [
      {
        id: 'doMax',
        label: 'Lớn nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.doMax}</Typography>,
        children: [{ id: '#6.1', label: '(15)', align: 'left' }]
      },
      {
        id: 'doMin',
        label: 'Nhỏ nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.doMin}</Typography>,
        children: [{ id: '#7.1', label: '(16)', align: 'left' }]
      },
      {
        id: '#',
        label: 'Trung bình',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{(row.doMax+row.doMin)/2}</Typography>,
        children: [{ id: '#8.1', label: '(17)', align: 'left' }]
      },
    ]
  },
  {
    id: '#',
    label: <>Kết quả phân tích <br/> chỉ tiêu Tổng Phosphor TP [mg/l]</>,
    align: 'left',
    children: [
      {
        id: 'phosphorTPMax',
        label: 'Lớn nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.phosphorTPMax}</Typography>,
        children: [{ id: '#6.1', label: '(18)', align: 'left' }]
      },
      {
        id: 'phosphorTPMin',
        label: 'Nhỏ nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.phosphorTPMin}</Typography>,
        children: [{ id: '#7.1', label: '(19)', align: 'left' }]
      },
      {
        id: '#8',
        label: 'Trung bình',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{(row.phosphorTPMax+row.phosphorTPMin)/2}</Typography>,
        children: [{ id: '#8.1', label: '(20)', align: 'left' }]
      },
    ]
  },
  {
    id: '#',
    label: <>Kết quả phân tích <br/> chỉ tiêu Tổng Nito TN [mg/l]</>,
    align: 'left',
    children: [
      {
        id: 'nitoTNMax',
        label: 'Lớn nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.nitoTNMax}</Typography>,
        children: [{ id: '#6.1', label: '(21)', align: 'left' }]
      },
      {
        id: 'nitoTNMin',
        label: 'Nhỏ nhất',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{row.nitoTNMin}</Typography>,
        children: [{ id: '#7.1', label: '(22)', align: 'left' }]
      },
      {
        id: '#8',
        label: 'Trung bình',
        align: 'left',
        elm: (row: any) => <Typography className='f_14'>{(row.nitoTNMax+row.nitoTNMin)}</Typography>,
        children: [{ id: '#8.1', label: '(23)', align: 'left' }]
      },
    ]
  },

  {
    id: 'ghiChu',
    label: 'Ghi chú',
    align: 'left',
    rowspan: 2,

    // thêm dòng ghi chú số thứ tự cột
    children: [
      {
        id: '#2',
        children: [{ id: '#1.1', label: '(24)', align: 'left' }]
      }
    ]

 // hết thêm dòng ghi chú số thứ tự cột

  },
  {align: 'center', id: 'actions', label: 'Thao tác', minWidth: 150, rowspan: 2,
  children: [
    {
      id: '#2',
      children: [{ id: '#1.1', label: '(25)', align: 'left' }]
    }
  ]

}
]

return (
  <Paper sx={{ p: 8 }}>
    
    <Grid xs={12} md={12} sx={{ height: 'calc(50vh - 82px)' }}>
            <Paper elevation={3} sx={{ height: '100%', position: 'relative' }}>
              <Button
                className='toggle-legend'
                variant='outlined'
                onClick={() => {
                  setSelected(!selected)
                }}
              >
                {selected ? <KeyboardDoubleArrowDown /> : <KeyboardDoubleArrowUp />}
              </Button>
              <Map center={mapCenter} zoom={mapZoom} showLabel={false} mapData={null} loading={false} />
            </Paper>
          </Grid>
    <Grid className='_text_center'>
     
    </Grid>
    {/* <CreateReport2 isEdit={false} setPostSuccess={handlePostSuccess}/> */}
    {loading ? (
      <BoxLoading />
    ) : (
      <Grid className='_text_center' sx={{ mt: 3 }}>
        {/* <ToolBar onExport={{ data: data, column: columnsTable }} /> là xuất file xls */}
        <ToolBar onExport={{ data: data, column: columnsTable }} />
        <TableComponent
          columns={columnsTable}
          rows={data}
          loading={loading}
          pagination
          actions={(row: any) => (
            <Box >
              <DeleteData url={'CLN_NuocMat'} data={row} setPostSuccess={handlePostSuccess} />

              {/* <DeleteData url={'NN_LuuVucSong'} data={row} setPostSuccess={handlePostSuccess} /> chữ NN_LuuVucSong là địa chỉ API CLN_NuocMat/danh-sach (bỏ chữ /danh-sach)  */}
            </Box>
          )}
        />
      </Grid>
    )}

 
  </Paper>
)
}

export default QualitySuface
