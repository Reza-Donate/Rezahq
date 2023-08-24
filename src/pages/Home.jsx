import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FormField from "../components/FormField";
// import Socials from "../components/Socials";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  return (
    <div className="pb-6">
      <Header />
      <MobileMenu />
      <Hero />
      <FormField />
      {/* <Socials color={"black"}  /> */}
    </div>
  );
};

export default Home;
