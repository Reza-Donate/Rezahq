import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FormField from "../components/FormField";
import MobileMenu from "../components/MobileMenu";
import Services from "../components/Services";
const Home = () => {
  return (
    <div className="pb-6">
      <Header />
      <MobileMenu />
      <Hero />
      <Services/>
      <FormField />
    </div>
  );
};

export default Home;
