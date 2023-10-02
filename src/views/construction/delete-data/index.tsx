import { Delete } from "@mui/icons-material"
import { Alert, Box, Button, ButtonGroup, IconButton, Popover, Tooltip } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { deleteData } from "src/api/axios"

const DeleteData = (props: any) => {

    const { data, setPostSuccess } = props;

    //delete
    const [deleteConfirmAnchorEl, setDeleteConfirmAnchorEl] = useState<HTMLButtonElement | null>(null)
    const deleteConfirmOpen = Boolean(deleteConfirmAnchorEl)
    const DeleteRowData = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDeleteConfirmAnchorEl(event.currentTarget)
    }

    const handleDeleteConfirm = () => {
        if (deleteConfirmAnchorEl) {
            if (data) {
                handleDeleteRowData(data)
            }
        }

        setDeleteConfirmAnchorEl(null)
    }

    const handleDeleteCancel = () => {
        setDeleteConfirmAnchorEl(null)
    }

    const handleDeleteRowData = async (data: any) => {
        const dataId = data.id;
        await deleteData('Construction/delete', dataId);

        typeof setPostSuccess === 'function' ? setPostSuccess(true) : ''
    }

    const isMounted = useRef(true);


    useEffect(() => {
        isMounted.current = true

        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <Tooltip title='Xóa thông tin công trình'>
            <>
                <IconButton aria-describedby={data.row?.id} onClick={DeleteRowData} data-row-id={data.row?.id}>
                    <Delete className='tableActionBtn deleteBtn' />
                </IconButton>
                <Popover
                    id={deleteConfirmOpen ? data.row?.id : undefined}
                    open={deleteConfirmOpen}
                    anchorEl={deleteConfirmAnchorEl}
                    onClose={handleDeleteCancel}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                >
                    <Alert severity='warning'>
                        Xóa bản ghi này ?
                        <Box sx={{ justifyContent: 'center', paddingTop: 4, width: '100%' }}>
                            <ButtonGroup variant='outlined' aria-label='outlined button group'>
                                <Button size='small' onClick={handleDeleteConfirm}>
                                    Đúng
                                </Button>
                                <Button color='error' size='small' onClick={handleDeleteCancel}>
                                    Hủy
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Alert>
                </Popover>
            </>
        </Tooltip>
    )
}

export default DeleteData