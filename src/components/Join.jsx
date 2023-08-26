import React from "react";
import JoinList from "./JoinList";
import individual from "../assets/individual.png";
import campaign from "../assets/campaign.png";
import organisation from "../assets/organization.png";

const Join = () => {
  return (
    <div className=" py-16 px-6 lg:px-20 bg-[#E3FFFC] ">
      <h3 className="text-lg font-bold mb-5 text-[#545454]">
        How You Can Join Us ..
      </h3>
      <div className="">
        <JoinList
          img={individual}
          heading={"Individual"}
          paragraph={
            "Taking charge of your campaigns by personally sharing your story/campaign on our platform "
          }
        />
        <JoinList
          img={campaign}
          heading={"Campaign Agent"}
          paragraph={
            "Join us a campaign agent by assisting fundraisers and making sure that their campaigns are well heard and seen."
          }
        />
        <JoinList
          img={organisation}
          heading={"Organisation"}
          paragraph={
            "Our platform is open to organisations and bodies that are looking to raise funds for various use. "
          }
        />
      </div>
    </div>
  );
};

export default Join;
