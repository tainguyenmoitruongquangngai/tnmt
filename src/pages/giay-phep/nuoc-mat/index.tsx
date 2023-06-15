// ** MUI Imports
import { Grid, Box, Button, Autocomplete, TextField, Card, CardContent } from '@mui/material';
import { useState } from 'react'

// ** Icons Imports

import SearchIcon from '@mui/icons-material/Search';

// ** Components Imports
import ConstructionMap from 'src/views/construction'
import CreateConstruction from 'src/views/construction/CreateConstruction';
import SearchLicense from 'src/views/license/Search';
import CountLicense from 'src/views/license/CountLicense';
import TableLicenseComponent from 'src/@core/components/table/table-license';


const complete1 = [
  {title: "Khóa 1", value: 1},
  {title: "Khóa 2", value: 2},
  {title: "Khóa 3", value: 3},
];
const complete2 = [
  {title: "Đợt 1"},
  {title: "Đợt 2"},
  {title: "Đợt 3"},
];

const data:any = [ ]

const columnsTable = [
  { label: 'Column 1', showId:[1], rowspan: 2 },
  { label: 'Column 2', showId:[1], colspan: 2, children: [
    { label: 'Child Column 1',},
    { label: 'Child Column 2',},
  ] },
  { label: 'Column 3' , showId:[2], rowspan: 2 },
  { label: 'Column 4', showId:[1,2], rowspan: 2 },
];

const SurfaceWater = () => {
  const [TypeOfConsId, setTypeOfConsId] = useState([1]);
  const handleChange = (e:any) => {
    const val = (e == null ? 1 : e.value) 
    setTypeOfConsId(val)
  }

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://tnnsl.loc/api/Construction/list?BasinId=0&CommuneId=0&DistrictId=0&Keyword=&LicenseId=-1&LicensingAuthorities=-1&PageIndex=1&PageSize=0&ProvinceId=0&StartDate=-1&Status=true&TypeOfConstructionId=1'); // Thay đổi URL API tùy thuộc vào nguồn dữ liệu của bạn
  //     const jsonData = await response.json();
  //     console.log(jsonData.ListData)
  //     setData(jsonData.ListData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }; 

  return (
    <Grid container spacing={3}>
      <Grid item xs={3} sm={3} md={3}>
        <CountLicense />
       </Grid>
       <Grid item xs={9} sm={9} md={9} sx={{height:'55vh', overflow:'hidden'}}>
        <Card sx={{height: '100%'}}>
          <CardContent sx={{p: 0, height: '100%'}}>
            <ConstructionMap />
          </CardContent>
        </Card>
       </Grid>
       <Grid item xs={12} sm={12} md={12} className='_row _justifyContentBetween' >
          <Box></Box>
          <Box className='_search'>
            <Box>
              <Autocomplete  size="small" 
              onChange={(e,v) => handleChange(v)}
              options={complete1} 
              getOptionLabel={(option) => option.title} renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Chọn loại hình CP"
                    placeholder=""
                  />
                )}
              />
            </Box>
            <Box>
              <Autocomplete size="small" options={complete2} getOptionLabel={(option) => option.title} renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Chọn cơ quan CP"
                    placeholder=""
                  />
                )}
              />
            </Box>
            <Box>
              <SearchLicense/>
            </Box>           
            <Box>
              <Button size='small' startIcon={<SearchIcon/>} variant="outlined">Xuất excel</Button>
            </Box>
            <Box>
              <CreateConstruction isEdit={false}/>
            </Box>
          </Box>
        </Grid> 
       <Grid item xs={12} sm={12} md={12}>
          <TableLicenseComponent columns={columnsTable} data={data} TypeOfConsId={TypeOfConsId} />
       </Grid>
    </Grid>
  )
}

export default SurfaceWater
