import { Box, Paper, Typography } from "@mui/material";

export default function ResourcesPage() {
    return (
      <div>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Resources
        </Typography>
        <Box marginTop={2}>
          <Paper>
            <Box padding={2}>
              <a
                className="block hover:underline"
                href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>BMI Calculator</b>
              </a>
              <a
                className="block hover:underline"
                href="https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/calorie-calculator/itt-20402304"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "1rem" }}
              >
                <b>Calorie Calculator</b>
              </a>
              <a
                className="block hover:underline"
                href="https://drive.google.com/file/d/1ciZHPCOOi-_-LhbSlqpLU7TXtonOwhhH/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "1rem" }}
              >
                <b>NRIVA's Nutrition Guide</b>
              </a>
            </Box>
          </Paper>
        </Box>
      </div>
    );
}