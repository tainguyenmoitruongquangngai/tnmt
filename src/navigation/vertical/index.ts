// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { Functions, PeopleAltOutlined, Tv } from '@mui/icons-material';

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'TRANG CHỦ',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Công trình',
      primaryPath: 'cong-trinh',
      children: [
        {
          title: 'Bản đồ công trình',
          path: '/cong-trinh'
        },
        {
          title: 'Nước mặt',
          path: '/cong-trinh/nuoc-mat'
        },
        {
          title: 'Nước dưới đất',
          path: '/cong-trinh/nuoc-duoi-dat'
        },
        {
          title: 'Xả thải',
          path: '/cong-trinh/xa-thai'
        }
      ]
    },
    {
      title: 'Quan trắc',
      primaryPath: 'quan-trac',
      children: [
        {
          title: 'Nước mặt',
          path: '/quan-trac/nuoc-mat'
        },
        {
          title: 'Nước dưới đất',
          path: '/quan-trac/nuoc-duoi-dat'
        },
        {
          title: 'Xả thải',
          path: '/quan-trac/xa-thai'
        }
      ]
    },
    {
      title: 'Giám sát',
      primaryPath: 'giam-sat',
      children: [
        {
          title: 'Đăng ký kết nối',
          path: '/giam-sat/yeu-cau-ket-noi'
        },
        {
          title: 'QL đăng ký kết nối',
          path: '/giam-sat/quan-ly-yeu-cau-ket-noi'
        },
        {
          title: 'KTSD nước mặt',
          path: '/giam-sat/nuoc-mat'
        },
        {
          title: 'KTSD nước dưới đất',
          path: '/giam-sat/nuoc-duoi-dat'
        },
        {
          title: 'Xả thải',
          path: '/giam-sat/xa-thai'
        }
      ]
    },

    {
      title: 'Cấp phép',
      primaryPath: 'giay-phep',
      children: [
        {
          title: 'Quản lý cấp phép',
          path: '/giay-phep/quan-ly'
        },
        {
          title: 'Kết quả cấp phép',
          path: '/thong-tin-du-lieu/ket-qua-cap-phep'
        },
        {
          sectionTitle: 'Nước mặt',
        },
        {
          title: 'Nước mặt',
          path: '/giay-phep/nuoc-mat'
        },

        //
        {
          sectionTitle: 'Nước dưới đất',
        },
        {
          title: 'Khai thác sử dụng',
          path: '/giay-phep/nuoc-duoi-dat/khai-thac-su-dung'
        },
        {
          title: 'Thăm dò',
          path: '/giay-phep/nuoc-duoi-dat/tham-do'
        },
        {
          title: 'Hành nghề khoan',
          path: '/giay-phep/nuoc-duoi-dat/hanh-nghe-khoan'
        },

        //
        {
          sectionTitle: 'Xả thải',
        },
        {
          title: 'Xả thải',
          path: '/giay-phep/xa-thai'
        }
      ]
    },

    {
      title: 'Tiền cấp quyền',
      primaryPath: 'tien-cap-quyen',
      children: [
        {
          title: 'Giấy phép Bộ cấp',
          path: '/tien-cap-quyen/bo-cap'
        },
        {
          title: 'Giấy phép Tỉnh cấp',
          path: '/tien-cap-quyen/tinh-cap'
        }
      ]
    },

    {
      title: 'Thông tin - Dữ liệu',
      primaryPath: 'thong-tin-du-lieu',
      children: [
        {
          sectionTitle: 'Nguồn nước',
        },
        {
          title: 'Lưu vực sông',
          path: '/thong-tin-du-lieu/nguon-nuoc/luu-vuc-song'
        },
        {
          title: 'Nguồn nước',
          path: '/thong-tin-du-lieu/nguon-nuoc/nguon-nuoc'
        },
        {
          title: 'Ao, hồ đầm phá không được san lấp',
          path: '/thong-tin-du-lieu/ao-khong-san-lap'
        },
        {
          title: 'Hành lang bảo vệ NN',
          path: '/thong-tin-du-lieu/nguon-nuoc/hanh-lang-bao-ve-nguon-nuoc'
        },
        {
          title: 'Chức năng nguồn nước',
          path: '/thong-tin-du-lieu/nguon-nuoc/chuc-nang-nguon-nuoc'
        },
        {
          title: 'Dòng chảy tối thiểu',
          path: '/thong-tin-du-lieu/dong-chay-toi-thieu'
        },
        {
          title: 'Ngưỡng khai thác NDĐ',
          path: '/thong-tin-du-lieu/nguong-khai-thac-nuoc-duoi-dat'
        },
        {
          title: 'Vùng cấm, hạn chế KTNDĐ',
          path: '/thong-tin-du-lieu/vung-cam-KT-nuoc-duoi-dat'
        },
        {
          title: 'Mặt cắt sông, suối',
          path: '/thong-tin-du-lieu/mat-cat-song-suoi'
        },
        {
          sectionTitle: 'Số lượng, chất lượng nước',
        },
        {
          title: 'Số lượng nước',
          path: '/thong-tin-du-lieu/so-luong-nuoc'
        },
        {
          title: 'Chất lượng nước',
          path: '/thong-tin-du-lieu/chat-luong-nuoc'
        },

        //
        {
          sectionTitle: 'SL điều tra KTSDN',
        },
        {
          title: 'Điều tra KTSD nước mặt',
          path: '/thong-tin-du-lieu/dieu-tra/nuoc-mat'
        },
        {
          title: 'Điều tra KTSD NDĐ',
          path: '/thong-tin-du-lieu/dieu-tra/nuoc-duoi-dat'
        },
        {
          title: 'Điều tra xả thải vào NN',
          path: '/thong-tin-du-lieu/dieu-tra/xa-thai'
        },

        //
        {
          sectionTitle: 'Công trình KTSD TNN',
        },
        {
          title: 'Phải có giấy phép',
          path: '/thong-tin-du-lieu/cong-trinh-ktsd-tnn/ktsd-phai-co-giay-phep'
        },
        {
          title: 'Phải kê khai',
          path: '/thong-tin-du-lieu/cong-trinh-ktsd-tnn/ktsd-phai-ke-khai'
        },
        {
          title: 'Phải đăng ký ',
          path: '/thong-tin-du-lieu/cong-trinh-ktsd-tnn/ktsd-phai-dang-ky'
        },

        //



        //
        {
          sectionTitle: 'HSKT Trạm',
        },
        {
          title: 'Nước mặt',
          path: '/thong-tin-du-lieu/hskt-tram/nuoc-mat'
        },
        {
          title: 'Nước dưới đất',
          path: '/thong-tin-du-lieu/hskt-tram/nuoc-duoi-dat'
        },

        //
        {
          sectionTitle: 'Danh mục nguồn nước',
        },
        {
          title: 'Danh mục NN liên tỉnh',
          path: '/thong-tin-du-lieu/danh-muc-lien-tinh'
        },
        {
          title: 'Danh mục NN nội tỉnh',
          path: '/thong-tin-du-lieu/danh-muc-mnnt'
        },
      ]
    },

    {
      title: 'Báo cáo biểu mẫu',
      primaryPath: 'bao-cao-bieu-ma',
      children: [
        {
          title: 'Báo cáo biểu mẫu',
          icon: PeopleAltOutlined,
          path: '/bao-cao-bieu-mau'
        },

      ]
    },
    {
      title: 'Thông báo - cảnh báo',
      primaryPath: 'thong-bao-canh-bao',
      children: [
        {
          title: 'Thông báo',
          icon: PeopleAltOutlined,
          primaryPath: 'Thong-bao',
          path: '/thong-bao'
        },
        {
          title: 'Cảnh báo',
          icon: PeopleAltOutlined,
          primaryPath: 'Canh-bao',
          path: '/canh-bao'
        },
      ]

    },
    {
      sectionTitle: 'KIỂM KÊ TNN'
    },
    
    {
      title: 'Nước mưa',
      primaryPath: '/kiem-ke-tnn/nuoc-mua',
      children: [
        {
          title: 'Kiểm kê nước mưa',
         
          path: '/kiem-ke-tnn/nuoc-mua'
        },

      ]
    },

    {
      title: 'Nước mặt',
      primaryPath: 'kiem-ke-tnn-mat',
      children: [

        {
          title: 'Số lượng nguồn nước mặt',
          path: '/kiem-ke-tnn/nuoc-mat/so-luong'
        },
        {
          title: 'Tổng lượng nước mặt',
          path: '/kiem-ke-tnn/nuoc-mat/tong-luong'
        },
        {
          title: 'Chất lượng nước mặt',
          path: '/kiem-ke-tnn/nuoc-mat/chat-luong-nuoc'
        },
        {
          title: 'KTSD nước mặt',
          path: '/kiem-ke-tnn/nuoc-mat/ktsd-nuoc-mat'
        },
      ]
    },
    
    //
    {
      title: 'Nước dưới đất',
      primaryPath: 'kiem-ke-tnn-duoi-dat',
      children: [
        {
          title: 'Số lượng NDĐ',
          path: '/kiem-ke-tnn/nuoc-duoi-dat/so-luong'
        },
        {
          title: 'Tổng lượng NDĐ',
          path: '/kiem-ke-tnn/nuoc-duoi-dat/tong-luong'
        },
        {
          title: 'Chất lượng NDĐ',
          path: '/kiem-ke-tnn/nuoc-duoi-dat/kiem-ke-CLN-duoi-dat'
        },
      ]
    },
    {
      title: 'Nước biển',
      primaryPath: '/kiem-ke-tnn/kiem-ke-nuoc-bien',
      children: [
        {
          title: 'Kiểm kê nước biển',
         
          path: '/kiem-ke-tnn/kiem-ke-nuoc-bien'
        },

      ]
    },
    {
      title: 'Xả thải',
      primaryPath: '/kiem-ke-tnn/kiem-ke-xa-nuoc-thai',
      children: [
        {
          title: 'Kiểm kê xả nước thải',

          path: '/kiem-ke-tnn/kiem-ke-xa-nuoc-thai'
        },

      ]
    },
   
    


  {
    sectionTitle: 'KNTN NƯỚC THẢI',
  },
  {
    title: 'KNTN nước thải sông, suối',
    primaryPath: 'kn-tiep-nhan-nuoc-thai',
    children: [
       {
        title: 'QCVN_08_2023',
        path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-song/cln'
        },
      {
        title: 'Phân đoạn sông',
        path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-song/phan-doan-song'
        },
      {
        title: 'Dữ liệu nguồn nước nhận',
        path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-song/du-lieu-nguon-nhan'
      },
        {
          title: 'Dữ liệu nguồn nước thải ',
          path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-song/du-lieu-nguon-thai'
          }, 
          
      {
        title: 'Tải lượng ô nhiễm ',
        path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-song/tai-luong-o-nhiem'
        },
      {
        title: 'Khả năng TNNT sông,suối',
        path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-song/kha-nang-tiep-nhan-nuoc-thai-song'
        },
      {
        title: 'Dự báo KNTNNT sông,suối',
        path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-song/du-bao-kntnnt'
        },
    ]
  },
   

    {
      title: 'KNTN nước thải ao, hồ',
      primaryPath: 'kn-tiep-nhan-nuoc-thai-ao-ho',
      children: [

        
        {
          title: 'QCVN_08_2023',
          path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-ao/cln'
        },
      
        {
          title: 'Thông tin ao,hồ',
          path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-ao/thong-tin-ao-ho'
        },
        {
          title: 'Khả năng TNNT ao,hồ',
          path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-ao/kha-nang-tiep-nhan-ao-ho'
        },
        {
          title: 'Tính dự báo KNTNNT ao,hồ',
          path: '/kn-tiep-nhan-nuoc-thai/nguon-nuoc-ao/du-bao'
        },
      ]
    },
    {
      sectionTitle: 'VHHC LVS TRÀ KHÚC'
    },
    {
      title: 'Thông tin chung',
      primaryPath: 'thong-tin-chung-van-hanh-ho',
      children: [

        
        {
          title: 'Lưu vực sông',
          path: '/van-hanh-ho-chua/luu-vuc-song-van-hanh'
        },
      
        {
          title: 'Hồ chứa',
          path: '/van-hanh-ho-chua/ho-chua-van-hanh/thong-so-ky-thuat'
        },
       
        {
          title: 'Quy định vận hành',
          path: '#'
        },
       
      ]


    
    },
   
   
    
    {
      title: 'VH mùa lũ (1/9 - 15/12)',
     
      children: [
        {
          sectionTitle: 'Lượng mưa',
        },
        {
          title: 'Mưa hiện tại',
          path: '/van-hanh-ho-chua/luong-mua/hien-tai'
        },
        {
          title: 'HTTT gây mưa lớn ',
          path: '/van-hanh-ho-chua/luong-mua/hinh-the-thoi-tiet'
        },
        {
          title: 'Trạm Quảng Ngãi',
          path: '/van-hanh-ho-chua/luong-mua/tram-quang-ngai'
        },

        //
        
       

        //
        {
          sectionTitle: 'VH hồ chứa',
        },
        {
          title: 'Quy định chung',
          path: '/van-hanh-ho-chua/VH-hoc-chua/quy-dinh-chung'
        },

        {
          title: 'Vận hành liên hồ',
         
              path: '/van-hanh-ho-chua/van-hanh-lien-ho'
            }, 
        

          
        
     
        //

        {
          sectionTitle: 'SLQT tại trạm TV',
        },
        {
          title: 'Trạm thủy văn',
          path: '/van-hanh-ho-chua/tram-thuy-van'
        },

        //
     
        //
     
      ]



    },
   
    {
      title: 'VH mùa cạn (16/12 - 31/8)',
      children: [
        {
          sectionTitle: 'Lượng mưa',
        },
        {
          title: 'Mưa hiện tại',
          path: '/van-hanh-ho-chua/luong-mua/hien-tai'
        },
        {
          title: 'Mưa dự báo',
          path: '/van-hanh-ho-chua/luong-mua/du-bao'
        },
        
        {
          title: 'HTTT gây mưa lớn ',
          path: '/van-hanh-ho-chua/luong-mua/hinh-the-thoi-tiet'
        },

        //
        
       

        //
        {
          sectionTitle: 'VH hồ chứa',
        },
        {
          title: 'Quy định chung',
          path: '/van-hanh-ho-chua/VH-hoc-chua/quy-dinh-chung'
        },

        {
          title: 'Vận hành liên hồ',
         
              path: '/van-hanh-ho-chua/van-hanh-lien-ho'
            }, 
        

          
        
     
        //

        {
          sectionTitle: 'SLQT tại trạm TV',
        },
        {
          title: 'Trạm thủy văn',
          path: '/van-hanh-ho-chua/tram-thuy-van'
        },

        //
     
        //
     
      ]
    },



    {
      sectionTitle: 'HƯỚNG DẪN SỬ DỤNG'
     
    },
    {
      title: 'Hướng dẫn sử dụng',
      path: '#'
    },
    {
    sectionTitle:'Quản lý'
    },
    {
      title: 'Dữ liệu',
      primaryPath: 'du-lieu',
      children: [
        {
          title: 'Loại công trình',
          primaryPath: 'loai-cong-trinh',
          path: '/loai-cong-trinh'
        },
        {
          title: 'Loại giấy phép',
          primaryPath: 'loai-giay-phep',
          path: '/loai-giay-phep'
        },
        {
          title: 'Doanh nghiệp',
          primaryPath: 'doanh-nghiep',
          path: '/doanh-nghiep'
        },
        {
          title: 'Sông',
          primaryPath: 'song',
          path: '/song'
        },
        {
          title: 'Lưu vực',
          primaryPath: 'luu-vuc',
          path: '/luu-vuc'
        },
        {
          title: 'Tầng chứa nước',
          primaryPath: 'tang-chua-nuoc',
          path: '/tang-chua-nuoc'
        },
        {
          title: 'File hướng dẫn sử dụng',
          path: '#'
        },
      ]
    },
    {
      title: 'Hệ thống',
      primaryPath: 'he-thong',
      children: [
        {
          title: 'Nhóm người dùng',
          icon: PeopleAltOutlined,
          path: '/he-thong/nhom-nguoi-dung'
        },
        {
          title: 'Người dùng',
          icon: AccountCogOutline,
          path: '/he-thong/nguoi-dung'
        },
        {
          title: 'Trang truy cập',
          icon: Tv,
          path: '/he-thong/trang-truy-cap'
        },
        {
          title: 'Các chức năng',
          icon: Functions,
          path: '/function'
        },
      ]
    },
    {
      title: 'Phân quyền',
      primaryPath: 'phan-quyen',
      children: [
        {
          title: 'Nhóm người dùng',
          icon: PeopleAltOutlined,
          path: '/phan-quyen/nhom-nguoi-dung'
        },
        {
          title: 'Người dùng',
          icon: AccountCogOutline,
          path: '/phan-quyen/nguoi-dung'
        }
      ]
    },
  ]
}

export default navigation
