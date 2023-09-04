import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import donate from "../assets/donate.png";
import { db } from "../firebase_setup/firebase";

const Waitlist = () => {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const saveFirebaseTodos = [];
    querySnapshot.forEach((doc) => {
      saveFirebaseTodos.push(doc.data());
      setData(saveFirebaseTodos);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    counter !== data.length && setTimeout(() => setCounter(counter + 1), 100);
  }, [counter, data.length]);
  return (
    <div className="bg-[#F6F8EA] py-4">
      <div className="flex justify-end">
        <img className="w-[150px] lg:w-[300px]" src={donate} alt="donate" />
      </div>
      <div className="my-10">
        <h5 className="text-4xl text-center lg:text-7xl font-extrabold  text-[#0D265C]">
          {counter}
        </h5>
        <p className="text-center text-sm mt-2 lg:text-lg ">
          Users joined our waitlist
        </p>
      </div>
      <div>
        <img className="w-[150px] lg:w-[300px]" src={donate} alt="donate" />
      </div>
    </div>
  );
};

export default Waitlist;
