import React from "react";
import ContentPage from "./ContentPage";
import Footer from "./Footer";
import Header from "./Header";
import { styled } from "@mui/material/styles";

const LandingPage: React.FC = () => (
  <Container>
    <Header />
    <ContentPage />
    <Footer />
  </Container>
);

const Container = styled("div")(({ theme }) => ({
  margin: "auto",
  alignItems: "center",
  height: "100vh",
  width: "50%",
  position: "relative",
  padding: theme.spacing(2),
}));

export default LandingPage;
