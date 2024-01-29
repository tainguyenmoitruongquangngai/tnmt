import Paper from '@mui/material/Paper'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import BoxLoading from 'src/@core/components/box-loading'
import TableComponent, { TableColumn } from 'src/@core/components/table'
import Header from '../../header'
import Footer from '../../footer'
import { Delete, Edit } from '@mui/icons-material'

const RiverQuantity = () => {
  const [data] = useState<any[]>([])
  const [loading] = useState(false)

  const columnsTable: TableColumn[] = [
    {
      id: 'stt', label: 'STT', rowspan: 2,
      children: [
        {
          id: '#1', children: [
            { id: '#1.1', label: '(1)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'tenCT',
      label: 'Mã sông',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#1', children: [
            { id: '#1.1', label: '(2)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'nguonnuoc_kt',
      label: 'Tên sông',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#2', children: [
            { id: '#2.1', label: '(3)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'thuoc_song',
      label: 'Chảy ra',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#3', children: [
            { id: '#3.1', label: '(4)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Chiều dài(km)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#4', children: [
            { id: '#4.1', label: '(5)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Chiều dài thuộc tỉnh, thành phố(km)',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#5', children: [
            { id: '#5.1', label: '(6)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Vị trí đầu sông',
      align: 'left',
      children: [
        {
          id: '#7', label: 'Tọa độ X', align: 'left', children: [
            { id: '#7.1', label: '(7)', align: 'left', }]
        },
        {
          id: '#8', label: 'Tọa độ Y', align: 'left', children: [
            { id: '8.1', label: '(8)', align: 'left', }]
        },
        {
          id: '#8', label: 'Xã, Huyện, Tỉnh', align: 'left', children: [
            { id: '8.1', label: '(9)', align: 'left', }]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Vị trí cuối sông',
      align: 'left',
      children: [
        {
          id: '#7', label: 'Tọa độ X', align: 'left', children: [
            { id: '#7.1', label: '(10)', align: 'left', }]
        },
        {
          id: '#8', label: 'Tọa độ Y', align: 'left', children: [
            { id: '8.1', label: '(11)', align: 'left', }]
        },
        {
          id: '#8', label: 'Xã, Huyện, Tỉnh', align: 'left', children: [
            { id: '8.1', label: '(12)', align: 'left', }]
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
            { id: '#10.1', label: '(13)', align: 'left', }
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
          KIỂM KÊ SỐ LƯỢNG NGUỒN NƯỚC SÔNG SUỐI
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

export default RiverQuantity
