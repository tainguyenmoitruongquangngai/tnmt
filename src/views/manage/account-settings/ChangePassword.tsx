import DialogsControl from 'src/@core/components/dialog-control';
import { LockOpen } from "@mui/icons-material";
import { Grid, Button, TextField, DialogActions } from "@mui/material";
import { useState } from 'react';
import { saveData } from 'src/api/axios';

const Form = ({ setPostSuccess, closeDialogs }: any) => {

  const [currPassword, setCurrPassword] = useState<any>(null);
  const [newPassword, setNewPassword] = useState<any>(null);
  const [confirmPassword, setConfirmPassword] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      try {
        const res = await saveData('Auth/change-password', {
          currentPassword: currPassword,
          newPassword: newPassword,
          newConfirmPassword: confirmPassword
        });

        if (res) {
          typeof (setPostSuccess) === 'function' ? setPostSuccess(true) : '';
          closeDialogs();
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Mật khẩu xác nhận phải giống mật khẩu mới");
    }
  };

  const handleClose = () => {
    closeDialogs();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={12} sx={{ my: 3 }}>
          <TextField size='small' type='password' fullWidth label='Mật khẩu cũ' placeholder='' defaultValue='' onChange={(e) => setCurrPassword(e.target.value)} />
        </Grid>
        <Grid item xs={12} md={12} sx={{ my: 3 }}>
          <TextField size='small' type='password' fullWidth label='Mật khẩu mới' placeholder='' defaultValue='' onChange={(e) => setNewPassword(e.target.value)} />
        </Grid>
        <Grid item xs={12} md={12} sx={{ my: 3 }}>
          <TextField size='small' type='password' fullWidth label='Xác nhận mật khẩu' placeholder='' defaultValue='' onChange={(e) => setConfirmPassword(e.target.value)} />
        </Grid>
      </Grid>
      <DialogActions sx={{ p: 0 }}>
        <Button onClick={() => handleClose()} className='btn cancleBtn'>Hủy</Button>
        <Button type="submit" className='btn saveBtn'>Lưu</Button>
      </DialogActions>
    </form>
  );
};

const ChangePassword = ({ setPostSuccess }: any) => {
  const formTitle = 'Thay đổi mật khẩu';

  return (
    <DialogsControl>
      {(openDialogs: (content: React.ReactNode, title: React.ReactNode) => void, closeDialogs: () => void) => (
        <span style={{ display: 'flex', alignItems: 'center' }} onClick={() => openDialogs(<Form setPostSuccess={setPostSuccess} closeDialogs={closeDialogs} />, formTitle)}>
          <LockOpen sx={{ marginRight: 2 }} />
          Đổi mật khẩu
        </ span>
      )}
    </DialogsControl>
  );
};

export default ChangePassword;
