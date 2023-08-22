import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FormField from "../components/FormField";
import Socials from "../components/Socials";
import MobileNavBar from "../components/MobileNavBar";

const Home = () => {
  return (
    <div>
      <Header />
      <MobileNavBar />
      <Hero />
      <FormField />
      <Socials />
    </div>
  );
};

export default Home;
