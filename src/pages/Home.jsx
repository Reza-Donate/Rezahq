import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FormField from "../components/FormField";
import MobileMenu from "../components/MobileMenu";
import Service from "../components/Service";
const Home = () => {
  return (
    <div className="pb-6">
      <Header />
      <MobileMenu />
      <Hero />
      <Service />
      <FormField />
    </div>
  );
};

export default Home;
