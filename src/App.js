import React, { useEffect, useRef, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHero";
import MyAbout from "./components/MyAbout";
import MySkills from "./components/MySkills";
import MyServices from "./components/MyServices";
import MyProjects from "./components/MyProjects";
import MyContact from "./components/MyContact";
import MyFooter from "./components/MyFooter";

function App() {
  const [offset, setOffset] = useState({
    aboutTop: "",
    skillsTop: "",
    servicesTop: "",
    projectsTop: "",
    contactTop: "",
  });

  const aboutRef = useRef();
  const skillsRef = useRef();
  const servicesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    setOffset({
      aboutTop: aboutRef.current.offsetTop,
      skillsTop: skillsRef.current.offsetTop,
      servicesTop: servicesRef.current.offsetTop,
      projectsTop: projectsRef.current.offsetTop,
      contactTop: contactRef.current.offsetTop,
    });
  }, []);

  return (
    <div>
      <MyNavbar offset={offset} />
      <MyHero />
      <div ref={aboutRef}>
        <MyAbout />
      </div>
      <div ref={skillsRef}>
        <MySkills />
      </div>
      <div ref={servicesRef}>
        <MyServices />
      </div>
      <div ref={projectsRef}>
        <MyProjects />
      </div>
      <div ref={contactRef}>
        <MyContact />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
