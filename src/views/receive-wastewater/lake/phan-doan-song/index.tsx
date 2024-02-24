//React Imports
import React, { useEffect } from 'react'
import { useState } from 'react'

//MUI Imports
//import { Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

//import dynamic from 'next/dynamic'
import dynamic from 'next/dynamic'
import { getData } from 'src/api/axios'
import { PhanDoanSongState } from './PhanDoanSongInterface'
import BoxLoading from 'src/@core/components/box-loading'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import DeleteData from 'src/@core/components/delete-data'
import PhanDoanSongForm from './PhanDoanSongForm'

const Map = dynamic(() => import('src/@core/components/map'), { ssr: false })

// eslint-disable-next-line react-hooks/rules-of-hooks
const PhanDoanSongTiepNhanNuocThai = () => {
  //Init columnTable

  // const [mapCenter, setMapCenter] = useState([15.012172, 108.676488])
  // const [mapZoom, setMapZoom] = useState(9)
  // const [showLabel, setShowLabel] = useState(false)

  const [mapCenter] = useState([15.012172, 108.676488])
  const [mapZoom] = useState(9)
  const [data, setData] = useState<PhanDoanSongState[]>([])
  console.log(data)

  const [loading, setLoading] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState)
  }

  useEffect(() => {
    async function getDataReport1() {
      setLoading(true)
      await getData('PhanDoanSong/danhsach')
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
  }, [postSuccess])

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
      <Grid className='_flexEnd'>
        <PhanDoanSongForm isEdit={false} setPostSuccess={handlePostSuccess} />
      </Grid>

      {loading ? (
        <BoxLoading />
      ) : (
        <Grid className='_text_center' sx={{ mt: 3 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead className='tableHead'>
                <TableRow>
                  <TableCell size='small' align='center' rowSpan={3}>
                    STT
                  </TableCell>
                  <TableCell size='small' align='center' rowSpan={3}>
                    Lưu vực sông
                  </TableCell>
                  <TableCell size='small' align='center' rowSpan={3}>
                    Sông
                  </TableCell>
                  <TableCell size='small' align='center' rowSpan={3}>
                    Tên đoạn sông
                  </TableCell>
                  <TableCell size='small' align='center' rowSpan={3}>
                    Phân đoạn sông
                  </TableCell>
                  <TableCell size='small' align='center' rowSpan={3}>
                    Chiều dài <br /> đoạn sông (km)
                  </TableCell>
                  <TableCell size='small' align='center' rowSpan={3}>
                    Diện tích <br /> lưu vực (km2)
                  </TableCell>

                  <TableCell size='small' align='center' colSpan={4}>
                    Tọa độ (VN2000, múi chiếu 30, kinh tuyến trục 107045’)
                  </TableCell>

                  <TableCell size='small' align='center' rowSpan={3} colSpan={1}>
                    Địa giới hành chính
                  </TableCell>

                  <TableCell size='small' align='center' rowSpan={3} colSpan={1}>
                    Mục đích sử dụng nước <br /> theo QCVN 08: 2023/ BTNMT
                  </TableCell>
                  <TableCell size='small' align='center' rowSpan={3}>
                    Chất lượng nước <br /> theo QC 08/2023 ứng với <br /> mục đích sử dụng nước
                  </TableCell>

                  <TableCell size='small' align='center' rowSpan={3}>
                    Ghi chú
                  </TableCell>

                  <TableCell size='small' align='center' rowSpan={3}>
                    Thao tác
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell size='small' align='center' colSpan={2}>
                    Điểm đầu
                  </TableCell>
                  <TableCell size='small' align='center' colSpan={2}>
                    Điểm cuối
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell size='small' align='center'>
                    X
                  </TableCell>
                  <TableCell size='small' align='center'>
                    Y
                  </TableCell>
                  <TableCell size='small' align='center'>
                    X
                  </TableCell>
                  <TableCell size='small' align='center'>
                    Y
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody className='tableBody'>
                {data.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-center  size='small' align-middle font-13">{index + 1}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.luuVucSong}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.song}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.tenDoanSong}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.phanDoan}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.chieuDai}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.dienTichLV}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.xDau}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.yDau}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.xCuoi}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.yCuoi}</TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">
                      {item.diaGioiHanhChinh}
                    </TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">
                      {item.mucDichSuDung}
                    </TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">
                      {item.chatLuongNuoc}
                    </TableCell>
                    <TableCell className="text-center  size='small' align-middle font-13">{item.ghiChu}</TableCell>
                    <TableCell align='center' className="  size='small' align-middle font-13">
                      <Box>
                        <PhanDoanSongForm isEdit={true} data={item} setPostSuccess={handlePostSuccess} />
                        <DeleteData url={'phan-doan-song'} data={item} setPostSuccess={handlePostSuccess} />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
    </Grid>
  )
}

export default PhanDoanSongTiepNhanNuocThai
