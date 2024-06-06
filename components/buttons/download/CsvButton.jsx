'use client';

import { Button, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react';

export default function HomePage({ searchValue, ...props }) {
  const downloadCsv = async () => {
    const response = await fetch(`/api/download-csv?value=${encodeURIComponent(searchValue)}`);
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'CDCEntries.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      console.error('Failed to download CSV:', await response.text());
    }
  };

  return (
    <div>
      <Button color='success' onClick={downloadCsv} {...props} endIcon={<DownloadIcon />}>
        Download Table
      </Button>
    </div>
  );
};
