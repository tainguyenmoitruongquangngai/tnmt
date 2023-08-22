import React, { useEffect, useState } from 'react';
import { IconButton, Box } from '@mui/material';
import TableComponent from 'src/@core/components/table';
import fetchData from 'src/api/fetch';

import AssignPermit from './assign-permit';
import AssignFunction from './assign-function';

const UserPermit = () => {

  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const data = await fetchData('User/list');
        setResData(data);
      } catch (error) {
        setResData([]);
      } finally {
        setLoading(false)
      }
    };

    getData();
  }, []);

  const columnsTable = [
    { id: 'userName', label: 'Tên người dùng', elm: (row: any) => (<AssignFunction data={row} />) },
    { id: 'fullName', label: 'Mô tả' },
    { id: 'actions', label: '#' }
  ];

  return (
    <div>
      <TableComponent
        columns={columnsTable}
        data={resData}
        loading={loading}
        actions={(row: any) => (
          <Box>
            <IconButton>
              <AssignPermit data={row} />
            </IconButton>
          </Box>
        )}
      />
    </div>
  );
};

export default UserPermit;
