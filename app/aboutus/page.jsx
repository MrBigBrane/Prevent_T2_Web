import { Avatar, Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";

import varun from '../../assets/varun.png'
import ryan from '../../assets/ryan.png'

import Image from "next/image";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function AboutUs() {
    return (
      <>
        <Typography variant="h4" style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
          About Us
        </Typography>

        <Grid container justifyContent="center" spacing={4} width={"100%"}>
          <Grid item xs={12} md={6} lg={3} width={"100%"}>
            <Paper style={{ padding: 16, textAlign: "center", margin: "auto" }}>
              <IconButton>
                <Avatar sx={{ width: 200, height: 200 }}>
                  <Image src={varun} alt={"Varun Thota"} layout="fill" />
                </Avatar>
              </IconButton>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                <b>Varun Thota</b>
              </Typography>
              <Typography
                variant="body2"
                style={{ textAlign: "center", marginBottom: 10 }}
              >
                Software Developer
              </Typography>
              <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                Varun is an eccentric student at Saratoga High School located in
                Saratoga, California. In addition to developing the NRIVA
                Diabetes Prevention Program website, Varun enjoys exercise,
                engineering, and video games Varun's social media accounts
                include Instagram and Facebook.
              </Typography>
              <Box
                marginTop={2}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <Box>
                  <a
                    href="https://www.instagram.com/varunth0ta/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-customPurple"
                  >
                    <InstagramIcon style={{ marginRight: 5 }} />
                    Instagram
                  </a>
                </Box>
                <Box>
                  <a
                    href="https://www.facebook.com/profile.php?id=100068137131995"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    <FacebookIcon style={{ marginRight: 5 }} />
                    Facebook
                  </a>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper style={{ padding: 16, textAlign: "center", margin: "auto" }}>
                <IconButton>
              <Avatar sx={{ width: 200, height: 200 }}>
                <Image src={ryan} alt={"Ryan Modafe"} layout="fill" />
              </Avatar>
            </IconButton>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                <b>Ryan Modafe</b>
              </Typography>
              <Typography variant="body2" style={{ textAlign: "center", marginBottom: 10 }}>
                Software Developer
              </Typography>
              <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                Ryan is another eccentric student at Saratoga High School located in Saratoga, California. 
                He fully developed the backend of the NRIVA Diabetes Prevention Program website and greatly enjoys
                programming with React.js and Next.js. In his free time, Ryan likes to learn more about coding, play piano,
                learn physics, and watch movies.
              </Typography>
              <Box
                marginTop={2}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <Box>
                  <a
                    href="https://www.facebook.com/profile.php?id=100080897269560"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    <FacebookIcon style={{ marginRight: 5 }} />
                    Facebook
                  </a>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
}