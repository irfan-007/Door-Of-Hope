import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";

function Forum({ id }) {
  const [Data, setData] = useState([]);

  const [upi, setupi] = useState("");
  const [accNO, setaccNO] = useState("");
  const [holderName, setholderName] = useState("");
  const [qrcode, setqrcode] = useState("");
  const [ifsc, setifsc] = useState("");

  useEffect(() => {
    const usersCollectionRef = collection(db, "Bank");

    const getServices = async () => {
      const snap = await getDocs(usersCollectionRef);
      setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getServices();
  }, []);

  const addDetails = () => {
    Data.map((item) => {
      if (item.id == id) {
        setaccNO(item.accountNO);
        setqrcode(item.photo);
        setupi(item.upiID);
        setholderName(item.name);
        setifsc(item.ifsc);
        console.log(upi);
      }
      console.log(item.name);
    });
  };
  addDetails();

  return (
    <div>
      Forum <div>{id}</div>
      <div>{accNO}</div>
      <div>{qrcode}</div>
      <div>{upi}</div>
      <div>{holderName}</div>
      <div>{ifsc}</div>
    </div>
  );
}

export default Forum;
