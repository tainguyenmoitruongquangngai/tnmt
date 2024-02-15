//React Imports

import React, { SyntheticEvent } from 'react'
import { useState } from 'react'
import NguonThaiDiem  from "././NguonThaiDiem";
import NguonThaiDien_SinhHoat from "././NguonThaiDien_SinhHoat";

//MUI Imports
//import { Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';

//import dynamic from 'next/dynamic'

import NguonThaiCLN from '././wasteWaterTableNguonThai';

import dynamic from 'next/dynamic';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from 'mdi-material-ui';

const Map = dynamic(() => import("src/@core/components/map"), { ssr: false });


// eslint-disable-next-line react-hooks/rules-of-hooks
const NguonThaiCLN = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
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
      <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="ground water reserve">
                  
                  
                  
                </TabList>
            </Box>
            <TabPanel value="1"><NguonThaiDiem  /></TabPanel>
            <TabPanel value="2"><NguonThaiDien_SinhHoat /></TabPanel>
           
           
        </TabContext>

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
   

      </Grid>
    </Grid>

    
  )
}

export default NguonThaiCLN
