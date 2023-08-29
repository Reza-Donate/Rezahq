import React from "react";
import ServiceList from "./ServiceList";
import hope from "../assets/solar_hand-stars-bold.png";
import money from "../assets/solar_hand-money-bold.png";
import love from "../assets/solar_hand-heart-bold.png";

const Service = () => {
  return (
    <div className="mx-6 py-16 lg:mx-20 xl:mx-[85px] ">
      <h3 className="text-2xl font-bold mb-5 text-center text-[#545454]">
        What You Can Do On Our Platform...
      </h3>
      <div className="lg:flex gap-5">
        <ServiceList
          img={hope}
          heading={"Share Love"}
          bg={"#f6d8aa3c"}
          paragraph={
            "Join us in spreading hope and giving hope to the hopeless through your donations, your time and sharing your story on our platform. Getting involved with us help inspire hope in others."
          }
        />
        <ServiceList
          img={money}
          heading={"Donate Money"}
          bg={"#add0fb3b"}
          paragraph={
            "Your donations, givings and Contributions no matter the size plays a very big role in putting smile to the millions of faces all over Africa as a continent on our platform. Join us today to make that difference."
          }
        />
        <ServiceList
          img={love}
          heading={"Receive Love"}
          bg={"#d0da9634"}
          paragraph={
            "Our platform helps you to get recognition and also receive that love that you truly deserve when you share your stories, insights and journeys with us and the rest of the users on our platform."
          }
        />
      </div>
    </div>
  );
};

export default Service;
