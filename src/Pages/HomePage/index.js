import { React, useState } from "react";
import "./HomePage.css";
import jobs from "../../jobs.json";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Pagination, Stack } from "@mui/material";

import SearchAppBar from "../../Components/SearchAppBar";
import JobCard from "../../Components/JobCard";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modeUI, setModeUI] = useState("dark");

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = jobs.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(jobs.length / recordsPerPage);

  const theme = createTheme({
    palette: {
      mode: `${modeUI}`,
      primary: {
        main: "#ff9800",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100%",
          maxHeight: "false",
          maxWidth: "false",
        }}
      >
        <SearchAppBar setModeUI={setModeUI} />
        <div
          style={{
            position: "relative",
            padding: 32,
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {records.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={2}
            style={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Pagination
              count={nPage}
              color="secondary"
              onChange={(event, value) => {
                setCurrentPage(value);
              }}
              page={currentPage}
              style={{}}
            />
          </Stack>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
