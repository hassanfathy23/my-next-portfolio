import * as React from "react";
import Button from "@mui/material/Button";
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hello, My Name Is{" "}
              <span>Hassan Fathy</span>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              I'm junior full stack web developer. I'm a solution-oriented and problem solver with 1
              year of experience building and maintaining software and software
              architecture. I'm highly skilled in communication, collaboration,
              and technical documentation.
              <span className="text-black">below, you will learn about the stack i'm expertise in</span>
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" className="text-white bg-blue-700">Who I Am?</Button>
              <Button variant="outlined">My Works</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      </ThemeProvider>
  );
}
