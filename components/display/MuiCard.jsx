import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MuiEditModal from '../forms/plans/MuiEditModal';
import Typography from '@mui/material/Typography';
import MuiDeleteModal from '../forms/plans/MuiDeleteModal';

export default function BasicCard({ date, title, details, id }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <MuiDeleteModal rowId={id} />
        <MuiEditModal title={title} rowId={id} details={details} />
      </CardActions>
    </Card>
  );
}