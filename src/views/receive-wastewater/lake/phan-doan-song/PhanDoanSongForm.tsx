import { useState } from 'react'
import { Add, Edit, Save } from '@mui/icons-material'
import { Grid, Button, DialogActions, IconButton, TextField, CircularProgress, Tooltip } from '@mui/material'
import { saveData } from 'src/api/axios'
import DialogsControlFullScreen from 'src/@core/components/dialog-control-full-screen'
import { PhanDoanSongState } from './PhanDoanSongInterface'

const Form = ({ data, setPostSuccess, closeDialogs }: any) => {
  const [report1Data, setreport1Data] = useState<PhanDoanSongState>({
    id: data?.id || 0,
    luuVucSong: data?.luuVucSong || '',
    song: data?.song || '',
    tenDoanSong: data?.tenDoanSong || '',
    phanDoan: data?.phanDoan || '',
    chieuDai: data?.chieuDai || 0,
    dienTichLV: data?.dienTichLV || 0,
    xDau: data?.xDau || 0,
    yDau: data?.yDau || 0,
    xCuoi: data?.xCuoi || 0,
    yCuoi: data?.yCuoi || 0,
    diaGioiHanhChinh: data?.diaGioiHanhChinh || '',
    mucDichSuDung: data?.mucDichSuDung || '',
    chatLuongNuoc: data?.chatLuongNuoc || '',
    ghiChu: data?.ghiChu || ''
  })

  const [saving, setSaving] = useState(false)

  const handleChange = (prop: keyof PhanDoanSongState) => (value: any) => {
    setreport1Data({ ...report1Data, [prop]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const handleApiCall = async () => {
      setSaving(true)
      try {
        const res = await saveData('PhanDoanSong/luu', report1Data)
        if (res) {
          // Reset form fields
          setreport1Data({
            id: 0,
            luuVucSong: '',
            song: '',
            tenDoanSong: '',
            phanDoan: '',
            chieuDai: 0,
            dienTichLV: 0,
            xDau: 0,
            yDau: 0,
            xCuoi: 0,
            yCuoi: 0,
            diaGioiHanhChinh: '',
            mucDichSuDung: '',
            chatLuongNuoc: '',
            ghiChu: ''
          })

          typeof setPostSuccess === 'function' ? setPostSuccess(true) : ''
          closeDialogs()
        }
      } catch (error) {
        console.log(error)
      } finally {
        6
        setSaving(false)
      }
    }

    // Call the function
    handleApiCall()
  }

  const handleClose = () => {
    setreport1Data({
      id: 0,
      luuVucSong: '',
      song: '',
      tenDoanSong: '',
      phanDoan: '',
      chieuDai: 0,
      dienTichLV: 0,
      xDau: 0,
      yDau: 0,
      xCuoi: 0,
      yCuoi: 0,
      diaGioiHanhChinh: '',
      mucDichSuDung: '',
      chatLuongNuoc: '',
      ghiChu: ''
    })

    closeDialogs()
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Lưu vực sông'
            fullWidth
            placeholder=''
            value={report1Data.luuVucSong || ''}
            onChange={event => handleChange('luuVucSong')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Sông'
            fullWidth
            placeholder=''
            value={report1Data.song || ''}
            onChange={event => handleChange('song')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Tên đoạn sông'
            fullWidth
            placeholder=''
            value={report1Data.tenDoanSong || ''}
            onChange={event => handleChange('tenDoanSong')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Phân đoạn sông'
            fullWidth
            placeholder=''
            value={report1Data.phanDoan || ''}
            onChange={event => handleChange('phanDoan')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Chiều dài đoạn sông'
            fullWidth
            placeholder=''
            value={report1Data.chieuDai || ''}
            onChange={event => handleChange('chieuDai')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Diện tích lưu vực'
            fullWidth
            placeholder=''
            value={report1Data.dienTichLV || ''}
            onChange={event => handleChange('dienTichLV')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Tọa độ điểm đầu X'
            fullWidth
            placeholder=''
            value={report1Data.xDau || ''}
            onChange={event => handleChange('xDau')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Tọa độ điểm đầu Y'
            fullWidth
            placeholder=''
            value={report1Data.yDau || ''}
            onChange={event => handleChange('yDau')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Tọa độ điểm cuối X'
            fullWidth
            placeholder=''
            value={report1Data.xCuoi || ''}
            onChange={event => handleChange('xCuoi')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Tọa độ điểm cuối Y'
            fullWidth
            placeholder=''
            value={report1Data.yCuoi || ''}
            onChange={event => handleChange('yCuoi')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Địa giới hành chính'
            fullWidth
            placeholder=''
            value={report1Data.diaGioiHanhChinh || ''}
            onChange={event => handleChange('diaGioiHanhChinh')(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Mục đích sử dụng nước theo quy chuẩn'
            fullWidth
            placeholder=''
            value={report1Data.mucDichSuDung || ''}
            onChange={event => handleChange('mucDichSuDung')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Chất lượng nước theo quy chuẩn'
            fullWidth
            placeholder=''
            value={report1Data.chatLuongNuoc || ''}
            onChange={event => handleChange('chatLuongNuoc')(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6} sm={12} sx={{ my: 2 }}>
          <TextField
            size='small'
            type='text'
            label='Ghi chú'
            fullWidth
            placeholder=''
            value={report1Data.ghiChu || ''}
            onChange={event => handleChange('ghiChu')(event.target.value)}
          />
        </Grid>
      </Grid>
      <DialogActions sx={{ p: 0, mt: 5 }}>
        <Button size='small' onClick={handleClose} className='btn cancleBtn'>
          Hủy
        </Button>
        <Button disabled={saving} className='btn saveBtn' onClick={handleSubmit}>
          {' '}
          {saving ? <CircularProgress color='inherit' size={20} /> : <Save />} &nbsp; Lưu{' '}
        </Button>
      </DialogActions>
    </>
  )
}

const PhanDoanSongForm = ({ data, setPostSuccess, isEdit }: any) => {
  const formTitle = isEdit ? 'Thay đổi thông tin ' : 'Thêm mới'

  return (
    <DialogsControlFullScreen>
      {(openDialogs: (content: React.ReactNode, title: React.ReactNode) => void, closeDialogs: () => void) => (
        <>
          {isEdit ? (
            <Tooltip title='Chỉnh sửa thông tin công trình'>
              <IconButton
                onClick={() =>
                  openDialogs(
                    <Form data={data} closeDialogs={closeDialogs} setPostSuccess={setPostSuccess} />,
                    formTitle
                  )
                }
              >
                <Edit className='tableActionBtn' />
              </IconButton>
            </Tooltip>
          ) : (
            <Button
              variant='outlined'
              size='small'
              startIcon={<Add />}
              onClick={() =>
                openDialogs(<Form data={data} closeDialogs={closeDialogs} setPostSuccess={setPostSuccess} />, formTitle)
              }
            >
              Thêm mới
            </Button>
          )}
        </>
      )}
    </DialogsControlFullScreen>
  )
}

export default PhanDoanSongForm
