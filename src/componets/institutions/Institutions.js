import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Institutions() {
  const [InstId, setInstId] = useState("");
  console.log(InstId);

  const navigate = useNavigate();

  return (
    <div>
      <div>Institutions</div>
      <button onClick={() => navigate("/finalwebpage")}>inst 1</button>
      <button onClick={() => setInstId("2")}>inst 2</button>
      <button onClick={() => setInstId("3")}>inst 3</button>
    </div>
  );
}

export default Institutions;
