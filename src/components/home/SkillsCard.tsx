import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { skills } from "./skillLinks";

interface Props {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const SkillsCard: React.FC<Props> = ({ open = false, setOpen }) => (
  <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
      <Typography variant="h6" color="GrayText">
        SKILLS
      </Typography>
    </DialogTitle>
    <IconButton
      aria-label="close"
      onClick={() => setOpen(false)}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
    <Divider style={{ height: 0 }} />
    <CardContent>
      <Grid container spacing={2}>
        {skills.frontend.map((skill) => {
          return (
            <Grid item xs={3} lg={3}>
              <Typography variant="body2" color="GrayText">
                {skill.skillName.toLocaleUpperCase()}
              </Typography>
            </Grid>
          );
        })}
        <Grid item xs={12}></Grid>
      </Grid>
    </CardContent>
  </Dialog>
);

export default SkillsCard;
