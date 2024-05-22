//React Imports
import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';

//MUI Imports
//import { Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { getData } from 'src/api/axios'
import { Paper, Typography } from '@mui/material'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import ExportTableToExcel from 'src/@core/components/export-excel/export-csv'
import { calculateBounds, fetchAndParseKML } from 'src/@core/components/map/utils';

const MapDoanSong = dynamic(() => import('src/@core/components/map/map'), { ssr: false });

// eslint-disable-next-line react-hooks/rules-of-hooks
const KhaNangTiepNhanNuocThaiSong = () => {
  const [data, setData] = useState([])
  const [mapCenter, setMapCenter] = useState([15.012172, 108.676488]);
  const [mapZoom, setMapZoom] = useState(9);
  const [selectedRiver, setSelectedRiver] = useState<any>(null);

  const [loading, setLoading] = useState(false)

  function roundToTwoDecimalPlaces(num: number): number {
    return parseFloat(num?.toFixed(2))
  }

  const handleRiverSelection = useCallback(async (river) => {
    setSelectedRiver(river);
    try {
        const kmlDoc = await fetchAndParseKML(`${river.fileKML}`);
        
        const bounds = calculateBounds(kmlDoc);
        if (bounds) {
            setMapCenter(bounds.center);
            setMapZoom(bounds.zoom);
        }
    } catch (error) {
        console.error('Error loading KML:', error);
    }
}, []);
 const columnsTable: TableColumn[] = [
    { id: 'stt', label: 'STT', rowspan: 2 },
    {
      id: 'phanDoan',
      label: 'Phân đoạn sông',
      align: 'left',
      minWidth: 200,
      elm: (row: any) => (
        <Typography className='btnShowFilePdf'  onClick={() => handleRiverSelection(row)}>
          {row?.phanDoan}
        </Typography>
      )
    },
    { id: 'luuVucSong', label: 'Lưu vực sông', rowspan: 2, align: 'left', minWidth: 200 },

    { id: 'song', label: 'Sông', rowspan: 2, align: 'left', minWidth: 200 },
    {
      id: 'tenDoanSong',
      label: 'Tên đoạn sông',
      rowspan: 2,
      align: 'left',
      minWidth: 150
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
      minWidth: 100
    },

    {
      id: '#',
      label: (
        <>
          KHẢ NĂNG TIẾP NHẬN NƯỚC THẢI, SỨC CHỊU TẢI
          <br />
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
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.ltnBod)
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
          elm: (row: any) => roundToTwoDecimalPlaces(row.ltnCod)
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
          elm: (row: any) => roundToTwoDecimalPlaces(row.ltnAmoni)
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
          elm: (row: any) => roundToTwoDecimalPlaces(row.ltnTongN)
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
          elm: (row: any) => roundToTwoDecimalPlaces(row.ltnTongP)
        },
        {
          id: 'ltnTSS',
          label: (
            <>
              Tổng <br /> chất rắn <br /> lơ lửng <br /> TSS(mg/l)
            </>
          ),
          align: 'left',
          elm: (row: any) => roundToTwoDecimalPlaces(row.ltnTSS)
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
          elm: (row: any) => roundToTwoDecimalPlaces(row.ltnColiform)
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


  useEffect(() => {
    if (!selectedRiver) {
        setMapCenter([15.012172, 108.676488]); // Mặc định trung tâm
        setMapZoom(9); // Mặc định zoom
    }
}, [selectedRiver]);



  // const zoomConstruction = (coords: any) => {
  //   setMapCenter(coords)
  //   setMapZoom(13)
  // }
  // const handleConsTypeChange = (data: any) => {
  //   setInitConstype(data);
  // };

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={12 }sx={{ height: '55vh', overflow: 'hidden' }}>
        <MapDoanSong
          center={mapCenter}
          zoom={mapZoom}
          mapData={selectedRiver}
          selectedKmlFile={selectedRiver ? selectedRiver.fileKML : null}
          loading={loading}
        />
      </Grid>

      <Grid xs={12} md={12}>
        <Paper elevation={3} sx={{ p: 0, height: '100%' }}>
          <Grid container className='_flexEnd' spacing={2} sx={{ p: 2 }}>
            <Grid>
              <ExportTableToExcel tableId='kha_nang_tiep_nhan_nuoc_thai' filename='khanangtiepnhannuocthai.csv' />
            </Grid>
          </Grid>

          <TableComponent
            columns={columnsTable}
            rows={data}
            id='phan_doan_song'
            loading={loading}
            pagination
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default KhaNangTiepNhanNuocThaiSong
