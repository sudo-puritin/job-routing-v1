import * as React from "react";

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
import zIndex from "@mui/material/styles/zIndex";

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  // zIndex: 4,
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "470px",
  border: "none",
  boxShadow: 24,
  p: 0,
};

export default function JobCard({ job }) {
  const [open, setOpen] = React.useState(false);

  const { setSuccess, success } = useLoginContext();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          maxWidth: 375,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {job.title}
          </Typography>
          <Stack
            direction="row"
            style={{
              marginBottom: "8px",
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
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
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
                  <Box sx={style1}>
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
                  <Box sx={style2}>
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
