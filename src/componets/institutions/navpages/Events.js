import React from "react";
import Navbar from "../Navbar";
import "./Events.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase";
import { useEffect, useState } from "react";
import Navbar2 from "../Navbar2";

function Events({ swap }) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "Events");

    const getEntrys = async () => {
      const snap = await getDocs(usersCollectionRef);
      setData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEntrys();
  }, []);

  return (
    <div>
      {swap ? <Navbar2 /> : <Navbar />}
      <div
        className="test2"
        style={{
          marginLeft: "0rem",
          paddingLeft: "10rem",
        }}
      >
        <h1>Events</h1>
        <div class="main001">
          {Data.map((item, key) => {
            return (
              <div key={key} className="card001">
                <span>
                  ID:<i style={{ color: "green" }}>{item.id}</i>
                </span>

                <div className="image001">
                  <img src={`${item.photo}`} alt="loading..." />
                </div>
                <div className="title">
                  <h5>{item.title}</h5>
                </div>
                <div className="des">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
