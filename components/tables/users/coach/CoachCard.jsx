import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Icon, IconButton } from '@mui/material';
import MuiModal from '@/components/forms/userforms/MuiModal';
import MuiDeleteModal from '@/components/buttons/MuiDeleteModal';

export default function CoachCard({ title, title1, field1, title2, field2, title3, field3, field4, id }) {
  console.log(field4)

  
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
              {field2.substring(2)}
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
              {field3.substring(0, field3.indexOf(" "))}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <MuiModal
          edit={true}
          rowId={id}
          field1={field1}
          field2={field2}
          field3={field3}
          field4={field4}
        />
        <MuiDeleteModal
          table={"lifestyle_coach_log"}
          rowId={id}
          page={"coachlog?delete=true"}
        />
      </CardActions>
    </Card>
  );
}