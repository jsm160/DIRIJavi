import React, { FormEvent, useState } from 'react'
import './EnrolmentForm.css'
function EnrolmentForm() {
    const [irstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setWelcomeMessage(`Bienvenido/a ${irstName} ${lastName}`);
    event.preventDefault(); // véase siguiente diapositiva
    };
    return (
    <div>
    <form className="enrolForm" onSubmit={handleSubmit}>
    <h1>Datos del estudiante</h1>
    <label>Nombre:</label>
    <input type="text" name="fname"
    onBlur={(event) => setFirstName(event.target.value)}
    />
    <label>Apellidos:</label>
    <input type="text" name="lname"
    onBlur={(event) => setLastName(event.target.value)}
    />
    <input type="submit" value="Registrar" />
    <label id="studentMsg"
    className="message">{welcomeMessage}</label>
    </form>
    </div>
    );
}
   export default EnrolmentForm