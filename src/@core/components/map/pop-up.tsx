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

    // Hien thi thong tin theo loai cong trinh
    const showTableRow = (data: any) => {
        const idDischargeCons = [16, 17, 18, 19, 20, 21, 22];
        if(idDischargeCons.includes(data.idLoaiCT)){
            return <TableBody>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Vị trí xả thải</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.viTriXT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Nguồn nước tiếp nhận nước thải</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.nguonNuocXT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Phương thức xả thải</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.phuongThucXT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chế độ xả thải</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.cheDoXT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Lưu lượng xả thải MAX(m<sub>3</sub>/ngày đêm)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.qMaxXaThai}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Lưu lượng xả trung bình(m<sub>3</sub>/ngày đêm)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.qXaThaiTB}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chất lượng nước thải hệ số Kq và Kf</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.kqKf}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Loại hình nước thải</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>-</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
        }

        // Thuy dien & Ho chua
        else if(data.idLoaiCT == 4 || data.idLoaiCT == 5){
            return <TableBody>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chế độ KT <br /> (<sub>giờ / ngày đêm</sub>)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>max khai thác</sub></Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.qMaxKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>tối thiểu</sub></Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.qtt}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>max qua NM</sub></Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.qmaxNM}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Nguồn nước khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.nguonNuocKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Phương thức khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.phuongThucKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Công suất lắp máy</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.congSuatLM}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều cao đập</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.chieuCaoDap}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều dài đập</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.chieuDaiDap}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước dâng bình thường</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.mndbt}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước chết</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.mnc}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lớn nhất trước lũ</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.qLonNhatTruocLu}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước đón lũ</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>-</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước thượng lưu</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.hThuongLuu}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước hạ lưu</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.hHaLuu}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lũ thiết kế</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.mnltk}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước lũ kiểm tra</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.mnlkt}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Dung tích hữu ích</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.dungTichHuuIch}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Dung tích toàn bộ</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.dungTichToanBo}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
        } else if (data.idLoaiCT == 6) { // Tram bom
        return <TableBody>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Nguồn nước khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.nguonNuocKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Số máy bơm</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.soLuongMayBom}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Q <sub>thiết kế</sub></Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.qThietKe}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước bể hút</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thongso.hBeHut}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
        } else if (data.idLoaiCT == 7) { // Khai thac nuoc duoi dat
            return <TableBody>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Thời hạn khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.thoiGianKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mục đích khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{data.mucDichhKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mực nước trong giếng khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Tầng chứa nước khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Số giếng khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Tổng lượng nước khai thác (m<sub>3</sub>/ngày đêm)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều sâu đoạn thu nước (m)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Lưu lượng khai thác thiết kế (m<sub>3</sub>/ngày đêm)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Lưu lượng khai thác thực tế (m<sub>3</sub>/ngày đêm)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều sâu mực nước tĩnh (m)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều sâu mực nước động lớn nhất (m)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
        } else if (data.idLoaiCT == 8) { // Tham do nuoc duoi dat
            return <TableBody>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Quy mô khoan thăm dò</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Tầng chứa nước thăm dò</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mục đích thăm dò</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Khối lượng các hạng mục thăm dò</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
        } else if (data.idLoaiCT == 9) { // Hanh nghe khoan nuoc duoi dat
            return <TableBody>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Thời gian hành nghề khoan</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Mục đích khoan KT</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
        } else if (data.idLoaiCT == 10 || data.idLoaiCT == 13 || data.idLoaiCT == 11) { // Hanh nghe khoan nuoc duoi dat
            return <TableBody>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Lưu lượng khai thác CNSH</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Nguồn nước khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Phương thức khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Lưu lượng khai thác (m<sub>3</sub>/ngày đêm)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Thời hạn khai thác</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
        } else if (data.idLoaiCT == 12) { // Cong
            return <TableBody>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Cao trình cống</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Chiều dài cống</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Đường kính cống</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>Kích thước miệng cống (chiều rộng - chiều cao)</Typography>
                </TableCell>
                <TableCell align='left' sx={{ p: '0 !important' }}>
                    <Typography sx={{ fontSize: 12, my: '5px !important' }}>{popupData.thongso.cheDoKT}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
        }
    }

    return (
        <Box>
            {section == 'cong-trinh' || section == 'giay-phep' ? (

                // Popup content for construction & license */
                <TableContainer component={Paper} sx={{ height: 200, overFlowY: 'scroll' }} className='cons-info-table'>
                    <Table aria-label="simple table">
                        {showTableRow(popupData)}
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