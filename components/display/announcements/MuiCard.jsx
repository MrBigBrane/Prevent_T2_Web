import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import MuiEditModal from '../forms/plans/action/MuiEditModal';

// import MuiDeleteModal from '../forms/plans/action/MuiDeleteModal';

export default function BasicCard({ date, title, body, ...props }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }} {...props}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h6" component="div">
        {title}
        </Typography>
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <MuiDeleteModal rowId={id} />
        <MuiEditModal q1={q1} q2={q2} q3={q3} rowId={id}  /> */}
      </CardActions>
    </Card>
  );
}