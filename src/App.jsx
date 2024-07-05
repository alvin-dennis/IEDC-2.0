import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navbar";
import { Header } from "./components/Intro";
import { Whyiedc } from "./components/Why-IEDC";
import { About } from "./components/About-us";
import { Rewind } from "./components/Timeline";
import { Events } from "./components/Event-Grid";
import { Supporters } from "./components/Supporters-Grid";
import { Team } from "./components/Main-Team";
import { Subteam } from "./components/Sub-team";
import { Contact } from "./components/Footer";
import JsonData from "./data/data.json";
import WifiLoader from "./utils/loader";
import "./App.css";



const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading (true);
    setTimeout(() => {
      setLoading(false);
    },4000)

  }, []);

  return (
    <div>
      {
        loading ? 
        <div style={{minHeight:"100vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <WifiLoader loading={loading}/>
        </div>
        :
      <><Navigation />
      <Header/>
      <Whyiedc data={landingPageData.Whyiedc} />
      <About data={landingPageData.About} />
      <Supporters/>
      <Events/>
      <Team  data={landingPageData.Team}/>
      <Subteam data={landingPageData.Subteam}/>
      <Rewind/>
      <Contact/>
      </>
}
    </div>
  );
};

export default App;
