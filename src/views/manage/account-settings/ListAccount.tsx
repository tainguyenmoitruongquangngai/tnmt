import { useEffect, useState } from 'react';
import { IconButton, Box, Toolbar, TextField } from '@mui/material';
import SetRole from './AssignRole';
import FormAccount from './FormAccount';
import TableComponent from 'src/@core/components/table';
import { getData } from 'src/api/axios';
import SetPassword from '../set-password';
import { useRouter } from 'next/router';
import { checkAccessPermission } from 'src/@core/layouts/checkAccessPermission';
import DeleteData from 'src/@core/components/delete-data';


const ListAccount = () => {

  const [postSuccess, setPostSuccess] = useState(false);
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paramFilter, setParamFilter] = useState({ UserName: '' });

  const router = useRouter();
  const routePath = router.pathname; // Use router.pathname to get the current pathname

  // Split the pathname and get the part you need (in this case, the first segment)
  const routeSegment = routePath.split('/')[2];

  const [accessCreate, setAccessCreate] = useState(false);
  const [accessUpdate, setAccessUpdate] = useState(false);
  const [accessSetPassword, setAccessSetPassword] = useState(false);
  const [accessSetRole, setAccessSetRole] = useState(false);
  const [accessDelete, setAccessDelete] = useState(false);

  async function getAccess() {
    setAccessCreate(await checkAccessPermission(routeSegment, 'create'));
    setAccessUpdate(await checkAccessPermission(routeSegment, 'edit'));
    setAccessSetRole(await checkAccessPermission(routeSegment, 'set-role'));
    setAccessSetPassword(await checkAccessPermission(routeSegment, 'set-password'));
    setAccessDelete(await checkAccessPermission(routeSegment, 'delete'));
  }

  useEffect(() => {
    getAccess()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePostSuccess = () => {
    setPostSuccess(prevState => !prevState);
  };

  const columnsTable = [
    { id: 'userName', label: 'Tài khoản(User name)', },
    { id: 'roles', label: 'Quyền hạn(Roles)', elm: (row: any) => (row.role) },
    { id: 'fullName', label: 'Họ tên(Full Name)', },
    { id: 'email', label: 'Email', },
    { id: 'phoneNumber', label: 'Số điện thoại(Phone Number)', },
    { id: 'actions', label: '#', elm: (row: any) => (accessCreate ? <># <FormAccount data={row} setPostSuccess={handlePostSuccess} isEdit={false} /></> : <></>) }
  ]

  useEffect(() => {
    const getDataUser = async () => {
      try {
        setLoading(true)
        const data = await getData('User/list', paramFilter);
        setResData(data);
      } catch (error) {
        setResData([]);
      }
      setLoading(false)
    };

    getDataUser();
  }, [paramFilter, postSuccess]);

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
      <TableComponent columns={columnsTable} rows={resData} loading={loading}
        actions={(row: any) => (
          <Box display={'flex'}>
            {
              accessSetRole ? <IconButton aria-label="setRole">
                <SetRole data={row} setPostSuccess={handlePostSuccess} />
              </IconButton> : null
            }
            {
              accessSetPassword ?
                <IconButton aria-label="setPassword">
                  <SetPassword user={row} setPostSuccess={handlePostSuccess} />
                </IconButton>
                : null
            }
            {
              accessUpdate ?
                <IconButton aria-label="edit">
                  <FormAccount data={row} setPostSuccess={handlePostSuccess} isEdit={true} />
                </IconButton> : null
            }
            {
              accessDelete ?
                <IconButton aria-label="delete">
                  <DeleteData url={'User'} data={row} setPostSuccess={handlePostSuccess} />
                </IconButton>
                : null
            }

          </Box>
        )

        } />
    </div >
  );

}

export default ListAccount;
