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
      label: 'Nguồn nước(sông, suối, ao, hồ, đầm,...)',
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
      id: 'dientich_matnuoc',
      label: 'Vị trí hành chính',
      align: 'left',
      children: [
        {
          id: '#7', label: 'Xã', align: 'left', children: [
            { id: '#7.1', label: '(3)', align: 'left', }]
        },
        {
          id: '#8', label: 'Huyện', align: 'left', children: [
            { id: '8.1', label: '(4)', align: 'left', }]
        },
        {
          id: '#8', label: 'Tỉnh', align: 'left', children: [
            { id: '8.1', label: '(5)', align: 'left', }]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Thuộc lưu vực sông',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#10', children: [
            { id: '#10.1', label: '(6)', align: 'left', }
          ]
        }
      ]
    },
    {
      id: 'dientich_matnuoc',
      label: 'Giá trị WQI',
      align: 'left',
      rowspan: 2,
      children: [
        {
          id: '#10', children: [
            { id: '#10.1', label: '(7)', align: 'left', }
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
          KIỂM KÊ CHẤT LƯỢNG NGUỒN NƯỚC MẶT
        </Typography>
        <Typography className='font-weight-bold' variant='subtitle2' textTransform={'uppercase'}>
          (Theo chỉ số chất lượng nước tổng hợp wqi)
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
