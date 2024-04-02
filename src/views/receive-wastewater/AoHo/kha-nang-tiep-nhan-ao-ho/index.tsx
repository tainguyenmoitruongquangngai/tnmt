//React Imports
import React, { useEffect } from 'react'
import { useState } from 'react'

//MUI Imports
//import { Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

//import dynamic from 'next/dynamic'
import dynamic from 'next/dynamic'
import { getData } from 'src/api/axios'
import { Paper, Typography } from '@mui/material'
import TableComponent, { TableColumn } from 'src/@core/components/table'

const Map = dynamic(() => import('src/@core/components/map'), { ssr: false })

// eslint-disable-next-line react-hooks/rules-of-hooks
const KhaNangTiepNhanNuocThaiAo = () => {
  //Init columnTable

  // const [mapCenter, setMapCenter] = useState([15.012172, 108.676488])
  // const [mapZoom, setMapZoom] = useState(9)
  // const [showLabel, setShowLabel] = useState(false)
  function roundToTwoDecimalPlaces(num: number): number {
    return parseFloat(num.toFixed(2))
  }

  const columnsTable: TableColumn[] = [
    { id: 'stt', label: 'STT', rowspan: 2 },
    {
      id: 'cT_ThongTin',
      label: 'Tên hồ chứa',
      rowspan: 2,
      align: 'left',
      minWidth: 200,
      elm: (row: any) => <span>{row.cT_ThongTin.tenCT}</span>
    },
    {
      id: 'cT_ThongTin',
      label: 'Vị trí',
      rowspan: 2,
      align: 'left',
      minWidth: 200,
      elm: (row: any) => <span>{row.cT_ThongTin.viTriCT}</span>
    },
    {
      id: 'cT_ThongTin',
      label: 'Tọa độ',
      align: 'left',
      children: [
        {
          id: 'x',
          label: 'X',
          align: 'left'
        },
        {
          id: 'y',
          label: 'Y',
          align: 'left'
        }
      ]
    },
    {
      id: '#',
      label: 'Thông số công trình)',
      align: 'left',
      children: [
        {
          id: 'dienTichLuuVuc',
          label: 'Diện tích lưu vực (km2)',
          align: 'left',
          elm: (row: any) => <span>{row.cT_ThongTin.thongso.dienTichLuuVuc}</span>
        },
        {
          id: 'dungTichToanBo',
          label: 'Dung tích toàn bộ (triệu m3)	',
          align: 'left',
          elm: (row: any) => <span>{row.cT_ThongTin.thongso.dungTichToanBo}</span>
        }
      ]
    },
    {
      id: '#',
      label: 'KHẢ NĂNG TIẾP NHẬN NƯỚC THẢI, SỨC CHỊU TẢI CỦA HỒ CHỨA Mtn (kg)',
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
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.mtnBOD)
        },
        {
          id: 'ltnCod',
          label: (
            <>
              COD <br />
              (mg/l)
            </>
          ),
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.mtnCOD)
        },
        {
          id: 'ltnAmoni',
          label: (
            <>
              Amoni <br />
              (mg/l)
            </>
          ),
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.mtnAmoni)
        },
        {
          id: 'ltnTongN',
          label: (
            <>
              Tổng N <br />
              (mg/l)
            </>
          ),
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.mtnTongN)
        },
        {
          id: 'ltnTongP',
          label: (
            <>
              Tổng P <br />
              (mg/l)
            </>
          ),
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.mtnTongP)
        },
        {
          id: 'ltnTSS',
          label: (
            <>
              Tổng <br /> chất rắn <br /> lơ lửng <br /> TSS(mg/l)
            </>
          ),
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.mtnTSS)
        },
        {
          id: 'ltnColiform',
          label: (
            <>
              Tổng P <br /> coliform
              <br /> (MPN/100ml)
            </>
          ),
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.mtnColiform)
        }
      ]
    },
    {
      id: 'ghiChu',
      label: 'Ghi chú',
      rowspan: 2,
      align: 'left'
    }
  ]

  const [mapCenter] = useState([15.012172, 108.676488])
  const [mapZoom] = useState(9)
  const [data, setData] = useState([])
  console.log(data)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getDataReport1() {
      setLoading(true)
      await getData('ThongTinAoHo/danh-sach')
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
          KHẢ NĂNG TIẾP NHẬN NƯỚC THẢI, SỨC CHỊU TẢI CỦA AO,HỒ CHỨA 
          </Typography>
        </Grid>
        <Paper elevation={3} sx={{ p: 0, height: '100%' }}>
          <TableComponent columns={columnsTable} rows={data} loading={loading} pagination />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default KhaNangTiepNhanNuocThaiAo
