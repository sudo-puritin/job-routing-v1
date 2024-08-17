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
      <div className="containerHomePage">
        <SearchAppBar setModeUI={setModeUI} />
        <div className="containerJobCard">
          {records.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <div
          className="containerNumPage"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={nPage}
              color="secondary"
              onChange={(event, value) => {
                setCurrentPage(value);
              }}
              page={currentPage}
            />
          </Stack>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
