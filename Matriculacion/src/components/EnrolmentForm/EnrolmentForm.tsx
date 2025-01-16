import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./EnrolmentForm.css";
import { Student } from "../../entites/Students";

interface EnrolmentFormProps {
  chosenProgram: string;
  currentEnrolments: number;
  editingStudent?: Student;
  onChangeEnrolments: (updateEnrolments: number) => void;
  onStudentChanged: (student: Student) => void;
}

function EnrolmentForm(props: EnrolmentFormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [btnTitle, setBtnTitle] = useState("Registrar");
  const [editingStudentID, setEditingStudentID] = useState<string | undefined>();

  useEffect(() => {
    if (props.editingStudent) {
      setEditingStudentID(props.editingStudent.id);
      setFirstName(props.editingStudent.firstName);
      setLastName(props.editingStudent.lastName);
      setBtnTitle("Actualizar");
    }
  }, [props.editingStudent]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Crear objeto estudiante
    const student: Student = {
      id: editingStudentID || undefined, // Nuevo ID si no existe
      firstName,
      lastName,
      program: props.chosenProgram,
    };

    if (!editingStudentID) {
      // Si es un registro nuevo, incrementamos las matrículas
      props.onChangeEnrolments(props.currentEnrolments + 1);
      setWelcomeMessage(`Bienvenido/a ${firstName} ${lastName}`);
    } else {
      // Si estamos editando, mostramos un mensaje diferente
      setWelcomeMessage(`Estudiante actualizado: ${firstName} ${lastName}`);
    }

    props.onStudentChanged(student);

    // Resetear formulario
    resetForm();
  };

  const handleCancel = () => {
    // Restablecer formulario sin guardar cambios
    resetForm();
  };

  const resetForm = () => {
    setEditingStudentID(undefined);
    setFirstName("");
    setLastName("");
    setBtnTitle("Registrar");
    setWelcomeMessage("");
    nameInputRef.current?.focus();
  };

  return (
    <div>
      <form className="enrolForm" onSubmit={handleSubmit}>
        <h1>Datos del estudiante - {props.chosenProgram}</h1>
        <label>Nombre:</label>
        <input
          type="text"
          name="fname"
          onChange={(event) => setFirstName(event.target.value)}
          ref={nameInputRef}
          value={firstName}
        />
        <label>Apellidos:</label>
        <input
          type="text"
          name="lname"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <div className="form-buttons">
          <input type="submit" value={btnTitle} />
          {editingStudentID && (
            <button type="button" onClick={handleCancel}>
              Cancelar
            </button>
          )}
        </div>
        <label id="studentMsg" className="message">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
}

export default EnrolmentForm;
