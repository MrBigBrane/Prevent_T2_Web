'use server';

import { DataGrid } from '@mui/x-data-grid';
import { createClient } from '@/utils/supabase/server';


export default async function TestTable({ table, field1, title1, field2, title2, field3, title3, field4, title4 }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from(table)
    // try with {} if doesn't work without
    .select()
    .eq("user", user.id);


  const rows = data;

  const columns = [
      { field: 'created_at', headerName: 'Date', width: 150 },
      { field: field1, headerName: title1, width: 150 },
      { field: field2, headerName: title2, width: 150 },
      { field: field3, headerName: title3, width: 150 },
    ];
 
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
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