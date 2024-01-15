import "./App.css";
import {v4 as uuidv4} from 'uuid';

import Form from "./components/Form";
import Input from "./components/Input";

import Header from './components/Header';
import Qualifications from "./components/Qualifications";
import Education from "./components/Education";

function App() {

  const defaults = {
    name: 'Alex Smith',
    address: '1234 FakeAddress Lane, Fakecity, Fakensas, United States of Fake, 12345',
    email: 'AlexSmith@fakemail.com',
    phone: '(123) 456-7890',
    qualifications: [{qualification: 'Skill 1', key: uuidv4()},{qualification: 'Skill 2', key: uuidv4()}],
    education:[{school: '1', degree: '2', startDate: '3', endDate: '4', location: '5', key: uuidv4()}]
  }

  /* Header section and the relevant form */
  const headerFormID = uuidv4();
  const header = Header(defaults);
  const headerForm = (<Form formID = {headerFormID} submitCallback={header.updateValues}>
      <Input label = "Name" name = "name" formID={headerFormID} value={defaults.name}/>
      <Input label = "Address" name = "address" formID={headerFormID} value={defaults.address}/>
      <Input inputType = "email" label = "E-mail" name = "email" formID={headerFormID} value={defaults.email}/>
      <Input inputType = "tel" label = "Phone Number" name = "phone" formID={headerFormID}  value={defaults.phone}/>
      <button type="submit" form={headerFormID} name="submit">Submit</button>
  </Form>);

  /* Qualifications section and the relevant form */
  const qualificationsFormID = uuidv4();
  const qualifications = Qualifications(defaults);
  const qualificationForm = (<Form
    formID = {qualificationsFormID} 
    submitCallback={
    (data)=>{
      const output = {...data};
      Object.assign(output, {key: uuidv4()});
      console.log(output);
      qualifications.updateValues(output);
    }}>
    <Input label = "qualification" name = "qualification" formID={qualificationsFormID}/>
    <button type="submit" form={qualificationsFormID} name="submit">Submit</button>
  </Form>);  

    /* Education section and the relevant form */
    const educationFormID = uuidv4();
    const education = Education(defaults);
    const educationForm = (<Form
      formID = {educationFormID} 
      submitCallback={
      (data)=>{
        const output = {...data};
        Object.assign(output, {key: uuidv4()});
        console.log(output);
        education.updateValues(output);
      }}>
      <Input label = "School" name = "school" formID={educationFormID}/>
      <Input label = "Degree" name = "degree" formID={educationFormID}/>
      <Input label = "Start Date" name = "startDate" formID={educationFormID}/>
      <Input label = "End Date" name = "endDate" formID={educationFormID}/>
      <Input label = "Location" name = "location" formID={educationFormID}/>
      <button type="submit" form={educationFormID} name="submit">Submit</button>
    </Form>);  


  return (
    <>
      {header.component}
      {headerForm}
      <h1>Qualifications and Skills</h1>
      {qualifications.component}
      {qualificationForm}
      <h1>Education</h1>
      {education.component}
      {educationForm}
    </>);
}

/* 

TODO: Make separate components for each type of form. 
-> onChange for inputs will update equivalent 'preview' item in the CV
-> onSubmit for the form will save by setting the state of that particular component

*/

export default App;
