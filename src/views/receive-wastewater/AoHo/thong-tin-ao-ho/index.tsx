//React Imports
import React from 'react'
import { useState } from 'react'

//MUI Imports
//import { Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

//import dynamic from 'next/dynamic'
import ThongTinAoHoBang from './ThongTinAoHoBang'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import("src/@core/components/map"), { ssr: false });


// eslint-disable-next-line react-hooks/rules-of-hooks
const ThongTinAoHoBangDetails = () => {
  //Init columnTable

  // const [mapCenter, setMapCenter] = useState([15.012172, 108.676488])
  // const [mapZoom, setMapZoom] = useState(9)
  // const [showLabel, setShowLabel] = useState(false)
  const [mapCenter] = useState([ 15.012172, 108.676488 ]);
  const [mapZoom] = useState(9);

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
        <Map center={mapCenter} zoom={mapZoom}  loading={false} />
      </Grid>
      <Grid xs={12} md={12}>
       <ThongTinAoHoBang/>
      </Grid>
    </Grid>
  )
}

export default ThongTinAoHoBangDetails
