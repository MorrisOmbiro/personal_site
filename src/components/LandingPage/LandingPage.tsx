import React from "react";
import ContentPage from "./components/ContentPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
  width: "70%",
  padding: theme.spacing(2),
}));

export default LandingPage;
