//React Imports
import React, { useState, useEffect, useRef } from 'react'

//MUI Imports
import { Box, Typography, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

//Other Imports
import ShowFilePDF from 'src/@core/components/show-file-pdf'
import dynamic from 'next/dynamic'
import { ConverterCood } from 'src/@core/components/map/convert-coord'
import CreateConstruction from '../form'
import { useRouter } from 'next/router'
import ConstructionToolBar from '../tool-bar'
import { getData } from 'src/api/axios'
import DeleteData from 'src/@core/components/delete-data'
import MapLegend from '../MapLegend'
import GetConstructionTypeId from 'src/@core/components/get-construction-type'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import FormatDate from 'src/@core/components/format-date'

const Map = dynamic(() => import('src/@core/components/map'), { ssr: false })

// eslint-disable-next-line react-hooks/rules-of-hooks
const SurfaceConstruction = () => {
  const [mapCenter, setMapCenter] = useState([15.012172, 108.676488])
  const [mapZoom, setMapZoom] = useState(9)
  const [showLabel, setShowLabel] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)

  const [columnVisibility, setColumnVisibility] = useState<string[]>()

  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState)
  }
  const [resData, setResData] = useState([])
  const [dataFiltered, setDataFiltered] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const columnsTable: TableColumn[] = [
    { id: 'stt', label: 'STT', rowspan: 2 },
    {
      id: 'tenCT',
      label: 'Tên công trình',
      rowspan: 2,
      pinned: 'left',
      minWidth: 200,
      elm: (row: any) => (
        <Typography className='btnShowFilePdf' onClick={() => zoomConstruction(ConverterCood(row?.y, row?.x))}>
          {row?.tenCT}
        </Typography>
      )
    },
    {
      id: 'viTriCT',
      label: 'Địa điểm',
      rowspan: 2,
      align: 'left',
      minWidth: 250,
    },
    {
      id: '#',
      label: 'Toạ độ đập chính (VN2000)',

      rowspan: 2,
      elm: (row: any) => (
        <span>
          X: {row?.x}<br /> Y: {row?.y}
        </span>
      )
    },
    { id: 'nguonNuocKT', label: 'Nguồn nước khai thác', rowspan: 2, align: 'left', minWidth: 200 },
    { id: 'phuongThucKT', label: 'Phương thức khai thác', rowspan: 2, align: 'left', minWidth: 600 },
    { id: 'cheDoKT', label: 'Chế độ khai thác', rowspan: 2, align: 'left', minWidth: 200, elm: (row: any) => (<span>{row?.thongso?.cheDoKT}</span>) },
    { id: 'mucDichhKT', label: 'Mục đích khai thác', rowspan: 2, align: 'left', minWidth: 200 },
    { id: 'namBatDauVanHanh', label: 'Năm vận hành', rowspan: 2, align: 'left' },
    { id: 'tieuvung_quyhoach', label: 'Tiểu vùng quy hoạch', rowspan: 2, align: 'left', minWidth: 150 },
    {
      id: 'thongso',
      label: 'Thông số công trình',
      align: 'left',
      children: [
        { id: 'capCT', label: 'Cấp công trình', align: 'left', },
        { id: 'dienTichLuuVuc', label: 'Diện tích lưu vực', align: 'left' },
        {
          id: 'muaTrungBinhNam',
          label: (
            <span>
              X <sub>TB năm</sub> (m)
            </span>
          ),


          align: 'left'
        },
        {
          id: 'qTrungBinhNam',
          label: (
            <span>
              Q <sub>TB năm</sub>(m3/s)
            </span>
          ),
          align: 'left'
        },
        { id: 'congSuatLM', label: 'Công suất lắp máy', align: 'left' },
        { id: 'congSuatDamBao', label: 'Công suất đảm bảo', align: 'left' },
        { id: 'chieuCaoDap', label: 'Chiều cao đập', align: 'left' },
        { id: 'chieuDaiDap', label: 'Chiều dài đập', align: 'left' },
        { id: 'caoTrinhDap', label: 'Cao trình đập', align: 'left' },
        {
          id: 'qmaxNM',
          label: (
            <span>
              Q<sub>max</sub>(m<sup>3</sup>/s)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'qtt',
          label: (
            <span>
              Q<sub>TT</sub>(m<sup>3</sup>/s)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'qDamBao',
          label: (
            <span>
              Q<sub>đảm bảo</sub>(m<sup>3</sup>/s)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'hmax',
          label: (
            <span>
              H<sub>max</sub> (m)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'hmin',
          label: (
            <span>
              H<sub>min</sub> (m)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'htoiThieu',
          label: (
            <span>
              H<sub>TT</sub> (m)
            </span>
          ),
          align: 'left'
        },
        { id: 'mnc', label: 'MNC', align: 'left' },
        { id: 'mndbt', label: 'MNDBT(m)', align: 'left' },
        { id: 'mnltk', label: 'MNLTK(m)', align: 'left' },
        { id: 'mnlkt', label: 'MNLKT(m)', align: 'left' },
        {
          id: 'dungTichToanBo',
          label: (
            <span>
              W<sub>toàn bộ</sub>(triệu m<sup>3</sup>)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'dungTichChet',
          label: (
            <span>
              W<sub> chết </sub>(triệu m<sup>3</sup>)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'dungTichHuuIch',
          label: (
            <span>
              W<sub>hữu ích</sub>(triệu m<sup>3</sup>)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'soLuongMayBom',
          label: 'Số máy bơm',


          align: 'left'
        },
        {
          id: 'qThietKe',
          label: (
            <span>
              Q<sub>TK</sub> (m<sup>3</sup>/h)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'qThucTe',
          label: (
            <span>
              Q<sub>TT</sub> (m<sup>3</sup>/h)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'dienTichTuoiThietKe',
          label: (
            <span>
              F<sub>tưới TK</sub> (ha)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'dienTichTuoiThucTe',
          label: (
            <span>
              F<sub>tưới TT</sub> (ha)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'thoiGianBomTB',
          label: (
            <span>
              T<sub>bơm TB</sub>(h)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'thoiGianBomNhoNhat',
          label: (
            <span>
              T<sub>bơm min</sub>(h)
            </span>
          ),
          align: 'left'
        },
        {
          id: 'thoiGianBomLonNhat',
          label: (
            <span>
              T<sub>bơm max</sub>(h)
            </span>
          ),
          align: 'left'
        }
      ]
    },

    //license
    {
      id: 'giayphep',
      label: 'Giấy phép',
      align: 'left',
      children: [
        {
          id: 'soGP',
          label: 'Số GP',
          align: 'left',
          pinned: 'left',
          minWidth: 200,
          elm: (row: any) => <ShowFilePDF name={row?.soGP} src={row?.fileGiayPhep} />
        },
        { id: 'thoihan', label: 'Thời hạn', align: 'left', minWidth: 150, elm: (row: any) => row?.thoiHan }
      ]
    },
    {
      id: 'tiencq',
      label: 'Tiền cấp quyền',
      align: 'left',
      children: [
        {
          id: 'soQDTCQ',
          label: 'Số QĐ',
          align: 'left',
          minWidth: 200,
          elm: (row: any) => <ShowFilePDF name={row?.soQDTCQ} src={row?.filePDF} />
        },
        { id: 'ngayKy', label: 'Ngày ký', align: 'left', minWidth: 150, elm: (row: any) => FormatDate(row?.ngayKy) },
        { id: 'tongTienCQ', label: 'Tổng tiền', align: 'left', minWidth: 150, elm: (row: any) => row?.tongTienCQ }
      ]
    },

    { id: 'actions', label: '#', rowspan: 2, align: 'center', pinned: 'right' }
  ]

  const [paramsFilter, setParamsFilter] = useState({
    tenct: null,
    loai_ct: GetConstructionTypeId(router),
    huyen: 0,
    xa: 0,
    song: 0,
    luuvuc: 0,
    tieu_luuvuc: 0,
    tang_chuanuoc: 0,
    tochuc_canhan: 0,
    nguonnuoc_kt: null
  })

  const [initConsType, setInitConstype] = useState<any>([
    'nuocmat',
    'thuydien',
    'hochua',
    'trambom',
    'tramcapnuoc',
    'conglaynuoc',
    'nhamaynuoc'
  ])

  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    switch (paramsFilter.loai_ct) {
      case 1:
        setColumnVisibility([])
        break
      case 4:
        setColumnVisibility([
          'soLuongMayBom',
          'qThietKe',
          'qThucTe',
          'dienTichTuoiThietKe',
          'dienTichTuoiThucTe',
          'thoiGianBomTB',
          'thoiGianBomNhoNhat',
          'thoiGianBomLonNhat'
        ])
        break
      case 5:
        setColumnVisibility([
          'soLuongMayBom',
          'qThietKe',
          'qThucTe',
          'dienTichTuoiThietKe',
          'dienTichTuoiThucTe',
          'thoiGianBomTB',
          'thoiGianBomNhoNhat',
          'thoiGianBomLonNhat'
        ])
        break
      case 6:
        setColumnVisibility([
          'capCT',
          'dienTichLuuVuc',
          'muaTrungBinhNam',
          'qTrungBinhNam',
          'congSuatDamBao',
          'chieuCaoDap',
          'chieuDaiDap',
          'caoTrinhDap',
          'qmaxNM',
          'qtt',
          'qDamBao',
          'hmax',
          'hmin',
          'htoiThieu',
          'mnc',
          'mndbt',
          'mnltk',
          'mnlkt',
          'dungTichToanBo',
          'dungTichChet',
          'dungTichHuuIch',
          'qThietKe',
          'qThucTe'
        ])
        break
      case 10:
        setColumnVisibility([
          'capCT',
          'dienTichLuuVuc',
          'muaTrungBinhNam',
          'qTrungBinhNam',
          'congSuatDamBao',
          'chieuCaoDap',
          'chieuDaiDap',
          'caoTrinhDap',
          'qmaxNM',
          'qtt',
          'qDamBao',
          'hmax',
          'hmin',
          'htoiThieu',
          'mnc',
          'mndbt',
          'mnltk',
          'mnlkt',
          'dungTichToanBo',
          'dungTichChet',
          'dungTichHuuIch',
          'soLuongMayBom',
          'dienTichTuoiThietKe',
          'dienTichTuoiThucTe',
          'thoiGianBomTB',
          'thoiGianBomNhoNhat',
          'thoiGianBomLonNhat'
        ])
        break
      default:
        setColumnVisibility([
          'capCT',
          'dienTichLuuVuc',
          'muaTrungBinhNam',
          'qTrungBinhNam',
          'congSuatLM',
          'congSuatDamBao',
          'chieuCaoDap',
          'chieuDaiDap',
          'caoTrinhDap',
          'qmaxNM',
          'qtt',
          'qDamBao',
          'hmax',
          'hmin',
          'htoiThieu',
          'mnc',
          'mndbt',
          'mnltk',
          'mnlkt',
          'dungTichToanBo',
          'dungTichChet',
          'dungTichHuuIch',
          'soLuongMayBom',
          'qThietKe',
          'qThucTe',
          'dienTichTuoiThietKe',
          'dienTichTuoiThucTe',
          'thoiGianBomTB',
          'thoiGianBomNhoNhat',
          'thoiGianBomLonNhat'
        ])
        break
    }

    const getDataConstructions = async () => {
      setLoading(true)
      getData('cong-trinh/danh-sach', paramsFilter)
        .then(data => {
          if (isMounted.current) {
            setResData(data)

          }
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    getDataConstructions()
  }, [postSuccess, paramsFilter])

  useEffect(() => {
    const filteredData = resData.filter((item: { [key: string]: any }) =>
      initConsType.some((keyword: any) =>
        item['loaiCT']?.['maLoaiCT']?.toString().toLowerCase().includes(keyword.toLowerCase())
      )
    )
    setDataFiltered(filteredData)
  }, [initConsType, resData])

  const handleFilterChange = (data: any, postSuccess: boolean | undefined) => {
    setParamsFilter(data)
    if (postSuccess !== undefined) {
      setPostSuccess(postSuccess)
    }
  }

  const zoomConstruction = (coords: any) => {
    setMapCenter(coords)
    setMapZoom(13)
  }

  const handleConsTypeChange = (data: any) => {
    setInitConstype(data)
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={12} sx={{ height: '55vh', overflow: 'hidden' }}>
        <Paper elevation={3} sx={{ height: '100%', position: 'relative' }}>
          <Box className='map-legend' sx={{ background: 'white', pl: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onClick={() => setShowLabel(!showLabel)} />}
                label='Hiển thị tên công trình'
              />
            </FormGroup>
            <MapLegend onChange={handleConsTypeChange} />
          </Box>
          <Map center={mapCenter} zoom={mapZoom} showLabel={showLabel} mapData={dataFiltered} loading={false} />
        </Paper>
      </Grid>
      <Grid xs={12} md={12}>
        <Paper elevation={3} sx={{ p: 0, height: '100%' }}>
          <ConstructionToolBar onChange={handleFilterChange} />
          <TableComponent
            columns={columnsTable}
            rows={resData}
            loading={loading}
            columnVisibility={columnVisibility}
            pagination
            actions={(row: any) => (
              <Box display={"flex"}>
                <CreateConstruction isEdit={true} data={row} setPostSuccess={handlePostSuccess} />
                <DeleteData url={'cong-trinh'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default SurfaceConstruction
