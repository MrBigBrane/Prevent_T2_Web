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
    .from('lifestyle_coach_log')
    .select()
    .eq('user', user.id);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Attendance</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Exercise Minutes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data).map((row) => (
            <TableRow
              key={row[1].id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row[1].created_at}</TableCell>  
              <TableCell component="th" scope="row">
                {row[1].attendance}
              </TableCell>
              <TableCell align="right">{row[1].current_weight}</TableCell>
              <TableCell align="right">{row[1].minutes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

