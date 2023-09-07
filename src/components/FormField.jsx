import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import { useFormik } from "formik";
import Gender from "./Gender";
import Loading from "./Loading";
import Success from "./Success";
import Countries from "./Countries";
import Select from "./Select";
import Share from "./Share";
import Input from "./Input";

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.message) {
    errors.message = "Required";
  }
  return errors;
};

const FormField = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [share, setShare] = useState(false);
  const form = useSelector((state) => state.form);

  const handleSubmit = async (form) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "users"), form);
      console.log("Document written with ID: ", docRef.id);
      setLoading(false);
      setModal(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
  }, [loading]);

  const formik = useFormik({
    initialValues: form,
    validate: validate,
    onSubmit: handleSubmit,
  });
  const shareHandleClick = () => {
    document.body.style.overflow = "scroll";
    setModal(false);
    setShare(true);
  };
  return (
    <section id="waitlist" className=" h-max p-6 md:px-16 lg:px-32 xl:px-40  ">
      <p className="text-[#545454 font-bold text-center text-2xl mt-5 md:text-4xl md:mt-10  lg:text-2xl ">
        Join our waitlist to get weekly updates from us and notifications about
        our launch date.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <Input placeholder={"Name"} name={"name"} formik={formik} />
          <Input placeholder={"Email Address"} name={"email"} formik={formik} />
          {formik.errors.name && (
            <p className="text-right text-red-500">{formik.errors.name}</p>
          )}
        </div>
        <div className="md:grid grid-cols-4 gap-5 justify-center">
          <div>
            <Select name={form.country} />
          </div>
          <div>
            <Select name={form.gender} />
          </div>
        </div>

        <div>
          <textarea
            onChange={formik.handleChange}
            value={formik.values.message}
            className="h-44 p-2 mt-3 rounded-md border-2 border-[#0d265c8d] text-sm w-[100%] lg:h-48  "
            placeholder=" Share your expectations about this Product with us...."
            id="message"
            name="message"
          />
          {formik.errors.message && (
            <p className="text-right text-red-500">{formik.errors.message}</p>
          )}
        </div>
        <button
          className="h-12 p-2 text-white bg-[#0D265C] lg:h-16  rounded-md text-xs w-[100%] md:w-[30%] hover:bg-[#E38900]   "
          type="submit">
          Submit
        </button>
      </form>

      <Gender />
      <Countries />
      {loading && <Loading />}
      {modal && <Success handleClick={shareHandleClick} />}
      {share && <Share />}
    </section>
  );
};

export default FormField;
