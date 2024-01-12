import "./App.css";
import Form from './components/Form'
import InputText from "./components/InputText";
import {v4 as uuidv4} from 'uuid';

function App() {

  const formID = uuidv4();

  return (
    <>
      <Form formID = {formID}>
        <InputText label = "First name" name = "nameFirst" formID={formID}/>
        <InputText label = "Last name" name = "nameLast" formID={formID}/>
        <button type="submit" form={formID} name="submit">Submit</button>
      </Form>
    </>
  );
}

/* 

TODO: Make separate components for each type of form. 
-> onChange for inputs will update equivalent 'preview' item in the CV
-> onSubmit for the form will save by setting the state of that particular component

*/

export default App;
