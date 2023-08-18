import React from "react";
import Input from "./Input";
import Select from "./Select";

const FormField = () => {
  return (
    <section className="mt-20 absolute z-10">
      <h2 className="text-center text-xl text-[#0D265C] mb-3 md:text-3xl font-extrabold">
        Join Our Waitlist
      </h2>
      <div className="h-max py-10 mx-6 md:mx-16 lg:mx-28 xl:mx-32 bg-[#0D265C] md:py-16 px-5 md:px-10 pt-8 md:pt-12">
        <p className="text-white  text-sm text-center md:text-base lg:text-lg md:px-24 xl:px-56 ">
          Join our waitlist to get weekly updates from us and notifications
          about our launch date.
        </p>
        <form>
          <Input name={"Name"} />
          <Input name={"Email Address"} />
          <div className="md:flex gap-5 justify-center">
            <Select name={"Select your Country"} />
            <Select name={"Select your Gender"} />
          </div>
          <div >
            <textarea
              className="h-44 p-2 mt-5 rounded-sm text-xs w-[100%]  "
              placeholder=" Share your expectations about this Product with us...."
            />
          </div>
          <div className="flex justify-center md:justify-start mt-5">
            <button className="h-12 p-2 bg-[#E38900] rounded-sm text-xs w-[100%] md:w-[30%]  ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormField;
