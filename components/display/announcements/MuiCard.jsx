import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MuiEditModal from '../../forms/coaching/announcements/MuiEditModal'
import MuiDeleteModal from '../../forms/coaching/announcements/MuiDeleteModal'

export default function BasicCard({ date, title, body, id, classCode, coach, ...props }) {
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
        {coach ? (
          <>
            <MuiEditModal title={title} announcement={body} rowId={id} />
            <MuiDeleteModal rowId={id} classCode={classCode} />
          </>
        ) : null}
      </CardActions>
    </Card>
  );
}