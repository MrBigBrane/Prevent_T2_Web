import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Icon, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiModal from '@/components/forms/userforms/MuiModal';
import MuiDeleteModal from '@/components/buttons/MuiDeleteModal';

export default function ActivityCard({ title, title1, field1, title2, field2, title3, field3, date, id }) {

  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 1,
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 1,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              {title1}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {field1}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              {title2}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {field2}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              {title3}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {field3}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <MuiModal
          edit={true}
          title={"Activity Logger"}
          rowId={id}
          field1={title}
          field2={field2}
          field3={field3}
          field4={field1}
        />
        <MuiDeleteModal table={"activity_log"} rowId={id} page={"activities?delete=true"} />
      </CardActions>
    </Card>
  );
}