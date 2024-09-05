import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Icon, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActivityCard({ title, title1, field1, title2, field2, title3, field3 }) {

  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 1,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "bold" }}>
              {title1}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {field1}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "bold" }}>
              {title2}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {field2}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "bold" }}>
              {title3}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {field3}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton size="small" color='primary' onClick={() => { }}>
          <EditIcon />
        </IconButton>
        <IconButton size="small" color='error'>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}