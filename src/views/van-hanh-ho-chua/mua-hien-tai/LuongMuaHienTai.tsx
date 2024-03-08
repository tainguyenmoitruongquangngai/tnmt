import Paper from '@mui/material/Paper'
import { Grid,  Box, Button, } from '@mui/material'

import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'

import TableComponent, { TableColumn } from 'src/@core/components/table'

import DeleteData from 'src/@core/components/delete-data'
import ToolBar from './toolbar'

import dynamic from 'next/dynamic'
import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material'
import React from 'react'

const Map = dynamic(() => import("src/@core/components/map"), { ssr: false });

const LuongMuaHienTai = () => {
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
      rowspan: 2,
     
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
        { id: '#2.1', label: 'Thuộc LVS', align: 'left', },
        { id: '#2.2', label: 'F_lv (km2)', align: 'left',   },
        { id: '#2.3', label: 'X tbnăm (mm)', align: 'left',    },
        { id: '#2.4', label: (<span> Qo tbnăm <br/> (m3/s) </span>), align: 'left', rowspan: 1, } 
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
        { id: '#4.1', label: (<span> MNDBT  <br/> (m) </span> ), align: 'left',   rowspan: 2,},
        { id: '#4.2', label: 'MNC (m)', align: 'left',   rowspan: 2,},
        { id: '#4.3', label: (<span> MN Max  <br/> (P=0,02%) </span> ), align: 'left', rowspan: 2, },
       
        { id: '#4.3', label: (<span> MN Max  <br/> (P=0,1%) </span> ),  align: 'left',   rowspan: 2, },
        { id: '#4.3', label: (<span> MN Max  <br/> (P=0,2%) </span> ), align: 'left',   rowspan: 2, },
        { id: '#4.3', label: (<span> MN Max  <br/> (P=0,5%) </span> ), align: 'left',   rowspan: 2, },
        { id: '#4.3', label: (<span> W toàn bộ <br/> (Wtb) </span> ), align: 'left',   rowspan: 2, },
        { id: '#4.3', label: (<span> W hữu ích <br/>(Whi)</span> ), align: 'left',   rowspan: 2, },
        { id: '#4.3', label: (<span> W năm <br/>(Wni)</span> ), align: 'left',   rowspan: 2, },
        { id: '#4.3', label: (<span> W nhiều năm <br/>(Wnni)</span> ), align: 'left',   rowspan: 2, },
        { id: '#4.4', label: (<span> W chết <br/> (Wc)</span> ), align: 'left',   rowspan: 2, }  
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

export default LuongMuaHienTai
