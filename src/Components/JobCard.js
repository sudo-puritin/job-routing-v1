import * as React from "react";
import "./index.css";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Chip,
  Stack,
  Box,
  Modal,
} from "@mui/material";

import LoginPage from "../Pages/LoginPage";
import { useLoginContext } from "../Context/Login.Context";

export default function JobCard({ job }) {
  const [open, setOpen] = React.useState(false);

  const { setSuccess, success } = useLoginContext();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card className="jobCardWrapper">
        <CardContent>
          <Typography className="jobCardContent" variant="h5" component="div">
            {job.title}
          </Typography>
          <Stack className="skillWrapper" direction="row">
            {job.skills.slice(0, 4).map((skill, index) => {
              return (
                <Chip
                  key={index}
                  label={skill}
                  component="a"
                  href="#basic-chip"
                  style={{ color: "#fff", backgroundColor: "#f50057" }}
                  clickable
                />
              );
            })}
          </Stack>

          <Typography variant="body2">{job.description}</Typography>
        </CardContent>
        <CardActions className="BtnLearnMore">
          <Button variant="contained" onClick={handleOpen}>
            Learn More
          </Button>
          <>
            {success ? (
              <>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="style1">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      style={{ fontWeight: 700 }}
                    >
                      {job.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {job.description}
                    </Typography>
                  </Box>
                </Modal>
              </>
            ) : (
              <>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="style2">
                    <LoginPage />
                  </Box>
                </Modal>
              </>
            )}
          </>
        </CardActions>
      </Card>
    </>
  );
}
