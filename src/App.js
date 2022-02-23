import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./componets/registeration/Register";
import Home from "./componets/home/Home";
import NavBar from "./componets/navebar/NavBar";
import Footer from "./componets/footer/Footer";
import Entry from "./componets/oldageOrphanage/Entry";
import Loginfor from "./componets/registeration/Loginfor";
import Login from "./componets/registeration/Login";

function App() {
  return (
    <div
      style={{
        marginLeft: "0px",
        marginRight: "0px",
        marginTop: "75px",
        backgroundColor: "skyblue",
        padding: "0px",
        minHeight: "40rem",
      }}
    >
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/login" element={<Loginfor />} />
        <Route path="/adminlogin" element={<Login labelNo="1/2" />} />
        <Route path="/volunteerlogin" element={<Login labelNo="1/2" />} />
        <Route
          path="/register1"
          element={<Register labelNo="1/2/3/4/5/6/7/8/9/10/11" />}
        />
      </Routes>
    </div>
  );
}

export default App;
