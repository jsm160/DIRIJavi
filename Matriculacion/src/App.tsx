import { ChangeEvent, useState } from 'react';
import './App.css';
import EnrolmentForm from './components/EnrolmentForm/EnrolmentForm';
import EnrolList from './components/EnrolList/EnrolList';
import { Student } from './entites/Students';

function App() {
  const [program, setProgram] = useState("UG");
  const [ugEnrolments, setUGEnrolments] = useState(0);
  const [pgEnrolments, setPGEnrolments] = useState(0);
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student>();

  const handleChangeEnrolments = (updateEnrolments: number) => {
    program === "UG" ? setUGEnrolments(updateEnrolments) : setPGEnrolments(updateEnrolments);
  };

  const handleChangeProgram = (event: ChangeEvent<HTMLInputElement>) => {
    setProgram(event.target.value);
  };

  const selectedEnrolments = (): number => {
    return program === "UG" ? ugEnrolments : pgEnrolments;
  };

  const handleStudentChanged = (student: Student) => {
    setStudents((prevStudents) => {
      // Si el estudiante ya existe (por su ID), lo actualizamos
      const existingIndex = prevStudents.findIndex((s) => s.id === student.id);
      if (existingIndex !== -1) {
        const updatedStudents = [...prevStudents];
        updatedStudents[existingIndex] = student;
        return updatedStudents;
      }
      // Si es un estudiante nuevo, lo agregamos
      return [...prevStudents, student];
    });
  };

  const handleStudentRemoved = (student: Student): void => {
    setStudents((prevStudents) => prevStudents.filter((s) => s.id !== student.id));
    if (student.program === "UG") {
      setUGEnrolments(ugEnrolments - 1);
    } else {
      setPGEnrolments(pgEnrolments - 1);
    }
  };

  return (
    <div className="App">
      <div className="programs">
        <ul className="ulEnrol">
          <li className="parentLabels">
            <input
              type="radio"
              value="UG"
              name="programGroup"
              checked={program === "UG"}
              onChange={handleChangeProgram}
            />
            Grado
            <input
              type="radio"
              className="radioSel"
              value="PG"
              name="programGroup"
              checked={program === "PG"}
              onChange={handleChangeProgram}
            />
            Postgrado
          </li>
          <li>Matriculaciones actuales - {program}: {selectedEnrolments()}</li>
        </ul>
      </div>

      <EnrolmentForm
        chosenProgram={program}
        onChangeEnrolments={handleChangeEnrolments}
        currentEnrolments={selectedEnrolments()}
        onStudentChanged={handleStudentChanged} 
        editingStudent={editingStudent}
      />
      <EnrolList
        students={students}
        onStudentRemoved={handleStudentRemoved}
        onStudentEditing={setEditingStudent}
      />
    </div>
  );
}

export default App;
