'use client';

import { DataGrid } from '@mui/x-data-grid';

export default function MuiTable({
  data
}) {
  const rows = data;

  let columns;

  
    columns = [
      { field: "created_at", headerName: "Joined", width: 150 },
      { field: "first_name", headerName: "First Name", width: 150 },
      { field: "last_name", headerName: "Last Name", width: 150 },
      { field: "bmi", headerName: "BMI", width: 150 },
      { field: "minutes", headerName: "Last Week's Activity Minutes", width: 250 },
      { field: 'id', headerName: 'id', width: 150 }
    ];
  

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        disableColumnSelector
        columnVisibilityModel={{
          id: false,
        }}
        rows={rows}
        // slots={footer ? null : { footer: Footer }}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: "created_at", sort: "desc" }],
          },
        }}
      />
    </div>
  );
}

