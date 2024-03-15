//import { Replay, Search } from '@mui/icons-material'
import { Button, Grid, TextField, Toolbar } from '@mui/material'
import CreateLake from '../create-form/CreateNN_LuuVucSong'
import { FC, useState } from 'react'
import ExportToExcel from 'src/@core/components/export-excel'
import { TableColumn } from 'src/@core/components/table'
import { Replay, Search } from "@mui/icons-material";

interface LicenseToolBarProps {
  onExport: { data: any; column: TableColumn[] }
}

// ToolBar tên phần tử có trong index dòng 14, có từ từ dòng 14 đến 63
const ToolBar: FC<LicenseToolBarProps> = ({ onExport }) => {
  const [postSucceed, setPostSucceed] = useState(false)
  console.log(postSucceed)

  const handlePostSuccess = () => {
    setPostSucceed(prevState => !prevState)
  }

  return (
    <Toolbar variant='dense'>
      <Grid container spacing={2} sx={{ paddingY: 3 }} className='_flexEnd '>
        {/* đoạn text tìm kiếm từ dòng 24 - 27*/}
        <Grid item xs={12} md={3} py={0}>
          
          <TextField sx={{ p: 0 }} size='small' fullWidth variant='outlined' placeholder='Tên sông, suối...' />
        </Grid>
         {/* nút tim kiem */}
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
        {/* het nút tim kiem */}

         {/* nút tai lai */}
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
        {/* het nút tai lai */}
         {/* nút xuat exel*/}
        <Grid item xs={6} md={1.5} py={0}>
          <ExportToExcel resData={onExport?.data} columnsTable={onExport?.column} />
        </Grid>
          {/* het nút xuat exel*/}
          {/* CreateLake nút thêm mới*/}
        <Grid item xs={6} md={1.5} py={0}>
          <CreateLake isEdit={false} setPostSuccess={handlePostSuccess} />
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default ToolBar
