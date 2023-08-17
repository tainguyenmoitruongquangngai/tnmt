import DialogsControl from 'src/@core/components/dialog-control';
import { Add, EditNote } from "@mui/icons-material";
import { Grid, Button, DialogActions, FormControl, TextField, FormControlLabel, Checkbox, Autocomplete } from "@mui/material";
import { ChangeEvent, useEffect, useState } from 'react';
import { useLoadingContext } from 'src/@core/theme/loading-provider';
import postData from 'src/api/post';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useRouter } from 'next/router';
import fetchData from 'src/api/fetch';

interface State {
    id?: number,
    childrenId?: number,
    licenseFeeNumber?: string,
    signDate?: Dayjs | null,
    totalMoney?: number,
    filePdf?: File | null | undefined,
    description?: string,
}


const Form = ({ data, setPostSuccess, closeDialogs }: any) => {

    const d = new Date();
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    const m = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
    const y = d.getFullYear();
    const today = `${y}-${m}-${day}`

    const [values, setValues] = useState<State>({
        id: data?.id || 0,
        childrenId: data?.childrenId || 0,
        licenseFeeNumber: data?.licenseFeeNumber || '',
        signDate: dayjs(data?.signDate) || dayjs(today),
        totalMoney: data?.totalMoney || '',
        filePdf: data?.filePdf || '',
        description: data?.description || '',
    });

    const [supplementLicenseFee, setSupplementLicenseFee] = useState(false)
    const [listLicFee, setListLicFee] = useState([]);
    const { showLoading, hideLoading } = useLoadingContext();

    // Hooks
    const router = useRouter();

    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setValues({ ...values, [prop]: value });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setValues({ ...values, filePdf: file });
    };

    useEffect(() => {
        const getData = async () => {
            try {
                if (router.pathname.split('/')[2] == 'bo-cap') {
                    const data = await fetchData('LicenseFee/list/minister');
                    setListLicFee(data);
                } else {
                    const data = await fetchData('LicenseFee/list/province');
                    setListLicFee(data);
                }
            } catch (error) {
                setListLicFee([]);
            } finally {
            }
        };
        getData();
    }, [router.pathname]);


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const handleApiCall = async () => {

            let licAuthorities: number;

            if (router.pathname.split('/')[2] == 'bo-cap') {
                licAuthorities = 0;
            } else {
                licAuthorities = 1;
            }

            const newVal = {
                ...values,
                licensingAuthorities: licAuthorities,
                signDate: values.signDate?.toDate(),
                filePdf: values.filePdf?.name
            }

            showLoading();
            const res = await postData('LicenseFee/save', newVal);

            if (res) {
                // Reset form fields
                setValues({
                    id: 0,
                    licenseFeeNumber: '',
                    signDate: dayjs(today),
                    totalMoney: 0,
                    filePdf: null,
                    description: ''
                });

                typeof (setPostSuccess) === 'function' ? setPostSuccess(true) : '';
                closeDialogs();
            }
            hideLoading();
        };

        // Call the function
        handleApiCall();
    };

    const handleClose = () => {
        setValues({
            id: 0,
            licenseFeeNumber: '',
            signDate: dayjs(today),
            totalMoney: 0,
            filePdf: null,
            description: ''
        });

        closeDialogs();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} md={12} sx={{ my: 2 }}>
                    <FormControlLabel
                        label="Quyết định bổ xung"
                        onChange={() => (setSupplementLicenseFee(!supplementLicenseFee))}
                        control={<Checkbox checked={supplementLicenseFee} />}
                    />
                </Grid>
                {supplementLicenseFee ? (
                    <Grid xs={12} md={12} sx={{ my: 2 }}>
                        <Autocomplete
                            onChange={(e: any, v: any) => setValues({ ...values, childrenId: v.id })}
                            size="small"
                            options={listLicFee}
                            getOptionLabel={(option: any) => option.licenseFeeNumber}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    label="Chọn quyết định TCQ cần bổ xung"
                                />
                            )}
                        />
                    </Grid>
                ) : ''}

                <Grid item xs={12} md={12} sx={{ my: 2 }}>
                    <TextField size='small' type='text' fullWidth label='Số quyết định' placeholder='' value={values?.licenseFeeNumber} onChange={handleChange('licenseFeeNumber')} />
                </Grid>
                <Grid item xs={12} md={12} sx={{ my: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Ngày ký"
                            value={values.signDate}
                            onChange={(newSignDate: any) => setValues({ ...values, signDate: newSignDate })}
                            slotProps={{ textField: { size: 'small', fullWidth: true } }}
                            format="DD/MM/YYYY" />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={12} sx={{ my: 2 }}>
                    <TextField size='small' type='text' fullWidth label='Tổng tiền' placeholder='' value={values?.totalMoney} onChange={handleChange('totalMoney')} />
                </Grid>
                <Grid item xs={12} md={12} sx={{ my: 2 }}>
                    <FormControl fullWidth>
                        <TextField
                            id="file-input"
                            type="file"
                            size='small'
                            fullWidth
                            onChange={handleFileChange}
                            inputProps={{
                                accept: '.pdf', // Specify the accepted file types
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12} sx={{ my: 2 }}>
                    <TextField size='small' type='text' fullWidth label='Ghi chú' placeholder='' value={values?.description} onChange={handleChange('description')} />
                </Grid>
            </Grid>
            <DialogActions sx={{ p: 0 }}>
                <Button onClick={() => handleClose()} className='btn cancleBtn'>Hủy</Button>
                <Button type="submit" className='btn saveBtn'>Lưu</Button>
            </DialogActions>
        </form>
    );
};

const FormLicenseFee = ({ data, isEdit, setPostSuccess }: any) => {
    const formTitle = isEdit ? 'Thay đổi thông tin tiền cấp quyền' : 'Thêm tiền cấp quyền';

    return (
        <DialogsControl>
            {(openDialogs: (content: React.ReactNode, title: React.ReactNode) => void, closeDialogs: () => void) => (
                <>
                    {
                        isEdit ?
                            <EditNote className='tableActionBtn' onClick={() => openDialogs(<Form data={data} setPostSuccess={setPostSuccess} isEdit={isEdit} closeDialogs={closeDialogs} />, formTitle)} />
                            :
                            <Button
                                size="small" startIcon={<Add />}
                                onClick={() => openDialogs(
                                    <Form data={data} setPostSuccess={setPostSuccess} isEdit={isEdit} closeDialogs={closeDialogs} />, formTitle
                                )
                                }
                            >Thêm mới
                            </Button>
                    }
                </>
            )}
        </DialogsControl>
    );
};

export default FormLicenseFee;
