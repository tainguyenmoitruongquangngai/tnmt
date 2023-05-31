// ** MUI Imports
import { Grid, Box, Button, Typography, Autocomplete, TextField, Card, CardContent } from '@mui/material';
import { useEffect, useState } from 'react'

// ** Icons Imports

import SearchIcon from '@mui/icons-material/Search';

// ** Components Imports
import ConstructionMap from 'src/views/construction'
import TableList from 'src/views/license/TableList';
import CreateConstruction from 'src/views/construction/CreateConstruction';
import SearchLicense from 'src/views/license/Search';
import CountLicense from 'src/views/license/CountLicense';


const complete1 = [
  {title: "Khóa 1"},
  {title: "Khóa 2"},
  {title: "Khóa 3"},
];
const complete2 = [
  {title: "Đợt 1"},
  {title: "Đợt 2"},
  {title: "Đợt 3"},
];

const data = [
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Ủy ban nhân dân Tỉnh",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 1,
          "LicenseId": 1,
          "LicenseParentId": 0,
          "BasinId": 4,
          "BusinessId": 24,
          "DistrictId": 12,
          "CommuneId": 196,
          "ConstructionId": 1,
          "LicenseFeeId": null,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-04-03T08:10:57.12",
          "ModifiedUser": "dev.dangnt",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 1,
      "LicenseName": "Giấy phép khai thác sử dụng nước mặt",
      "LicenseNumber": "86/GP-UBND",
      "SignDate": "2005-05-04T00:00:00",
      "IssueDate": "2006-06-18T00:00:00",
      "ExpireDate": "2026-06-18T00:00:00",
      "Duration": "20 năm",
      "LicenseHolderName": "Công ty cổ phần Thủy điện Suối Tân",
      "LicenseHolderAddress": "P4, nhà 12, tập thể Đại học Thủy Lợi, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội",
      "LicensingAuthorities": 1,
      "LicenseFile": "86_GP-UBND.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": "2023-04-03T08:10:53.047",
      "ModifiedUser": "dev.dangnt",
      "IsRevoked": true,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 2,
          "LicenseId": 2,
          "LicenseParentId": 0,
          "BasinId": 4,
          "BusinessId": 14,
          "DistrictId": 10,
          "CommuneId": 123,
          "ConstructionId": 2,
          "LicenseFeeId": 9,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-03-08T17:10:39.257",
          "ModifiedUser": "dev.dangnt",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 2,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "1832/GP-BTNMT",
      "SignDate": "2007-11-19T00:00:00",
      "IssueDate": "2007-11-19T00:00:00",
      "ExpireDate": "2027-11-19T00:00:00",
      "Duration": "20 năm",
      "LicenseHolderName": "Công ty cổ phần thủy điện Mường Sang",
      "LicenseHolderAddress": "Xã Mường Sang, Huyện Mộc Châu, tỉnh Sơn La",
      "LicensingAuthorities": 0,
      "LicenseFile": "1832_BTNMT_2007.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": null,
      "ModifiedUser": null,
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 63,
          "LicenseId": 63,
          "LicenseParentId": 0,
          "BasinId": 5,
          "BusinessId": 31,
          "DistrictId": 3,
          "CommuneId": 67,
          "ConstructionId": 49,
          "LicenseFeeId": 47,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-04-05T14:57:15.197",
          "ModifiedUser": "vtv.thu",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 63,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "1856/GP-BTNMT",
      "SignDate": "2008-09-19T00:00:00",
      "IssueDate": "2008-09-19T00:00:00",
      "ExpireDate": "2028-09-19T00:00:00",
      "Duration": "20 năm",
      "LicenseHolderName": "Công ty cổ phần Xây dựng và Thương mại Lam Sơn",
      "LicenseHolderAddress": "Số 234, ngõ 8, Đường Chu Văn Thịnh, tổ 11, phường Chiềng Lề, thành phố Sơn La, tỉnh Sơn La",
      "LicensingAuthorities": 0,
      "LicenseFile": "1856_BTNMT_2008.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": null,
      "ModifiedUser": null,
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 3,
          "LicenseId": 3,
          "LicenseParentId": 0,
          "BasinId": 7,
          "BusinessId": 18,
          "DistrictId": 3,
          "CommuneId": 57,
          "ConstructionId": 3,
          "LicenseFeeId": 137,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-02-24T09:45:43.583",
          "ModifiedUser": "vtv.son",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 3,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "209/GP-BTNMT",
      "SignDate": "2009-02-20T00:00:00",
      "IssueDate": "2009-02-20T00:00:00",
      "ExpireDate": "2029-02-20T00:00:00",
      "Duration": "20 năm",
      "LicenseHolderName": "Công ty cổ phần thủy điện Nậm Khốt",
      "LicenseHolderAddress": "Số 73, tổ 1 khu 6, thị trấn Hát Lót, huyện Mai Sơn, tỉnh Sơn La",
      "LicensingAuthorities": 0,
      "LicenseFile": "209_BTNMT_2009.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": null,
      "ModifiedUser": null,
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 4,
          "LicenseId": 4,
          "LicenseParentId": 0,
          "BasinId": 6,
          "BusinessId": 2,
          "DistrictId": 6,
          "CommuneId": 98,
          "ConstructionId": 4,
          "LicenseFeeId": 28,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-04-05T11:00:50.963",
          "ModifiedUser": "vtv.thu",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 4,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "1642/GP-BTNMT",
      "SignDate": "2009-08-20T00:00:00",
      "IssueDate": "2009-08-20T00:00:00",
      "ExpireDate": "2029-08-20T00:00:00",
      "Duration": "20 năm",
      "LicenseHolderName": "Công ty cổ phần đầu tư phát triển Bắc Minh",
      "LicenseHolderAddress": "Số 20 phố Trần Nguyên Hãn, phường Lý Thái Tổ, quận Hoàn Kiếm, thành phố Hà Nội",
      "LicensingAuthorities": 0,
      "LicenseFile": "1642_BTNMT_2009.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": null,
      "ModifiedUser": null,
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 5,
          "LicenseId": 5,
          "LicenseParentId": 0,
          "BasinId": 4,
          "BusinessId": 25,
          "DistrictId": 10,
          "CommuneId": 120,
          "ConstructionId": 5,
          "LicenseFeeId": 25,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-04-05T09:46:30.353",
          "ModifiedUser": "vtv.thu",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 5,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "1383/GP-BTNMT",
      "SignDate": "2010-08-06T00:00:00",
      "IssueDate": "2010-08-06T00:00:00",
      "ExpireDate": "2030-08-06T00:00:00",
      "Duration": "20 năm",
      "LicenseHolderName": "Công ty Cổ phần thủy điện Tà Niết",
      "LicenseHolderAddress": "Số 28 , ngõ 43 Kim Đồng , Hoàng Mai , Hà Nội",
      "LicensingAuthorities": 0,
      "LicenseFile": "1383_BTNMT_2010.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": null,
      "ModifiedUser": null,
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 310,
          "LicenseId": 322,
          "LicenseParentId": 0,
          "BasinId": 3,
          "BusinessId": 142,
          "DistrictId": 7,
          "CommuneId": 146,
          "ConstructionId": 263,
          "LicenseFeeId": 74,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": 0,
          "CreatedTime": "2023-02-16T15:51:51.07",
          "CreatedUser": "dangltv",
          "ModifiedTime": "2023-04-05T17:13:12.65",
          "ModifiedUser": "vtv.thu",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 322,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "1837/GP-BTNMT",
      "SignDate": "2010-09-28T00:00:00",
      "IssueDate": "2010-09-28T00:00:00",
      "ExpireDate": "2020-09-28T00:00:00",
      "Duration": "10 năm",
      "LicenseHolderName": "Công ty cổ phần đầu tư và xây dựng Tây Bắc",
      "LicenseHolderAddress": "Số 3, tổ 6, phường Quyết Thắng, thành phố Sơn La, tỉnh Sơn La",
      "LicensingAuthorities": 0,
      "LicenseFile": null,
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": null,
      "ModifiedUser": null,
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 7,
          "LicenseId": 7,
          "LicenseParentId": 0,
          "BasinId": 7,
          "BusinessId": 31,
          "DistrictId": 3,
          "CommuneId": 63,
          "ConstructionId": 7,
          "LicenseFeeId": 50,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-03-20T22:28:23.767",
          "ModifiedUser": "quantri",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 7,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "986/GP-BTNMT",
      "SignDate": "2011-05-23T00:00:00",
      "IssueDate": "2011-05-23T00:00:00",
      "ExpireDate": "2021-05-23T00:00:00",
      "Duration": "10 năm",
      "LicenseHolderName": "Công ty cổ phần Xây dựng và Thương mại Lam Sơn",
      "LicenseHolderAddress": "Số 234, ngõ 8, Đường Chu Văn Thịnh, tổ 11, phường Chiềng Lề, thành phố Sơn La, tỉnh Sơn La",
      "LicensingAuthorities": 0,
      "LicenseFile": "986_BTNMT_2011.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": "2023-03-20T22:28:23.497",
      "ModifiedUser": "quantri",
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 6,
          "LicenseId": 6,
          "LicenseParentId": 0,
          "BasinId": 7,
          "BusinessId": 31,
          "DistrictId": 3,
          "CommuneId": 63,
          "ConstructionId": 6,
          "LicenseFeeId": 50,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-03-10T14:48:30.123",
          "ModifiedUser": "dev.dangnt",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 6,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "985/GP-BTNMT",
      "SignDate": "2011-05-25T00:00:00",
      "IssueDate": "2011-05-25T00:00:00",
      "ExpireDate": "2021-05-25T00:00:00",
      "Duration": "10 năm",
      "LicenseHolderName": "Công ty cổ phần Xây dựng và Thương mại Lam Sơn",
      "LicenseHolderAddress": "Số 234, ngõ 8, Đường Chu Văn Thịnh, tổ 11, phường Chiềng Lề, thành phố Sơn La, tỉnh Sơn La",
      "LicensingAuthorities": 0,
      "LicenseFile": "985_BTNMT_2011.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": null,
      "ModifiedUser": null,
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  },
  {
      "Construction": null,
      "Business": null,
      "MiningPurpose": null,
      "LicenseType": "Cấp mới giấy phép",
      "TypeSlug": null,
      "LicenseFee": null,
      "ConstructionType": null,
      "ParentConstructionId": 1,
      "ParentConstructionType": null,
      "TypeOfConstructionId": 4,
      "LicensingAuthoritiesName": "Bộ tài nguyên và môi trường",
      "LicenseTypeName": "Cấp mới",
      "OldLicense": null,
      "License_Fk": {
          "Id": 8,
          "LicenseId": 8,
          "LicenseParentId": 0,
          "BasinId": 6,
          "BusinessId": 35,
          "DistrictId": 5,
          "CommuneId": 72,
          "ConstructionId": 8,
          "LicenseFeeId": 44,
          "LicensingTypeId": 1,
          "TypeOfConstructionId": 4,
          "AquiferId": null,
          "CreatedTime": null,
          "CreatedUser": "",
          "ModifiedTime": "2023-04-05T09:49:50.713",
          "ModifiedUser": "vtv.thu",
          "Status": true,
          "IsDeleted": false
      },
      "Location": null,
      "MiningPurposes": null,
      "Id": 8,
      "LicenseName": "Giấy phép khai thác - sử dụng nước mặt",
      "LicenseNumber": "1810/GP-BTNMT",
      "SignDate": "2011-09-26T00:00:00",
      "IssueDate": "2011-09-26T00:00:00",
      "ExpireDate": "2021-09-26T00:00:00",
      "Duration": "10 năm",
      "LicenseHolderName": "Công ty TNHH đầu tư và Xây dựng Sông Lam",
      "LicenseHolderAddress": "Số 7, phường Tô Hiệu, thành phố Sơn La, tỉnh Sơn La",
      "LicensingAuthorities": 0,
      "LicenseFile": "1810_BTNMT_2011.pdf",
      "RelatedDocumentFile": null,
      "LicenseRequestFile": null,
      "CreatedTime": null,
      "CreatedUser": null,
      "ModifiedTime": null,
      "ModifiedUser": null,
      "IsRevoked": false,
      "Status": true,
      "IsDeleted": false,
      "ThietBiQuanTracMucNuoc": null,
      "ThietBiQuanTracMua": null,
      "ThietBiQuanTracLuuLuong": null,
      "ThietBiQuanTracDongChayToiThieu": null,
      "ThietBiQuanTracDinhKy": null,
      "QuanTracMuaMua": null,
      "QuanTracMuaKho": null
  }
]

const SurfaceWater = () => {
  useEffect(() => {
    document.title = "Quản lý thông tin giấy phép nước mặt";
  }, []);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://tnnsl.loc/api/Construction/list?BasinId=0&CommuneId=0&DistrictId=0&Keyword=&LicenseId=-1&LicensingAuthorities=-1&PageIndex=1&PageSize=0&ProvinceId=0&StartDate=-1&Status=true&TypeOfConstructionId=1'); // Thay đổi URL API tùy thuộc vào nguồn dữ liệu của bạn
  //     const jsonData = await response.json();
  //     console.log(jsonData.ListData)
  //     setData(jsonData.ListData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }; 

  return (
    <Grid container spacing={3}>
      <Grid item xs={3} sm={3} md={3}>
        <CountLicense />
       </Grid>
       <Grid item xs={9} sm={9} md={9} sx={{height:'55vh', overflow:'hidden'}}>
        <Card sx={{height: '100%'}}>
          <CardContent sx={{p: 0, height: '100%'}}>
            <ConstructionMap />
          </CardContent>
        </Card>
       </Grid>
       <Grid item xs={12} sm={12} md={12} className='_row _justifyContentBetween' >
          <Box className='_search'>
            <Box>
              <Autocomplete  size="small" options={complete1} getOptionLabel={(option) => option.title} renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Chọn loại hình CP"
                    placeholder=""
                  />
                )}
              />
            </Box>
            <Box>
              <Autocomplete size="small" options={complete2} getOptionLabel={(option) => option.title} renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Chọn cơ quan CP"
                    placeholder=""
                  />
                )}
              />
            </Box>
            <Box>
              <SearchLicense/>
            </Box>           
            <Box>
              <Button size='small' startIcon={<SearchIcon/>} variant="outlined">Xuất excel</Button>
            </Box>
            <Box>
              <CreateConstruction isEdit={false}/>
            </Box>
          </Box>
        </Grid> 
       <Grid item xs={12} sm={12} md={12}>
          <TableList data={data} />
       </Grid>
    </Grid>
  )
}

export default SurfaceWater
