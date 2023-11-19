import React from "react";
import {
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  Grid,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import HorizontalNonLinearStepper from "./Stepper";

interface Props {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const SkillsCard: React.FC<Props> = ({ open = false, setOpen }) => (
  <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
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
    <Divider style={{ height: 0, marginBottom: "16px" }} />
    <CardContent style={{ height: "420px", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid container>
          <HorizontalNonLinearStepper />
        </Grid>
      </Grid>
    </CardContent>
  </Dialog>
);

export default SkillsCard;
