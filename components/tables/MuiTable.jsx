'use client';

import { DataGrid, GridFooter, useGridApiContext, useGridApiEventHandler } from '@mui/x-data-grid';
import { useState } from 'react';
import EditButton from '../buttons/EditButton';
import DeleteButton from '../buttons/DeleteButton'

export default function TestTable({
  page,
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
    const apiRef = useGridApiContext();
  
    const handleRowClick = (params) => {
      setRowId(params.row.id);
    };
  
    useGridApiEventHandler(apiRef, 'rowClick', handleRowClick);
  
    return (
      <>
        <GridFooter />
        {rowId && <><EditButton table={table} id={rowId} /><DeleteButton table={table} id={rowId} page={page} /></>}
      </>
    );
  }

  
  

  return (
    <div style={{ height: 300, width: "100%" }}>
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