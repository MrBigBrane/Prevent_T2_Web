import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createClient } from '@/utils/supabase/server';

export default async function BasicTable() {
    const supabase = createClient();

    const {
        data: { user },
        } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('activity_log')
    .select()
    .eq('user', user.id);
    // Filtering the rows by user so the user can only access their own data

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Activity Name</TableCell>
            <TableCell align="right">Minutes</TableCell>
            <TableCell align="right">Difficulty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data).map((row) => (
            // Data that is fetched comes back as an object (not an array)
            // Forcing us to convert it into an array so that each element 
            // can be mapped
            <TableRow
              key={row[1].id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row[1].created_at.slice(0, 10)}</TableCell> 
             {/* Data for date is sliced so that only year, month, and date are shown
             to decrease messiness  */}
              <TableCell component="th" scope="row">
                {row[1].activity}
              </TableCell>
              <TableCell align="right">{row[1].minutes}</TableCell>
              <TableCell align="right">{row[1].difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

