import {v4 as uuidv4} from 'uuid'
import Section from './Base/Section';

export default function Qualifications(setModalOpen, setModalData){
      const defaultEntries =[{qualification: 'Skill 1', key: uuidv4()},{qualification: 'Skill 2', key: uuidv4()},];
      const defaultFormEntries = [{label: 'Qualification', name: 'qualification', inputType: ''}];
      const entryMappingFunction = (entry) => <p>{entry.qualification}</p>;

      return(Section({defaultEntries,entryMappingFunction,defaultFormEntries},setModalOpen,setModalData));
}