import { Grid, Typography } from "@mui/material"
import { TextField } from "src/@core/components/field"

const CreateDrill = () => {

  return (
    <fieldset>
      <legend>
        <Typography variant={'subtitle1'} className='legend__title'>Số hiệu,vị trí và thông số công trình khai thác</Typography>
      </legend>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sm={12} sx={{ my: 2 }} >
          <TextField size='small' type='text' label='Quy mô khoan thăm dò' fullWidth placeholder='' defaultValue='' />
        </Grid>
        <Grid item xs={12} md={4} sm={12} sx={{ my: 2 }}>
          <TextField size='small' type='text' label='Tầng chứa nước thăm dò' fullWidth placeholder='' defaultValue='' />
        </Grid>
        <Grid item xs={12} md={4} sm={12} sx={{ my: 2 }}>
          <TextField size='small' type='text' label='Thời gian thi công' fullWidth placeholder='' defaultValue='' />
        </Grid>
      </Grid>
    </fieldset>
  )
}

export default CreateDrill
