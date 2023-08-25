import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FormField from "../components/FormField";
import MobileMenu from "../components/MobileMenu";
import Service from "../components/Service";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="">
      <Header />
      <MobileMenu />
      <Hero />
      <Service />
      <FormField />
      <Footer />
    </div>
  );
};

export default Home;
