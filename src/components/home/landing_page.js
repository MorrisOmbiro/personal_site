import React from 'react';


import MainAppBar from "./mainAppBar";
import ContentPage from "./contentPage";
import Footer from './footer';

export default function LandingPage() {
  return (
    <React.Fragment>
      <MainAppBar />
      <ContentPage />
      <Footer />
    </React.Fragment>
  );
}
