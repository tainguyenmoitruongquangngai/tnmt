// import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

const MapPopup = ({ popupData }: any) => {
    const router = useRouter();
    const pathSegments = router.pathname.split('/');
    const section = pathSegments[1];

    return (
        <Box>
            <Typography sx={{ fontSize: 12, my: '5px !important', fontStyle: 'italic' }}>Cập nhật: {popupData.thoiGian}</Typography>
            {section == 'cong-trinh' || section == 'giay-phep' ? (
                // Popup content for construction & license
                <TableContainer component={Paper} sx={{ height: 200, overFlowY: 'scroll' }} className='cons-info-table'>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important', width: 80 }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Y: {popupData.y}</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>X: {popupData.x}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Năm bắt đầu vận hành:</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.startDate}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chế độ KT <br /> (<sub>giờ / ngày đêm</sub>)</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.exploitMode}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>max khai thác</sub></Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.exploitMaxFlow}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>tối thiểu</sub></Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.minimumFlow}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>max qua NM</sub></Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.maximumFlow}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Nguồn nước khai thác</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.exploitedWS}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Phương thức khai thác</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.exploitMethod}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Công suất lắp máy</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.power}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều cao đập</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.damHeight}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều dài đập</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.damWidth}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước dâng bình thường</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.riseWL}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước chết</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.deadWL}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lớn nhất trước lũ</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.preFlootMaxWL}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước đón lũ</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.startDate}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước thượng lưu</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.upstreamWL}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước hạ lưu</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.downstreamWL}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lũ thiết kế</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.designFloodLevel}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lũ kiểm tra</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.checkFloodWL}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Dung tích hữu ích</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.usefulCapacity}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Dung tích toàn bộ</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.totalCapacity}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            ) :
            (
                // Popup content for monitoring data
                <TableContainer component={Paper} sx={{ height: 200, overFlowY: 'scroll' }}>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell align='center' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>H<sub>hồ</sub></Typography>
                                </TableCell>
                                <TableCell align='center' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q<sub>xả TT</sub></Typography>
                                </TableCell>
                                <TableCell align='center' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q<sub>xả NM</sub></Typography>
                                </TableCell>
                                <TableCell align='center' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q<sub>xả tràn</sub></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important', fontStyle: 'italic' }}>{popupData.thongso.hThuongLuu}</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.qtt}</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.qmaxNM}</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.qXaTran}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>)
            }
        </Box>
    )
}

export default MapPopup;