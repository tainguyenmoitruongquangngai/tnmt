// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import { IconButton, Box, Checkbox } from '@mui/material';
import { Delete } from '@mui/icons-material';
import FormPages from './FormPages';
import TableComponent from 'src/@core/components/table';

import fetchData from 'src/api/fetch';

const ListPages = () => {

  const [resData, setResData] = useState([]);
  const [postSuccess, setPostSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };

  const columnsTable = [
    { id: 'name', label: 'Tên trang web', },
    { id: 'path', label: 'Đường dẫn', },
    { id: 'description', label: 'Mô tả', },
    { id: 'permitAccess', label: 'Được phép truy cập', elm: (row: any) => (<Checkbox name='permitAccess' checked={row?.permitAccess} disabled />) },
    { id: 'actions', label: '#', elm: (row: any) => (<># <FormPages data={row} setPostSuccess={handlePostSuccess} isEdit={false} /></>) }
  ]

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const data = await fetchData('Dashboard/list');
        setResData(data);
      } catch (error) {
        setResData([]);
      } finally {
        setLoading(false)
      }
    };
    getData();
  }, [postSuccess]);

  return (
    <TableComponent columns={columnsTable} data={resData} pagination loading={loading}
      actions={(row: any) => (
        <Box>
          <IconButton aria-label="edit">
            <FormPages data={row} setPostSuccess={handlePostSuccess} isEdit={true} />
          </IconButton>
          <IconButton aria-label="delete">
            <Delete className='tableActionBtn deleteBtn' />
          </IconButton>
        </Box>
      )

      } />
  );
}

export default ListPages;
