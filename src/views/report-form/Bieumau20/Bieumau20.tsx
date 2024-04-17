//React Imports
import React, { useEffect } from 'react'
import { useState } from 'react'

//MUI Imports
//import { Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import { getData } from 'src/api/axios'
import { Box, Grid, IconButton, Link, Paper, TextField, Typography } from '@mui/material'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import DeleteData from 'src/@core/components/delete-data'
import DialogControlFullScreen from 'src/@core/components/dialog-control-full-screen'
import HeaderReport from '../HeaderReport'
import FooterReport from '../FooterReport'

// eslint-disable-next-line react-hooks/rules-of-hooks
const BieuMauHaiMuoi = () => {
  //Init columnTable

  // const [mapCenter, setMapCenter] = useState([15.012172, 108.676488])
  // const [mapZoom, setMapZoom] = useState(9)
  // const [showLabel, setShowLabel] = useState(false)
  const columnsTable: TableColumn[] = [
    { id: 'stt', label: 'STT' },
    {
      id: 'tenCT',
      label: 'Tên công trình',
      align: 'left',
      minWidth: 300
    },
    {
      id: '#',
      label: (
        <>
          Loại hình công trình <br />
          (hồ,đập,cống,trạm bơm,giếng khoan,khác)
        </>
      ),
      align: 'left',
      minWidth: 300,
      elm: (row: any) => (
        <Typography>
          {row?.loaiCT.tenLoaiCT}
        </Typography>
      )
    },
    {
      id: 'nguonNuocKT',
      label: (
        <>
          Nguồn nước khai thác
          <br />
          (hồ,đập,cống,trạm bơm,giếng khoan,khác)
        </>
      ),
      align: 'left',
      minWidth: 300
    },

    {
      id: '#',
      label: 'Vị trí',
      children: [
        {
          id: '#',
          label: 'Xã',
          elm: (row: any) => (
            <Typography>
              {row?.xa?.tenXa}
            </Typography>
          ),
          minWidth: 150
        },
        {
          id: '#',
          label: 'Huyện',
          elm: (row: any) => (
            <Typography>
              {row?.huyen?.tenHuyen}
            </Typography>
          ),
          minWidth: 150
        },
        {
          id: '#',
          label: 'Tỉnh',
          elm: () => (
            <Typography>
              Quảng Ngãi
            </Typography>
          ),
          minWidth: 150
        }
      ]
    },

    {
      id: '#',
      label: 'Thông số cơ bản',
      children: [
        {
          id: 'A#',
          label: 'Hồ chứa,đập',
          children: [
            {
              id: 'dungTichToanBo',
              label: 'Dung tích toàn bộ (triệu m3)',
              elm: () => (
                <Typography>
                  Quảng Ngãi
                </Typography>
              )
            },
            {
              id: 'dungTichHuuIch',
              label: 'Dung tích hữu ích (triệu m3)',
              elm: () => (
                <Typography>
                  Quảng Ngãi
                </Typography>
              )
            },
            {
              id: 'congSuatDamBao',
              label: 'Công suất (MW)	',
              elm: () => (
                <Typography>
                  Quảng Ngãi
                </Typography>
              )
            }
          ]
        },
        {
          id: '#',
          label: (
            <>
              Giếng khoan và <br /> loại hình khác
            </>
          ),
          children: [
            {
              id: 'qThietKe',
              label: 'Lưu lượng thiết kế(m3/ngày đêm)',
              elm: () => (
                <Typography>
                  Quảng Ngãi
                </Typography>
              )
            },
            {
              id: 'qThucTe',
              label: 'Lưu lượng thực tế (m3/ngày đêm)',
              elm: () => (
                <Typography>
                  Quảng Ngãi
                </Typography>
              )
            }
          ]
        }
      ]
    }
  ]

  const [data, setData] = useState([])
  console.log(data);
  
  const [loading, setLoading] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState)
  }

  useEffect(() => {
    async function getDataReport1() {
      setLoading(true)
      await getData('BieuMauSoHaiMuoi/danhsach')
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
        <Grid container>
          <Grid md={11}>
            <Typography variant='h5'>
              Biểu mẫu số 20. Danh mục các công trình khai thác, sử dụng tài nguyên nước
            </Typography>
          </Grid>
          <Grid md={1}>
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Grid>
        </Grid>

        <HeaderReport />

        <Grid className='_text_center'>
          <Typography className='font-weight-bold ' variant='h4'>
            BÁO CÁO
          </Typography>
          <Typography className='font-weight-bold ' variant='h6'>
            Danh mục các công trình khai thác, sử dụng tài nguyên nước
          </Typography>
          <Typography className='font-weight-bold ' variant='h6'>
            (Kỳ báo cáo: <TextField size='small' sx={{ width: '50px' }}></TextField>)
          </Typography>
        </Grid>
        <Paper elevation={3} sx={{ p: 0, height: '100%' }}>
          <TableComponent
            columns={columnsTable}
            rows={data}
            id='phan_doan_song'
            loading={loading}
            pagination
            actions={(row: any) => (
              <Box display={'flex'}>
                <DeleteData url={'du-lieu-nguon-nhan'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
          <FooterReport />
        </Paper>
      </Grid>
    </Grid>
  )
}

const Bieumau20 = () => {
  const formTitle = 'BIỂU MẪU THÔNG TƯ 31/2018/TT-BTNMT/ BIỂU MẪU SỐ 20'

  return (
    <DialogControlFullScreen>
      {(openDialogs: (content: React.ReactNode, title: React.ReactNode) => void) => (
        <>
          <Link className='formReport_box' onClick={() => openDialogs(<BieuMauHaiMuoi />, formTitle)}>
            <Grid item xs={8}>
              <Typography className='text-danger text-weight-bold'>Biểu mẫu 20</Typography>
              <Typography className='text-success text-weight-bold _font12'>
                Danh mục các CTKT,SD tài nguyên nước
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box component='img' src='/images/report-form/ANHBIEUMAU20.png' className='formReport_img' alt='' />
            </Grid>
          </Link>
        </>
      )}
    </DialogControlFullScreen>
  )
}

export default Bieumau20
