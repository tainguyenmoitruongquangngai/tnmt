import { useState } from 'react'
import { EditNote, PersonAddAlt, Save } from '@mui/icons-material'
import { Grid, Button, DialogActions, IconButton, Typography, TextField, CircularProgress } from '@mui/material'
import DialogsControl from 'src/@core/components/dialog-control'
import { saveData } from 'src/api/axios'

interface State {
  id: number,
  tenHoChua: string,
  xa: string,
  huyen: string,
  nguonNuoc: string,
  thuocLVS: string,
  loaiHinhChucNang: string,
  dienTichMatNuoc: number,
  dungTichToanBo: number,
  dungTichHuuIch: number,
  dungTichPhongLu: number,
  mucNuocDangBinhThuong: number,
  mucNuocChet: number,
  namHoanThanh: number,
  donQuayLyVanHanh: string,
  thuocDanhMucKhongSanLap: string,
  quyetDinh: string,
  ghiChu: string
}

const Form = ({ data, setPostSuccess, closeDialogs }: any) => {
  const [NN_AoHoKhongSanLapData, setNN_AoHoKhongSanLapData] = useState<State>({
    id: data?.id || 0,
    tenHoChua: data?.tenHoChua || '',
    xa: data?.xa || '',
    huyen: data?.huyen || '',
    nguonNuoc: data?.nguonNuoc || '',
    thuocLVS: data?.thuocLVS || '',
    loaiHinhChucNang: data?.loaiHinhChucNang || '',
    dienTichMatNuoc: data?.dienTichMatNuoc || 0,
    dungTichToanBo: data?.dungTichToanBo || 0,
    dungTichHuuIch: data?.dungTichHuuIch || 0,
    dungTichPhongLu: data?.dungTichPhongLu || 0,
    mucNuocDangBinhThuong: data?.mucNuocDangBinhThuong || 0,
    mucNuocChet: data?.mucNuocChet || 0,
    namHoanThanh: data?.namHoanThanh || 0,
    donQuayLyVanHanh: data?.donQuayLyVanHanh || '',
    thuocDanhMucKhongSanLap: data?.thuocDanhMucKhongSanLap || '',
    quyetDinh: data?.quyetDinh || '',
    ghiChu: data?.ghiChu || ''
  })

  const [saving, setSaving] = useState(false)

  const handleChange = (prop: keyof State) => (value: any) => {
    setNN_AoHoKhongSanLapData({ ...NN_AoHoKhongSanLapData, [prop]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const handleApiCall = async () => {
      setSaving(true)
      try {
        const res = await saveData('NN_AoHoDamPhaKhongDuocSanLap/luu', NN_AoHoKhongSanLapData)
        if (res) {
          // Reset form fields
          setNN_AoHoKhongSanLapData({
            id: 0,
            tenHoChua: '',
            xa: '',
            huyen: '',
            nguonNuoc: '',
            thuocLVS: '',
            loaiHinhChucNang: '',
            dienTichMatNuoc: 0,
            dungTichToanBo: 0,
            dungTichHuuIch: 0,
            dungTichPhongLu: 0,
            mucNuocDangBinhThuong: 0,
            mucNuocChet: 0,
            namHoanThanh: 0,
            donQuayLyVanHanh: '',
            thuocDanhMucKhongSanLap: '',
            quyetDinh: '',
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
    setNN_AoHoKhongSanLapData({
      id: 0,
      tenHoChua: '',
      xa: '',
      huyen: '',
      nguonNuoc: '',
      thuocLVS: '',
      loaiHinhChucNang: '',
      dienTichMatNuoc: 0,
      dungTichToanBo: 0,
      dungTichHuuIch: 0,
      dungTichPhongLu: 0,
      mucNuocDangBinhThuong: 0,
      mucNuocChet: 0,
      namHoanThanh: 0,
      donQuayLyVanHanh: '',
      thuocDanhMucKhongSanLap: '',
      quyetDinh: '',
      ghiChu: ''
    })

    closeDialogs()
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Tên hồ chứa'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.tenHoChua || ''}
            onChange={event => handleChange('tenHoChua')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Xã'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.xa || ''}
            onChange={event => handleChange('xa')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Huyện'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.huyen || ''}
            onChange={event => handleChange('huyen')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Nguồn nước'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.nguonNuoc || ''}
            onChange={event => handleChange('nguonNuoc')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Thuộc lưu vực sông'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.thuocLVS || ''}
            onChange={event => handleChange('thuocLVS')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Loại hình chức năng'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.loaiHinhChucNang || ''}
            onChange={event => handleChange('loaiHinhChucNang')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Diện tích mặt nước (km2)'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.dienTichMatNuoc || ''}
            onChange={event => handleChange('dienTichMatNuoc')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Dung tích toàn bộ (triệu m3)'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.dungTichToanBo || ''}
            onChange={event => handleChange('dungTichToanBo')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Dung tích hữu ích (triệu m3)'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.dungTichHuuIch || ''}
            onChange={event => handleChange('dungTichHuuIch')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Dung tích phòng lũ (triệu m3)'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.dungTichPhongLu || ''}
            onChange={event => handleChange('dungTichPhongLu')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Mực nước dâng bình thường (m)'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.mucNuocDangBinhThuong || ''}
            onChange={event => handleChange('mucNuocDangBinhThuong')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Mực nước chết (m)'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.mucNuocChet || ''}
            onChange={event => handleChange('mucNuocChet')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Năm hoàn thành'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.namHoanThanh || ''}
            onChange={event => handleChange('namHoanThanh')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Đơn vị quản lý vận hành'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.donQuayLyVanHanh || ''}
            onChange={event => handleChange('donQuayLyVanHanh')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Thuộc danh mục không san lấp'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.thuocDanhMucKhongSanLap || ''}
            onChange={event => handleChange('thuocDanhMucKhongSanLap')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Quyết định'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.quyetDinh || ''}
            onChange={event => handleChange('quyetDinh')(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <TextField
            size='small'
            type='text'
            label='Ghi chú'
            fullWidth
            placeholder=''
            value={NN_AoHoKhongSanLapData.ghiChu || ''}
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

const CreateNN_AoHoKhongSanLap = ({ data, setPostSuccess, isEdit }: any) => {
  const formTitle = isEdit ? 'Thay đổi thông tin' : 'Thêm mới'

  return (
    <DialogsControl>
      {(openDialogs: (content: React.ReactNode, title: React.ReactNode) => void, closeDialogs: () => void) => (
        <>
          {isEdit ? (
            <EditNote
              className='tableActionBtn'
              onClick={() =>
                openDialogs(<Form data={data} setPostSuccess={setPostSuccess} closeDialogs={closeDialogs} />, formTitle)
              }
            />
          ) : (
            <IconButton
              aria-label='add user'
              onClick={() =>
                openDialogs(<Form setPostSuccess={setPostSuccess} closeDialogs={closeDialogs} />, formTitle)
              }
            >
              <PersonAddAlt sx={{ mr: 2 }} />
              <Typography>Thêm mới</Typography>
            </IconButton>
          )}
        </>
      )}
    </DialogsControl>
  )
}

export default CreateNN_AoHoKhongSanLap
