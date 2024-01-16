import "./css/App.css"
import { useState } from "react";

import Dialog from "./components/Dialog";

import Header from './components/Header/Header';
import Qualifications from "./components/Qualifications/Qualifications";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";

import Section from "./components/Section";

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

  const defaultEntries = [{activity: 'Test1', startDate: 'Date1', endDate: 'Date2', key: 1},{activity: 'Test2', startDate: 'Date3', endDate: 'Date4', key: 2},];
  const defaultFormEntries = [ {label: 'Activity', name: 'activity', inputType: ''}, {label: 'Start Date', name: 'startDate', inputType: ''}, {label: 'End Date', name: 'endDate', inputType: ''},]
  const entryMappingFunction = (entry) => {return(
    <>
      <p>{entry.activity}</p>    
      <p>{entry.startDate}</p>    
      <p>{entry.endDate}</p>     
    </>)}
  const volunteer = Section({defaultEntries,entryMappingFunction, defaultFormEntries }, setModalOpen,setModalData);

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
      <h1>Volunteer Experience</h1>
      {volunteer}
  </>);
}
export default App;
