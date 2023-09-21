// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CircleOutline from 'mdi-material-ui/CircleOutline';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { Functions, PeopleAltOutlined, Tv } from '@mui/icons-material';


const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Trang chủ',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Công trình',
      primaryPath: 'cong-trinh',
      children: [
        {
          icon: CircleOutline,
          title: 'Bản đồ công trình',
          path: '/cong-trinh'
        },
        {
          icon: CircleOutline,
          title: 'Nước mặt',
          path: '/cong-trinh/nuoc-mat'
        },
        {
          icon: CircleOutline,
          title: 'Nước dưới đất',
          path: '/cong-trinh/nuoc-duoi-dat'
        },
        {
          icon: CircleOutline,
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
          icon: CircleOutline,
          title: 'Nước mặt',
          path: '/quan-trac/nuoc-mat'
        },
        {
          icon: CircleOutline,
          title: 'Nước dưới đất',
          path: '/quan-trac/nuoc-duoi-dat'
        },
        {
          icon: CircleOutline,
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
          icon: CircleOutline,
          title: 'Đăng ký kết nối',
          path: '/giam-sat/yeu-cau-ket-noi'
        },
        {
          icon: CircleOutline,
          title: 'QL đăng ký kết nối',
          path: '/giam-sat/quan-ly-yeu-cau-ket-noi'
        },
        {
          icon: CircleOutline,
          title: 'KT,SD nước mặt',
          path: '/giam-sat/nuoc-mat'
        },
        {
          icon: CircleOutline,
          title: 'KT,SD nước dưới đất',
          path: '/giam-sat/nuoc-duoi-dat'
        },
        {
          icon: CircleOutline,
          title: 'Xả thải',
          path: '/giam-sat/xa-thai'
        }
      ]
    },
    {
      title: 'Trữ lượng nước',
      primaryPath: 'tru-luong-nuoc',
      children: [
        {
          icon: CircleOutline,
          title: 'Nước mưa',
          path: '/tru-luong-nuoc/nuoc-mua'
        },
        {
          icon: CircleOutline,
          title: 'Nước mặt',         
          children: [
            {
              title: 'Số lượng',
              icon: CircleOutline,
              path: '/tru-luong-nuoc/nuoc-mat/so-luong'
            },
            {
              title: 'Tổng lượng',
              icon: CircleOutline,
              path: '/tru-luong-nuoc/nuoc-mat/tong-luong'
            },
            {
              title: 'Chất lượng nước',
              icon: CircleOutline,
              path: '/tru-luong-nuoc/nuoc-mat/chat-luong-nuoc'
            },
          ]
        },
        {
          icon: CircleOutline,
          title: 'Nước dưới đất',
          children: [
            {
              title: 'Số lượng NDĐ',
              icon: CircleOutline,
              path: '#'
            },
            {
              title: 'Tổng lượng NDĐ',
              icon: CircleOutline,
              path: '#'
            },
            {
              title: 'Chất lượng NDĐ',
              icon: CircleOutline,
              path: '#'
            },
          ]
        }
      ]
    },
    {
      title: 'Giấy phép',
      primaryPath: 'giay-phep',
      children: [
        {
          icon: CircleOutline,
          title: 'QL cấp phép',
          path: '/giay-phep/quan-ly'
        },
        {
          icon: CircleOutline,
          title: 'Nước mặt',
          path: '/giay-phep/nuoc-mat'
        },
        {
          icon: CircleOutline,
          title: 'KTSD NDĐ',
          path: '/giay-phep/nuoc-duoi-dat/khai-thac-su-dung'
        },
        {
          icon: CircleOutline,
          title: 'Thăm dò NDĐ',
          path: '/giay-phep/nuoc-duoi-dat/tham-do'
        },
        {
          icon: CircleOutline,
          title: 'Hành nghề khoan NDĐ',
          path: '/giay-phep/nuoc-duoi-dat/hanh-nghe-khoan'
        },
        {
          icon: CircleOutline,
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
          icon: CircleOutline,
          title: 'Giấy phép Bộ cấp',
          path: '/tien-cap-quyen/bo-cap'
        },
        {
          icon: CircleOutline,
          title: 'Giấy phép Tỉnh cấp',
          path: '/tien-cap-quyen/tinh-cap'
        }
      ]
    },
    {
      title: 'Thông tin - Dữ liệu',
      children: [
        {
          icon: CircleOutline,
          title: 'SL,CL nước',
          path: '/thong-tin-du-lieu/so-luong-chat-luong-nuoc'
        },
        {
          icon: CircleOutline,
          title: 'SL điều tra',
          path: '/thong-tin-du-lieu/so-lieu-dieu-tra'
        },
        {
          icon: CircleOutline,
          title: 'KTSD TNN',
          path: '/thong-tin-du-lieu/du-lieu-ktsd-tnnn'
        },
        {
          icon: CircleOutline,
          title: 'KQ cấp phép',
          path: '/thong-tin-du-lieu/ket-qua-cap-phep'
        },
        {
          icon: CircleOutline,
          title: 'HSKT Trạm',
          path: '/thong-tin-du-lieu/hskt-tram'
        },
        {
          title: 'DM lưu vực sông',
          icon: CircleOutline,
          children: [
            {
              title: 'Tiểu vùng QH',
              icon: CircleOutline,
              path: '/thong-tin-du-lieu/tieu-vung-quy-hoach'
            },
            {
              title: 'Hành lang BVNN',
              icon: CircleOutline,
              path: '/thong-tin-du-lieu/hanh-lang-bao-ve-nguon-nuoc'
            },
            {
              title: 'Danh mục NNNT',
              icon: CircleOutline,
              children: [
                {
                  icon: CircleOutline,
                  title: 'Sông, suối',
                  path: '/thong-tin-du-lieu/danh-muc-nguon-nuoc-song-suoi'
                },
                {
                  icon: CircleOutline,
                  title: 'Ao, hồ',
                  path: '/thong-tin-du-lieu/danh-muc-nguon-nuoc-ao-ho'
                }
              ]
            },
          ]
        },
      ]
    },
    {
      title: 'Thông báo - cảnh báo',
      primaryPath: 'thong-bao-canh-bao',
      path: '/thong-bao-canh-bao'
    },
    {
      title: 'Báo cáo biểu mẫu',
      path: '/bao-cao-bieu-mau'
    },
    {
      title: 'KN tiếp nhận nước thải',
      children: [
        {
          icon: CircleOutline,
          title: 'Nguồn nước sông',
          path: '#'
        },
        {
          icon: CircleOutline,
          title: 'Nguồn nước hồ',
          path: '#'
        }
      ]
    },
    {
      title: 'Nội dung khác',
      path: '#'
    },
    {
      title: 'Hướng dẫn sử dụng',
      path: '#'
    },
    {
      sectionTitle: 'Quản lý'
    },
    {
      title: 'Dữ liệu',
      primaryPath: 'he-thong',
      children: [
        {
          title: 'Loại công trình',
          icon: CircleOutline,
          path: '/loai-cong-trinh'
        },
        {
          title: 'Loại giấy phép',
          icon: CircleOutline,
          path: '/loai-giay-phep'
        },
        {
          title: 'Doanh nghiệp',
          icon: CircleOutline,
          path: '/doanh-nghiep'
        },
        {
          title: 'Sông',
          icon: CircleOutline,
          path: '/song'
        },
        {
          title: 'Lưu vực',
          icon: CircleOutline,
          path: '/luu-vuc'
        },
        {
          title: 'Tầng chứa nước',
          icon: CircleOutline,
          path: '/tang-chua-nuoc'
        },
        {
          title: 'File hướng dẫn sử dụng',
          icon: CircleOutline,
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
          path: '#'
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
