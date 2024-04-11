
import ExportTableToExcel from "src/@core/components/export-excel/export-csv";
import DikeConstructions from "src/@core/components/map/doansong";
import TableComponent, { TableColumn } from "src/@core/components/table";


const Test = () => {

    const column: TableColumn[] = [
        {
            id: '#', label: 'column1', children: [
                {
                    id: '#', label: 'column1.1', children: [
                        {
                            id: '#', label: 'column1.1.1', children: [
                                { id: '#', label: 'column1.1.1.1', },
                                { id: '#', label: 'column1.1.1.2', }
                            ]
                        },
                        {
                            id: '#', label: 'column1.1.2', children: [
                                { id: '#', label: 'column1.1.2.1', },
                                { id: '#', label: 'column1.1.2.2', }
                            ]
                        }
                    ]
                },
                { id: '#', label: 'column1.2', },
            ]
        },
        {
            id: '#', label: 'column2', children: [
                {
                    id: '#', label: 'column2.1', children: [
                        { id: '#', label: 'column2.1.1', },
                        { id: '#', label: 'column2.1.2', },
                        { id: '#', label: 'column2.1.3', }
                    ]
                },
                {
                    id: '#', label: 'column2.2', children: [
                        { id: '#', label: 'column2.2.1', },
                        { id: '#', label: 'column2.2.2', },
                        { id: '#', label: 'column2.2.3', }
                    ]
                },
                {
                    id: '#', label: 'column2.3', children: [
                        { id: '#', label: 'column2.3.1', },
                        { id: '#', label: 'column2.3.2', }
                    ]
                }
            ]
        },
        {
            id: '#', label: 'column3', children: [
                {
                    id: '#', label: 'column3.1', children: [
                        {
                            id: '#', label: 'column3.1.1', children: [
                                {
                                    id: '#', label: 'column3.1.1.1', children: [
                                        { id: '#', label: '3242424' },
                                        { id: '#', label: '234234234' },
                                        { id: '#', label: '234234234' }
                                    ]
                                },
                                { id: '#', label: 'column3.3.1.2' },
                                { id: '#', label: 'column3.3.1.3' }
                            ]
                        },
                        { id: '#', label: 'column3.1.2', }
                    ]
                },
                {
                    id: '#', label: 'column3.2', children: [
                        { id: '#', label: 'column3.2.1', },
                        { id: '#', label: 'column3.2.2', },
                    ]
                },
            ]
        }
    ]

    return (
        <>
            <TableComponent id="export_table" columns={column} rows={[]} />
            <ExportTableToExcel tableId='export_table' filename="Test1.csv" />
            <DikeConstructions />

        </>

    )
}

export default Test;
