'use client';

import { DataGrid, GridFooter, useGridApiContext, useGridApiEventHandler } from '@mui/x-data-grid';
import { useState } from 'react';
import MuiModal from './MuiModal'
import MuiDeleteModal from '@/components/buttons/MuiDeleteModal'

export default function MuiTable({
  page,
  title,
  data,
  field1,
  title1,
  field2,
  title2,
  field3,
  title3,
  field4,
  title4,
  footer
}) {
  const rows = data;

  let columns;

  if(field4){
    columns = [
      { field: "created_at", headerName: "Date", width: 150, 
    },
      { field: "time", headerName: "Time", width: 150,
    },
      { field: "id", headerName: "Date", width: 150 },
      { field: field1, headerName: title1, width: 150 },
      { field: field2, headerName: title2, width: 150 },
      { field: field3, headerName: title3, width: 150 },
      { field: field4, headerName: title4, width: 150 },
    ];
  }


  function Footer() {
    const [rowId, setRowId] = useState('');
    const [firstField, setFirstField] = useState('')
    const [secondField, setSecondField] = useState('')
    const [thirdField, setThirdField] = useState('')
    const [fourthField, setFourthField] = useState('')
    const apiRef = useGridApiContext();
  
    const handleRowClick = (params) => {
      setRowId(params.row.id);
      setFirstField(params.row[field1])
      setSecondField(params.row[field2])
      setThirdField(params.row[field3])
      setFourthField(params.row[field4])
    };
  
    useGridApiEventHandler(apiRef, 'rowClick', handleRowClick);

    return (
      <>
        <GridFooter />
        {rowId && (
          <>
            <MuiModal edit={true} title={title} rowId={rowId} field1={firstField} field2={secondField} field3={thirdField} field4={fourthField}  />
            <MuiDeleteModal table="meal_plans" rowId={rowId} page={page} />
          </>
        )}
      </>
    );
  }

  
  

  return (
    <div
      style={{ height: 500, width: "100%", marginTop: "4rem" }}
      marginTop={4}
      marginright={1}
      marginleft={1}
    >
      <DataGrid
        disableColumnSelector
        columnVisibilityModel={{
          id: false,
        }}
        rows={rows}
        slots={footer ? null : { footer: Footer }}
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