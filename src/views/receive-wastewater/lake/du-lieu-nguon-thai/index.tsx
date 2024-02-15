//React Imports

import React, { SyntheticEvent } from 'react'
import { useState } from 'react'
import NguonThaiDiem from "././NguonThaiDiem";
import NguonThaiDien_SinhHoat from "././NguonThaiDien_SinhHoat";
import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material';

import { Paper, Button, Box, Tab } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';

//import dynamic from 'next/dynamic'

import dynamic from 'next/dynamic';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const Map = dynamic(() => import("src/@core/components/map"), { ssr: false });


// eslint-disable-next-line react-hooks/rules-of-hooks
const NguonThaiCLN = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [mapCenter] = useState([15.012172, 108.676488]);
  const [mapZoom] = useState(9);
  const [selected, setSelected] = React.useState(true);

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={12} sx={{ height: 'calc(100vh - 82px)', overflow: 'hidden' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="ground water reserve">
              <Tab label="TỔNG LƯỢNG NƯỚC MẶT " value="1" />
              <Tab label="DÒNG CHẢY TRUNG BÌNH THÁNG, NĂM" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Grid xs={12} md={12} sx={{ height: 'calc(50vh - 82px)' }}>
              <Paper elevation={3} sx={{ height: '100%', position: 'relative' }}>
                <Button className="toggle-legend" variant="outlined" onClick={() => { setSelected(!selected); }} >
                  {selected ? <KeyboardDoubleArrowDown /> : <KeyboardDoubleArrowUp />}
                </Button>
                <Map center={mapCenter} zoom={mapZoom} showLabel={false} mapData={null} loading={false} />
              </Paper>
            </Grid>
            <Grid sx={{ height: 'calc(50vh - 82px)' }}><NguonThaiDiem /></Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid xs={12} md={12} sx={{ height: 'calc(50vh - 82px)' }}>
              <Paper elevation={3} sx={{ height: '100%', position: 'relative' }}>
                <Button className="toggle-legend" variant="outlined" onClick={() => { setSelected(!selected); }} >
                  {selected ? <KeyboardDoubleArrowDown /> : <KeyboardDoubleArrowUp />}
                </Button>
                <Map center={mapCenter} zoom={mapZoom} showLabel={false} mapData={null} loading={false} />
              </Paper>
            </Grid>
            <Grid sx={{ height: 'calc(50vh - 82px)' }}><NguonThaiDiem /></Grid>
            <NguonThaiDien_SinhHoat /></TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default NguonThaiCLN
