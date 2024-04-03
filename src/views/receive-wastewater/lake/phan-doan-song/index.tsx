//React Imports
import React, { useEffect } from 'react'
import { useState } from 'react'

//MUI Imports
//import { Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { getData } from 'src/api/axios'
import { Box, Paper, Typography } from '@mui/material'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import DeleteData from 'src/@core/components/delete-data'
import PhanDoanSongForm from './PhanDoanSongForm'
import ExportToExcel from 'src/@core/components/export-excel'

// eslint-disable-next-line react-hooks/rules-of-hooks
const PhanDoanSongTiepNhanNuocThai = () => {
  //Init columnTable

  // const [mapCenter, setMapCenter] = useState([15.012172, 108.676488])
  // const [mapZoom, setMapZoom] = useState(9)
  // const [showLabel, setShowLabel] = useState(false)
  const columnsTable: TableColumn[] = [
    { id: 'stt', label: 'STT' },
    {
      id: 'luuVucSong',
      label: 'Lưu vực sông',
      align: 'left',
      minWidth: 200
    },
    {
      id: 'song',
      label: 'Sông',
      align: 'left',
      minWidth: 200
    },
    {
      id: 'tenDoanSong',
      label: 'Tên đoạn sông',
      align: 'left',
      minWidth: 200
    },
    {
      id: 'phanDoan',
      label: 'Phân đoạn sông',
      align: 'left',
      minWidth: 200
    },
    {
      id: '#',
      label: 'Tọa độ (VN2000, múi chiếu 30, kinh tuyến trục 107045’)',
      children: [
        {
          id: 'xDau',
          label: 'Điểm đầu X'
        },
        {
          id: 'yDau',
          label: 'Điểm đầu Y'
        },
        {
          id: 'xCuoi',
          label: 'Điểm cuối X'
        },
        {
          id: 'xCuoi',
          label: 'Điểm cuối Y'
        }
      ]
    },
    {
      id: 'diaGioiHanhChinh',
      label: 'Địa giới hành chính',
      align: 'left'
    },
    {
      id: 'mucDichSuDung',
      label: (
        <>
          Mục đích sử dụng nước <br /> theo QCVN 08:2023/BTNMT
        </>
      ),
      align: 'left'
    },
    {
      id: 'chatLuongNuoc',
      label: (
        <>
          Chất lượng nước <br /> theo QCVN 08:2023 ứng
        </>
      ),
      align: 'left'
    },

    {
      id: 'ghiChu',
      label: 'Ghi chú',
      align: 'left'
    },

    { id: 'actions', label: 'Thao tác', align: 'center', pinned: 'right' }
  ]

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState)
  }

  useEffect(() => {
    async function getDataReport1() {
      setLoading(true)
      await getData('PhanDoanSong/danh-sach')
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
      <Grid xs={12} md={12}>
        <Grid className='_text_center'>
          <Typography className='font-weight-bold' sx={{ mt: 3 }} variant='h6'>
           TỔNG HỢP PHÂN ĐOẠN SÔNG TỈNH QUẢNG NGÃI
          </Typography>
        </Grid>
        <Paper elevation={3} sx={{ p: 0, height: '100%' }}>
          <Grid container className='_flexEnd' spacing={2} sx={{p:2}}>
            <Grid >
              <ExportToExcel resData={data} columnsTable={columnsTable} />
            </Grid>

            <Grid >
            <PhanDoanSongForm isEdit={false} setPostSuccess={handlePostSuccess} />
          </Grid>
          </Grid>
          
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
            actions={(row: any) => (
              <Box display={'flex'}>
                <PhanDoanSongForm isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'du-lieu-nguon-nhan'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PhanDoanSongTiepNhanNuocThai
