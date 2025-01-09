import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Student } from "../../entites/Students";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

initializeIcons(); // requerido por FluentUI

interface EnrolListProps {
  students: Student[]; // Recibimos la lista completa de estudiantes
}

const columns = [
  {
    key: "fname",
    name: "Nombre",
    fieldName: "firstName",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "lname",
    name: "Apellidos",
    fieldName: "lastName",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "program",
    name: "Estudios",
    fieldName: "program",
    minWidth: 60,
    maxWidth: 200,
    isResizable: true,
  },
];

function EnrolList(props: EnrolListProps) {
  const [items, setItems] = useState<Student[]>([]);

  useEffect(() => {
    // Si la lista de estudiantes cambia, actualizamos el estado de items
    setItems(props.students);
  }, [props.students]); // Se ejecuta cada vez que 'students' cambia

  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
}

export default EnrolList;
