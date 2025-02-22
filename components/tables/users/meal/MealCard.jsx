import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Icon, IconButton } from '@mui/material';
import MuiModal from '@/components/forms/userforms/MuiModal';
import MuiDeleteModal from '@/components/buttons/MuiDeleteModal';

export default function MealCard({ title, title1, field1, title2, field2, title3, field3, title4, field4, id }) {

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
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              {title4}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {field4}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <MuiModal
          edit={true}
          rowId={id}
          title={"Meal Plan"}
          field1={field1}
          field2={field2}
          field3={field3}
          field4={field4}
        />
        <MuiDeleteModal
          table={"meal_plans"}
          rowId={id}
          page={"mealplan?delete=true"}
        />
      </CardActions>
    </Card>
  )}