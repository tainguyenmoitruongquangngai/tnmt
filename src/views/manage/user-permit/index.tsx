import React, { useEffect, useState } from 'react';
import { IconButton, Box, Toolbar, TextField } from '@mui/material';
import TableComponent from 'src/@core/components/table';
import AssignPermit from './assign-permit';
import AssignFunction from './assign-function';
import { getData } from 'src/api/axios';

const UserPermit = () => {

  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paramFilter, setParamFilter] = useState({ UserName: '' });

  useEffect(() => {
    const getDataUser = async () => {
      try {
        setLoading(true)
        const data = await getData('User/list', paramFilter);
        setResData(data);
      } catch (error) {
        setResData([]);
      } finally {
        setLoading(false)
      }
    };

    getDataUser();
  }, [paramFilter]);

  const columnsTable = [
    { id: 'userName', label: 'Tên người dùng', elm: (row: any) => (<AssignFunction data={row} />) },
    { id: 'fullName', label: 'Mô tả' },
    { id: 'actions', label: '#' }
  ];

  return (
    <div>
      <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'end' }}>
        <Box  >
          <TextField
            sx={{ p: 0 }}
            size="small"
            fullWidth
            variant="outlined"
            placeholder="Tài khoản..."
            onChange={(e: any) => setParamFilter({ ...paramFilter, UserName: e.target.value })}
          />
        </Box>
      </Toolbar>
      <TableComponent
        columns={columnsTable}
        rows={resData}
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
