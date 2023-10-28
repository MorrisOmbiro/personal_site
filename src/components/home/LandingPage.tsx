import React from "react";
import ContentPage from "./ContentPage";
import Footer from "./Footer";
import MainAppBar from "./MainAppBar";

const LandingPage: React.FC = () => (
  <>
    <MainAppBar />
    <ContentPage />
    <Footer />
  </>
);

export default LandingPage;
