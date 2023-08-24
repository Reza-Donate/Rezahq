import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FormField from "../components/FormField";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services/>
      <FormField />
    </div>
  );
};

export default Home;
