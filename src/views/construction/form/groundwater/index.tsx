import React, { useState } from 'react';
import { Add, Edit } from '@mui/icons-material';
import { Button, DialogActions, Grid } from '@mui/material';

import DialogsControlFullScreen from 'src/@core/components/dialog-control-full-screen';

import postData from 'src/api/post';

import GroundWaterField from './cons-ground';
import ConsGroundItem from './ground-item';


interface FormLicenseProps {
  data: any;
  closeDialogs: () => void;
  setPostSuccess?: (value: boolean) => void;
}

const FormLicense: React.FC<FormLicenseProps> = ({ data, closeDialogs, setPostSuccess }) => {

  //Business
  const [consSFData, setConsSFData] = useState<any>({});

  const handleConsSFChange = (data: any) => {
    console.log(data)
    setConsSFData(data);
  };

  //License
  const [consItemData, setConsItemData] = useState<any>({});

  const handleconsItemChange = (data: any) => {
    console.log(data)
    setConsItemData(data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const handleApiCall = async () => {
   
        // 
        const res = await postData('Construction/save', consSFData);

        if (res) {
            // Reset form fields
            setConsSFData({
              consData : consSFData,
              consItem: consItemData,
            });

            typeof (setPostSuccess) === 'function' ? setPostSuccess(true) : '';
            closeDialogs();
        }

        // 
    };

    // Call the function
    handleApiCall();
};

const handleClose = () => {
  setConsSFData({
    consData : consSFData,
    consItem: consItemData,
    });

    closeDialogs();
};


console.log(consSFData);


  return (
    <form onSubmit={handleSubmit}>
      <Grid container gap={3}>
        <Grid item xs={12}>
          <GroundWaterField data={data?.consData} onChange={handleConsSFChange} />
        </Grid>

        <Grid item xs={12}>
          <ConsGroundItem data={data?.consItem} onChange={handleconsItemChange}/>
        </Grid>
      </Grid>

      <DialogActions sx={{ p: 0, mt: 5 }}>
        <Button size='small' onClick={handleClose} className='btn cancleBtn'>
          Hủy
        </Button>
        <Button size='small' type='submit' className='btn saveBtn'>
          Lưu
        </Button>
      </DialogActions>
    </form>
  );
};

interface CreateConstructionProps {
  isEdit: boolean;
  data?: any;
  setPostSuccess?: (value: boolean) => void;
}

const CreateConstructionGround: React.FC<CreateConstructionProps> = ({ isEdit, data, setPostSuccess }) => {
  const formTitle = isEdit ? 'Sửa công trình' : 'Thêm công trình mới';

  return (
    <DialogsControlFullScreen>
      {(openDialogs: (content: React.ReactNode, title: React.ReactNode) => void, closeDialogs: () => void) => (
        <>
          {isEdit ? (
            <Edit
              className='tableActionBtn'
              onClick={() =>
                openDialogs(<FormLicense data={data} closeDialogs={closeDialogs} setPostSuccess={setPostSuccess} />, formTitle)
              }
            />
          ) : (
            <Button
              size="small"
              startIcon={<Add />}
              onClick={() =>
                openDialogs(<FormLicense data={data} closeDialogs={closeDialogs} setPostSuccess={setPostSuccess} />, formTitle)
              }
            >
              Thêm mới
            </Button>
          )}
        </>
      )}
    </DialogsControlFullScreen>
  );
};

export default CreateConstructionGround;
