import { Button, Grid } from "@mui/material"
import AutoComplete from "src/@core/components/field/auto-complete"

const complete1 = [
    { title: 'Chọn loại CT', value: 1 },
    { title: 'Khai thác', value: 8 },
    { title: 'Thăm dò', value: 9 },
    { title: 'Hành nghề khoan', value: 10 },
    { title: 'Công trình khác', value: 23 },
    { title: 'Trám lấp giếng', value: 24 }
  ]
const SearchRequest = () => {


  return (
    <Grid container xs={12} sm={12} md={12} direction='row' justifyContent='flex-end' alignItems='center' spacing={4} sx={{pt:4}}>
    <Grid item xs={12} sm={7} md={4}>
      <AutoComplete
        fullWidth
        size='small'
        options={complete1}
        getOptionLabel={(option: any) => option.title}
        label='Chọn loại hình CT'
      />
    </Grid>
    <Grid item xs={12} sm={7} md={4}>
      <AutoComplete
        size='small'
        options={complete1}
        getOptionLabel={(option: any) => option.title}
        label='Chọn loại hình CT'
      />
    </Grid>
    <Grid item xs={12} sm={7} md={4}>
        <Button fullWidth  variant="outlined">Xem vị trí công trình</Button>
    </Grid>
  </Grid>
  )
}

export default SearchRequest
