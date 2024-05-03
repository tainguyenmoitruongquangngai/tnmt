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
import ViewAmountRain1HourData from '../mua-hien-tai/form/Mua1H'
import ViewAmountRain6HourData from '../mua-hien-tai/form/Mua6H'
import ViewAmountRain12HourData from '../mua-hien-tai/form/Mua12H'
import ViewAmountRain24HourData from '../mua-hien-tai/form/Mua24H'

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
    async function getDataDuLieuTram() {
      setLoading(true)
      await getData('DuLieuTram/danh-sach')
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

    getDataDuLieuTram()
  }, [postSuccess])
  
  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 2,
     
    },
    {
      id: 'tenTram',
      label: 'Tên trạm đo mưa',
      align: 'center',
      minWidth: 150,
      pinned: 'left'
      
    },

    {
      id: '#',
      label: 'Tổng lượng mưa theo thời đoạn mưa 1h',
      align: 'left',
     
      children: [
        { id: 'luongMua1Gio', label: 'Lượng mưa 1 giờ', align: 'left', },
        { id: '#2.2', label: 'Ngưỡng mưa', align: 'left',   },
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:(row:any)=>(<>
        <Button>
          <ViewAmountRain1HourData data={row}/>
        </Button></>)},
      ]
    },
    {
      id: '#',
      label: 'Tổng lượng mưa theo thời đoạn mưa 6h',
      align: 'left',
     
      children: [
        { id: '#2.1', label: 'Lượng mưa 6 giờ', align: 'left', },
        { id: '#2.2', label: 'Ngưỡng mưa', align: 'left',   },
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:(row:any)=>(<>
          <Button>
            <ViewAmountRain6HourData data={row}/>
          </Button></>)},
      ]
    },

    {
      id: '#',
      label: 'Tổng lượng mưa theo thời đoạn mưa 12h',
      align: 'left',
     
      children: [
        { id: '#2.1', label: 'Lượng mưa 12 giờ', align: 'left', },
        { id: '#2.2', label: 'Ngưỡng mưa', align: 'left',   },
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:(row:any)=>(<>
          <Button>
            <ViewAmountRain12HourData data={row}/>
          </Button></>)},
      ]
    },

    {
      id: '#',
      label: 'Tổng lượng mưa theo thời đoạn mưa 24h',
      align: 'left',
     
      children: [
        { id: '#2.1', label: 'Lượng mưa 24 giờ', align: 'left', },
        { id: '#2.2', label: 'Ngưỡng mưa', align: 'left',   },
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:(row:any)=>(<>
          <Button>
            <ViewAmountRain24HourData data={row}/>
          </Button></>)},
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
                <DeleteData url={'DuLieuTram'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}

   
    </Paper>
  )
}

export default LuongMuaHienTai
