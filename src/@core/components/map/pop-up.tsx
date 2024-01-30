// import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MapPopup = ({ popupData }: any) => {
    const router = useRouter();
    const pathSegments = router.pathname.split('/');
    const section = pathSegments[1];
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const checkNullData = (data: any) => {
        return data ? data : <Typography sx={{ fontSize: 12, my: '5px !important', textAlign: 'center' }}>-</Typography>
    }
    console.log(popupData);
    return (
        <Box>
            {section == 'cong-trinh' || section == 'giay-phep' ? (
                // Popup content for construction & license */
                <TableContainer component={Paper} sx={{ height: 200, overFlowY: 'scroll' }} className='cons-info-table'>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chế độ KT <br /> (<sub>giờ / ngày đêm</sub>)</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>max khai thác</sub></Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.qMaxKT}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>tối thiểu</sub></Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.qtt}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>max qua NM</sub></Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.qmaxNM}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Nguồn nước khai thác</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.nguonNuocKT}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Phương thức khai thác</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.phuongThucKT}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Công suất lắp máy</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.congSuatLM}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều cao đập</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.chieuCaoDap}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều dài đập</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.chieuDaiDap}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước dâng bình thường</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.mndbt}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước chết</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.mnc}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lớn nhất trước lũ</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.qLonNhatTruocLu}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước đón lũ</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước thượng lưu</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.hThuongLuu}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước hạ lưu</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.hHaLuu}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lũ thiết kế</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.mnltk}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lũ kiểm tra</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.mnlkt}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Dung tích hữu ích</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.dungTichHuuIch}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Dung tích toàn bộ</Typography>
                                </TableCell>
                                <TableCell align='left' sx={{ p: '0 !important' }}>
                                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.dungTichToanBo}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            ) :
                (
                    <>
                        <Typography sx={{ fontSize: 12, my: '5px !important', fontStyle: 'italic' }}>Cập nhật: {popupData.thoiGian}</Typography>
                        {/* Popup content for monitoring data */}
                        <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="monitoring data tabs">
                            <Tab sx={{fontSize: 12}} label="Thông tin" value="1" />
                            <Tab sx={{fontSize: 12}} label="Số liệu vận hành" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <TableContainer component={Paper} sx={{ height: 200, overFlowY: 'scroll' }}>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='center' sx={{ p: '0 !important', background: '#15538f' }}>
                                                <Typography sx={{ fontSize: 12, my: '5px !important', color: '#fff' }}>H<sub>hồ</sub></Typography>
                                            </TableCell>
                                            <TableCell align='center' sx={{ p: '0 !important', background: '#15538f' }}>
                                                <Typography sx={{ fontSize: 12, my: '5px !important', color: '#fff' }}>Q<sub>xả TT</sub></Typography>
                                            </TableCell>
                                            <TableCell align='center' sx={{ p: '0 !important', background: '#15538f' }}>
                                                <Typography sx={{ fontSize: 12, my: '5px !important', color: '#fff' }}>Q<sub>xả NM</sub></Typography>
                                            </TableCell>
                                            <TableCell align='center' sx={{ p: '0 !important', background: '#15538f' }}>
                                                <Typography sx={{ fontSize: 12, my: '5px !important', color: '#fff' }}>Q<sub>xả tràn</sub></Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left' sx={{ p: '0 !important' }}>
                                                <Typography sx={{ fontSize: 12, my: '5px !important', fontStyle: 'italic' }}>{checkNullData(popupData.thongso.hThuongLuu)}</Typography>
                                            </TableCell>
                                            <TableCell align='left' sx={{ p: '0 !important' }}>
                                                <Typography sx={{ fontSize: 12, my: '5px !important' }}>{checkNullData(popupData.thongso.qtt)}</Typography>
                                            </TableCell>
                                            <TableCell align='left' sx={{ p: '0 !important' }}>
                                                <Typography sx={{ fontSize: 12, my: '5px !important' }}>{checkNullData(popupData.thongso.qmaxNM)}</Typography>
                                            </TableCell>
                                            <TableCell align='left' sx={{ p: '0 !important' }}>
                                                <Typography sx={{ fontSize: 12, my: '5px !important' }}>{checkNullData(popupData.thongso.qXaTran)}</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        </TabContext>

                    </>
                )
            }
        </Box>
    )
}

export default MapPopup;