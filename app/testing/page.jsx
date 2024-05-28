'use client';

import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

// Initialize Supabase client
const supabase = createClient('https://kexpcowdrhnutbxxljca.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtleHBjb3dkcmhudXRieHhsamNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMDMzMjIsImV4cCI6MjAxMTg3OTMyMn0.r3RLnI-gSzOUoRAZ4STnmonrPykACrUP-DlTjvbHDRI');

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Show the loading state immediately
      setData(null);

      // Fetch data from Supabase
      const { data, error } = await supabase.from('profiles').select('*');
      
      if (error) {
        console.error(error);
        setData({ error: 'Failed to fetch data' });
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  // if (data === null) {
  //   return <div>Loading...</div>; // Ensure this matches your loading state
  // }

  // if (data.error) {
  //   return <div>Error: {data.error}</div>;
  // }

  return (
    <div>
      <h1>Dashboard Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
