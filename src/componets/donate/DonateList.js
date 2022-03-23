import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import Forum from "./Forum";

function DonateList() {
  const [Data, setData] = useState([]);
  const [link, setlink] = useState();

  useEffect(() => {
    const usersCollectionRef = collection(db, "Institution");

    const getServices = async () => {
      const snap = await getDocs(usersCollectionRef);
      setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getServices();
  }, []);

  const goto = (id) => {
    setlink(id);
    console.log(id);
  };

  return (
    <div>
      <div style={{ padding: "3rem" }}>
        <ol>
          {Data.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => goto(item.id)}
                style={{
                  marginTop: "20px",
                  color: "wheat",
                  backgroundColor: "rgba(0,0,0,.7)",
                  width: "60%",
                }}
              >
                {item.name} , {item.place}
              </li>
            );
          })}
        </ol>
      </div>
      <Forum id={link} />
    </div>
  );
}

export default DonateList;
