import "./css/App.css"
import { useState } from "react";

import Dialog from "./components/Dialog";

import Header from './components/Header/Header';
import Qualifications from "./components/Qualifications/Qualifications";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";


function App() {

  /* Modal for when options need to be editted */
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const qualificationModal = Dialog(isModalOpen,setModalOpen, modalData,setModalData);

  /* The resume content and relevant forms */
  const header = Header(setModalOpen,setModalData);
  const qualifications = Qualifications(setModalOpen, setModalData);
  const education = Education(setModalOpen, setModalData);
  const work = Work(setModalOpen, setModalData);

  return (<>
      {qualificationModal}
      {header}
      <h1>
        Qualifications and Skills
      </h1>
      {qualifications}
      <h1>Education</h1>
      {education}
      <h1>Work Experience</h1>
      {work}
  </>);
}
export default App;
