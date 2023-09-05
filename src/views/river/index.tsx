//React Imports
import React, { useState, useEffect } from 'react';

//MUI Imports
import { Box, Tooltip, IconButton, Paper } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

//Other Imports

// import MapComponent from 'src/@core/components/map';
import DataGridComponent from 'src/@core/components/data-grid';
import { Delete } from '@mui/icons-material';
import fetchData from 'src/api/fetch';
import FormRivers from './form';
import post from 'src/api/post';

const Rivers = () => {
    const [resData, setResData] = useState([]);
    const [postSuccess, setPostSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handlePostSuccess = () => {
        setPostSuccess(prevState => !prevState);
    };

    //Init columnTable
    const columnsTable: GridColDef[] = [
        { field: 'id', flex: 1, headerClassName: 'tableHead', headerAlign: 'center', headerName: 'ID', minWidth: 90 },
        { field: 'name', flex: 1, headerClassName: 'tableHead', headerAlign: 'center', headerName: 'Tên sông', minWidth: 150 },
        { field: 'x', flex: 1, headerClassName: 'tableHead', headerAlign: 'center', headerName: 'X(VN2000)', minWidth: 150 },
        { field: 'y', flex: 1, headerClassName: 'tableHead', headerAlign: 'center', headerName: 'Y(VN2000)', minWidth: 150 },
        { field: 'description', flex: 1, headerClassName: 'tableHead', headerAlign: 'center', headerName: 'Ghi chú', minWidth: 150 },

        //Action
        {
            field: 'actions', headerClassName: 'tableHead', headerAlign: 'center', headerName: '#', minWidth: 120, sortable: false,
            renderCell: (data) => (
                <Box>
                    <Tooltip title="Chỉnh sửa giấy phép">
                        <IconButton>
                            <FormRivers isEdit={true} data={data.row} setPostSuccess={handlePostSuccess} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Xóa giấy phép">
                        <IconButton onClick={() => DeleteRowData(data)}>
                            <Delete className='tableActionBtn deleteBtn' />
                        </IconButton>
                    </Tooltip>
                </Box>
            )
        },
    ];

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await fetchData('River/list');
                setResData(data);
            } catch (error) {
                setResData([]);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [postSuccess]);

    const DeleteRowData = async (data: any) => {
        const confirmed = window.confirm(`Bạn muốn xóa:  ${data.row?.name} chứ?`);
        if (!confirmed) {
            return;
        }

        try {
            setLoading(true);
            const res = await post('River/delete', data.row);
            if (res) {
                setResData(prevData => prevData.filter((item: any) => item.id !== data.row.id));
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 0 }}>
            <DataGridComponent
                rows={resData}
                columns={columnsTable}
                loading={loading}
                actions={
                    <FormRivers isEdit={false} setPostSuccess={handlePostSuccess} />
                }
            />
        </Paper>
    );
};

export default Rivers;