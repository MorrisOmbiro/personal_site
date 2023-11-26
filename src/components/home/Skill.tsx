import { Grid, Typography } from "@mui/material";
import React from "react";
import Attr from "./Attr";

interface Props {
  skill: {
    imgSrc: string;
    skillName: string;
  };
}

const Skill: React.FC<Props> = ({ skill }) => (
  <Grid container item xs={6} sm={3} md={3} lg={3} justifyContent="center">
    <Attr skill={skill}>
      <img
        src={skill.imgSrc}
        alt={skill.skillName}
        height="40px"
        width="40px"
        style={{
          marginBottom: "4px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Typography
        variant="body2"
        color="GrayText"
        style={{ textAlign: "center" }}
      >
        {skill.skillName}
      </Typography>
    </Attr>
  </Grid>
);

export default Skill;
