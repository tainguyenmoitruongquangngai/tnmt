//React Imports

import React, { SyntheticEvent } from 'react'
import { useState } from 'react'
import NguonThaiDiem from '././NguonThaiDiem'
import NguonThaiDien_SinhHoat from '././NguonThaiDien_SinhHoat'
import NguonThaiDien_Trau from '././NguonThaiDien_Trau'
import NguonThaiDien_Lon from '././NguonThaiDien_Lon'
import NguonThaiDien_GiaCam from '././NguonThaiDien_GiaCam'
import NguonThaiDien_TrongLua from '././NguonThaiDien_TrongLua'
import NguonThaiDien_TrongCayLauNam from '././NguonThaiDien_TrongCayLauNam'
import NguonThaiDien_TrongRung from '././NguonThaiDien_TrongRung'

import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material'

import { Paper, Button, Box, Tab } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

//import dynamic from 'next/dynamic'

import dynamic from 'next/dynamic'
import { TabContext, TabList, TabPanel } from '@mui/lab'

const Map = dynamic(() => import('src/@core/components/map'), { ssr: false })

// eslint-disable-next-line react-hooks/rules-of-hooks
const NguonThaiCLN = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const [mapCenter] = useState([15.012172, 108.676488])
  const [mapZoom] = useState(9)
  const [selected, setSelected] = React.useState(true)

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={12}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='ground water reserve'>
              <Tab label='NGUỒN THẢI ĐIỂM ' value='1' />
              <Tab label='NGUỒN DIỆN: SINH HOẠT' value='2' />
              <Tab label='NGUỒN DIỆN: GIA SÚC ' value='3' />
              <Tab label='NGUỒN DIỆN: LỢN, GIA SÚC KHÁC ' value='4' />
              <Tab label='NGUỒN DIỆN: GIA CẦM ' value='5' />
              <Tab label='NGUỒN DIỆN: TRỒNG LÚA ' value='6' />
              <Tab label='NGUỒN DIỆN: TRỒNG CÂY LÂU NĂM ' value='7' />
              <Tab label='NGUỒN DIỆN: TRỒNG RỪNG ' value='8' />
            </TabList>
          </Box>

          <TabPanel value='1'>
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
            <Grid>
              <NguonThaiDiem />
            </Grid>
          </TabPanel>
          <TabPanel value='2'>
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
           
            <NguonThaiDien_SinhHoat />
          </TabPanel>

          <TabPanel value='3'>
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
           
            <NguonThaiDien_Trau />
          </TabPanel>

          <TabPanel value='4'>
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
            <NguonThaiDien_Lon />
          </TabPanel>

          <TabPanel value='5'>
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
            <NguonThaiDien_GiaCam />
          </TabPanel>

          <TabPanel value='6'>
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
            <NguonThaiDien_TrongLua />
          </TabPanel>

          <TabPanel value='7'>
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
            <NguonThaiDien_TrongCayLauNam />
          </TabPanel>

          <TabPanel value='8'>
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
            <NguonThaiDien_TrongRung />
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default NguonThaiCLN
