import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import Countries from "./Countries";
// import Gender from "./Gender";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../store/slices/form-slice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import Loading from "./Loading";
import Success from "./Success";


// const DisplayingErrorMessagesSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   message: Yup.string().required("Required"),
// });

const FormField = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleChange = (field) => (evt) => {
    dispatch(updateField({ field, value: evt.target.value }));
  };

  const handleSubmit = async (form) => {
    setLoading(true);
    try {
      // setLoading(true);
      const docRef = await addDoc(collection(db, "users"), form);
      console.log("Document written with ID: ", docRef.id);
      setLoading(false);
      setModal(true)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
  };
  return (
    <section id="waitlist" className=" h-max p-6 md:px-16 lg:px-32 xl:px-40  ">
      <p className="text-black font-bold text-left text-base mt-5 md:text-4xl md:mt-10  lg:text-2xl ">
        Join our waitlist to get weekly updates from us and notifications about
        our launch date.
      </p>
      <Formik
        initialValues={form}
        // validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={() => handleSubmit(form)}>
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div>
              <Field
                className={`h-14 rounded-md text-sm w-[100%] border-2 border-[#0d265c6d] lg:h-16  mt-5 p-2`}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange("name")}
                value={form.name}
              />
              {touched.name && errors.name && <div>{errors.name}</div>}
            </div>
            <div className="md:grid grid-cols-4 gap-5 justify-center">
              <Field
                as="select"
                name="color"
                onChange={handleChange("country")}
                value={form.country}
                className="flex justify-between border-2 col-span-2 border-[#0d265c8d]  mt-5 items-center h-14 lg:h-16 rounded-md text-sm  w-[100%] text-[#A8A8A8]  bg-white px-2 ">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <Field
                as="select"
                name="color"
                onChange={handleChange("gender")}
                value={form.gender}
                className="flex justify-between border-2 col-span-2 border-[#0d265c8d]  mt-5 items-center h-14 lg:h-16 rounded-md text-sm  w-[100%] text-[#A8A8A8]  bg-white px-2 ">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <div>
              <Field
                className={`h-14 rounded-md text-sm w-[100%] border-2 border-[#0d265c6d] lg:h-16  mt-5 p-2`}
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange("email")}
                value={form.email}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>

            <div>
              <Field
                onChange={handleChange("message")}
                value={form.message}
                className="h-44 p-2 mt-5 rounded-md border-2 border-[#0d265c8d] text-sm w-[100%] lg:h-48  "
                placeholder=" Share your expectations about this Product with us...."
                as="textarea"
                id="message"
                name="message"
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <button
              className="h-12 p-2 text-white bg-[#0D265C] lg:h-16  rounded-md text-xs w-[100%] md:w-[30%] hover:bg-[#E38900]   "
              type="submit"
              disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>


      {loading && <Loading />}
      {modal && <Success />}
    </section>
  );
};

export default FormField;
