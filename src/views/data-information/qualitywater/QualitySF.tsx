import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp, Replay, Search } from '@mui/icons-material'
import {
  Box,
  Button,
  Grid,
  Paper,
  SelectChangeEvent,
  Toolbar,
} from '@mui/material'
import React, { ChangeEvent, useEffect } from 'react'
import { useState } from 'react'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import { getData } from 'src/api/axios'

import dynamic from 'next/dynamic'
import BoxLoading from 'src/@core/components/box-loading'
import CreateNN_AoKhongSanLap from '../create-form/CreateNN_AoHoKhongSanLap'
import DeleteData from 'src/@core/components/delete-data'
import ExportTableToExcel from 'src/@core/components/export-excel/export-csv'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

//khai bao map
const Map = dynamic(() => import("src/@core/components/map"), { ssr: false });

const QualitySuface = () => {
  // Gọi dữ liệu lên bảng gọi API về
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)


  const [mapCenter] = useState([15.012172, 108.676488])
  const [mapZoom] = useState(9)
  const [selected, setSelected] = React.useState(true)

  const [paramsFilter, setParamsFilter] = useState({
    tu_nam: new Date().getFullYear() - 5,
    den_nam: new Date().getFullYear(),
  });


  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataNN_LuuVucSong() {
      setLoading(true)
      await getData(`CLN_NuocMat/danh-sach/${paramsFilter.tu_nam}/${paramsFilter.den_nam}`)

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

    getDataNN_LuuVucSong()
  }, [postSuccess, paramsFilter])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',
    },
    {
      id: '#',
      label: (<>Thời gian <br /> quan trắc</>),
      minWidth: 100,
      children: [{ id: '#', children: [{ id: 'thoiGianQuanTrac', label: '(1)', align: 'left' }] }]
    },
    {
      id: 'luuVucSong',
      label: <>Lưu vực sông <br /> Vùng/Tỉnh</>,
      align: 'left',
      minWidth: 200,
      children: [{ id: '#', children: [{ id: 'luuVucSong', label: '(2)', align: 'left' }] }]
    },
    {
      id: 'songSuoiHoChua',
      label: <>Sông, suối <br /> hồ chứa</>,
      align: 'left',
      minWidth: 200,
      children: [{ id: '#', children: [{ id: 'songSuoiHoChua', label: '(3)', align: 'left' }] }]
    },
    {
      id: 'viTriQuanTrac',
      label: <>Vị trí <br /> quan trắc</>,
      align: 'left',
      minWidth: 200,
      children: [{ id: '#', children: [{ id: 'viTriQuanTrac', label: '(4)', align: 'left' }] }]
    },

    {
      id: '#',
      label: <>Kết quả phân tích <br /> chỉ tiêu pH [-]</>,
      align: 'left',
      children: [
        {
          id: 'phDot1',
          label: 'Đợt 1',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'phDot1', label: '(5)', align: 'left' }]
        },
        {
          id: 'phDot2',
          label: 'Đợt 2',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'phDot2', label: '(6)', align: 'left' }]
        },
        {
          id: 'phDot3',
          label: 'Đợt 3',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'phDot3', label: '(7)', align: 'left' }]
        },
      ]
    },
    {
      id: '#',
      label: <>Kết quả phân tích <br /> chỉ tiêu BOD5 [mg/l]</>,
      align: 'left',
      children: [
        {
          id: 'boD5Dot1',
          label: 'Đợt 1',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'boD5Dot1', label: '(8)', align: 'left' }]
        },
        {
          id: 'boD5Dot2',
          label: 'Đợt 2',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'boD5Dot2', label: '(9)', align: 'left' }]
        },
        {
          id: 'boD5Dot3',
          label: 'Đợt 3',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'boD5Dot3', label: '(10)', align: 'left' }]
        },
      ]
    },
    {
      id: '#',
      label: <>Kết quả phân tích <br /> chỉ tiêu COD [mg/l]</>,
      align: 'left',
      children: [
        {
          id: 'codDot1',
          label: 'Đợt 1',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'codDot1', label: '(11)', align: 'left' }]
        },
        {
          id: 'codDot2',
          label: 'Đợt 2',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'codDot2', label: '(12)', align: 'left' }]
        },
        {
          id: 'codDot3',
          label: 'Đợt 3',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'codDot3', label: '(13)', align: 'left' }]
        },
      ]
    },

    {
      id: '#',
      label: <>Kết quả phân tích <br /> chỉ tiêu DO [mg/l]</>,
      align: 'left',
      children: [
        {
          id: 'doDot1',
          label: 'Đợt 1',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'doDot1', label: '(14)', align: 'left' }]
        },
        {
          id: 'doDot2',
          label: 'Đợt 2',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'doDot2', label: '(15)', align: 'left' }]
        },
        {
          id: 'doDot3',
          label: 'Đợt 3',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'doDot3', label: '(16)', align: 'left' }]
        },
      ]
    },
    {
      id: '#',
      label: <>Kết quả phân tích <br /> chỉ tiêu Tổng Phosphor TP [mg/l]</>,
      align: 'left',
      children: [
        {
          id: 'photphoDot1',
          label: 'Đợt 1',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'photphoDot1', label: '(17)', align: 'left' }]
        },
        {
          id: 'photphoDot2',
          label: 'Đợt 2',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'photphoDot2', label: '(18)', align: 'left' }]
        },
        {
          id: 'photphoDot3',
          label: 'Đợt 3',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'photphoDot3', label: '(19)', align: 'left' }]
        },
      ]
    },
    {
      id: '#',
      label: <>Kết quả phân tích <br /> chỉ tiêu Tổng Nito TN [mg/l]</>,
      align: 'left',
      children: [
        {
          id: 'nitoDot1',
          label: 'Đợt 1',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'nitoDot1', label: '(20)', align: 'left' }]
        },
        {
          id: 'nitoDot2',
          label: 'Đợt 2',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'nitoDot2', label: '(21)', align: 'left' }]
        },
        {
          id: 'nitoDot3',
          label: 'Đợt 3',
          align: 'left',
          minWidth: 70,
          children: [{ id: 'nitoDot3', label: '(22)', align: 'left' }]
        },
      ]
    },
    {
      align: 'center', id: 'actions', label: '#', minWidth: 70,
    }
  ]



  const handleChange = (event: SelectChangeEvent | ChangeEvent<HTMLInputElement> | null) => (column: string) => {
    if (event) {
      if (event?.target) {
        setParamsFilter({ ...paramsFilter, [column]: event.target.value });
      } else {
        setParamsFilter({ ...paramsFilter, [column]: event });
      }
    }

  };

  return (
    <Paper sx={{ p: 8 }}>

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
      <Grid className='_text_center'>

      </Grid>
      {loading ? (
        <BoxLoading />
      ) : (
        <Grid className='_text_center' sx={{ mt: 3 }}>
          <Toolbar variant='dense'>
            <Grid container spacing={2} sx={{ paddingY: 3 }} className='_flexEnd '>
              <Grid item xs={12} md={2} py={0}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='Từ năm'
                    views={["year"]}
                    value={dayjs(new Date(paramsFilter.tu_nam, 1, 1))}
                    onChange={(newVal: any) => handleChange(newVal.year())('tu_nam')}
                    slotProps={{ textField: { size: 'small', fullWidth: true, required: true } }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={2} py={0}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='Đến năm'
                    views={["year"]}
                    value={dayjs(new Date(paramsFilter.den_nam, 1, 1))}
                    onChange={(newVal: any) => handleChange(newVal.year())('den_nam')}
                    slotProps={{ textField: { size: 'small', fullWidth: true, required: true } }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} md={1.5} py={0}>
                <Button
                  variant='outlined'
                  size='small'
                  fullWidth
                  sx={{ borderRadius: 0 }}
                  startIcon={<Search />}
                >
                  Tìm kiếm
                </Button>
              </Grid>
              <Grid item xs={6} md={1.5} py={0}>
                <Button
                  variant='outlined'
                  size='small'
                  fullWidth
                  sx={{ borderRadius: 0 }}
                  startIcon={<Replay />}
                >
                  Tải lại
                </Button>
              </Grid>
              <Grid item xs={6} md={1.5} py={0}>
                <ExportTableToExcel resData={data} columnsTable={columnsTable} />
              </Grid>
              <Grid item xs={6} md={1.5} py={0}>
                <CreateNN_AoKhongSanLap isEdit={false} setPostSuccess={handlePostSuccess} />
              </Grid>
            </Grid>
          </Toolbar>
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
            actions={(row: any) => (
              <Box >
                <DeleteData url={'CLN_NuocMat'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}


    </Paper>
  )
}

export default QualitySuface
