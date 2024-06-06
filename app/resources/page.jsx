import LinkButton from "@/components/buttons/LinkButton";
import MuiButton from "@/components/buttons/MuiButton";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

export default function ResourcesPage() {
    return (
      <div>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          <b><b>Resources</b></b>
        </Typography>
        <Box>
          <Box padding={2} margin="auto" style={{ width: "45%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={10} style={{ padding: 16, margin: "auto" }}>
                  <Typography variant="h6">
                    <b>BMI Calculator</b>
                  </Typography>
                  <Typography variant="h6">
                    Body mass index (BMI) is a measure of body fat based on
                    height and weight that applies to adult men and women.
                  </Typography>

                  <Button
                    type={null}
                    variant="contained"
                    color="success"
                    endIcon={<LaunchIcon />}
                    style={{ marginTop: 2 }}
                  >
                    <a
                      className="block hover:underline"
                      href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BMI Calculator
                    </a>
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={10} style={{ padding: 16, margin: "auto" }}>
                  <Typography variant="h6">
                    <b>Calorie Calculator</b>
                  </Typography>
                  <Typography variant="h6">
                    Use the calorie calculator to estimate the number of daily
                    calories your body needs to maintain your current weight.
                  </Typography>
                  <Button
                    type={null}
                    variant="contained"
                    color="success"
                    endIcon={<LaunchIcon />}
                    style={{ marginTop: 2 }}
                  >
                    <a
                      className="block hover:underline"
                      href="https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/calorie-calculator/itt-20402304"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Calorie Calculator
                    </a>
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={10} style={{ padding: 16, margin: "auto" }}>
                  <Typography variant="h6">
                    <b>NRIVA's Nutrition Guide</b>
                  </Typography>
                  {/* <Typography variant="h6">description</Typography> */}
                  <Button
                    type={null}
                    variant="contained"
                    color="success"
                    endIcon={<LaunchIcon />}
                    style={{ marginTop: 2 }}
                  >
                    <a
                      className="block hover:underline"
                      href="https://www.verywellfit.com/lose-weight-calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Nutrition Guide
                    </a>
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    );
}