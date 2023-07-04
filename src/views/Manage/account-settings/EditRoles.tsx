// ** React Imports
import { useState, ChangeEvent } from 'react';

// ** Icons Imports
import { EditNote, PersonAddAlt } from "@mui/icons-material";

// ** MUI Imports
import { Grid, Button, DialogActions, FormControlLabel, Checkbox, IconButton, Typography } from "@mui/material";

// ** Component Imports
import DialogsControl from 'src/@core/components/dialog-control';
import { TextField } from 'src/@core/components/field';
import postApiData from 'src/api/post';

interface State {
  name?: string,
  isDefault?: boolean,
}

const Form = ({ data, setPostSuccess, isEdit, closeDialogs }: any) => {

  const [values, setValues] = useState<State>({
    name: data?.name || '',
    isDefault: data?.isDefault || false,
  });

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setValues({ ...values, [prop]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const handleApiCall = async () => {
      let res;
      res = await postApiData('Role/save', values);
      
      if (res) {
        // Reset form fields
        setValues({
          name: '',
          isDefault: false,
        });

        typeof (setPostSuccess) === 'function' ? setPostSuccess(true) : '';

        closeDialogs();
      }
    };

    // Call the function
    handleApiCall();
  };

  const handleClose = () => {
    setValues({
      name: '',
      isDefault: false,
    });

    closeDialogs();
  };


  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={12} sx={{ my: 2 }}>
          <TextField size='small' type='text' fullWidth label='Tên' placeholder='' value={values?.name} onChange={handleChange('name')} />
        </Grid>
        <Grid item xs={12} md={12} sx={{ my: 2 }}>
          <FormControlLabel control={<Checkbox name='isDefault' checked={!!values?.isDefault} onChange={handleChange('isDefault')} />} label="Đặt là mặc định" />
        </Grid>
      </Grid>
      <DialogActions sx={{ p: 0 }}>
        <Button onClick={() => handleClose()} className='btn closeBtn'>Hủy</Button>
        <Button type="submit" className='btn saveBtn'>Lưu</Button>
      </DialogActions>
    </form>
  );
};

const EditRoles = ({ data, isEdit, setPostSuccess }: any) => {
  const formTitle = isEdit ? 'Thay đổi thông tin roles' : 'Thêm roles mới';

  return (
    <DialogsControl>
      {(openDialogs: (content: React.ReactNode, title: React.ReactNode) => void, closeDialogs: () => void) => (
        <>
          {
            isEdit ?
              <EditNote className='tableActionBtn' onClick={() => openDialogs(<Form data={data} setPostSuccess={setPostSuccess} isEdit={isEdit} closeDialogs={closeDialogs} />, formTitle)} />
              :
              <IconButton className='addNewBtn' aria-label="add user" onClick={() => openDialogs(<Form setPostSuccess={setPostSuccess} closeDialogs={closeDialogs} />, formTitle)}>
                <PersonAddAlt sx={{ mr: 2 }} />
                <Typography>Thêm mới</Typography>
              </IconButton>
          }
        </>
      )}
    </DialogsControl>
  );
};

export default EditRoles;
