import { TableCell, TableRow, TableBody } from '@mui/material';
import { Data, TableColumn } from '.';
import React from 'react';

function renderTableCell(column: TableColumn, row: any, rowIndex: number, colIndex: number, actions: ((row: Data) => React.ReactNode) | null) {
    if (column.children) {
        return column.children.map((childColumn: TableColumn, childIndex: number) => {
            const parentId = column.id;
            const rowValue = row[parentId];

            if (parentId === '#') {
                return (
                    <TableCell
                        className={` ${column.pinned ? 'sticky-col' : ''} ${column.pinned === 'left' ? 'start-col' : ''
                            } ${column.pinned === 'right' ? 'end-col' : ''} `}
                        sx={{ py: 0, minWidth: childColumn.minWidth }}
                        key={`${colIndex}-${childIndex}`}
                        align={childColumn.align}
                        size='small'
                    >
                        {childColumn.id === 'actions'
                            ? actions && actions(row)
                            : typeof childColumn.elm === 'function'
                                ? childColumn.elm(row)
                                : childColumn.format
                                    ? childColumn.format(row[childColumn.id])
                                    : row[childColumn.id]
                        }
                    </TableCell>
                )
            } else {
                return (
                    <TableCell
                        className={` ${column.pinned ? 'sticky-col' : ''} ${column.pinned === 'left' ? 'start-col' : ''
                            } ${column.pinned === 'right' ? 'end-col' : ''} `}
                        sx={{ py: 0, minWidth: childColumn.minWidth }}
                        key={`${colIndex}-${childIndex}`}
                        align={childColumn.align}
                        size='small'
                    >
                        {Array.isArray(rowValue) ? (
                            <div>
                                {typeof rowValue === 'object' && rowValue !== null && Object.keys(rowValue).length > 0
                                    ? rowValue.map((e, k) => (
                                        <div key={k}>
                                            {Object.keys(rowValue).length > 1 ? (
                                                <p>
                                                    {typeof childColumn.elm === 'function'
                                                        ? childColumn.elm(e)
                                                        : childColumn.format
                                                            ? childColumn.format(e[childColumn.id])
                                                            : e[childColumn.id]}
                                                </p>
                                            ) : typeof childColumn.elm === 'function' ? (
                                                childColumn.elm(e)
                                            ) : childColumn.format ? (
                                                childColumn.format(e[childColumn.id])
                                            ) : (
                                                e[childColumn.id]
                                            )}
                                        </div>
                                    ))
                                    : rowValue}
                            </div>
                        ) : typeof rowValue === 'object' &&
                            rowValue !== null &&
                            Object.keys(rowValue).length > 0 ? (
                            typeof childColumn.elm === 'function' ? (
                                childColumn.elm(rowValue)
                            ) : childColumn.format ? (
                                childColumn.format(rowValue[childColumn.id])
                            ) : (
                                rowValue[childColumn.id]
                            )
                        ) : (
                            rowValue
                        )}
                    </TableCell>
                )
            }
        });
    } else {
        return (
            <TableCell
                className={` ${column.pinned ? 'sticky-col' : ''} ${column.pinned === 'left' ? 'start-col' : ''
                    } ${column.pinned === 'right' ? 'end-col' : ''} `}
                sx={{ py: 0, minWidth: column.minWidth }}
                {...(column.id === 'actions' ? { width: 120 } : {})}
                key={`${rowIndex}`}
                align={column.align}
                size='small'
            >
                {column.id === 'actions'
                    ? actions && actions(row)
                    : column.id === 'stt' ? rowIndex + 1
                        : typeof column.elm === 'function'
                            ? column.elm(row)
                            : column.format
                                ? column.format(row[column.id])
                                : Array.isArray(row[column.id])
                                    ? row[column.id].join(', ')
                                    : row[column.id]
                }
            </TableCell>
        );
    }
}


function renderTableBody(columns: TableColumn[], data: any, actions: ((row: Data) => React.ReactNode) | null, page: number, rowsPerPage: number) {

    return (
        <TableBody>
            {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dataItem: any, rowIndex: number) => (
                <TableRow key={rowIndex}>
                    {columns.map((column: TableColumn, colIndex: number) => (
                        renderTableCell(column, dataItem, colIndex, rowIndex, actions)
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
}

export default renderTableBody;
