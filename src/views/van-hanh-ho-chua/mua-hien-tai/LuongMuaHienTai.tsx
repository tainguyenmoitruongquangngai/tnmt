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
import ViewAmountRainData from './form'

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
  console.table(data);
  
  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
      rowspan: 2,
     
    },
    {
      id: 'TramMua',
      label: 'Trạm mưa',
      align: 'left',
      rowspan: 2,
      minWidth: 120,
      
    },

    {
      id: '#',
      label: 'Tổng lượng mưa theo thời đoạn mưa 1h',
      align: 'left',
     
      children: [
        { id: '#2.1', label: 'Lượng mưa 1 giờ', align: 'left', },
        { id: '#2.2', label: 'Ngưỡng mưa', align: 'left',   },
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:()=>(<>
        <Button>
          <ViewAmountRainData />
        </Button></>)},
      ]
    },
    {
      id: '#',
      label: 'Tổng lượng mưa theo thời đoạn mưa 3h',
      align: 'left',
     
      children: [
        { id: '#2.1', label: 'Lượng mưa 3 giờ', align: 'left', },
        { id: '#2.2', label: 'Ngưỡng mưa', align: 'left',   },
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:()=>(<>
          <Button>
            <ViewAmountRainData />
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
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:()=>(<>
          <Button>
            <ViewAmountRainData />
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
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:()=>(<>
          <Button>
            <ViewAmountRainData />
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
        { id: 'chayra', label: 'Xem chi tiết', align: 'left', elm:()=>(<>
          <Button>
            <ViewAmountRainData />
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
