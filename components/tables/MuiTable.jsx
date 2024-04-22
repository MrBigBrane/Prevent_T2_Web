'use client';

import { DataGrid, GridFooter, useGridApiContext, useGridApiEventHandler } from '@mui/x-data-grid';
import { useState } from 'react';
import MuiDeleteModal from '../buttons/MuiDeleteModal'
import MuiModal from '../forms/MuiModal'

export default function MuiTable({
  page,
  title,
  table,
  data,
  field1,
  title1,
  field2,
  title2,
  field3,
  title3,
}) {
  const rows = data;

  const columns = [
    { field: "created_at", headerName: "Date", width: 150 },
    { field: "id", headerName: "Date", width: 150 },
    { field: field1, headerName: title1, width: 150 },
    { field: field2, headerName: title2, width: 150 },
    { field: field3, headerName: title3, width: 150 },
  ];


  function Footer() {
    const [rowId, setRowId] = useState('');
    const [firstField, setFirstField] = useState('')
    const [secondField, setSecondField] = useState('')
    const [thirdField, setThirdField] = useState('')
    const apiRef = useGridApiContext();
  
    const handleRowClick = (params) => {
      setRowId(params.row.id);
      setFirstField(params.row[field1])
      setSecondField(params.row[field2])
      setThirdField(params.row[field3])
    };
  
    useGridApiEventHandler(apiRef, 'rowClick', handleRowClick);

    return (
      <>
        <GridFooter />
        {rowId && (
          <>
            <MuiModal edit={true} title={title} rowId={rowId} field1={firstField} field2={secondField} field3={thirdField}  />
            <MuiDeleteModal table={table} rowId={rowId} page={page} />
          </>
        )}
      </>
    );
  }

  
  

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        disableColumnSelector
        columnVisibilityModel={{
          id: false,
        }}
        rows={rows}
        slots={{ footer: Footer }}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: "created_at", sort: "desc" }],
          },
        }}
      />
      {/* {rowId ? null : <button>testing</button>} */}
    </div>
  );
}