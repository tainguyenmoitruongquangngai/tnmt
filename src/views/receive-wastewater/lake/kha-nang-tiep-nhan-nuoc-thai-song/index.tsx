//React Imports
import React, { useEffect } from 'react'
import { useState } from 'react'

//MUI Imports
//import { Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

//import dynamic from 'next/dynamic'
import dynamic from 'next/dynamic'
import { getData } from 'src/api/axios'
import {  Paper, Typography } from '@mui/material'
import TableComponent, { TableColumn } from 'src/@core/components/table'

const Map = dynamic(() => import('src/@core/components/map'), { ssr: false })

// eslint-disable-next-line react-hooks/rules-of-hooks
const KhaNangTiepNhanNuocThaiSong = () => {
  //Init columnTable

  // const [mapCenter, setMapCenter] = useState([15.012172, 108.676488])
  // const [mapZoom, setMapZoom] = useState(9)
  // const [showLabel, setShowLabel] = useState(false)
  const columnsTable: TableColumn[] = [
    { id: 'stt', label: 'STT', rowspan: 2 },
    { id: 'luuVucSong', label: 'Lưu vực sông', rowspan: 2, align: 'left', minWidth: 200},

    { id: 'song', label: 'Sông', rowspan: 2, align: 'left', minWidth: 200},
    {
      id: 'tenDoanSong',
      label: 'Tên đoạn sông',
      rowspan: 2,
      align: 'left',
      minWidth: 100
    },
    {
      id: 'phanDoan',
      label: 'Phân đoạn sông',
      rowspan: 2,
      align: 'left',
      minWidth: 200
    },
    {
      id: 'chieuDai',
      label: (
        <>
          Chiều dài <br /> đoạn sông <br /> (km)
        </>
      ),
      rowspan: 2,
      align: 'left',
      minWidth: 100,
    },
    
    {
      id: '#',
      label: (
        <>
          KHẢ NĂNG TIẾP NHẬN NƯỚC THẢI, SỨC CHỊU TẢI<br />
          Ltd (kg/ngày)
        </>
      ),
      align: 'left',
      children: [
        {
          id: 'ltnBod',
          label: (
            <>
              BOD5 <br />
              (mg/l)
            </>
          ),
          align: 'left'
        },
        {
          id: 'ltnCod',
          label: (
            <>
              COD <br />
              (mg/l)
            </>
          ),
          align: 'left'
        },
        {
          id: 'ltnAmoni',
          label: (
            <>
              Amoni <br />
              (mg/l)
            </>
          ),
          align: 'left'
        },
        {
          id: 'ltnTongN',
          label: (
            <>
              Tổng N <br />
              (mg/l)
            </>
          ),
          align: 'left'
        },
        {
          id: 'ltnTongP',
          label: (
            <>
              Tổng P <br />
              (mg/l)
            </>
          ),
          align: 'left'
        },
        {
          id: 'ltnTSS',
          label: (
            <>
              Tổng <br /> chất rắn <br /> lơ lửng <br /> TSS(mg/l)
            </>
          ),
          align: 'left'
        },
        {
          id: 'ltnColiform',
          label: (
            <>
              Tổng P <br /> coliform
              <br /> (MPN/100ml)
            </>
          ),
          align: 'left'
        }
      ]
    },
    {
      id: 'ghiChu',
      label: 'Ghi chú',
      rowspan: 2,
      align: 'left'
    },
  ]

  const [mapCenter] = useState([15.012172, 108.676488])
  const [mapZoom] = useState(9)
  const [data, setData] = useState([])
  console.log(data)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getDataReport1() {
      setLoading(true)
      await getData('PhanDoanSong/tai-luong')
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

    getDataReport1()
  }, [])

  // const zoomConstruction = (coords: any) => {
  //   setMapCenter(coords)
  //   setMapZoom(13)
  // }
  // const handleConsTypeChange = (data: any) => {
  //   setInitConstype(data);
  // };

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={12} sx={{ height: '55vh', overflow: 'hidden' }}>
        {/* <Paper elevation={3} sx={{ height: '100%', position: 'relative' }}>
          <Box className='map-legend' sx={{ background: 'white', pl: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onClick={() => setShowLabel(!showLabel)} />}
                label='Hiển thị tên công trình'
              />
            </FormGroup>
            <MapLegend onChange={handleConsTypeChange} />
          </Box>
          <Map center={mapCenter} zoom={mapZoom} showLabel={showLabel} loading={false} />
        </Paper> */}
        <Map center={mapCenter} zoom={mapZoom} loading={false} />
      </Grid>
      <Grid xs={12} md={12}>
      <Grid className='_text_center'>
          <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
          KHẢ NĂNG TIẾP NHẬN NƯỚC THẢI, SỨC CHỊU TẢI CỦA NGUỒN NƯỚC SÔNG, SUỐI TRÊN ĐỊA BÀN TỈNH QUẢNG NGÃI
          </Typography>
        </Grid>
        <Paper elevation={3} sx={{ p: 0, height: '100%' }}>
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default KhaNangTiepNhanNuocThaiSong
