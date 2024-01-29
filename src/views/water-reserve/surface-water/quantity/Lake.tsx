import Paper from '@mui/material/Paper'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { getData } from 'src/api/axios'
import { useEffect, useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import Header from '../../header'
import Footer from '../../footer'
import { Delete, Edit } from '@mui/icons-material'

const LakeQuantity = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getDataLakeQuantity() {
      setLoading(true)
      await getData('NM_SoLuong/danh-sach')
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

    getDataLakeQuantity()
  }, [])

  const columnsTable: TableColumn[] = [
    { id: 'stt', label: 'STT', rowspan: 3 },
    {
      id: 'tenCT',
      label: 'Tên nguồn nước',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#1', children: [
            { id: '#1.1', label: '(1)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'nguonnuoc_kt',
      label: 'Nguồn nước khai thác',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#2', children: [
            { id: '#2.1', label: '(2)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'thuoc_song',
      label: 'Thuộc hệ thống sông',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3', children: [
            { id: '#3.1', label: '(3)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Diện tích mặt nước(m2)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#4', children: [
            { id: '#4.1', label: '(4)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Dung tích toàn bộ(triệu/m3)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#5', children: [
            { id: '#5.1', label: '(5)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Dung tích hữu ích(triệu/m3)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#6', children: [
            { id: '#6.1', label: '(6)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Vị trí hành chính',
      align: 'left',
      children: [
        {
          id: '#7', label: 'Xã', align: 'left', children: [
            { id: '#7.1', label: '(7)', align: 'left', }]
        },
        {
          id: '#8', label: 'Huyện', align: 'left', children: [
            { id: '8.1', label: '(8)', align: 'left', }]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Mục đích sử dụng	',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#9', children: [
            { id: '#9.1', label: '(9)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Ghi chú',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#10', children: [
            { id: '#10.1', label: '(10)', align: 'left', }
          ]
        }
      ]
    },
    { id: 'actions', label: '#', rowspan: 3 },
  ]

  return (
    <Paper sx={{ p: 8 }}>

      <Header />

      <Grid className='_text_center'>
        <Typography className='font-weight-bold' variant='body1' textTransform={'uppercase'}>
          KIỂM KÊ SỐ LƯỢNG NGUỒN NƯỚC MẶT AO, HỒ, ĐẦM, PHÁ
        </Typography>
      </Grid>
      {loading ? (
        <BoxLoading />
      ) : (
        <Grid className='_text_center' sx={{ mt: 3 }}>
          <TableComponent
            columns={columnsTable}
            rows={data}
            loading={loading}
            pagination

            actions={() => (
              <Box display={"flex"}>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
            )}
          />

        </Grid>
      )}

      <Footer />
    </Paper>
  )
}

export default LakeQuantity
