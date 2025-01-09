import { ChangeEvent, useState } from 'react';
import './App.css'
import EnrolmentForm from './components/EnrolmentForm/EnrolmentForm'
function App() {
  const [program, setProgram] = useState("UG");
  const [enrolments, setEnrolments] = useState(0);
  const handleChangeEnrolments = (updateEnrolments: number) => {
    setEnrolments(updateEnrolments);
    };
  const handleChangeProgram = (event: ChangeEvent<HTMLSelectElement>
 ) => {
  setProgram(event.target.value);
  };
  return (
  <div className="App">
  <div className="programs">
  <label>Selecciona el tipo de estudio:</label>
  <select
  className="appDropDowns"
  onChange={handleChangeProgram}
  value={program}
  >
  <option value="UG">Grado</option>
  <option value="PG">Postgrado</option>
  </select>
  <div>Matriculaciones actuales: {enrolments}</div>
 </div>
 <EnrolmentForm chosenProgram={program} onChangeEnrolments={handleChangeEnrolments} currentEnrolments={enrolments} />
 </div>
  )
 }
export default App