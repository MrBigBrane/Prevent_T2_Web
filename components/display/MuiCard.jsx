import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MuiEditModal from '../forms/plans/action/MuiEditModal';
import Typography from '@mui/material/Typography';
import MuiDeleteModal from '../forms/plans/action/MuiDeleteModal';

export default function BasicCard({ date, q1, q2, q3, id }) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 450 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h6" component="div">
        Question 1: What routine do you want to add, stop, or change?
        </Typography>
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          {q1}
        </Typography>
        <Typography variant="h6" component="div">
        Question 2: What new routine do I want to try?
        </Typography>
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          {q2}
        </Typography>
        <Typography variant="h6" component="div">
        Question 3: What cue will help me remember my new routine?
        </Typography>
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          {q3}
        </Typography>
      </CardContent>
      <CardActions>
        <MuiDeleteModal rowId={id} />
        <MuiEditModal q1={q1} q2={q2} q3={q3} rowId={id}  />
      </CardActions>
    </Card>
  );
}