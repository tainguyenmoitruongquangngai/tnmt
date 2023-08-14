import * as React from "react";
import { DataGrid, GridToolbarExport } from "@mui/x-data-grid";
import { Cached, FilterList, Search } from '@mui/icons-material';
import { Autocomplete, Box, Button, Divider, Slide, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRouter } from "next/router";

interface columnFillter {
  label: string,
  value: string,
  type: 'text' | 'select' | 'dateRange',
  options?: columnFillterOptions[]
}

interface columnFillterOptions {
  label: string,
  value: string | number
}

export type columnFillters = columnFillter;

interface DataGridComponentProps {
  rows: any
  columns: any
  columnGroupingModel?: any
  columnFillter?: any
  formFilter?: any
  actions?: any
}

const DataGridComponent = (props: DataGridComponentProps) => {

  const { rows, columns, columnGroupingModel, columnFillter, formFilter, actions } = props;
  const [rowDatas, setRowDatas] = React.useState<any>(rows);

  React.useEffect(() => {
    setRowDatas(rows);
  }, [rows]);

  interface SearchToolbarProps {
    data: any
    columns: any
    formFilter?: any
  }

  function SearchToolbar(props: SearchToolbarProps) {
    const { data, columns, formFilter } = props;
    const [filters, setFilters] = React.useState<any>({});
    const [quickSearchValue, setQuickSearchValue] = React.useState<string>('');
    const [isSlideVisible, setIsSlideVisible] = React.useState(false);

    const toggleSlide = () => {
      setIsSlideVisible(!isSlideVisible);
    };

    const toggleReload = () => {
      setRowDatas(data);
    }

    const handleFilterChange = (column: any, value: any) => {

      console.log(column, value)

      setFilters((prevFilters: any) => ({
        ...prevFilters,
        [column]: value,
      }));
    };

    const applyFilters = () => {
      const filteredData = data.filter((item: { [key: string]: any }) => {
        let isMatch = true; // Sử dụng biến để kiểm tra tất cả các điều kiện

        for (const column of columns) {
          const columnValue = filters?.[column.value] as any;
          const itemValue = item[column.value];

          if (column.type === 'select') {
            if (columnValue && itemValue !== columnValue.value) {
              isMatch = false; // Nếu một điều kiện không khớp, đặt biến isMatch là false
            }
          }

          if (column.type === 'text') {
            if (columnValue?.toString().toLowerCase() && !itemValue?.toString().toLowerCase().includes(columnValue?.toString().toLowerCase())) {
              isMatch = false; // Nếu một điều kiện không khớp, đặt biến isMatch là false
            }
          }

          if (column.type === 'dateRange') {
            if (columnValue) {
              const itemValueYear = new Date(itemValue).getFullYear();
              if (columnValue.from && itemValueYear < columnValue.from) {
                isMatch = false;
              }
              if (columnValue.to && itemValueYear > columnValue.to) {
                isMatch = false;
              }
            }
          }
        }

        return isMatch; // Trả về true nếu tất cả các điều kiện khớp
      });
      setRowDatas(filteredData);
    };

    //Quick fillter
    const handleQuickSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setQuickSearchValue(value);
    };

    const applyQuickSearch = (searchValue: string) => {
      const filteredData = data.filter((item: { [key: string]: any }) => {
        const lowerSearchValue = searchValue.toLowerCase();
        for (const column of columns) {
          const itemValue = item[column.value];
          if (itemValue?.toString().toLowerCase().includes(lowerSearchValue)) {
            return true;
          }
        }

        return false;
      });
      setRowDatas(filteredData);
    };

    // ** Hooks
    const router = useRouter()

    //set fle name export follow url
    const path = router.pathname.split('/');
    const fileNameExport = `${path[1]}-${path[2]}`;


    return (
      <Grid container justifyContent={'end'} alignItems={'center'} py={3} >
        <Grid md={2} xs={12} px={2}>
          <TextField
            sx={{ p: 0 }}
            size="small"
            fullWidth
            variant="outlined"
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            placeholder="Tìm kiếm nhanh..."
            value={quickSearchValue}
            onChange={handleQuickSearchChange}
            InputProps={{
              endAdornment: (
                <Button sx={{ border: 0, marginRight: '-14px', backgroundColor: 'rgba(0, 70, 110, 0.04)' }} onClick={() => applyQuickSearch(quickSearchValue)}>
                  <Search />
                </Button>
              ),
            }}
          />
        </Grid>
        <Button size="small" startIcon={<FilterList />} onClick={toggleSlide}>
          Bộ lọc
        </Button>
        <Divider orientation="vertical" variant="middle" sx={{ borderColor: 'gray' }} flexItem />
        <Button size="small" startIcon={<Cached />} onClick={toggleReload}>
          Tải lại
        </Button>
        <Divider orientation="vertical" variant="middle" sx={{ borderColor: 'gray' }} flexItem />
        <GridToolbarExport
          csvOptions={{
            fileName: fileNameExport,
            utf8WithBom: true,
          }}
        />
        <Divider orientation="vertical" variant="middle" sx={{ borderColor: 'gray' }} flexItem />
        {actions ? actions : ''}
        <Slide direction="left" in={isSlideVisible} mountOnEnter unmountOnExit>
          <fieldset style={{ width: '100%' }}>
            <legend>
              <Typography variant={'button'}>Bộ lọc</Typography>
            </legend>
            <Grid container >
              {columns.map((column: any) => (
                <Grid md={column.type === 'dateRange' ? 4 : 2} xs={12} py={2} px={column.type === 'dateRange' ? 0 : 2} key={column.value}>
                  {column.type === 'text' ? (
                    <TextField
                      size='small'
                      fullWidth
                      variant='standard'
                      inputProps={{ style: { fontSize: 11 } }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                      label={column.label}
                      value={filters?.[column.value] || ''}
                      onChange={(event) => handleFilterChange(column.value, event.target.value)}
                    />
                  ) : column.type === 'select' ? (
                    <Autocomplete
                      size='small'
                      fullWidth
                      options={column.options}
                      getOptionLabel={(option) => option.label}
                      value={filters?.[column.value] || null}
                      onChange={(_, value) => handleFilterChange(column.value, value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant='standard'
                          fullWidth
                          label={column.label}
                          inputProps={{
                            style: { fontSize: 11 },
                            ...params.inputProps,
                          }}
                          InputLabelProps={{ style: { fontSize: 14 } }}
                        />
                      )}
                    />

                  ) : column.type === 'dateRange' ? (

                    <Grid container>
                      <Box width={'50%'} px={2}>
                        <Autocomplete
                          size="small"
                          fullWidth
                          options={column.options || []}
                          getOptionLabel={(option) => option.label}
                          value={filters?.[column.value] && filters?.[column.value].from}
                          onChange={(_, value) =>
                            handleFilterChange(column.value, {
                              ...filters?.[column.value],
                              from: value?.value,
                            })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant='standard'
                              fullWidth
                              inputProps={{
                                style: { fontSize: 11 },
                                ...params.inputProps,
                              }}
                              InputLabelProps={{ style: { fontSize: 14 } }}
                              label={`Từ ${column.label}`}
                            />
                          )}
                        />
                      </Box>
                      <Box width={'50%'} px={2}>
                        <Autocomplete
                          size="small"
                          fullWidth
                          options={column.options || []}
                          getOptionLabel={(option) => option.label}
                          value={filters?.[column.value] && filters?.[column.value].to}
                          onChange={(_, value) =>
                            handleFilterChange(column.value, {
                              ...filters?.[column.value],
                              to: value?.value,
                            })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant='standard'
                              fullWidth
                              inputProps={{
                                style: { fontSize: 11 },
                                ...params.inputProps,
                              }}
                              InputLabelProps={{ style: { fontSize: 14 } }}
                              label={`Đến ${column.label}`}
                            />
                          )}
                        />
                      </Box>

                    </Grid>
                  ) : null}
                </Grid>
              ))}
              {formFilter ?
                <Grid md={2} xs={6} px={2}>
                  {formFilter}
                </Grid>
                : ''}
              <Grid xs={12} justifyContent={'end'} display={'flex'} pt={4}>
                <Button size="small" className="btn" variant="outlined" startIcon={<Search />} onClick={applyFilters}>
                  Tìm  kiếm
                </Button>
              </Grid>
            </Grid>
          </fieldset>
        </Slide>
      </Grid>
    );
  };

  return (
    <DataGrid
      className="mainTable"
      rows={rowDatas}
      columns={columns}
      disableColumnMenu
      showCellVerticalBorder
      showColumnVerticalBorder
      density="compact"
      experimentalFeatures={{ columnGrouping: true }}
      columnGroupingModel={columnGroupingModel}
      initialState={{
        columns: {
          columnVisibilityModel: {
            // Hide columns status and traderName, the other columns will remain visible
            id: false,
          },
        },
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 25, 50]}
      slots={{ toolbar: SearchToolbar }}
      slotProps={{
        toolbar: {
          data: rows,
          columns: columnFillter,
          formFilter: formFilter
        }
      }}
    />
  );
}

export default DataGridComponent;