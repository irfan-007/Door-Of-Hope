import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./componets/home/Home";
import NavBar from "./componets/navebar/NavBar";
import Entry from "./componets/oldageOrphanage/Entry";
import Loginfor from "./componets/registeration/Loginfor";
import Login from "./componets/registeration/Login";
import Donate from "./componets/donate/Donate";
import About from "./componets/about/About";
import Contact from "./componets/contact/Contact";
import Institutions from "./componets/institutions/Institutions";
import FinalWebPage from "./componets/institutions/FinalWebPage";
import InstitutionSignup from "./componets/registeration/InstitutionSignup";
import VolunteerSignup from "./componets/registeration/VolunteerSignup";
import EntrySignup from "./componets/registeration/EntrySignup";
import EditPage from "./componets/institutions/EditPage";
import InstEntry from "./componets/institutions/navpages/Entry";
import InstEvent from "./componets/institutions/navpages/Events";
import InstServices from "./componets/institutions/navpages/Services";
import InstVolunteer from "./componets/institutions/navpages/Volunteer";
import Test from "./componets/Test";
import DonateList from "./componets/donate/DonateList";

function App() {
  let navnothide = true;

  return (
    <div
      style={{
        marginLeft: "0px",
        marginRight: "0px",
        marginTop: "75px",
        backgroundColor: "skyblue",
        padding: "0px",
        minHeight: "47rem",
      }}
    >
      {navnothide && <NavBar />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/testing" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/about" element={<About />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/finalwebpage" element={<FinalWebPage />} />
        <Route path="/editpage" element={<EditPage />} />

        <Route path="/login" element={<Loginfor />} />
        <Route
          path="/institution-login"
          element={<Login logTo="institution" />}
        />
        <Route path="/volunteer-login" element={<Login logTo="volunteer" />} />

        <Route path="/donate" element={<Donate />} />
        <Route path="/donate-list" element={<DonateList />} />
        <Route path="/signup-institution" element={<InstitutionSignup />} />
        <Route path="/signup-volunteer" element={<VolunteerSignup />} />
        <Route path="/signup-entry1" element={<EntrySignup type="Oldage" />} />
        <Route
          path="/signup-entry2"
          element={<EntrySignup type="Orphanage" />}
        />

        <Route path="/inst-entrys" element={<InstEntry />} />
        <Route path="/inst-events" element={<InstEvent />} />
        <Route path="/inst-events2" element={<InstEvent swap={true} />} />
        <Route path="/inst-volunteers" element={<InstVolunteer />} />
        <Route path="/inst-services" element={<InstServices />} />
        <Route path="/inst-services2" element={<InstServices swap={true} />} />
      </Routes>
    </div>
  );
}

export default App;
