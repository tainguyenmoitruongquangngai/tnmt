import Paper from '@mui/material/Paper'
import { Grid, Box, } from '@mui/material'

import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'

import TableComponent, { TableColumn } from 'src/@core/components/table'

import DeleteData from 'src/@core/components/delete-data'
import ToolBar from './toolbar'

const ThongTinHoChuaVanHanh = () => {
  const [data, setData] = useState<any[]>([])

  const [loading, setLoading] = useState(false)


  const [postSuccess, setPostSuccess] = useState(false);
  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };
  useEffect(() => {
    async function getDataVHHC_HoChua_ThongSoKT() {
      setLoading(true)

      //API de lay du lieu tu sql: 'VHHC_HoChua_ThongSoKT/danh-sach'
      await getData('VHHC_HoChua_ThongSoKT/danh-sach')
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

    getDataVHHC_HoChua_ThongSoKT()
  }, [postSuccess])

  const columnsTable: TableColumn[] = [
    {
      id: 'stt',
      label: 'STT',

    },
    {
      //Id là trường dữ liệu lưu trong csdl
      id: '#',
      label: 'Tên hồ chứa',
      minWidth: 120,
      children: [{ id: 'tenHoChua', label: '(1)', align: 'left' }]
    },
    {
      //Id chỗ này để trống vì không có dl, chỉ để mở rộng colspan
      id: '#',
      label: 'Các đặc trưng lưu vực',
      children: [
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'thuocLVS',
          label: 'Thuộc LVS',
          minWidth: 150,
          children: [{ id: '#', label: '(2)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'fLv',
          label: (<span> F_lv <br />  (km2)</span>),
          minWidth: 150,
          children: [{ id: '#', label: '(3)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'xTbNam',
          label: (<span> X tbnăm <br /> (mm)</span>),
          minWidth: 150,
          children: [{ id: '#', label: '(4)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'qoTbNam',
          label: (<span> Qo tbnăm <br /> (m3/s) </span>),
          minWidth: 150,
          children: [{ id: '#', label: '(5)', align: 'left' }]
        }
      ]
    },
    {
      //Id chỗ này để trống vì không có dl, chỉ để mở rộng colspan
      id: '#',
      label: 'Lưu lượng đỉnh lũ ứng với tần suất:P=%',
      children: [
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'p002',
          label: 'P=0,02%',
          minWidth: 150,
          children: [{ id: '#', label: '(6)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'p01',
          label: 'P=0,1%',
          minWidth: 150,
          children: [{ id: '#', label: '(7)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'p02',
          label: 'P=0,2%',
          minWidth: 150,
          children: [{ id: '#', label: '(8)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'p05',
          label: 'P=0,5%',
          minWidth: 150,
          children: [{ id: '#', label: '(9)', align: 'left' }]
        }
      ]
    },
    {
      id: '#',
      label: 'Hồ chứa',
      children: [
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'mndbt',
          label: (<span> MNDBT  <br /> (m) </span>),
          minWidth: 150,
          children: [{ id: '#', label: '(10)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'mnc',
          label: 'MNC (m)',
          minWidth: 150,
          children: [{ id: '#', label: '(11)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'mnMaxP002',
          label: (<span> MN Max  <br /> (P=0,02%) </span>),
          minWidth: 150,
          children: [{ id: '#', label: '(12)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'mnMaxP01',
          label: (<span> MN Max  <br /> (P=0,1%) </span>),
          minWidth: 150,
          children: [{ id: '#', label: '(13)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'mnMaxP02',
          label: (<span> MN Max  <br /> (P=0,2%) </span>),
          minWidth: 150,
          children: [{ id: '#', label: '(14)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'mnMaxP05',
          label: (<span> MN Max  <br /> (P=0,5%) </span>),
          minWidth: 150,
          children: [{ id: '#', label: '(15)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'wToanBo',
          label: (<span> W toàn bộ <br /> (Wtb)</span>),
          minWidth: 150,
          children: [{ id: '#', label: '(16)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'wHuuIch',
          label: (<span> W hữu ích <br />(Whi)</span>),
          minWidth: 150,
          children: [{ id: '#', label: '(17)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'wNam',
          label: (<span> W năm <br />(Wni)</span>),
          minWidth: 150,
          children: [{ id: '#', label: '(18)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'wNhieuNam',
          label: (<span> W nhiều năm <br />(Wnni)</span>),
          minWidth: 150,
          children: [{ id: '#', label: '(19)', align: 'left' }]
        },
        {
          //Id là trường dữ liệu lưu trong csdl
          id: 'wChet',
          label: (<span> W chết <br /> (Wc)</span>),
          minWidth: 150,
          children: [{ id: '#', label: '(20)', align: 'left' }]
        },
      ]
    },
    {
      id: '#',
      label: 'Lưu lượng qua nhà máy',
      children: [
        {
          id: 'qDamBao',
          label: (<span> Q đảm bảo  <br /> (Qđb) </span>),
          minWidth: 150,
          children: [{ id: '#', label: '(21)', align: 'left' }]
        },
        {
          id: 'qMin',
          label: (<span> Q nhỏ nhất <br /> (Qmin) </span>),
          minWidth: 150,
          children: [{ id: '#', label: '(22)', align: 'left' }]
        },
        {
          id: 'qMax',
          label: (<span> Q lớn nhất <br /> (Qmax)</span>),
          minWidth: 150,
          children: [{ id: '#', label: '(23)', align: 'left' }]
        }
      ]
    },
    {
      id: 'ghiChu',
      label: 'Ghi chú',
      children: [{ id: '#', label: '(24)', align: 'left' }]
    },
    { align: 'center', id: 'actions', label: 'Thao tác', minWidth: 150, rowspan: 3 }
  ]

  return (
    <Paper sx={{ p: 8 }}>


      <Grid className='_text_center'>

      </Grid>
      {/* <CreateReport2 isEdit={false} setPostSuccess={handlePostSuccess}/> */}
      {loading ? (
        <BoxLoading />
      ) : (
        <Grid className='_text_center' sx={{ mt: 3 }}>
          <ToolBar onExport={{ data: data, column: columnsTable }} />
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination
            actions={(row: any) => (
              <Box >

                <DeleteData url={'VHHC_HoChua_ThongSoKT'} data={row} setPostSuccess={handlePostSuccess} />
              </Box>
            )}
          />
        </Grid>
      )}


    </Paper>
  )
}

export default ThongTinHoChuaVanHanh
