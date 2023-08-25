import React from "react";
import Input from "./Input";
import Select from "./Select";
import Countries from "./Countries";
import Gender from "./Gender";


const FormField = () => {
  return (
    <section className=" h-max p-5 md:px-16 lg:px-22  ">
        <p className="text-black text-left  text-base mt-5 md:text-2xl md:mt-10  lg:text-lg ">
          Join our waitlist to get weekly updates from us and notifications
          about our launch date.
        </p>
        <form>
          <Input name={"Name"} />
          <Input name={"Email Address"} />
          <div className="md:grid grid-cols-4 gap-5 justify-center">
            <Select name={"Select your Country"}   />
            <Select name={"Select your Gender"}  />
          </div>
          <div>
            <textarea
              className="h-44 p-2 mt-5 rounded-md border-2 border-[#0d265c8d] text-xs w-[100%] lg:h-48  "
              placeholder=" Share your expectations about this Product with us...."
            />
          </div>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="h-12 p-2 text-white bg-[#0D265C] lg:h-16  rounded-md text-xs w-[100%] md:w-[30%]  ">
              Submit
            </button>
          </div>
        </form>
      <Countries/>
      <Gender/>

    </section>
  );
};

export default FormField;
